const cron = require('node-cron');
const axios = require('axios');
const { pool } = require('../config/database');
const { oauthConfig, encryptToken, decryptToken } = require('../config/oauth');

class TokenRefreshService {
  constructor() {
    this.isRunning = false;
  }

  start() {
    if (this.isRunning) {
      console.log('Token refresh service already running');
      return;
    }

    cron.schedule('0 */6 * * *', () => {
      this.refreshExpiredTokens();
    });

    this.refreshExpiredTokens();
    
    this.isRunning = true;
    console.log('✅ Token refresh service started');
  }

  async refreshExpiredTokens() {
    try {
      const client = await pool.connect();
      
      const result = await client.query(`
        SELECT 
          id, user_id, provider, access_token, refresh_token, 
          expires_at, account_id, account_name
        FROM ad_connections 
        WHERE is_active = true 
        AND expires_at <= NOW() + INTERVAL '1 hour'
        ORDER BY expires_at ASC
      `);

      client.release();

      if (result.rows.length === 0) {
        console.log('No tokens need refreshing');
        return;
      }

      console.log(`Found ${result.rows.length} tokens that need refreshing`);

      for (const connection of result.rows) {
        try {
          await this.refreshToken(connection);
        } catch (error) {
          console.error(`Failed to refresh token for connection ${connection.id}:`, error.message);
          
          await this.markConnectionInactive(connection.id);
        }
      }
    } catch (error) {
      console.error('Token refresh service error:', error);
    }
  }

  async refreshToken(connection) {
    const { provider, refresh_token, id } = connection;
    const encryptionKey = process.env.APP_ENCRYPTION_KEY;
    
    try {
      const decryptedRefreshToken = decryptToken(refresh_token, encryptionKey);
      
      let tokenResponse;
      
      if (provider === 'google') {
        tokenResponse = await axios.post(oauthConfig.google.tokenUrl, {
          client_id: oauthConfig.google.clientId,
          client_secret: oauthConfig.google.clientSecret,
          refresh_token: decryptedRefreshToken,
          grant_type: 'refresh_token'
        });
      } else if (provider === 'microsoft') {
        tokenResponse = await axios.post(oauthConfig.microsoft.tokenUrl, {
          client_id: oauthConfig.microsoft.clientId,
          client_secret: oauthConfig.microsoft.clientSecret,
          refresh_token: decryptedRefreshToken,
          grant_type: 'refresh_token'
        });
      } else {
        throw new Error(`Unsupported provider: ${provider}`);
      }

      const { access_token, expires_in } = tokenResponse.data;
      
      const encryptedAccessToken = encryptToken(access_token, encryptionKey);
      
      const client = await pool.connect();
      await client.query(`
        UPDATE ad_connections 
        SET 
          access_token = $1,
          expires_at = $2,
          updated_at = CURRENT_TIMESTAMP
        WHERE id = $3
      `, [
        encryptedAccessToken,
        new Date(Date.now() + expires_in * 1000),
        id
      ]);
      
      client.release();
      
      console.log(`✅ Successfully refreshed token for connection ${id} (${provider})`);
    } catch (error) {
      console.error(`❌ Failed to refresh token for connection ${id}:`, error.message);
      
      if (error.response?.status === 400 || error.response?.status === 401) {
        await this.markConnectionInactive(id);
      }
      
      throw error;
    }
  }

  async markConnectionInactive(connectionId) {
    try {
      const client = await pool.connect();
      await client.query(`
        UPDATE ad_connections 
        SET is_active = false, updated_at = CURRENT_TIMESTAMP
        WHERE id = $1
      `, [connectionId]);
      client.release();
      
      console.log(`Connection ${connectionId} marked as inactive due to refresh failure`);
    } catch (error) {
      console.error(`Failed to mark connection ${connectionId} as inactive:`, error);
    }
  }

  stop() {
    this.isRunning = false;
    console.log('Token refresh service stopped');
  }
}

const tokenRefreshService = new TokenRefreshService();

module.exports = tokenRefreshService;

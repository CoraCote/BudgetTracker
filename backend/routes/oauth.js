const express = require('express');
const axios = require('axios');
const { pool } = require('../config/database');
const { oauthConfig, encryptToken, generateState } = require('../config/oauth');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

router.get('/google/authorize', authenticateToken, async (req, res) => {
  try {
    const state = generateState();
    const userId = req.user.id;
    
    const client = await pool.connect();
    await client.query(
      'INSERT INTO oauth_states (user_id, state, provider, expires_at) VALUES ($1, $2, $3, $4)',
      [userId, state, 'google', new Date(Date.now() + 10 * 60 * 1000)]
    );
    client.release();

    const authUrl = new URL(oauthConfig.google.authUrl);
    authUrl.searchParams.append('client_id', oauthConfig.google.clientId);
    authUrl.searchParams.append('redirect_uri', oauthConfig.google.redirectUri);
    authUrl.searchParams.append('response_type', 'code');
    authUrl.searchParams.append('scope', oauthConfig.google.scope);
    authUrl.searchParams.append('access_type', 'offline');
    authUrl.searchParams.append('prompt', 'consent');
    authUrl.searchParams.append('state', state);

    res.json({ authUrl: authUrl.toString() });
  } catch (error) {
    console.error('Google OAuth authorize error:', error);
    res.status(500).json({ error: 'Failed to generate authorization URL' });
  }
});

router.get('/google/callback', async (req, res) => {
  try {
    const { code, state, error } = req.query;
    
    if (error) {
      return res.status(400).json({ error: 'OAuth authorization failed', details: error });
    }

    if (!code || !state) {
      return res.status(400).json({ error: 'Missing authorization code or state' });
    }

    const client = await pool.connect();
    const stateResult = await client.query(
      'SELECT user_id FROM oauth_states WHERE state = $1 AND provider = $2 AND expires_at > NOW()',
      [state, 'google']
    );

    if (stateResult.rows.length === 0) {
      client.release();
      return res.status(400).json({ error: 'Invalid or expired state parameter' });
    }

    const userId = stateResult.rows[0].user_id;

    const tokenResponse = await axios.post(oauthConfig.google.tokenUrl, {
      client_id: oauthConfig.google.clientId,
      client_secret: oauthConfig.google.clientSecret,
      code,
      grant_type: 'authorization_code',
      redirect_uri: oauthConfig.google.redirectUri
    });

    const { access_token, refresh_token, expires_in, scope } = tokenResponse.data;

    const orgResult = await client.query(
      'SELECT org_id FROM users WHERE id = $1',
      [userId]
    );

    if (orgResult.rows.length === 0) {
      client.release();
      return res.status(400).json({ error: 'User not found' });
    }

    const orgId = orgResult.rows[0].org_id;

    const accountInfo = await getGoogleAdsAccountInfo(access_token);

    const encryptionKey = process.env.APP_ENCRYPTION_KEY;
    const encryptedAccessToken = encryptToken(access_token, encryptionKey);
    const encryptedRefreshToken = encryptToken(refresh_token, encryptionKey);

    await client.query(`
      INSERT INTO ad_connections 
      (user_id, org_id, provider, account_id, account_name, access_token, refresh_token, scope, expires_at, is_active)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      ON CONFLICT (user_id, provider, account_id) 
      DO UPDATE SET 
        access_token = EXCLUDED.access_token,
        refresh_token = EXCLUDED.refresh_token,
        scope = EXCLUDED.scope,
        expires_at = EXCLUDED.expires_at,
        is_active = EXCLUDED.is_active,
        updated_at = CURRENT_TIMESTAMP
    `, [
      userId, orgId, 'google', accountInfo.customerId, accountInfo.customerName,
      encryptedAccessToken, encryptedRefreshToken, scope,
      new Date(Date.now() + expires_in * 1000), true
    ]);

    await client.query('DELETE FROM oauth_states WHERE state = $1', [state]);
    client.release();

    res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:3000'}/connect-accounts?success=true&provider=google`);
  } catch (error) {
    console.error('Google OAuth callback error:', error);
    res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:3000'}/connect-accounts?error=oauth_failed`);
  }
});

router.get('/microsoft/authorize', authenticateToken, async (req, res) => {
  try {
    const state = generateState();
    const userId = req.user.id;
    
    const client = await pool.connect();
    await client.query(
      'INSERT INTO oauth_states (user_id, state, provider, expires_at) VALUES ($1, $2, $3, $4)',
      [userId, state, 'microsoft', new Date(Date.now() + 10 * 60 * 1000)]
    );
    client.release();

    const authUrl = new URL(oauthConfig.microsoft.authUrl);
    authUrl.searchParams.append('client_id', oauthConfig.microsoft.clientId);
    authUrl.searchParams.append('redirect_uri', oauthConfig.microsoft.redirectUri);
    authUrl.searchParams.append('response_type', 'code');
    authUrl.searchParams.append('scope', oauthConfig.microsoft.scope);
    authUrl.searchParams.append('response_mode', 'query');
    authUrl.searchParams.append('state', state);

    res.json({ authUrl: authUrl.toString() });
  } catch (error) {
    console.error('Microsoft OAuth authorize error:', error);
    res.status(500).json({ error: 'Failed to generate authorization URL' });
  }
});

router.get('/microsoft/callback', async (req, res) => {
  try {
    const { code, state, error } = req.query;
    
    if (error) {
      return res.status(400).json({ error: 'OAuth authorization failed', details: error });
    }

    if (!code || !state) {
      return res.status(400).json({ error: 'Missing authorization code or state' });
    }

    const client = await pool.connect();
    const stateResult = await client.query(
      'SELECT user_id FROM oauth_states WHERE state = $1 AND provider = $2 AND expires_at > NOW()',
      [state, 'microsoft']
    );

    if (stateResult.rows.length === 0) {
      client.release();
      return res.status(400).json({ error: 'Invalid or expired state parameter' });
    }

    const userId = stateResult.rows[0].user_id;

    const tokenResponse = await axios.post(oauthConfig.microsoft.tokenUrl, {
      client_id: oauthConfig.microsoft.clientId,
      client_secret: oauthConfig.microsoft.clientSecret,
      code,
      grant_type: 'authorization_code',
      redirect_uri: oauthConfig.microsoft.redirectUri
    });

    const { access_token, refresh_token, expires_in, scope } = tokenResponse.data;

    const orgResult = await client.query(
      'SELECT org_id FROM users WHERE id = $1',
      [userId]
    );

    if (orgResult.rows.length === 0) {
      client.release();
      return res.status(400).json({ error: 'User not found' });
    }

    const orgId = orgResult.rows[0].org_id;

    const accountInfo = await getMicrosoftAdsAccountInfo(access_token);

    const encryptionKey = process.env.APP_ENCRYPTION_KEY;
    const encryptedAccessToken = encryptToken(access_token, encryptionKey);
    const encryptedRefreshToken = encryptToken(refresh_token, encryptionKey);

    await client.query(`
      INSERT INTO ad_connections 
      (user_id, org_id, provider, account_id, account_name, access_token, refresh_token, scope, expires_at, is_active)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      ON CONFLICT (user_id, provider, account_id) 
      DO UPDATE SET 
        access_token = EXCLUDED.access_token,
        refresh_token = EXCLUDED.refresh_token,
        scope = EXCLUDED.scope,
        expires_at = EXCLUDED.expires_at,
        is_active = EXCLUDED.is_active,
        updated_at = CURRENT_TIMESTAMP
    `, [
      userId, orgId, 'microsoft', accountInfo.customerId, accountInfo.customerName,
      encryptedAccessToken, encryptedRefreshToken, scope,
      new Date(Date.now() + expires_in * 1000), true
    ]);

    await client.query('DELETE FROM oauth_states WHERE state = $1', [state]);
    client.release();

    res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:3000'}/connect-accounts?success=true&provider=microsoft`);
  } catch (error) {
    console.error('Microsoft OAuth callback error:', error);
    res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:3000'}/connect-accounts?error=oauth_failed`);
  }
});

router.get('/accounts', authenticateToken, async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`
      SELECT 
        id, provider, account_id, account_name, scope, expires_at, 
        is_active, last_sync_at, created_at, updated_at
      FROM ad_connections 
      WHERE user_id = $1 AND org_id = $2
      ORDER BY created_at DESC
    `, [req.user.id, req.user.org_id]);
    client.release();

    res.json({ accounts: result.rows });
  } catch (error) {
    console.error('Get accounts error:', error);
    res.status(500).json({ error: 'Failed to fetch connected accounts' });
  }
});

router.delete('/accounts/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const client = await pool.connect();
    
    const connectionResult = await client.query(
      'SELECT provider, access_token FROM ad_connections WHERE id = $1 AND user_id = $2',
      [id, req.user.id]
    );

    if (connectionResult.rows.length === 0) {
      client.release();
      return res.status(404).json({ error: 'Connection not found' });
    }

    const connection = connectionResult.rows[0];

    try {
      if (connection.provider === 'google') {
        await axios.post(oauthConfig.google.revokeUrl, {
          token: connection.access_token
        });
      } else if (connection.provider === 'microsoft') {
      }
    } catch (revokeError) {
      console.warn('Token revocation failed:', revokeError.message);
    }

    await client.query(
      'DELETE FROM ad_connections WHERE id = $1 AND user_id = $2',
      [id, req.user.id]
    );

    client.release();
    res.json({ message: 'Account disconnected successfully' });
  } catch (error) {
    console.error('Disconnect account error:', error);
    res.status(500).json({ error: 'Failed to disconnect account' });
  }
});

async function getGoogleAdsAccountInfo(accessToken) {
  try {
    const response = await axios.get('https://googleads.googleapis.com/v14/customers', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'developer-token': process.env.GOOGLE_DEVELOPER_TOKEN
      }
    });
    
    if (response.data.results && response.data.results.length > 0) {
      const customer = response.data.results[0];
      return {
        customerId: customer.id,
        customerName: customer.descriptiveName || 'Google Ads Account'
      };
    }
    
    return {
      customerId: 'unknown',
      customerName: 'Google Ads Account'
    };
  } catch (error) {
    console.warn('Failed to get Google Ads account info:', error.message);
    return {
      customerId: 'unknown',
      customerName: 'Google Ads Account'
    };
  }
}

async function getMicrosoftAdsAccountInfo(accessToken) {
  try {
    const response = await axios.get('https://api.ads.microsoft.com/v13/CustomerManagementService.svc/json/GetAccountsInfo', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (response.data && response.data.length > 0) {
      const account = response.data[0];
      return {
        customerId: account.Id,
        customerName: account.Name || 'Microsoft Ads Account'
      };
    }
    
    return {
      customerId: 'unknown',
      customerName: 'Microsoft Ads Account'
    };
  } catch (error) {
    console.warn('Failed to get Microsoft Ads account info:', error.message);
    return {
      customerId: 'unknown',
      customerName: 'Microsoft Ads Account'
    };
  }
}

module.exports = router;

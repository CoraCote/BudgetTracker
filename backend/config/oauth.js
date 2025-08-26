const oauthConfig = {
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.GOOGLE_REDIRECT_URI || 'http://localhost:5000/api/oauth/google/callback',
    scope: 'https://www.googleapis.com/auth/adwords',
    authUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
    tokenUrl: 'https://oauth2.googleapis.com/token',
    revokeUrl: 'https://oauth2.googleapis.com/revoke'
  },
  microsoft: {
    clientId: process.env.MICROSOFT_CLIENT_ID,
    clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
    redirectUri: process.env.MICROSOFT_REDIRECT_URI || 'http://localhost:5000/api/oauth/microsoft/callback',
    scope: 'https://ads.microsoft.com/msads.manage offline_access',
    authUrl: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    tokenUrl: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    revokeUrl: 'https://login.microsoftonline.com/common/oauth2/v2.0/logout'
  }
};

const encryptToken = (text, encryptionKey) => {
  const crypto = require('crypto');
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipher('aes-256-cbc', encryptionKey);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return iv.toString('hex') + ':' + encrypted;
};

const decryptToken = (encryptedText, encryptionKey) => {
  const crypto = require('crypto');
  const textParts = encryptedText.split(':');
  const iv = Buffer.from(textParts.shift(), 'hex');
  const encrypted = textParts.join(':');
  const decipher = crypto.createDecipher('aes-256-cbc', encryptionKey);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

const generateState = () => {
  const crypto = require('crypto');
  return crypto.randomBytes(32).toString('hex');
};

const validateState = (state, storedState) => {
  return state === storedState;
};

module.exports = {
  oauthConfig,
  encryptToken,
  decryptToken,
  generateState,
  validateState
};

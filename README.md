# AdOptima - OAuth Ad Account Management Platform

A comprehensive platform for connecting and managing advertising accounts (Google Ads, Microsoft Ads) with secure OAuth authentication and automated token management.

## Features

- **OAuth Integration**: Secure connection to Google Ads and Microsoft Ads accounts
- **Token Management**: Automatic refresh of expired OAuth tokens
- **Account Management**: View, connect, and disconnect ad accounts
- **Security**: Encrypted token storage and CSRF protection
- **Modern UI**: Responsive design matching the provided design specifications

## Architecture

- **Backend**: Node.js + Express + PostgreSQL
- **Frontend**: Next.js + React + Tailwind CSS
- **OAuth**: Google Ads API + Microsoft Advertising API
- **Security**: JWT authentication + encrypted token storage

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- Google Ads API credentials
- Microsoft Advertising API credentials

## Setup Instructions

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file based on `env.example`:

```bash
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/adoptima_db

# Server Configuration
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000

# Security
JWT_SECRET=your-super-secret-jwt-key-here
APP_ENCRYPTION_KEY=your-32-character-encryption-key-here

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_REDIRECT_URI=http://localhost:5000/api/oauth/google/callback
GOOGLE_DEVELOPER_TOKEN=your-google-ads-developer-token

# Microsoft OAuth Configuration
MICROSOFT_CLIENT_ID=your-microsoft-client-id
MICROSOFT_CLIENT_SECRET=your-microsoft-client-secret
MICROSOFT_REDIRECT_URI=http://localhost:5000/api/oauth/microsoft/callback

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

### 2. Frontend Setup

```bash
cd adoptima
npm install
```

### 3. Database Setup

Create a PostgreSQL database and run the application - it will automatically create the required tables.

### 4. OAuth App Registration

#### Google Ads API
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google Ads API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs
6. Get developer token from Google Ads

#### Microsoft Advertising API
1. Go to [Microsoft Advertising Developer Center](https://developers.ads.microsoft.com/)
2. Register your application
3. Get client ID and secret
4. Configure redirect URIs

### 5. Start the Application

#### Backend
```bash
cd backend
npm run dev
```

#### Frontend
```bash
cd adoptima
npm run dev
```

## API Endpoints

### OAuth Routes
- `GET /api/oauth/google/authorize` - Start Google OAuth flow
- `GET /api/oauth/google/callback` - Google OAuth callback
- `GET /api/oauth/microsoft/authorize` - Start Microsoft OAuth flow
- `GET /api/oauth/microsoft/callback` - Microsoft OAuth callback
- `GET /api/oauth/accounts` - Get connected accounts
- `DELETE /api/oauth/accounts/:id` - Disconnect account

### Authentication Routes
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

## Database Schema

The application automatically creates the following tables:
- `organizations` - Company/organization information
- `users` - User accounts with organization references
- `ad_connections` - OAuth connections and encrypted tokens
- `campaigns` - Advertising campaigns
- `analytics` - Performance metrics
- `oauth_states` - CSRF protection for OAuth flows

## Security Features

- **Token Encryption**: All OAuth tokens are encrypted before storage
- **CSRF Protection**: State parameter validation for OAuth flows
- **JWT Authentication**: Secure session management
- **Rate Limiting**: API request throttling
- **CORS Configuration**: Controlled cross-origin access

## Token Management

The platform includes an automated token refresh service that:
- Runs every 6 hours to check for expired tokens
- Automatically refreshes tokens using refresh tokens
- Marks connections as inactive if refresh fails
- Handles token revocation gracefully

## Development

### Backend Development
- Use `npm run dev` for development with auto-reload
- Check logs for OAuth flow debugging
- Monitor token refresh service status

### Frontend Development
- Use `npm run dev` for development server
- API calls are proxied to backend via Next.js rewrites
- OAuth callbacks redirect to the Connect Accounts page

## Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Check PostgreSQL service is running
   - Verify DATABASE_URL in .env file
   - Ensure database exists

2. **OAuth Authorization Failed**
   - Verify client ID and secret in .env
   - Check redirect URI configuration
   - Ensure proper scopes are configured

3. **Token Refresh Issues**
   - Check APP_ENCRYPTION_KEY is 32 characters
   - Verify refresh tokens are valid
   - Monitor token refresh service logs

### Debug Mode

Set `NODE_ENV=development` to see detailed error messages and stack traces.

## Production Deployment

1. Set `NODE_ENV=production`
2. Use strong, unique secrets for JWT and encryption
3. Configure proper CORS origins
4. Set up SSL/TLS certificates
5. Use environment-specific database URLs
6. Configure proper logging and monitoring

## License

MIT License - see LICENSE file for details.

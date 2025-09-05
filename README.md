# AdsOptima - AI-Powered Advertising Campaign Optimization

A modern SaaS application built with Next.js that helps optimize advertising campaigns using AI-powered insights.

## Features

- 🔐 **Authentication System**: Secure user registration and login with PostgreSQL
- 🎯 **Dashboard**: User profile management and campaign overview
- 🚀 **Modern UI**: Built with Tailwind CSS and responsive design
- 🔒 **JWT Security**: Secure token-based authentication
- 🗄️ **PostgreSQL**: Robust database backend for user management

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL
- **Authentication**: JWT with bcrypt password hashing
- **Styling**: Tailwind CSS with custom components

## Prerequisites

- Node.js 18+ 
- PostgreSQL 12+
- npm or yarn

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd BudgetTracker
```

### 2. Install Dependencies

```bash
npm run install:all
```

### 3. Database Setup

1. **Install PostgreSQL** and create a database:
   ```sql
   CREATE DATABASE adoptima;
   ```

2. **Configure Environment Variables**:
   Copy `.env.local.example` to `.env.local` and update:
   ```env
   DATABASE_URL=postgresql://postgres:123@localhost:5432/adoptima
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   ```

3. **Run Database Setup**:
   ```bash
   cd adoptima
   npm run setup:db
   ```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
adoptima/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── api/            # API routes
│   │   │   ├── signin/     # Authentication endpoints
│   │   │   ├── signup/
│   │   │   ├── signout/
│   │   │   └── user/       # User profile API
│   │   ├── dashboard/      # Protected dashboard page
│   │   ├── signin/         # Sign in page
│   │   └── signup/         # Sign up page
│   ├── components/         # Reusable components
│   ├── lib/               # Utility libraries
│   │   ├── db.js         # Database connection
│   │   ├── auth.js       # Authentication utilities
│   │   └── init-db.js    # Database initialization
│   └── middleware.js      # Next.js middleware for auth
├── scripts/               # Database setup scripts
└── public/               # Static assets
```

## API Endpoints

### Authentication
- `POST /api/signup` - User registration
- `POST /api/signin` - User login
- `POST /api/signout` - User logout
- `GET /api/user` - Get user profile (protected)

### Request/Response Examples

#### Sign Up
```json
POST /api/signup
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "securePass123"
}
```

#### Sign In
```json
POST /api/signin
{
  "email": "john@example.com",
  "password": "securePass123"
}
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | Required |
| `JWT_SECRET` | Secret key for JWT tokens | Required |
| `NODE_ENV` | Environment mode | `development` |

## Development

### Running the Application
```bash
# Development mode
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

### Database Operations
```bash
# Setup database tables
npm run setup:db
```

## Security Features

- **Password Hashing**: bcrypt with salt rounds
- **JWT Tokens**: Secure authentication tokens
- **HTTP-Only Cookies**: Secure cookie storage
- **Input Validation**: Server-side validation
- **SQL Injection Protection**: Parameterized queries

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support and questions, please open an issue in the repository.

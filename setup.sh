#!/bin/bash

echo "🚀 Setting up AdOptima SaaS MVP..."

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install backend dependencies
echo "🔧 Installing backend dependencies..."
cd backend
npm install

# Create .env file from example
if [ ! -f .env ]; then
    echo "📝 Creating backend .env file..."
    cp env.example .env
    echo "✅ Backend .env file created. Please edit it with your configuration."
else
    echo "✅ Backend .env file already exists."
fi

cd ..

# Install frontend dependencies
echo "🎨 Installing frontend dependencies..."
cd adoptima
npm install

# Create .env.local file from example
if [ ! -f .env.local ]; then
    echo "📝 Creating frontend .env.local file..."
    cp env.local .env.local
    echo "✅ Frontend .env.local file created. Please edit it with your configuration."
else
    echo "✅ Frontend .env.local file already exists."
fi

cd ..

echo ""
echo "🎉 Setup complete! Next steps:"
echo ""
echo "1. Create PostgreSQL database:"
echo "   createdb adoptima"
echo ""
echo "2. Edit backend/.env with your database credentials"
echo "3. Edit adoptima/.env.local with your API configuration"
echo ""
echo "4. Start the development servers:"
echo "   npm run dev"
echo ""
echo "Frontend will be available at: http://localhost:3000"
echo "Backend will be available at: http://localhost:5000"
echo ""
echo "Happy coding! 🚀"

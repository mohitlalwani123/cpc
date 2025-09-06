# 🚀 Coding Arena Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js 18+** (Download from [nodejs.org](https://nodejs.org/))
- **MongoDB** (Local installation or MongoDB Atlas account)
- **Git** for version control

## 📋 Step-by-Step Setup

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/yourusername/coding-arena.git
cd coding-arena

# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### 2. Database Setup

#### Option A: Local MongoDB
```bash
# Install MongoDB locally
# macOS: brew install mongodb-community
# Ubuntu: sudo apt install mongodb
# Windows: Download from mongodb.com

# Start MongoDB service
# macOS: brew services start mongodb-community
# Ubuntu: sudo systemctl start mongod
# Windows: Start MongoDB service from Services
```

#### Option B: MongoDB Atlas (Recommended)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account and cluster
3. Get your connection string
4. Whitelist your IP address

### 3. Environment Configuration

```bash
# Copy environment template
cp .env.example .env

# Edit .env file with your settings
nano .env  # or use your preferred editor
```

**Required Environment Variables:**
```env
# Database
MONGODB_URI=mongodb://localhost:27017/codingarena
# OR for Atlas: mongodb+srv://username:password@cluster.mongodb.net/codingarena

# JWT Secret (generate a random string)
JWT_SECRET=your-super-secret-jwt-key-make-it-long-and-random

# Google OAuth (optional, for social login)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 4. Google OAuth Setup (Optional)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:5173` (development)
   - `https://yourdomain.com` (production)

### 5. Seed Database

```bash
# Populate database with sample data
npm run seed
```

This creates:
- Admin user: `admin@codingarena.com` / `admin123`
- Sample events, posts, and news articles
- Test user accounts

### 6. Start Development

```bash
# Start both frontend and backend
npm run dev:full

# Or start separately:
# Terminal 1: npm run dev (frontend)
# Terminal 2: npm run server (backend)
```

**Access the application:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api

## 🔧 Development Workflow

### Frontend Development
```bash
# Start frontend only
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Backend Development
```bash
# Start backend with auto-reload
cd server
npm run dev

# Or from root directory
npm run server
```

### Database Operations
```bash
# Reseed database (clears existing data)
npm run seed

# Connect to MongoDB shell
mongosh codingarena
```

## 🚀 Production Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend (Railway/Render)
1. Connect repository to hosting platform
2. Set environment variables
3. Configure build and start commands

### Database (MongoDB Atlas)
1. Create production cluster
2. Update MONGODB_URI_PROD
3. Configure network access and security

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error**
```bash
# Check if MongoDB is running
mongosh --eval "db.adminCommand('ismaster')"

# Restart MongoDB service
# macOS: brew services restart mongodb-community
# Ubuntu: sudo systemctl restart mongod
```

**Port Already in Use**
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Or change PORT in .env file
```

**Module Not Found**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**CORS Issues**
- Ensure CLIENT_URL in backend .env matches frontend URL
- Check that both servers are running on correct ports

### Getting Help

1. Check the [Issues](https://github.com/yourusername/coding-arena/issues) page
2. Join our Discord community
3. Email: support@codingarena.com

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Manual](https://docs.mongodb.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion API](https://www.framer.com/motion/)

---

**Happy Coding! 🎉**
# 🏆 Coding Arena - Interactive Competition Platform

A modern, full-stack MERN application for coding competitions, community discussions, and developer networking.

## ✨ Features

### 🎯 Core Features
- **Interactive Competitions**: Join coding challenges with real-time leaderboards
- **Community Hub**: Discuss algorithms, share solutions, and collaborate
- **Event Management**: Comprehensive event creation and management system
- **Winner Celebrations**: Showcase achievements with animated galleries
- **News & Updates**: Stay informed with platform announcements
- **Admin Dashboard**: Complete administrative control panel

### 🎨 UI/UX Features
- **Glassmorphism Design**: Modern frosted glass aesthetic
- **Dark/Light Mode**: Seamless theme switching with animations
- **Responsive Design**: Perfect experience across all devices
- **Framer Motion**: Smooth animations and micro-interactions
- **Loading States**: Elegant loading animations and skeletons
- **Error Handling**: User-friendly error messages and retry options

### 🔐 Authentication & Security
- **JWT Authentication**: Secure token-based authentication
- **Google OAuth**: One-click social login
- **Role-based Access**: User and admin role management
- **Rate Limiting**: API protection against abuse
- **Input Validation**: Comprehensive data validation

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Lucide React** for icons

### Backend
- **Node.js** with Express
- **MongoDB** with Mongoose
- **JWT** for authentication
- **Passport.js** for OAuth
- **Helmet** for security
- **Morgan** for logging

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/coding-arena.git
cd coding-arena
```

2. **Install dependencies**
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

3. **Environment Setup**
```bash
# Copy environment file
cp .env.example .env

# Edit .env with your configuration
# - MongoDB connection string
# - JWT secret key
# - Google OAuth credentials
```

4. **Database Setup**
```bash
# Seed the database with sample data
npm run seed
```

5. **Start Development**
```bash
# Start both frontend and backend
npm run dev:full

# Or start separately:
# Frontend: npm run dev
# Backend: npm run server
```

## 📁 Project Structure

```
coding-arena/
├── src/                    # Frontend React application
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components
│   ├── contexts/          # React contexts
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API service layer
│   └── utils/             # Utility functions
├── server/                # Backend Node.js application
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API route handlers
│   ├── middleware/        # Custom middleware
│   └── utils/             # Backend utilities
└── docs/                  # Documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: #6C63FF (Vibrant Indigo)
- **Secondary**: #00C9A7 (Aqua Green)
- **Accent 1**: #FF6B6B (Coral Red)
- **Accent 2**: #FFD93D (Bright Yellow)

### Typography
- **Headings**: Poppins (bold, modern)
- **Body**: Inter (clean, readable)
- **Code**: Fira Code (monospace)

## 🔧 Configuration

### Environment Variables

#### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your-google-client-id
```

#### Backend (server/.env)
```env
MONGODB_URI=mongodb://localhost:27017/codingarena
JWT_SECRET=your-super-secret-jwt-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
PORT=5000
CLIENT_URL=http://localhost:5173
```

## 📊 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile

### Events Endpoints
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get single event
- `POST /api/events` - Create event (admin)
- `POST /api/events/:id/register` - Register for event

### Community Endpoints
- `GET /api/community/posts` - Get all posts
- `POST /api/community/posts` - Create post
- `POST /api/community/posts/:id/like` - Like/unlike post
- `POST /api/community/posts/:id/comment` - Add comment

## 🚀 Deployment

### Frontend (Vercel)
```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

### Backend (Railway/Render)
```bash
# Set environment variables in your hosting platform
# Deploy using Git integration or CLI
```

### Database (MongoDB Atlas)
1. Create MongoDB Atlas cluster
2. Update MONGODB_URI in environment variables
3. Whitelist your deployment IP addresses

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Pexels** for high-quality stock images
- **Lucide** for beautiful icons
- **Framer Motion** for smooth animations
- **Tailwind CSS** for rapid styling

## 📞 Support

For support, email support@codingarena.com or join our Discord community.

---

**Built with ❤️ by the Coding Arena Team**
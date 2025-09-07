# Dabang Dashboard - Setup Instructions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL 14+ (or use Docker)
- npm or yarn

### Option 1: Using Docker (Recommended)

1. **Clone and navigate to the project:**
   ```bash
   cd dashboard
   ```

2. **Start all services with Docker:**
   ```bash
   docker-compose up -d
   ```

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - API Documentation: http://localhost:3001/api/docs

### Option 2: Manual Setup

1. **Install dependencies:**
   ```bash
   # Install root dependencies
   npm install
   
   # Install frontend dependencies
   cd frontend && npm install
   
   # Install backend dependencies
   cd ../backend && npm install
   ```

2. **Set up PostgreSQL database:**
   - Create a database named `dabang_dashboard`
   - Update the database credentials in `backend/env.example` and rename to `.env`

3. **Start the development servers:**
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run start:dev
   
   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

4. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - API Documentation: http://localhost:3001/api/docs

## 📁 Project Structure

```
dashboard/
├── frontend/                 # Next.js 14+ application
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   ├── components/      # Reusable UI components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # API client and utilities
│   │   ├── store/           # Zustand state management
│   │   └── theme/           # MUI theme configuration
│   ├── package.json
│   └── Dockerfile
├── backend/                  # NestJS application
│   ├── src/
│   │   ├── config/          # Database configuration
│   │   ├── dashboard/       # Dashboard module
│   │   ├── entities/        # TypeORM entities
│   │   ├── dto/             # Data Transfer Objects
│   │   └── migrations/      # Database migrations
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml       # Docker orchestration
└── README.md
```

## 🛠️ Features Implemented

### Frontend (Next.js + MUI)
- ✅ Responsive dashboard layout with sidebar navigation
- ✅ Material-UI components with custom theme
- ✅ Interactive charts using Chart.js
- ✅ State management with Zustand
- ✅ API integration with Axios
- ✅ Loading states and error handling
- ✅ TypeScript throughout

### Backend (NestJS + PostgreSQL)
- ✅ RESTful API endpoints
- ✅ TypeORM with PostgreSQL
- ✅ Swagger/OpenAPI documentation
- ✅ Input validation with class-validator
- ✅ Error handling and logging
- ✅ CORS configuration

### API Endpoints
- `GET /api/dashboard/metrics` - Today's sales metrics
- `GET /api/dashboard/revenue` - Revenue data
- `GET /api/dashboard/customer-satisfaction` - Customer satisfaction data
- `GET /api/dashboard/visitor-insights` - Visitor analytics
- `GET /api/dashboard/top-products` - Top selling products

### Dashboard Components
- ✅ Today's Sales metrics cards
- ✅ Visitor Insights line chart
- ✅ Revenue comparison bar chart
- ✅ Customer Satisfaction trends
- ✅ Target vs Reality comparison
- ✅ Top Products table
- ✅ Sales mapping visualization
- ✅ Volume vs Service level chart

## 🐳 Docker Commands

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Rebuild and start
docker-compose up -d --build
```

## 🔧 Development Commands

```bash
# Frontend
cd frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Backend
cd backend
npm run start:dev    # Start development server
npm run build        # Build for production
npm run start:prod   # Start production server

# Root (both services)
npm run dev          # Start both frontend and backend
npm run build        # Build both applications
```

## 📊 Data

The application currently uses mock data that matches the Figma design. In a production environment, you would:

1. Set up real database connections
2. Implement data seeding scripts
3. Add authentication and authorization
4. Connect to real data sources

## 🎨 Design Fidelity

The dashboard replicates the provided Figma design with:
- Pixel-perfect layout matching the original
- Responsive design for all screen sizes
- Modern Material-UI components
- Interactive charts and visualizations
- Consistent color scheme and typography

## 🚀 Production Deployment

For production deployment:

1. Set up environment variables
2. Configure production database
3. Build and optimize the applications
4. Set up reverse proxy (nginx)
5. Configure SSL certificates
6. Set up monitoring and logging

## 📝 Notes

- The application is fully functional with mock data
- All API endpoints are documented in Swagger
- The frontend automatically handles loading and error states
- The backend includes proper validation and error handling
- Docker configuration is included for easy deployment

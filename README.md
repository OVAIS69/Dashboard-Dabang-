# Dabang Dashboard

A production-ready full-stack dashboard built with Next.js 14+ and NestJS, featuring a modern UI with comprehensive data visualization.

## Tech Stack

### Frontend
- Next.js 14+ (TypeScript, App Router)
- Material-UI (MUI)
- Chart.js for data visualization
- Zustand for state management
- Axios for API calls

### Backend
- NestJS (TypeScript)
- PostgreSQL with TypeORM
- Swagger/OpenAPI documentation
- Class-validator for validation

## Project Structure

```
dashboard/
├── frontend/          # Next.js application
│   ├── components/    # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── store/         # State management
│   ├── theme/         # MUI theme configuration
│   └── utils/         # Helper functions
├── backend/           # NestJS application
│   ├── config/        # Configuration files
│   ├── common/        # Shared utilities
│   ├── dashboard/     # Dashboard module
│   ├── entities/      # Database entities
│   ├── dto/           # Data Transfer Objects
│   ├── migrations/    # Database migrations
│   └── seeds/         # Database seeds
└── docker-compose.yml # Docker configuration
```

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm run install:all
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

4. Start the development servers:
   ```bash
   npm run dev
   ```

This will start both frontend (http://localhost:3000) and backend (http://localhost:3001) servers.

### API Endpoints

- `GET /api/dashboard/metrics` - Today's sales metrics
- `GET /api/dashboard/revenue` - Revenue data
- `GET /api/dashboard/customer-satisfaction` - Customer satisfaction data
- `GET /api/dashboard/visitor-insights` - Visitor analytics
- `GET /api/dashboard/top-products` - Top selling products

### Features

- 📊 Real-time dashboard with multiple data visualizations
- 📱 Fully responsive design
- 🎨 Modern Material-UI components
- 📈 Interactive charts and graphs
- 🔍 Search functionality
- 🌍 Multi-language support
- 🔔 Notification system
- 👤 User profile management

### Development

- Frontend: `npm run dev:frontend`
- Backend: `npm run dev:backend`
- Build: `npm run build`
- Start production: `npm run start`

### Docker

```bash
docker-compose up -d
```

## License

MIT

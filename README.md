# E-Commerce Project with Next.js, Tailwind CSS, MongoDB, and Node.js

## Project Overview

This is a full-stack e-commerce application built with:
- **Frontend**: Next.js (React framework) with Tailwind CSS for styling
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Integration**: Stripe API

## Features

### User Authentication
- User registration and login
- Password reset functionality
- Role-based access (user/admin)
- JWT authentication
- Protected routes

### Product Management
- Product catalog with categories
- Product search and filtering
- Product details page with images
- Product reviews and ratings
- Pagination for product listings

### Shopping Cart
- Add/remove products from cart
- Adjust product quantities
- Save cart to user account
- Cart summary with totals

### Checkout Process
- Shipping address collection
- Payment method selection (Stripe integration)
- Order summary
- Order confirmation

### User Account
- Order history
- Profile management
- Address book
- Wishlist functionality

### Admin Dashboard
- Product management (CRUD operations)
- Order management
- User management
- Sales analytics
- Inventory management

## Technologies Used

### Frontend
- Next.js (App Router)
- React.js
- Tailwind CSS
- React Hook Form
- React Toastify (notifications)
- React Icons

### Backend
- Node.js
- Express.js
- Mongoose (MongoDB ODM)
- JSON Web Tokens (JWT)
- Bcrypt (password hashing)
- Multer (file uploads)
- Stripe (payment processing)

### Database
- MongoDB (NoSQL database)
- Mongoose schemas for data modeling

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- MongoDB Atlas account or local MongoDB installation
- Stripe account for payment processing
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-project.git
   cd ecommerce-project
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the frontend directory with:
     ```
     NEXT_PUBLIC_API_URL=http://localhost:5000
     NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
     ```

   - Create a `.env` file in the backend directory with:
     ```
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     JWT_EXPIRE=30d
     STRIPE_SECRET_KEY=your_stripe_secret_key
     FRONTEND_URL=http://localhost:3000
     PORT=5000
     NODE_ENV=development
     ```

4. Start the development servers:
   ```bash
   # In one terminal (backend)
   cd backend
   npm run dev

   # In another terminal (frontend)
   cd frontend
   npm run dev
   ```

5. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Project Structure

```
ecommerce-project/
├── frontend/                  # Next.js application
│   ├── public/                # Static files
│   ├── src/
│   │   ├── app/               # App router directory
│   │   │   ├── (auth)/        # Authentication routes
│   │   │   ├── (main)/        # Main application routes
│   │   │   ├── admin/         # Admin routes
│   │   │   ├── api/           # API routes
│   │   │   ├── cart/          # Cart related pages
│   │   │   ├── products/      # Product related pages
│   │   │   ├── user/          # User account pages
│   │   │   ├── layout.tsx     # Main layout
│   │   │   └── page.tsx       # Home page
│   │   ├── components/        # Reusable components
│   │   ├── contexts/          # React contexts
│   │   ├── hooks/             # Custom hooks
│   │   ├── lib/               # Utility functions
│   │   ├── models/            # TypeScript interfaces
│   │   ├── styles/            # Global styles
│   │   └── utils/             # Utility functions
│   ├── next.config.js         # Next.js configuration
│   └── tailwind.config.js     # Tailwind CSS configuration
│
├── backend/                   # Node.js backend
│   ├── config/                # Configuration files
│   ├── controllers/           # Route controllers
│   ├── middleware/            # Express middleware
│   ├── models/                # Mongoose models
│   ├── routes/                # API routes
│   ├── utils/                 # Utility functions
│   ├── app.js                 # Express app setup
│   └── server.js              # Server entry point
│
├── .gitignore
└── README.md
```

## Available Scripts

### Frontend (Next.js)
- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm start`: Start production server
- `npm run lint`: Run ESLint

### Backend (Node.js)
- `npm run dev`: Start development server with nodemon
- `npm start`: Start production server
- `npm run test`: Run tests

## Deployment

### Frontend Deployment
1. Build the production version:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy to Vercel (recommended for Next.js):
   - Connect your GitHub repository to Vercel
   - Configure environment variables in Vercel dashboard
   - Deploy

### Backend Deployment
1. Set up a MongoDB Atlas cluster if not already done
2. Deploy to platforms like:
   - Render
   - Heroku
   - AWS Elastic Beanstalk
   - DigitalOcean App Platform

3. Update frontend environment variables to point to your deployed backend

## Environment Variables

### Frontend (`.env.local`)
```
NEXT_PUBLIC_API_URL=your_backend_api_url
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### Backend (`.env`)
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=your_frontend_url
PORT=5000
NODE_ENV=production
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

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
│   ├── models/                # Mongoose models
│   ├── routes/                # API routes
│   ├── utils/                 # Utility functions
│   ├── app.js                 # Express app setup
│   └── server.js              # Server entry point
│
├── .gitignore
└── README.md
```
## License

Distributed under the MIT License. See `LICENSE` for more information.

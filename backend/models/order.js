import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
      trim: true, // Removes extra spaces
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId, // Reference to a User document
      ref: 'User',
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId, // Reference to a Product document
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1, // Quantity should be at least 1
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
      min: 0, // Total should be non-negative
    },
    status: {
      type: String,
      enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
      default: 'Pending', // Default order status
    },
    paymentMethod: {
      type: String,
      enum: ['Credit Card', 'PayPal', 'Cash on Delivery', 'Bank Transfer'],
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

// Create the Order model
const Order = mongoose.model('Orders', orderSchema);

export default Order;

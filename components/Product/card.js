import Link from 'next/link';
import React from 'react'
import { FaStar, FaShoppingCart, FaHeart, FaEye, FaCartPlus } from "react-icons/fa";

export default function ProductCard({ title, price, image, rating, sold, discount, originalPrice }) {
  return (
    <Link href={'/pages/productdetail'}>
    <div className="border rounded-lg overflow-hidden bg-white shadow-md relative cursor-pointer group hover:shadow-xl transition duration-300">
      <div className="relative">
        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-2 left-2 bg-pink-600 text-white px-2 py-1 rounded-md text-sm font-semibold z-10">
            -{discount}%
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute bottom-2 w-full opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 z-10 transition duration-300">
          <button className="bg-white p-2 rounded-full flex-center hover:scale-110 transition duration-300">
            <FaEye className="text-gray-600" />
          </button>
          <button className="bg-white p-2 rounded-full flex-center hover:scale-110 transition duration-300">
            <FaHeart className="text-gray-600" />
          </button>
          <button className="bg-white p-2 rounded-full flex-center hover:scale-110 transition duration-300">
            <FaCartPlus className="text-gray-600" />
          </button>
        </div>

        {/* Product Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h2>

        {/* Rating and Sales */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`text-sm ${index < Math.floor(rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                  }`}
              />
            ))}
            <span className="text-sm text-gray-600 ml-1">({rating})</span>
          </div>
          <span className="text-sm text-gray-500">•</span>
          <span className="text-sm text-gray-600">{sold} sold</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-pink-600">${price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">${originalPrice}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        {/* <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 flex items-center justify-center gap-2">
          Buy Now
        </button> */}
      </div>
    </div>
    </Link>
  );
}

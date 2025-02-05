import React from 'react'

export default function ProductCard({title,price,review}) {
  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-md relative cursor-pointer group">
  <div className="relative">
    {/* Icons Section */}
  <div className="absolute bottom-2 w-full opacity-0 group-hover:opacity-100 flex items-center justify-center z-10 ">
  <i className="fa-solid fa-eye product-icon"></i> {/* Quick View */}
  <i className="fa-solid fa-heart product-icon"></i> {/* Wishlist */}
  <i className="fa-solid fa-cart-plus product-icon"></i> {/* Add to Cart */}

   
  </div>

  {/* Product Image */}
  <img src="/img/product/product-1.jpg" className="w-full h-60 object-cover" />
  </div>

  {/* Product Details */}
  <div className="p-4">
    <h2 className="font-semibold text-lg">{title}</h2>
    <p className="mt-2 text-pink-600">${price}</p>
    <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 w-full">
      Add to Cart
    </button>
  </div>
</div>

  )
}

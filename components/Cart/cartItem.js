"use client";
import React, { useState } from "react";


export default function CartItem() {
  const [count, setCount] = useState(0);

  // Increment and decrement functions
  const increment = () => {
    if (count < 10) setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <li class="py-3 border-t">
      <div class="flex items-center">
        <div class="w-1/2 md:w-1/2 lg:w-3/5">
          <div class="flex">
            <img
              src="/img/product/product-1.jpg"
              alt="Ecommerce"
              class="w-16 h-16"
            />
            <div class="ml-3">
              {/* <!-- title --> */}
              <a href="#" class="text-inherit">
                <h6>Haldirams Sev Bhujia</h6>
              </a>
              {/* <span>
                <small class="text-gray-500">.98 / lb</small>
              </span> */}
              {/* <!-- text --> */}
              <div class="mt-2 small leading-none">
                <a href="#" class="text-green-600 flex items-center">
                  <span class="mr-1 align-text-bottom">
				  <i class="fa-solid fa-trash-can text-[13px]"></i>
                  </span>
                  <span class="text-gray-500 text-sm">Remove</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- input group --> */}
        <div className="flex items-center space-x-3">
  <button onClick={decrement} className="w-4 h-4 items-center flex justify-center bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300">
    -
  </button>
  <span className="text-lg font-medium">{count}</span>
  <button onClick={increment} className="w-4 h-4 items-center flex justify-center bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300">
    +
  </button>
</div>
        {/* <!-- price --> */}
        <div class="w-1/5 text-center md:w-1/5">
          <span class="font-bold text-gray-800">$5.00</span>
        </div>
      </div>
    </li>
  );
}
// //
// <div className="cartItem flex flex-col items-center rounded-lg w-20 m-2">
// {/* Item Image */}
// <img
//   src="/images/shoes.png"
//   alt="Shoes"
//   className="w-full h-16 object-contain rounded"
// />

// {/* Item Title */}
// {/* <div className="text-md font-semibold text-gray-700">
//   Stylish Shoes
// </div> */}

// {/* Quantity Controls */}

// </div>

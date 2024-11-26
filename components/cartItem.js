import React, { useState } from 'react';

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

    
    //
    <div className="cartItem flex flex-col items-center rounded-lg w-20 m-2">
      {/* Item Image */}
      <img 
        src="/images/shoes.png" 
        alt="Shoes" 
        className="w-full h-16 object-contain rounded" 
      />

      {/* Item Title */}
      {/* <div className="text-md font-semibold text-gray-700">
        Stylish Shoes
      </div> */}

      {/* Quantity Controls */}
      <div className="flex items-center space-x-3">
        <button onClick={decrement} className="w-4 h-4 items-center flex justify-center bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300">
          -
        </button>
        <span className="text-lg font-medium">{count}</span>
        <button onClick={increment} className="w-4 h-4 items-center flex justify-center bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300">
          +
        </button>
      </div>
    </div>
  );
}

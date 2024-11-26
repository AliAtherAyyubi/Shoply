"use client";


import Link from 'next/link';
import { useRef } from 'react';
import CartItem from './cartItem';
// import '../app/styles/navbar.module.css'

//
export default function Navbar() {
  const cartRef= useRef();
  function toggleCart(){
    if(cartRef.current.classList.contains('translate-x-full')){
      cartRef.current.classList.remove('translate-x-full');
      cartRef.current.classList.add('translate-x-0');
    }
   else if(cartRef.current.classList.contains('translate-x-0')){
      cartRef.current.classList.remove('translate-x-0');
      cartRef.current.classList.add('translate-x-full');
    }
  }

  return (
    (
    <div className="navbar bg-gray-800 text-white px-5 py-3 flex items-center max-sm:flex-col ">
      <div className="logo text-2xl font-semibold"><Link href={'/'}>Shoply</Link></div>
      <div className="nav-links mx-10 max-sm:mt-5">
        <ul className="flex gap-8">
          <li>
            <Link href="/Tshirt" className="hover:text-gray-300">T-Shirts</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-gray-300">Profile</Link>
          </li>
        </ul>
      </div>
      <i onClick={toggleCart}  className="fa-solid fa-cart-shopping text-xl absolute top-5 right-5 cursor-pointer"></i>
        {/* Sidebar */}

      <div ref={cartRef} className="absolute text-black top-0 right-0 h-full w-80 bg-pink-100 shadow-lg z-50 transform transition-transform duration-300 translate-x-full">
         
            <button>
              <i onClick={toggleCart} className="fa-solid fa-xmark text-black text-xl absolute top-2 right-3"></i>
            </button>
          
          <h2 className="text-xl text-center font-bold">Shopping Cart</h2>

          <div className="cart-items p-4 flex flex-wrap">
            <CartItem/>
            <CartItem/>
            <CartItem/>
          </div>
          <div className="footer p-4 border-t">
            <button className="bg-pink-600 text-white px-4 py-2 mr-5 rounded">
              Clear
            </button>
            <Link href={'/checkout'}>
            <button className="bg-pink-600 text-white px-4 py-2 rounded" onClick={toggleCart}>
            <i class="fa-solid fa-bag-shopping text-lg mx-2"></i>
              Checkout
            </button>
            </Link>
          </div>
        </div>
    </div>
  ));
}

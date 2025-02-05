import React from "react";
import CartItem from "./cartItem";
import Link from "next/link";

export default function CartSideBar({ isCartOpen,toggleCart }) {
  return (
	<>
	{isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleCart}
        ></div>
      )}
    <div
      className={`fixed top-0 right-0 h-full z-10 w-96 bg-white transform ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300`}>
      <button>
        <i onClick={toggleCart} className="fa-solid fa-xmark text-black text-xl absolute top-2 right-3"></i>
      </button>

      <h2 className="text-xl text-center font-bold">Shopping Cart</h2>

      <div className="cart-items p-4 flex flex-wrap">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="footer p-4 border-t">
        <button className="bg-pink-600 text-white px-4 py-2 mr-5 rounded">
          Clear
        </button>
        <Link href={"/pages/cart"}>
          <button onClick={toggleCart} className="bg-pink-600 text-white px-4 py-2 rounded">
            <i  className="fa-solid fa-bag-shopping text-lg mx-2"></i>
            Checkout
          </button>
        </Link>
      </div>
    </div>
	</>
  );
}

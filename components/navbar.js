"use client";


import Link from "next/link";
import { useState } from "react";
import CartSideBar from "./Cart/sideBar";

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
///
function toggleCart(){
  setCartOpen(!isCartOpen);
}

  return (
    <header className="bg-white shadow-md z-30 sticky">
      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-4 py-4 md:py-2 bg-white ">
        {/* Menu Icon for Sidebar */}
        <button
          className="block md:hidden text-gray-700 hover:text-red-500"
          onClick={toggleSidebar}
        >
          <i className="fa-solid fa-bars text-xl"></i>
        </button>

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href={'/'}><img className="w-40 md:w-52" src="/img/logo.png" alt="Logo" /></Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex relative mx-4 w-[40%]">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-full py-2 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Search for products..."
          />
          <i className="fa-solid fa-magnifying-glass absolute right-3 top-3 text-black text-xl"></i>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
        <i className="fa-solid fa-user nav-icon"></i>
        <i className="fa-solid fa-heart nav-icon"></i>
          
          <div  className="relative">
            <i onClick={toggleCart}  className="fa-solid fa-cart-shopping nav-icon"></i>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </div>
        </div>
      </nav>

      {/* Categories Bar (Visible only on large screens) */}
      <div className="hidden md:flex text-black justify-center items-center py-2 space-x-4 px-4">
        <Link href={"#"} className="nav-links">
          Electronics
        </Link>
        <Link href={"/pages/fashion"} className="nav-links">
          Fashion
        </Link>
        <Link href={"#"} className="nav-links">
          Home & Garden
        </Link>
        <Link href={"#"} className="nav-links">
          Toys & Hobbies
        </Link>
        <Link href={"#"} className="nav-links">
          Beauty
        </Link>
        <Link href={"#"} className="nav-links">
          Health
        </Link>
        <Link href={"#"} className="nav-links">
          More Categories
        </Link>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-10 w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}>
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
          onClick={toggleSidebar}
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <ul className="space-y-2">
          <li>
              <Link href={"" }className="text-gray-700 hover:text-red-500 block">
                Home
              </Link>
            </li>
            <li>
              <Link href={"#"} className="text-gray-700 hover:text-red-500 block">
                Shopping
              </Link>
            </li>
            <li>
              <Link href={"#"} className="text-gray-700 hover:text-red-500 block">
                Orders
              </Link>
            </li>
            <li>
              <Link href={"#"} className="text-gray-700 hover:text-red-500 block">
                Setting
              </Link>
            </li>
            <li>
              <button className="text-gray-700 hover:text-red-500 block">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* cart side bar */}
      <CartSideBar isCartOpen={isCartOpen} toggleCart={toggleCart}/>
    </header>
  );
}


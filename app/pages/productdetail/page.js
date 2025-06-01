import ProductSlider from "@/components/Product/prdouctSlider";
import Link from "next/link";
import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";

export default function ProductDetail() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className=" container px-5 py-24 mx-auto">
        <div className="grid md:grid-cols-2 gap-10 w-full mx-auto">
          <ProductSlider />

          <div className="w-full mt-6  ">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              The Catcher in the Rye
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`text-sm ${
                      index < Math.floor(4.5)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                {/* <span className="text-gray-600 ml-3">4 Reviews</span> */}
              </span>
            </div>
            <p className="leading-relaxed">
              Men`s Summer Quick Dry Embroidered Polo Shirts Plus Size Military
              Clothes Tactical Sleeve Badge Tops Turn-down Army T-shirts
            </p>
            <div className="flex mt-4 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center">
              <span className="title-font font-medium text-2xl text-gray-900">
                $58.00
              </span>
              <button className="flex ml-10 text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded">
                Add to Cart
              </button>
              <Link href={"/pages/checkout"}>
                <button className="flex ml-5 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Order
                </button>
              </Link>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Product Reviews */}
      <div class="max-w-7xl mx-auto px-4 py-10">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">
          Customer Reviews
        </h2>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* <!-- Review Card --> */}
          {productReviews.map((review, index) => (
            <div
              key={index}
              class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <div class="flex items-center space-x-4 mb-4">
                <img
                  class="w-12 h-12 rounded-full object-cover"
                  src={review.imgSrc}
                  alt="Reviewer"
                />
                <div>
                  <h4 class="text-lg font-semibold text-gray-900">
                    {review.name}
                  </h4>
                  <p class="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
              <div class="flex items-center mb-2">
                <div class="flex text-yellow-400 text-xl">★★★★☆</div>
                <span class="ml-2 text-sm text-gray-500">
                  ({review.rating})
                </span>
              </div>
              <p class="text-gray-700 text-sm">{review.review}</p>
            </div>
          ))}
          {/* <!-- End of Review Card --> */}
        </div>
      </div>
    </section>
  );
}
const productReviews = [
  {
    name: "Jane Doe",
    rating: 4.5,
    review:
      "Really impressed with the quality! Fast delivery and the packaging was neat. Would definitely recommend it to others.",
    imgSrc: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "John Smith",
    rating: 5.0,
    review:
      "Excellent product! Matches the description perfectly and the build quality is great. Will buy again.",
    imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Alice Johnson",
    rating: 4.0,
    review:
      "Good value for money. The product is decent but could use some improvements.",
    imgSrc: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Bob Brown",
    rating: 3.5,
    review:
      "Average experience. The product is okay, but I expected better quality.",
    imgSrc: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

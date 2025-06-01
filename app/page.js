"use client";
import ProductCard from "@/components/Product/card";
import { FaTruck, FaShieldAlt, FaHeadset, FaExchangeAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef, useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { banners, categories, featuredProducts, sellingProducts } from './utils/products';

export default function Home() {
  const swiperRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7); // Set end date to 7 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800">
  

      {/* Hero Section with Swiper */}
      <section className="relative h-screen">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return '<span class="' + className + ' w-3 h-3 bg-white rounded-full"></span>';
            },
          }}
          navigation={false}
          className="h-full"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-cover bg-center h-screen flex items-center relative"
                style={{ backgroundImage: `url('${banner.image}')` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="container mx-auto px-4 relative z-10">
                  <div className="max-w-2xl h-[80%] ">
                    <h1 className="text-6xl font-bold text-white mb-20">{banner.title}</h1>
                    <p className="text-xl text-white mb-20">
                      {banner.subtitle}
                    </p>
                    <div className="flex gap-4">
                      <button className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold transition duration-300">
                        {banner.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <FaTruck className="text-3xl text-pink-600" />
              <div>
                <h3 className="font-semibold">Free Shipping</h3>
                <p className="text-gray-600 text-sm">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaShieldAlt className="text-3xl text-pink-600" />
              <div>
                <h3 className="font-semibold">Secure Payment</h3>
                <p className="text-gray-600 text-sm">100% secure checkout</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaHeadset className="text-3xl text-pink-600" />
              <div>
                <h3 className="font-semibold">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Dedicated support</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaExchangeAlt className="text-3xl text-pink-600" />
              <div>
                <h3 className="font-semibold">Easy Returns</h3>
                <p className="text-gray-600 text-sm">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Shop by Category</h2>
          <p className="text-gray-600 text-center mb-12">Discover our curated collection of fashion categories</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl cursor-pointer">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-80 object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-white text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-white text-sm">{category.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Products</h2>
          <p className="text-gray-600 text-center mb-12">Check out our most popular items</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Selling Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Top Selling Products</h2>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <FaChevronLeft className="text-gray-600" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <FaChevronRight className="text-gray-600" />
              </button>
            </div>
          </div>
          <div className="relative">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={4}
              navigation={false}
              className="py-4"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              {sellingProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard {...product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            <div className="relative py-16 px-8 md:px-16">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Enhance Your Music Experience
                </h2>
                <p className="text-gray-200 text-lg mb-8">
                  Premium headphones with noise cancellation and crystal-clear sound quality
                </p>

                {/* Countdown Timer */}
                <div className="flex gap-4 mb-8">
                  <div className="w-16 h-16 bg-white rounded-full flex-center shadow-lg">
                    <div className="text-center">
                      <div className="text-xl font-bold text-gray-800">{timeLeft.days}</div>
                      <div className="text-xs font-medium text-gray-500">Days</div>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-white rounded-full flex-center shadow-lg">
                    <div className="text-center">
                      <div className="text-xl font-bold text-gray-800">{timeLeft.hours}</div>
                      <div className="text-xs font-medium text-gray-500">Hours</div>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-white rounded-full flex-center shadow-lg">
                    <div className="text-center">
                      <div className="text-xl font-bold text-gray-800">{timeLeft.minutes}</div>
                      <div className="text-xs font-medium text-gray-500">Min</div>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-white rounded-full flex-center shadow-lg">
                    <div className="text-center">
                      <div className="text-xl font-bold text-gray-800">{timeLeft.seconds}</div>
                      <div className="text-xs font-medium text-gray-500">Sec</div>
                    </div>
                  </div>
                </div>

                <button className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold transition duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* ... rest of the code ... */}
    </div>
  );
}

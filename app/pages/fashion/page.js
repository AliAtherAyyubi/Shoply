// import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/Product/card';

export default function Fashion() {
  var productPage = '/pages/productdetail';
  //
  return (
    <>
    
      <section className=" body-font">
      <div className=' w-full bg-gray-100 py-10'>
        <h1 className='text-4xl font-bold px-10'>Fashion</h1>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 ">
    
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <ProductCard title={"Casual Shirt"} image={'/img/product/product-2.jpg'} price={100} rating={4.5} />
            </div>
          ))}
          

        </div>
      </div>
    </section>
    </>
   
  )
}

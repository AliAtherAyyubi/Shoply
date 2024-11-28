import React from 'react'

export default function CartItemCard({productNo}) {
  return (
    <div className="flex items-center gap-4">
    <div className="w-24 h-24 shrink-0 bg-white rounded-lg">
        <img src={`/img/product/product-${productNo}.jpg`} className="w-full h-full object-contain" />
    </div>

    <div className="w-full">
        <h3 className="text-base font-semibold text-gray-800">Velvet Sneaker</h3>
        <h6 className="text-sm text-gray-800 font-bold cursor-pointer mt-0.5">$18.00</h6>

        <div className="flex gap-4 mt-4">

            <div>
                <button type="button"
                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                    <i class="fa-solid fa-minus w-2.5 fill-current"></i>
                    <span className="mx-2.5">1</span>
                    
                    <i class="fa-solid fa-plus w-2.5 fill-current"></i>
                </button>
            </div>

            <div className="ml-auto">
                
                <i class="fa-solid fa-trash-can w-4 text-red-500 inline cursor-pointer"></i>
            </div>
        </div>
    </div>
</div>
  )
}

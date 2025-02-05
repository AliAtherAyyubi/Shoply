import Link from "next/link";

export default function Checkout() {
    return (
      <div className="bg-gray-50">
        {/* Breadcrumb Section */}
        <section className="mb-8 bg-gray-200 py-8">
          <div className="container px-4">
            <div className="text-left ml-20">
              <h4 className="text-2xl font-semibold">Check Out</h4>
              <div className="text-sm text-gray-600 space-x-2 mt-2">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <span>/</span>
                <Link href="#" className="hover:text-blue-600">Shop</Link>
                <span>/</span>
                <span>Check Out</span>
              </div>
            </div>
          </div>
        </section>
  
        {/* Checkout Section */}
        <section>
          <div className="container mx-auto px-4">
            <form>
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Billing Details */}
                <div className="lg:col-span-2">
                  <h6 className="text-sm text-gray-600 mb-4">
                    Have a coupon?{" "}
                    <a href="#" className="text-blue-600 underline">Click here</a> to enter your code
                  </h6>
                  <h6 className="text-xl font-semibold mb-6">Billing Details</h6>
  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm">First Name<span className="text-red-600">*</span></label>
                      <input type="text" className="w-full border rounded p-2" />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm">Last Name<span className="text-red-600">*</span></label>
                      <input type="text" className="w-full border rounded p-2" />
                    </div>
                  </div>
  
                  <label className="block mt-4 mb-2 text-sm">Country<span className="text-red-600">*</span></label>
                  <input type="text" className="w-full border rounded p-2" />
  
                  <label className="block mt-4 mb-2 text-sm">Address<span className="text-red-600">*</span></label>
                  <input type="text" className="w-full border rounded p-2 mb-2" placeholder="Street Address" />
                  <input type="text" className="w-full border rounded p-2" placeholder="Apartment, suite, etc (optional)" />
  
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block mb-2 text-sm">Town/City<span className="text-red-600">*</span></label>
                      <input type="text" className="w-full border rounded p-2" />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm">State/Province<span className="text-red-600">*</span></label>
                      <input type="text" className="w-full border rounded p-2" />
                    </div>
                  </div>
  
                  <div className="grid md:grid-cols-2 gap-4 mt-4 mb-10">
                    <div>
                      <label className="block mb-2 text-sm">Postcode/ZIP<span className="text-red-600">*</span></label>
                      <input type="text" className="w-full border rounded p-2" />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm">Phone<span className="text-red-600">*</span></label>
                      <input type="text" className="w-full border rounded p-2" />
                    </div>
                  </div>
  
  
                  
                </div>
  
                {/* Order Summary */}
                <div>
                  <div className="bg-[#f3f2ee] p-6 rounded shadow-md">
                    <h4 className="text-xl font-semibold mb-4">Your Order</h4>
                    <div className="mb-4">
                      <div className="flex justify-between font-semibold text-sm">
                        <span>Product</span>
                        <span>Total</span>
                      </div>
                      <ul className="mt-2 space-y-2">
                        <li className="flex justify-between text-gray-600">
                          <span>01. Vanilla salted caramel</span>
                          <span>$300.0</span>
                        </li>
                        <li className="flex justify-between text-gray-600">
                          <span>02. German chocolate</span>
                          <span>$170.0</span>
                        </li>
                        <li className="flex justify-between text-gray-600">
                          <span>03. Sweet autumn</span>
                          <span>$170.0</span>
                        </li>
                        <li className="flex justify-between text-gray-600">
                          <span>04. Gluten free mini dozen</span>
                          <span>$110.0</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between font-semibold">
                        <span>Subtotal</span>
                        <span>$750.99</span>
                      </div>
                      <div className="flex justify-between font-semibold mt-2">
                        <span>Total</span>
                        <span>$750.99</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link href={'/pages/cart'}><button type="submit" className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700">
                        PLACE ORDER
                      </button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
  
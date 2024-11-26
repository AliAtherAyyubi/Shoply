////

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen flex items-center " style={{ backgroundImage: "url('/img/hero/hero-1.jpg')" }}>
        <div className="text-center text-black ml-48">
          <h1 className="text-5xl font-bold">Discover Your Style</h1>
          <p className="mt-4 text-lg">Shop the latest collections of clothing, accessories, and more.</p>
          <button className="mt-6 px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold">
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Men's Fashion", "Women's Fashion", "Accessories", "Shoes"].map((category, index) => (
              <div key={index} className="relative group">
                <img src={`/img/category-${index + 1}.jpg`} alt={category} className="w-full h-60 object-cover rounded-lg" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-white text-lg font-semibold">{category}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border rounded-lg overflow-hidden bg-white shadow-md">
                <img src="/img/product-1.jpg" className="w-full h-60 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Product Name</h3>
                  <p className="mt-2 text-gray-600">$49.99</p>
                  <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 w-full">
                    Add to Cart
                  </button>
                </div>
              </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}

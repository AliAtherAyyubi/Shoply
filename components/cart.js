///

export default function CartSidebar({ closeSidebar }) {
    return (
      <>
        {/* Sidebar */}
        <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 translate-x-0">
          <div className="header flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-bold">Your Cart</h2>
            <button onClick={closeSidebar}>
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>
          <div className="cart-items p-4">
            <p>Your cart is empty.</p>
          </div>
          <div className="footer p-4 border-t">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Clear
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Checkout
            </button>
          </div>
        </div>
      </>
    );
  }
  
  
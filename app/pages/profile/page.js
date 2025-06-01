'use client';

import { useState, useEffect } from 'react';
import { 
  FiUser, 
  FiList, 
  FiMapPin, 
  FiGlobe, 
  FiCreditCard, 
  FiShield,
  FiMenu,
  FiX
} from 'react-icons/fi';

// Components
const UserProfile = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">User Profile</h2>
    <div className="grid gap-6">
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 rounded-full bg-gray-200"></div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Change Photo
        </button>
      </div>
      <div className="grid gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your email"
          />
        </div>
      </div>
    </div>
  </div>
);

const OrderHistory = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">Order History</h2>
    <div className="space-y-4">
      {[1, 2, 3].map((order) => (
        <div key={order} className="p-4 border rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Order #{order}</p>
              <p className="text-sm text-gray-500">March {order}, 2024</p>
            </div>
            <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
              Delivered
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Addresses = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">Addresses</h2>
    <div className="grid gap-4">
      <div className="p-4 border rounded-lg">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-medium">Home Address</p>
            <p className="text-gray-600">123 Main St, City, Country</p>
          </div>
          <button className="text-blue-600 hover:text-blue-700">Edit</button>
        </div>
      </div>
      <button className="flex items-center justify-center w-full p-4 border-2 border-dashed rounded-lg hover:border-blue-600 transition">
        <span className="text-blue-600">+ Add New Address</span>
      </button>
    </div>
  </div>
);

const CountryRegion = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">Country/Region</h2>
    <div className="max-w-md">
      <label className="block text-sm font-medium mb-1">Select Your Country</label>
      <select className="w-full px-3 py-2 border rounded-md">
        <option>United States</option>
        <option>United Kingdom</option>
        <option>Canada</option>
        <option>Australia</option>
      </select>
    </div>
  </div>
);

const PaymentMethods = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">Payment Methods</h2>
    <div className="grid gap-4">
      <div className="p-4 border rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-8 bg-gray-200 rounded"></div>
            <div>
              <p className="font-medium">•••• •••• •••• 4242</p>
              <p className="text-sm text-gray-500">Expires 12/25</p>
            </div>
          </div>
          <button className="text-red-600 hover:text-red-700">Remove</button>
        </div>
      </div>
      <button className="flex items-center justify-center w-full p-4 border-2 border-dashed rounded-lg hover:border-blue-600 transition">
        <span className="text-blue-600">+ Add New Payment Method</span>
      </button>
    </div>
  </div>
);

const AccountSecurity = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">Account Security</h2>
    <div className="grid gap-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Change Password</h3>
        <div className="grid gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Current Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">New Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Confirm New Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <p className="font-medium">Two-Factor Authentication</p>
            <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Enable
          </button>
        </div>
      </div>
    </div>
  </div>
);

const navigationItems = [
  { id: 'profile', label: 'User Profile', icon: FiUser, component: UserProfile },
  { id: 'orders', label: 'Order History', icon: FiList, component: OrderHistory },
  { id: 'addresses', label: 'Addresses', icon: FiMapPin, component: Addresses },
  { id: 'country', label: 'Country/Region', icon: FiGlobe, component: CountryRegion },
  { id: 'payment', label: 'Payment Methods', icon: FiCreditCard, component: PaymentMethods },
  { id: 'security', label: 'Account Security', icon: FiShield, component: AccountSecurity },
];

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('profile');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const ActiveComponent = navigationItems.find(item => item.id === activeSection)?.component;

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Mobile Sidebar Toggle */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-lg md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Layout: Navbar (if any) */}
      {/* Sidebar and Main Content between Navbar and Footer */}
      <div className="flex min-h-[calc(100vh-0px)] flex-col z-10">
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside
            className={`relative z-40 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out md:translate-x-0 ${
              isSidebarOpen ? 'translate-x-0 fixed inset-y-0 left-0' : 'hidden md:block'
            }`}
          >
            <div className="h-full overflow-y-auto py-6">
              <nav className="space-y-1 px-3">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-8">
              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-lg p-6">
                  {ActiveComponent && <ActiveComponent />}
                </div>
              )}
            </div>
          </main>
        </div>
        {/* Footer placeholder */}
        {/* <footer className="w-full bg-gray-100 py-4 text-center text-sm text-gray-500">Footer content here</footer> */}
      </div>
      </div>
  );
}

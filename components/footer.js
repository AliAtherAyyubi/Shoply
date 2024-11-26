import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (

<footer className="footer bg-black py-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Footer About */}
      <div>
        <div className="footer__logo mb-4">
          <Link href="#">
            <img src="/img/footer-logo.png" alt="Footer Logo" className="w-36" />
          </Link>
        </div>
        <p className="text-[#b7b7b7] text-sm">
          The customer is at the heart of our unique business model, which includes design.
        </p>
        <Link href="#" className="block mt-4">
          <img src="/img/payment.png" alt="Payment Methods" className="w-40" />
        </Link>
      </div>

      {/* Shopping Links */}
      <div>
        <h6 className="text-white font-semibold mb-4">Shopping</h6>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="text-[#b7b7b7]">Clothing Store</Link>
          </li>
          <li>
            <Link href="#" className="text-[#b7b7b7]">Trending Shoes</Link>
          </li>
          <li>
            <Link href="#" className="text-[#b7b7b7]">Accessories</Link>
          </li>
          <li>
            <Link href="#" className="text-[#b7b7b7]">Sale</Link>
          </li>
        </ul>
      </div>

      {/* Support Links */}
      <div>
        <h6 className="text-white font-semibold mb-4">Support</h6>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="text-[#b7b7b7]">Contact Us</Link>
          </li>
          <li>
            <Link href="#" className="text-[#b7b7b7]">Payment Methods</Link>
          </li>
          <li>
            <Link href="#" className="text-[#b7b7b7]">Delivery</Link>
          </li>
          <li>
            <Link href="#" className="text-[#b7b7b7]">Return & Exchanges</Link>
          </li>
        </ul>
      </div>

      {/* Newsletter Section */}
      <div>
        <h6 className="text-white font-semibold mb-4">Newsletter</h6>
        <div className="footer__newsletter">
          <p className="text-[#b7b7b7] text-sm mb-4">
            Be the first to know about new arrivals, look books, sales & promos!
          </p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-[#b7b7b7] rounded-lg px-4 py-2 text-[#b7b7b7] focus:outline-none focus:ring-2 focus:ring-[#b7b7b7]"
            />
            <button type="submit" className="bg-[#b7b7b7] text-white p-2 rounded-lg">
              <span className="icon_mail_alt">📧</span>
            </button>
          </form>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-8 text-center">
      <div className="footer__copyright__text text-sm text-[#b7b7b7]">
        <p>
          Copyright © {new Date().getFullYear()} All rights reserved by Shoply
          
        </p>
      </div>
    </div>
  </div>
</footer>

  )
}

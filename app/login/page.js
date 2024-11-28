import Link from 'next/link';
import React from 'react'

export default function LoginPage() {
  return (
    <div className="bg-gray-50">
    <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
      <div className="max-w-md w-full">
        <a href="#">
            <img
          src="/img/logo.png" alt="logo" className='w-56 mb-8 mx-auto block' />
        </a>

        <div className="p-8 rounded-2xl bg-white shadow">
          <h2 className="text-gray-800 text-center text-2xl font-bold">Sign in</h2>
          <form className="mt-8 space-y-4">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">User name</label>
              <div className="relative flex items-center">
                <input name="username" type="text" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-pink-600" placeholder="Enter user name" />
                <i class="fa-solid fa-user w-4 h-4 absolute right-4"></i>
              </div>
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <div className="relative flex items-center">
                <input name="password" type="password" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-pink-600 bg-pink-200" placeholder="Enter password" />
                <i class="fa-solid fa-eye w-4 h-4 absolute right-4 cursor-pointer"></i>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-pink-600 focus:ring-pink-500 border-gray-300 rounded" />
                <label for="remember-me" className="ml-3 block text-sm text-gray-800">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="" className="text-pink-600 hover:underline font-semibold">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className="!mt-8">
              <button type="button" className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-pink-600 hover:bg-pink-700 focus:outline-none">
                Sign in
              </button>
            </div>
            <p className="text-gray-800 text-sm !mt-8 text-center">{"Don't have an account?"} <Link href="/signup" className="text-pink-600 hover:underline ml-1 whitespace-nowrap font-semibold">Register here</Link></p>
          </form>
        </div>
      </div>
    </div>
  </div>

  );
}

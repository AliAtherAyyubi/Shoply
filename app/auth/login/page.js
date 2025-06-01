'use client';
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { showErrorToast } from "@/app/utils/toast";
import Loader from "@/components/Loader";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [ShowPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`/api/user?email=${formData.email}&password=${formData.password}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        showErrorToast(data.error || 'Login failed');
        return;
      }

      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // Redirect to homepage
      router.push('/');
      
    } catch (err) {
      showErrorToast(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50">
      <h2 className="text-gray-800 text-center text-2xl font-bold mt-5">Sign in</h2>

      <div className="flex flex-col items-center justify-center px-4 my-5 mb-10">
        <div className="max-w-md w-full">
          {/* <a href="#">
            <img
          src="/img/logo.png" alt="logo" className='w-56 mb-8 mx-auto block' />
        </a> */}

          <div className="p-8 rounded-2xl bg-white shadow">
            
            <form className="mt-2 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Email
                </label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-pink-600"
                    placeholder="Enter your email"
                  />
                  <i className="fa-solid fa-user w-4 h-4 absolute right-4"></i>
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={ShowPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-pink-600"
                    placeholder="Enter password"
                  />
                  <i
                    className={`fa-solid ${ShowPassword ? "fa-eye-slash" : "fa-eye"} w-4 h-4 absolute right-4 cursor-pointer`}
                    onClick={() => setShowPassword((prev) => !prev)}
                  ></i>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm text-gray-800"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href=""
                    className="text-pink-600 hover:underline font-semibold"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="!mt-8">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-pink-600 hover:bg-pink-700 focus:outline-none flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <Loader />
                      <span>Signing in...</span>
                    </>
                  ) : (
                    'Sign in'
                  )}
                </button>
              </div>
              <p className="text-gray-800 text-sm !mt-8 text-center">
                {"Don't have an account?"}{" "}
                <Link
                  href="/auth/signup"
                  className="text-pink-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                >
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

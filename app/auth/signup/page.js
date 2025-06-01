"use client";
import { showErrorToast } from "@/app/utils/toast";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function SignUpPage() {
  let router = useRouter();
  const [formData, setformData] = useState({
    email: "",
    password: "",
    cpassword: "",
  });
  const [loading, setloading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    const { email, password, cpassword } = formData;
    if (password !== cpassword) {
      showErrorToast("Passwords do not match");
      setloading(false);
      return;
    }

    try {
      const res = await fetch("/api/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        showErrorToast(data.error || "Something went wrong");
      } else {
        toast.success("Account created successfully!");
        router.push("/auth/login");
      }
    } catch (error) {
      showErrorToast("An error occurred. Please try again.");
    } finally {
      setloading(false);
    }
  };
  return (
    <div class="flex flex-col font-[sans-serif] sm:h-screen ">
      <h2 class="text-gray-800 text-center text-2xl font-bold my-5">
        Create an account
      </h2>

      <div class="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        {/* <div class="text-center mb-12">
        <a href="#"><img
          src="/img/logo.png" alt="logo" class='w-56 inline-block' />
        </a>
      </div> */}

        <form onSubmit={handleSubmit}>
          <div class="space-y-6">
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Email</label>
              <input
                name="email"
                autoComplete="false"
                type="email"
                class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-pink-500"
                placeholder="Enter email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Password</label>
              <input
                name="password"
                type="password"
                class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-pink-500"
                placeholder="Enter password"
                required
                minLength={8}
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">
                Confirm Password
              </label>
              <input
                name="cpassword"
                type="password"
                class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-pink-500"
                placeholder="Enter confirm password"
                required
                value={formData.cpassword}
                onChange={handleChange}
              />
            </div>

            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 shrink-0 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
              />
              <label for="remember-me" class="text-gray-800 ml-3 block text-sm">
                I accept the{" "}
                <a
                  href="javascript:void(0);"
                  class="text-pink-600 font-semibold hover:underline ml-1"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>

          <div class="!mt-12">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white ${
                loading
                  ? "bg-pink-400 cursor-not-allowed"
                  : "bg-pink-600 hover:bg-pink-700"
              } focus:outline-none flex items-center justify-center`}
            >
              {loading ? (
                <>
                  <Loader/>
                  Signing up...
                </>
              ) : (
                "Sign up"
              )}
            </button>
          </div>
          <p class="text-gray-800 text-sm mt-6 text-center">
            Already have an account?{" "}
            <a
              href="/auth/login"
              class="text-pink-600 font-semibold hover:underline ml-1"
            >
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

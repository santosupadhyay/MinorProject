import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

export default function Register() {
  return (
    <div>
      <div class="font-[sans-serif] text-[#333]">
        <div class="min-h-screen flex fle-col items-center justify-center p-6">
          <div class="grid md:grid-cols-2 items-center gap-6 max-w-7xl w-full">
            <form class="md:max-w-md w-full">
              <h3 class="text-2xl font-extrabold mb-10">Registration</h3>
              <div class="space-y-6">
                <div>
                  <label class="text-sm mb-2 block">Name</label>
                  <input
                    name="name"
                    type="text"
                    class="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="Enter name"
                  />
                </div>
                <div>
                  <label class="text-sm mb-2 block">Email</label>
                  <input
                    name="email"
                    type="text"
                    class="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <label class="text-sm mb-2 block">Password</label>
                  <input
                    name="password"
                    type="password"
                    class="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="Enter password"
                  />
                </div>
                <div class="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    class="h-4 w-4 shrink-0 border-gray-300 rounded"
                  />
                  <label for="remember-me" class="ml-3 block text-sm">
                    I accept the{" "}
                    <a
                      href="javascript:void(0);"
                      class="text-blue-500 font-semibold hover:underline ml-1"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <div class="mt-10">
                <button
                  type="button"
                  class="py-4 px-6 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
                >
                  Create an account
                </button>
              </div>
              <p class="text-sm mt-6">
                Already have an account?{" "}
                <Link 
                  href="javascript:void(0);"
                  class="text-blue-500 font-semibold hover:underline ml-1"
                >
                  Login here
                </Link>
              </p>
            </form>
            <div class="h-full max-md:mt-10">
              <img
                src="https://readymadeui.com/login-image.webp"
                class="w-full h-full object-cover"
                alt="Dining Experience"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

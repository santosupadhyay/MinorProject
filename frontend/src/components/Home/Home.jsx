import React from "react";
import Schools from "../Schools/Schools";


export default function Home() {
  return (
    // Compare and find best school part starts here
    <div>
      <div class="bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 px-6 sm:py-20 py-10 font-[sans-serif]">
        <div class="max-w-screen-xl mx-auto text-left text-white pl-8">
          <h1 class="text-5xl max-sm:text-3xl font-extrabold leading-tight mb-4">
            Let's <br /> Compare and Connect <br /> The Best For You
          </h1>

          <div className="flex justify-start">
            <button
              type="button"
              class="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-2 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
            >
              Schools
            </button>

            <div class="bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden max-w-md font-[sans-serif]">
              <input
                type="email"
                placeholder="Search Schools..."
                class="w-full outline-none bg-white pl-4 text-sm"
              />
              <button
                type="button"
                class="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <Schools />



    
    </div>
  );
}

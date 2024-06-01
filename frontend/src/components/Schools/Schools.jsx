import React from 'react'
import schoolLogo from '../../../public/images/schoolsImage.jpg'

export default function Schools() {
  return (
    <div>
      {/* schools list starts here */}
      <div class="font-[sans-serif]">
        <div class="p-4 mx-auto lg:max-w-5xl sm:max-w-2xl max-w-md">
          <h2 class="text-4xl font-extrabold text-gray-800 mb-12">
            Schools
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
              <div class="w-full overflow-hidden">
                <img
                  src={schoolLogo}
                  alt="Product 1"
                  class="h-full w-full object-cover object-top hover:scale-110 transition-all"
                />
              </div>
              <div class="p-6">
                <div class="mb-6 flex items-center flex-wrap gap-4">
                  <h3 class="text-lg font-bold text-gray-800">Lexicon Luxe</h3>
                  <p class="text-2xl text-blue-600 font-bold">$10</p>
                </div>
                <button
                  type="button"
                  class="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>

            <div class="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
              <div class="w-full overflow-hidden">
                <img
                  src={schoolLogo}
                  alt="Product 2"
                  class="h-full w-full object-cover object-top hover:scale-110 transition-all"
                />
              </div>
              <div class="p-6">
                <div class="mb-6 flex items-center flex-wrap gap-4">
                  <h3 class="text-lg font-bold text-gray-800">
                    Adjective Attire
                  </h3>
                  <p class="text-2xl text-blue-600 font-bold">$12</p>
                </div>
                <button
                  type="button"
                  class="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>

            <div class="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
              <div class="w-full overflow-hidden">
                <img
                  src={schoolLogo}
                  alt="Product 3"
                  class="h-full w-full object-cover object-top hover:scale-110 transition-all"
                />
              </div>
              <div class="p-6">
                <div class="mb-6 flex items-center flex-wrap gap-4">
                  <h3 class="text-lg font-bold text-gray-800">
                    ThreadCraft Vibes
                  </h3>
                  <p class="text-2xl text-blue-600 font-bold">$14</p>
                </div>
                <button
                  type="button"
                  class="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>

            <div class="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
              <div class="w-full overflow-hidden">
                <img
                  src={schoolLogo}
                  alt="Product 3"
                  class="h-full w-full object-cover object-top hover:scale-110 transition-all"
                />
              </div>
              <div class="p-6">
                <div class="mb-6 flex items-center flex-wrap gap-4">
                  <h3 class="text-lg font-bold text-gray-800">
                    Verbal Vogue Tees
                  </h3>
                  <p class="text-2xl text-blue-600 font-bold">$12</p>
                </div>
                <button
                  type="button"
                  class="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>

            <div class="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
              <div class="w-full overflow-hidden">
                <img
                  src={schoolLogo}
                  alt="Product 3"
                  class="h-full w-full object-cover object-top hover:scale-110 transition-all"
                />
              </div>
              <div class="p-6">
                <div class="mb-6 flex items-center flex-wrap gap-4">
                  <h3 class="text-lg font-bold text-gray-800">Jargon Jungle</h3>
                  <p class="text-2xl text-blue-600 font-bold">$15</p>
                </div>
                <button
                  type="button"
                  class="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>

            <div class="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
              <div class="w-full overflow-hidden">
                <img
                  src={schoolLogo}
                  alt="Product 3"
                  class="h-full w-full object-cover object-top hover:scale-110 transition-all"
                />
              </div>
              <div class="p-6">
                <div class="mb-6 flex items-center flex-wrap gap-4">
                  <h3 class="text-lg font-bold text-gray-800">
                    Syllable Streetwear
                  </h3>
                  <p class="text-2xl text-blue-600 font-bold">$14</p>
                </div>
                <button
                  type="button"
                  class="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

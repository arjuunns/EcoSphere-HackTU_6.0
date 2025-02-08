import React from 'react'

function Ai_Predictor() {
  return (
    <section id="aiPredictor" class="bg-neutral-900 py-20 text-white">
      <div class="mx-auto max-w-7xl px-4">
        <div class="grid items-center gap-12 md:grid-cols-2">
          <div class="animate__animated animate__fadeInLeft">
            <h2 class="mb-6 text-4xl font-bold text-[#81C784]">
              AI-Powered Recycling Predictor
            </h2>
            <p class="mb-8 text-lg text-gray-300">
              Instantly identify recyclable items and get their market value
              through our advanced AI image recognition system.
            </p>

            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="mt-1 rounded-lg bg-[#2E7D32] p-3">
                  <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="mb-2 text-xl font-semibold">
                    Snap &amp; Identify
                  </h3>
                  <p class="text-gray-400">
                    Take a photo of any item and our AI will instantly identify
                    if it's recyclable
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="mt-1 rounded-lg bg-[#2E7D32] p-3">
                  <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="mb-2 text-xl font-semibold">Price Estimation</h3>
                  <p class="text-gray-400">
                    Get instant market value estimates for your recyclable items
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="mt-1 rounded-lg bg-[#2E7D32] p-3">
                  <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="mb-2 text-xl font-semibold">
                    Disposal Guidelines
                  </h3>
                  <p class="text-gray-400">
                    Receive proper recycling instructions and nearest collection
                    points
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="animate__animated animate__fadeInRight">
            <div class="rounded-xl bg-neutral-800 p-8">
              <div class="rounded-lg border-2 border-dashed border-[#81C784] p-8 text-center">
                <div class="mb-6">
                  <svg class="mx-auto h-16 w-16 text-[#81C784]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h4 class="mb-2 text-xl font-semibold">Try It Now</h4>
                <p class="mb-6 text-gray-400">
                  Upload an image or take a photo to get started
                </p>
                <button class="mb-4 w-full rounded-lg bg-[#2E7D32] px-6 py-3 text-white transition-colors hover:bg-[#4CAF50]">
                  Upload Image
                </button>
                <button class="w-full rounded-lg border border-[#81C784] px-6 py-3 text-[#81C784] transition-colors hover:bg-[#81C784] hover:text-white">
                  Take Photo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ai_Predictor
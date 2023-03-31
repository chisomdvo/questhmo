<template>
  <main class="ourhome paddingbox">
    <div
      class="relative paddingbox px-6 lg:px-8 bg-[url('../assets/homepage2.jpg')] overlay-color bg-cover bg-center"
    >
      <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        <div>
          <div>
            <h1
              class="text-3xl font-bold text-blue-700 tracking-tight text-center sm:text-6xl"
            >
              Elevating Whole Health and Advancing Health Beyond Healthcare
            </h1>
            <p class="mt-6 text-lg leading-8 text-white text-center">
              We serve people across their entire health journey and address
              their full range of needs with an integrated whole-health
              approach.
            </p>
            <div class="mt-8 flex ourgap items-center justify-center">
              <router-link
                to="/ourplans"
                class="inline-block rounded-lg bg-blue-700 px-2 py-1.5 cursor-pointer text-sm sm:text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-blue-800 hover:ring-indigo-700"
              >
                SEE OUR HEALTH PLANS
              </router-link>
              <a
                @click="scrollMeTo('.ourcontact')"
                class="inline-block rounded-lg px-2 py-1.5 bg-red-700 text-sm sm:text-base cursor-pointer font-semibold leading-7 text-white ring-1 ring-gray-900/10 hover:bg-red-800"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div
            class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <svg
              class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fill-opacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9089FC"></stop>
                  <stop offset="1" stop-color="#FF80B5"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    scrollMeTo(data) {
      var element = document.querySelector(data);
      var top = element.offsetTop;
      window.scrollTo({ top: top, left: 0, behavior: "smooth" });
    },
  },
};
</script>

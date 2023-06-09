<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h1
        class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
      >
        2 Items in Cart
      </h1>
      <form
        class="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16"
      >
        <section aria-labelledby="cart-heading" class="lg:col-span-7">
          <h2 id="cart-heading" class="sr-only">Items in your cart</h2>

          <ul
            role="list"
            class="border-t border-b border-gray-200 divide-y divide-gray-200"
          >
            <li
              v-for="(product, productIdx) in products"
              :key="product.id"
              class="flex py-6 sm:py-10"
            >
              <div class="flex-shrink-0">
                <img
                  :src="product.imageSrc"
                  :alt="product.imageAlt"
                  class="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                />
              </div>

              <div class="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                <div
                  class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0"
                >
                  <div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">
                        <a
                          :href="product.href"
                          class="font-medium text-gray-700 hover:text-gray-800"
                        >
                          {{ product.name }}
                        </a>
                      </h3>
                    </div>

                    <p class="mt-1 text-sm font-medium text-gray-900">
                      {{ product.price }}
                    </p>
                  </div>

                  <div class="mt-4 sm:mt-0 sm:pr-9">
                    <label :for="`quantity-${productIdx}`" class="sr-only"
                      >Quantity, {{ product.name }}</label
                    >
                    <select
                      :id="`quantity-${productIdx}`"
                      :name="`quantity-${productIdx}`"
                      class="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </select>

                    <div class="absolute top-0 right-0">
                      <button
                        type="button"
                        class="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
                      >
                        <span class="sr-only">Remove</span>
                        <XIcon class="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>

                <p class="mt-4 flex text-sm text-gray-700 space-x-2">
                  <CheckIcon
                    v-if="product.inStock"
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                  <ClockIcon
                    v-else
                    class="flex-shrink-0 h-5 w-5 text-gray-300"
                    aria-hidden="true"
                  />
                  <span>{{
                    product.inStock
                      ? "AVAILABLE"
                      : `Ships in ${product.leadTime}`
                  }}</span>
                </p>
              </div>
            </li>
          </ul>
        </section>

        <!-- Order summary -->
        <section
          aria-labelledby="summary-heading"
          class="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
        >
          <h2 id="summary-heading" class="text-lg font-medium text-gray-900">
            Order summary
          </h2>

          <dl class="mt-6 space-y-4">
            <div class="flex items-center justify-between">
              <dt class="text-sm text-gray-600">Subtotal</dt>
              <dd class="text-sm font-medium text-gray-900">₦380,000</dd>
            </div>
            <div
              class="border-t border-gray-200 pt-4 flex items-center justify-between"
            >
              <dt class="flex items-center text-sm text-gray-600">
                <span>Shipping estimate</span>
                <a
                  href="#"
                  class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                >
                  <span class="sr-only"
                    >Learn more about how shipping is calculated</span
                  >
                  <QuestionMarkCircleIcon class="h-5 w-5" aria-hidden="true" />
                </a>
              </dt>
              <dd class="text-sm font-medium text-gray-900">₦5,000</dd>
            </div>
            <div
              class="border-t border-gray-200 pt-4 flex items-center justify-between"
            >
              <dt class="flex text-sm text-gray-600">
                <span>Tax estimate</span>
                <a
                  href="#"
                  class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                >
                  <span class="sr-only"
                    >Learn more about how tax is calculated</span
                  >
                  <QuestionMarkCircleIcon class="h-5 w-5" aria-hidden="true" />
                </a>
              </dt>
              <dd class="text-sm font-medium text-gray-900">₦8,000</dd>
            </div>
            <div
              class="border-t border-gray-200 pt-4 flex items-center justify-between"
            >
              <dt class="text-base font-medium text-gray-900">Order total</dt>
              <dd class="text-base font-medium text-gray-900">₦393,000</dd>
            </div>
          </dl>

          <div class="mt-6">
            <router-link
              to="/payment"
              type="submit"
              class="w-full bg-indigo-600 border text-center border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
            >
              Checkout
            </router-link>
          </div>
        </section>
      </form>
    </div>
  </div>
</template>

<script>
import person from "../assets/person.jpg";
import family from "../assets/family.jpg";
import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/vue/solid";

const products = [
  {
    id: 1,
    name: "INDIVIDUAL PLAN",
    href: "#",
    price: "₦150,000",
    color: "Sienna",
    inStock: true,
    size: "Large",
    imageSrc: person,
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  {
    id: 2,
    name: "FAMILY PLAN",
    href: "#",
    price: "₦230,000",
    color: "Black",
    inStock: true,
    leadTime: "3–4 weeks",
    size: "Large",
    imageSrc: family,
    imageAlt: "Front of men's Basic Tee in black.",
  },
];

export default {
  components: {
    CheckIcon,
    ClockIcon,
    QuestionMarkCircleIcon,
    XIcon,
  },
  setup() {
    return {
      products,
    };
  },
};
</script>

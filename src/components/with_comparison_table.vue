<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          orange: colors.orange,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <div class="bg-indigo-900">
      <!-- Header -->
      <NavBar></NavBar>

      <!-- Header section with select menu -->
      <div
        class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl"
      >
        <div
          class="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center"
        >
          <div class="max-w-xl">
            <h2
              class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"
            >
              Health Plans
            </h2>
            <p class="mt-5 text-xl text-indigo-300">
              Health insurance plans for you, your family, and your employees
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Comparison table -->
    <div
      class="max-w-2xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <!-- xs to lg -->
      <div class="space-y-24 lg:hidden">
        <section v-for="tier in tiers" :key="tier.name">
          <div class="px-4 mb-8">
            <h2 class="text-lg leading-6 font-medium text-gray-900">
              {{ tier.name }}
            </h2>
            <p class="mt-4">
              <span class="text-4xl font-extrabold text-gray-900"
                >₦{{ tier.priceMonthly }}</span
              >
              <span class="text-base font-medium text-gray-500">/Annually</span>
            </p>
            <p class="mt-4 text-sm text-gray-500">{{ tier.description }}</p>
            <router-link
              to="/checkout"
              class="mt-6 block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
              >Buy {{ tier.name }}</router-link
            >
          </div>

          <table v-for="section in sections" :key="section.name" class="w-full">
            <caption
              class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left"
            >
              {{
                section.name
              }}
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">Feature</th>
                <th class="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr
                v-for="feature in section.features"
                :key="feature.name"
                class="border-t border-gray-200"
              >
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  {{ feature.name }}
                </th>
                <td class="py-5 pr-4">
                  <span
                    v-if="typeof feature.tiers[tier.name] === 'string'"
                    class="block text-sm text-gray-700 text-right"
                    >{{ feature.tiers[tier.name] }}</span
                  >
                  <template v-else>
                    <CheckIcon
                      v-if="feature.tiers[tier.name] === true"
                      class="ml-auto h-5 w-5 text-green-500"
                      aria-hidden="true"
                    />
                    <MinusIcon
                      v-else
                      class="ml-auto h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span class="sr-only">{{
                      feature.tiers[tier.name] === true ? "Yes" : "No"
                    }}</span>
                  </template>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="border-t border-gray-200 px-4 pt-5">
            <router-link
              to="/checkout"
              class="block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
              >Buy {{ tier.name }}</router-link
            >
          </div>
        </section>
      </div>

      <!-- lg+ -->
      <div class="hidden lg:block">
        <table class="w-full h-px table-fixed">
          <caption class="sr-only">
            Pricing plan comparison
          </caption>
          <thead>
            <tr>
              <th
                class="pb-4 pl-6 pr-6 text-sm font-medium text-gray-900 text-left"
                scope="col"
              >
                <span class="sr-only">Feature by</span>
                <span>Plans</span>
              </th>
              <th
                v-for="tier in tiers"
                :key="tier.name"
                class="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                scope="col"
              >
                {{ tier.name }}
              </th>
            </tr>
          </thead>
          <tbody class="border-t border-gray-200 divide-y divide-gray-200">
            <tr>
              <th
                class="py-8 pl-6 pr-6 align-top text-sm font-medium text-gray-900 text-left"
                scope="row"
              >
                Pricing
              </th>
              <td
                v-for="tier in tiers"
                :key="tier.name"
                class="h-full py-8 px-6 align-top"
              >
                <div class="h-full flex flex-col justify-between">
                  <div>
                    <p>
                      <span class="text-4xl font-extrabold text-gray-900"
                        >₦{{ tier.priceMonthly }}</span
                      >
                      <span class="text-base font-medium text-gray-500"
                        >/Annually</span
                      >
                    </p>
                    <p class="mt-4 text-sm text-gray-500">
                      {{ tier.description }}
                    </p>
                  </div>
                  <router-link
                    to="/checkout"
                    class="mt-6 block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                    >Buy {{ tier.name }}</router-link
                  >
                </div>
              </td>
            </tr>
            <template v-for="section in sections" :key="section.name">
              <tr>
                <th
                  class="py-3 pl-6 bg-gray-50 text-sm font-medium text-gray-900 text-left"
                  colspan="4"
                  scope="colgroup"
                >
                  {{ section.name }}
                </th>
              </tr>
              <tr v-for="feature in section.features" :key="feature.name">
                <th
                  class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  {{ feature.name }}
                </th>
                <td v-for="tier in tiers" :key="tier.name" class="py-5 px-6">
                  <span
                    v-if="typeof feature.tiers[tier.name] === 'string'"
                    class="block text-sm text-gray-700"
                    >{{ feature.tiers[tier.name] }}</span
                  >
                  <template v-else>
                    <CheckIcon
                      v-if="feature.tiers[tier.name] === true"
                      class="h-5 w-5 text-green-500"
                      aria-hidden="true"
                    />
                    <MinusIcon
                      v-else
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span class="sr-only"
                      >{{
                        feature.tiers[tier.name] === true
                          ? "Included"
                          : "Not included"
                      }}
                      in {{ tier.name }}</span
                    >
                  </template>
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr class="border-t border-gray-200">
              <th class="sr-only" scope="row">Choose your plan</th>
              <td v-for="tier in tiers" :key="tier.name" class="pt-5 px-6">
                <router-link
                  to="/checkout"
                  href="#"
                  class="block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                  >Buy {{ tier.name }}</router-link
                >
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>

    <!-- Logo cloud -->

    <Clients></Clients>

    <div class="bg-gray-50">
      <!-- FAQ -->
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-gray-900 text-center">
          Frequently asked questions
        </h2>
        <div class="mt-12">
          <dl
            class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3"
          >
            <div v-for="faq in faqs" :key="faq.id" class="space-y-2">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                {{ faq.question }}
              </dt>
              <dd class="text-base text-gray-500">
                {{ faq.answer }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <!-- Feature section with brand panel -->
    <div class="relative">
      <div class="absolute inset-0 flex flex-col" aria-hidden="true">
        <div class="flex-1 bg-gray-50" />
        <div class="flex-1" />
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
        >
          <div
            class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
          >
            <div class="lg:self-center">
              <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                <span class="block">Ready to receive the best healthcare?</span>
                <span class="block text-red-900"></span>
              </h2>
              <p class="mt-4 text-lg leading-6 text-orange-50">
                Buy a Healthcare plan today.Let’s help you decide on the best
                for you and your people.
              </p>
              <a
                href="#"
                class="mt-8 bg-orange-100 border border-transparent rounded-md shadow py-3 px-6 inline-flex items-center text-base font-medium text-red-600 hover:text-red-500"
                >BUY PLAN</a
              >
            </div>
          </div>
          <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->

    <Footer></Footer>
  </div>
</template>

<script>
import { defineComponent, h } from "vue";
import NavBar from "./TheNavbarr.vue";
import Clients from "./OurClients";

import Footer from "./TheFooter.vue";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
} from "@heroicons/vue/outline";
import { CheckIcon, MinusIcon } from "@heroicons/vue/solid";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];
const tiers = [
  {
    name: "Basic",
    href: "#",
    priceMonthly: "150,000",
    description: "The Basic Plan is very affordable.",
  },
  {
    name: "Essential",
    href: "#",
    priceMonthly: "230,000",
    description: "The Essential Plan provides quality services.",
  },
  {
    name: "Premium",
    href: "#",
    priceMonthly: "350,000",
    description: "The premium plan provides all the healthcare services.",
  },
];
const sections = [
  {
    name: "Features",
    features: [
      {
        name: "Specialist Consultation",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      {
        name: "General Consultation",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      { name: "Lab Investigations", tiers: { Essential: true, Premium: true } },
      {
        name: "Admissions in Hospital",
        tiers: {
          Basic: "Up to 10 days",
          Essential: "Up to 20 days",
          Premium: "Up to 50 days",
        },
      },
    ],
  },
  {
    name: "Reporting",
    features: [
      {
        name: "Emergency Care",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      {
        name: "Emergency Ambulance Service.",
        tiers: { Essential: true, Premium: true },
      },
      { name: "Minor Surgeries.", tiers: { Premium: true } },
      { name: "Dental Car.", tiers: { Premium: true } },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "Mental Health Services",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      {
        name: "Annual Wellness Check (After 9 months).",
        tiers: { Essential: true, Premium: true },
      },
      {
        name: "Travel Immunization.",
        tiers: { Essential: true, Premium: true },
      },
      { name: "Plain & Contrast X-Rays.", tiers: { Premium: true } },
    ],
  },
];
const faqs = [
  {
    id: 1,
    question: "What is Health Insurance?",
    answer:
      "Health Insurance can be defined as a system of advance financing of health expenditure through contributions, premiums or taxes paid into a common pool to pay for all or part of health services specified by a policy or plan.",
  },
  {
    id: 2,
    question: "What is an HMO?",
    answer:
      "Health Maintenance Organization is a private or public incorporated company registered by the NHIS solely to manage the provision of health care services through Health Care Providers accredited by the Scheme.",
  },
  {
    id: 3,
    question: "Do I need to call you first before I go to the hospital?",
    answer:
      "No, you do not. Walk confidently into your chosen hospital, show your ID card and you will be attended to. If you ever face any issues in the hospital, reach out to us immediately.",
  },
  {
    id: 4,
    question: "Can I change my hospital at any time I desire?",
    answer:
      "Yes. you can freely access care in any hospital you are eligible for based on your insurance plan. This means you can roam within the limits of the hospitals covered on your chosen plan(s). ",
  },
  {
    id: 5,
    question: "What happens if I don't renew my plan?",
    answer:
      "Ideally, when you don't renew your plan after 7 days of expiry you lose all graduated benefits and will need to start again from month 1 when you renew the plan. The 7 days grace period starts from the date your plan expires. If you renew your plan within this 7-day grace period, you get to retain your benefits.",
  },
  {
    id: 6,
    question: "Am I covered for medical emergencies?",
    answer:
      "Yes, you are covered for emergency stabilization on all plans. A medical emergency is an accidental injury or the sudden and unexpected onset of a condition requiring immediate medical or surgical intervention.",
  },
];
const footerNavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
    {
      name: "Instagram",
      href: "#",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
    {
      name: "Twitter",
      href: "#",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
            }),
          ]),
      }),
    },
    {
      name: "GitHub",
      href: "#",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
    {
      name: "Dribbble",
      href: "#",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
  ],
};

export default {
  components: {
    CheckIcon,
    MinusIcon,
    NavBar,
    Clients,
    Footer,
  },
  setup() {
    return {
      solutions,
      callsToAction,
      resources,
      recentPosts,
      tiers,
      sections,
      faqs,
      footerNavigation,
    };
  },
};
</script>

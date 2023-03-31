<template>
  <div class="bg-white">
    <div class="bg-white">
      <!-- Header -->
      <Popover class="relative sticky z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            class="flex justify-between items-center border-b border-indigo-400 border-opacity-25 py-6 md:justify-start md:space-x-10"
          >
            <div class="flex justify-start lg:w-0 lg:flex-1">
              <router-link
                to="/"
                class="flex items-center justify-center text-center"
              >
                <span class="sr-only">Workflow</span>
                <img
                  class="h-8 w-auto sm:h-6"
                  src="../assets/quest.jpeg"
                  alt=""
                />

                <div
                  class="relative flex items-start items-center justify-center text-center"
                >
                  <div class="ml-2 text-sm">
                    <div
                      class="text-xl mb-0.5 font-semibold italic lineheight text-[#256098] cursor-pointer items-center justify-center text-center"
                    >
                      HMO
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="-mr-2 -my-2 md:hidden">
              <PopoverButton
                class="bg-indigo-900 rounded-md p-2 inline-flex items-center justify-center text-indigo-300 hover:text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span class="sr-only">Open menu</span>
                <MenuIcon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
            <PopoverGroup as="nav" class="hidden md:flex space-x-10">
              <Popover class="relative" v-slot="{ open }">
                <PopoverButton
                  :class="[
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                  ]"
                >
                  <span>HEALTH PLANS</span>
                  <ChevronDownIcon
                    :class="[
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500 cursor-pointer',
                    ]"
                    aria-hidden="true"
                  />
                </PopoverButton>

                <transition
                  enter-active-class="transition ease-out duration-200"
                  enter-from-class="opacity-0 translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition ease-in duration-150"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-1"
                >
                  <PopoverPanel
                    class="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md px-2 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                  >
                    <div
                      class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                    >
                      <div
                        class="relative bg-white py-6 px-5 grid gap-6 sm:gap-8 sm:p-8"
                      >
                        <a
                          v-for="item in solutions"
                          @click="scrollMeTo('healthplan')"
                          :key="item.name"
                          class="-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50"
                        >
                          <component
                            :is="item.icon"
                            class="flex-shrink-0 h-6 w-6 text-indigo-600"
                            aria-hidden="true"
                          />
                          <div class="ml-4">
                            <p class="text-base font-medium text-gray-900">
                              {{ item.name }}
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </PopoverPanel>
                </transition>
              </Popover>

              <a
                class="text-base cursor-pointer font-medium text-gray-500 hover:text-gray-900"
              >
                ABOUT US
              </a>

              <Popover class="relative" v-slot="{ open }">
                <PopoverButton
                  :class="[
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group bg-white cursor-pointer rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                  ]"
                >
                  <span>SUPPORT</span>
                  <ChevronDownIcon
                    :class="[
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500',
                    ]"
                    aria-hidden="true"
                  />
                </PopoverButton>

                <transition
                  enter-active-class="transition ease-out duration-200"
                  enter-from-class="opacity-0 translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition ease-in duration-150"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-1"
                >
                  <PopoverPanel
                    class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                  >
                    <div
                      class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                    >
                      <div
                        class="relative bg-white py-6 px-5 grid gap-6 sm:gap-8 sm:p-8"
                      >
                        <a
                          v-for="item in resources"
                          :key="item.name"
                          :href="item.href"
                          class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <component
                            :is="item.icon"
                            class="flex-shrink-0 h-6 w-6 text-indigo-600"
                            aria-hidden="true"
                          />
                          <div class="ml-4">
                            <p class="text-base font-medium text-gray-900">
                              {{ item.name }}
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </PopoverPanel>
                </transition>
              </Popover>
              <a
                class="text-base cursor-pointer font-medium text-gray-500 hover:text-gray-900"
              >
                MORE
              </a>
            </PopoverGroup>
            <div
              class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0"
            >
              <router-link
                to="/login"
                class="whitespace-nowrap cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900"
              >
                LOGIN
              </router-link>
              <router-link
                to="/"
                class="ml-8 whitespace-nowrap cursor-pointer inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                GET STARTED
              </router-link>
            </div>
          </div>
        </div>

        <transition
          enter-active-class="duration-200 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="duration-100 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div
              class="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50"
            >
              <div class="pt-5 pb-6 px-5 space-y-6">
                <div class="flex items-center justify-between">
                  <div>
                    <img
                      class="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-orange-400-to-pink-500-gradient.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton
                      class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span class="sr-only">Close menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="mt-6">
                  <nav class="grid gap-y-8">
                    <a
                      v-for="item in solutions"
                      :key="item.name"
                      :href="item.href"
                      class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <component
                        :is="item.icon"
                        class="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span class="ml-3 text-base font-medium text-gray-900">
                        {{ item.name }}
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
              <div class="py-6 px-5 space-y-6">
                <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="#"
                    class="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </a>

                  <a
                    href="#"
                    class="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Docs
                  </a>

                  <a
                    href="#"
                    class="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Blog
                  </a>

                  <a
                    href="#"
                    class="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Contact Sales
                  </a>
                  <a
                    v-for="item in resources"
                    :key="item.name"
                    :href="item.href"
                    class="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {{ item.name }}
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p
                    class="mt-6 text-center text-base font-medium text-gray-500"
                  >
                    Existing customer?
                    <a href="#" class="text-indigo-600 hover:text-indigo-500">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
    </div>
  </div>
</template>

<script>
import { defineComponent, h } from "vue";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { CheckIcon, ChevronDownIcon, MinusIcon } from "@heroicons/vue/solid";

const solutions = [
  {
    name: "INDIVIDUAL PLAN",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "FAMILY PLAN",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "BUSINESS PLAN",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "FAQ",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Call us:+2347012312312",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "WhatsApp:+2347012312312",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Email:info@quest.com",
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
    priceMonthly: 9,
    description: "Quis suspendisse ut fermentum neque vivamus non tellus.",
  },
  {
    name: "Essential",
    href: "#",
    priceMonthly: 29,
    description: "Quis eleifend a tincidunt pellentesque. A tempor in sed.",
  },
  {
    name: "Premium",
    href: "#",
    priceMonthly: 59,
    description:
      "Orci volutpat ut sed sed neque, dui eget. Quis tristique non.",
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
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    CheckIcon,
    ChevronDownIcon,
    MenuIcon,
    MinusIcon,
    XIcon,
  },

  methods: {
    scrollMeTo(data) {
      if (data == "healthplan") {
        return this.$router.push("/ourplans");
      }
      var element = document.querySelector(data);
      var top = element.offsetTop;
      window.scrollTo({ top: top, left: 0, behavior: "smooth" });
    },
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

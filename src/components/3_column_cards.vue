<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    class="getstarted relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
  >
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2
          class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
        >
          Health plans tailored to suit everyone
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          We have quality health plans available.
        </p>
      </div>
      <div
        class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
      >
        <div
          v-for="post in posts"
          :key="post.title"
          class="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <a :href="post.href" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ post.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.description }}
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center justify-center">
              <router-link
                to="/ourplans"
                class="inline-block rounded-lg bg-blue-700 px-2 py-1.5 cursor-pointer text-sm sm:text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-blue-800 hover:ring-indigo-700"
              >
                SEE OUR HEALTH PLANS
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import person from "../assets/person.jpg";
import business from "../assets/business.jpg";
import family from "../assets/family.jpg";
const posts = [
  {
    title: "INDIVIDUAL PLAN",
    href: "#",
    category: { name: "Article", href: "#" },
    description: " Peace of mind that Papa and Mama’s health are taken care of",

    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl: person,
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "FAMILY PLAN",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "Get up to N1.8M in medical coverage with our monthly health insurance plans for your family",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl: family,
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "BUSINESS PLAN",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      " Health insurance that won’t disappoint you or your employees",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: business,
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default {
  setup() {
    return {
      posts,
    };
  },
};
</script>

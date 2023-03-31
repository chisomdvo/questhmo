<template>
  <footer class="bg-black ourcontact pt-6" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div
      class="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8"
    >
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <div>
            <router-link to="/" class="flex items-center">
              <span class="sr-only text-bluecolor">oillead</span>
              <img class="h-8 w-auto sm:h-10" src="../assets/logo.png" alt="" />

              <div
                class="relative flex items-start items-center justify-center text-center"
              >
                <div class="ml-2 text-sm">
                  <div
                    class="text-base font-bold lineheight text-bluecolor2 cursor-pointer items-center justify-center text-center"
                  >
                    OIL<span class="text-red-700">L</span>EAD
                  </div>
                  <div
                    class="text-base font-bold lineheight text-red-700 cursor-pointer items-center justify-center text-center"
                  >
                    SERVICES
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <p class="text-white font-bold text-lg">
            <span class="text-red-700 font-bold"> Address: </span>
            <a>186 Awolowo Road, Ikoyi, Lagos.</a>
          </p>
          <p class="text-white font-bold text-lg">
            <span class="text-red-700 font-bold"> Email: </span>
            <a href="mailto:oilleadserv@gmail.com"
              >info@oilleadservices.com.ng</a
            >
          </p>
          <p class="text-white font-bold text-lg">
            <span class="text-red-700 font-bold"> Phone: </span>
            <a href="tel:+2347086957713">+2347086957713</a>
          </p>
        </div>
        <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3
                class="text-sm font-semibold text-white tracking-wider uppercase"
              >
                OUR SERVICES
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in footerNavigation.solutions" :key="item.name">
                  <a
                    @click="scrollMeTo(item.link)"
                    class="text-base text-[#a5a5a5] cursor-pointer hover:text-white"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3
                class="text-sm font-semibold text-white tracking-wider uppercase"
              >
                OUR SERVICES
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in footerNavigation.support" :key="item.name">
                  <a
                    @click="scrollMeTo(item.link)"
                    class="text-base text-[#a5a5a5] cursor-pointer hover:text-white"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3
                class="text-sm font-semibold text-white tracking-wider uppercase"
              >
                OUR SERVICES
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in footerNavigation.company" :key="item.name">
                  <a
                    @click="scrollMeTo(item.link)"
                    class="text-base text-[#a5a5a5] cursor-pointer hover:text-white"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3
                class="text-sm font-semibold text-white tracking-wider uppercase"
              >
                OUR PROJECTS
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in footerNavigation.legal" :key="item.name">
                  <a
                    @click="scrollMeTo(item.link)"
                    class="text-base text-[#a5a5a5] cursor-pointer hover:text-white"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-200 py-8">
        <p class="text-base text-[#a5a5a5] text-center">
          Copyrights © 2023 All Rights Reserved by OILLEAD.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
const footerNavigation = {
  solutions: [
    { name: "Design and Engineering", link: ".designandengineering" },
    { name: "Power Generation and Green Energy", link: ".powergenerations" },
    { name: "Firefighting and Protection System", link: ".fireandprotection" },
    { name: "Civil and Structural Works", link: ".structuralworks" },
  ],
  support: [
    { name: "Detailed Engineering", link: ".detailedengineering" },
    { name: "Project Management", link: ".projectmanagement" },
    { name: "Electrical Works", link: ".electricalworks" },
    {
      name: "Fabrication, Construction and Installation",
      link: ".constructiondetails",
    },
  ],
  company: [
    {
      name: "Pipeline Integrity Managment Services",
      link: ".pipelinemanagement",
    },
    { name: "Feed/Basic Engineering", link: ".basicengineering" },
  ],
  legal: [
    {
      name: "3Okm pipiline construction for BUA",
      link: ".ourprojects",
    },
    {
      name: "Hot tapping procedure using split tee installation method",
      link: ".ourprojects",
    },
    {
      name: "Installation for BUA Sugar Refinery PH project",
      link: ".ourprojects",
    },
    {
      name: "EPC for Gas Supply to 6MW gas generator for NBC Abuja",
      link: ".ourprojects",
    },
  ],
};

export default {
  components: {},
  methods: {
    scrollMeTo(data) {
      console.log(data);
      var element = document.querySelector(data);
      console.log(element);
      var top = element.offsetTop;
      console.log(top);
      window.scrollTo({ top: top, left: 0, behavior: "smooth" });
    },
  },
  setup() {
    return {
      footerNavigation,
    };
  },
};
</script>

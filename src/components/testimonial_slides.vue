<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <section class="aboutus py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
    <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">
      What customers say about Quest HMO
    </h2>
    <div class="lg:block hidden">
      <div class="relative max-w-7xl mx-auto mt-6 px-4 sm:px-6 lg:px-8">
        <div class="relative">
          <swiper
            :pagination="{
              clickable: true,
            }"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }"
            :loop="true"
            :navigation="true"
            :breakpoints="{
              '640': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '768': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '1024': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide>
              <img
                class="mx-auto h-8"
                src="../assets/daystar.png"
                alt="Workcation"
              />

              <blockquote class="mt-4">
                <div
                  class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900"
                >
                  <p>
                    &ldquo;Services and flexibility of the portal is excellent.
                    Payment prompt and usage of the portal is very easy.&rdquo;
                  </p>
                </div>
                <footer class="mt-8">
                  <div class="md:flex md:items-center md:justify-center">
                    <div class="md:flex-shrink-0">
                      <img
                        class="mx-auto h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div
                      class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center"
                    >
                      <div class="text-base font-medium text-gray-900">
                        Judith
                      </div>

                      <svg
                        class="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 0h3L9 20H6l5-20z" />
                      </svg>

                      <div class="text-base font-medium text-gray-500">
                        DAYSTAR
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </swiper-slide>

            <swiper-slide>
              <img
                class="mx-auto h-8"
                src="../assets/opay.png"
                alt="Workcation"
              />

              <blockquote class="mt-4">
                <div
                  class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900"
                >
                  <p>
                    &ldquo;Quest HMO has really lived up to its name. It’s an
                    absolutely reliable organization which has an incredible
                    health plan with contact persons always on hand 24/7 to
                    handle requests and emergencies..&rdquo;
                  </p>
                </div>
                <footer class="mt-8">
                  <div class="md:flex md:items-center md:justify-center">
                    <div class="md:flex-shrink-0">
                      <img
                        class="mx-auto h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div
                      class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center"
                    >
                      <div class="text-base font-medium text-gray-900">
                        John
                      </div>

                      <svg
                        class="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 0h3L9 20H6l5-20z" />
                      </svg>

                      <div class="text-base font-medium text-gray-500">
                        OPAY
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </swiper-slide>
            <swiper-slide>
              <img
                class="mx-auto h-8"
                src="../assets/jumia.svg"
                alt="Workcation"
              />

              <blockquote class="mt-4">
                <div
                  class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900"
                >
                  <p>
                    &ldquo;Quest HMO has been a reliable HMO for our company.
                    Our staff members have easy access to healthcare via an easy
                    to use online platform which has made the process of
                    managing our HMO easier.&rdquo;
                  </p>
                </div>
                <footer class="mt-8">
                  <div class="md:flex md:items-center md:justify-center">
                    <div class="md:flex-shrink-0">
                      <img
                        class="mx-auto h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div
                      class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center"
                    >
                      <div class="text-base font-medium text-gray-900">
                        Daniel
                      </div>

                      <svg
                        class="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 0h3L9 20H6l5-20z" />
                      </svg>

                      <div class="text-base font-medium text-gray-500">
                        JUMIA
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="lg:hidden">
      <div class="relative max-w-7xl mx-auto mt-6 px-4 sm:px-6 lg:px-8">
        <div class="relative">
          <swiper
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }"
            :loop="true"
            :breakpoints="{
              '640': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '768': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '1024': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide>
              <img
                class="mx-auto h-8"
                src="../assets/daystar.png"
                alt="Workcation"
              />

              <blockquote class="mt-4">
                <div
                  class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900"
                >
                  <p>
                    &ldquo;Services and flexibility of the portal is excellent.
                    Payment prompt and usage of the portal is very easy.&rdquo;
                  </p>
                </div>
                <footer class="mt-8">
                  <div class="md:flex md:items-center md:justify-center">
                    <div class="md:flex-shrink-0">
                      <img
                        class="mx-auto h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div
                      class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center"
                    >
                      <div class="text-base font-medium text-gray-900">
                        Judith
                      </div>

                      <svg
                        class="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 0h3L9 20H6l5-20z" />
                      </svg>

                      <div class="text-base font-medium text-gray-500">
                        DAYSTAR
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </swiper-slide>

            <swiper-slide>
              <img
                class="mx-auto h-8"
                src="../assets/opay.png"
                alt="Workcation"
              />

              <blockquote class="mt-4">
                <div
                  class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900"
                >
                  <p>
                    &ldquo;Quest HMO has really lived up to its name. It’s an
                    absolutely reliable organization which has an incredible
                    health plan with contact persons always on hand 24/7 to
                    handle requests and emergencies..&rdquo;
                  </p>
                </div>
                <footer class="mt-8">
                  <div class="md:flex md:items-center md:justify-center">
                    <div class="md:flex-shrink-0">
                      <img
                        class="mx-auto h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div
                      class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center"
                    >
                      <div class="text-base font-medium text-gray-900">
                        John
                      </div>

                      <svg
                        class="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 0h3L9 20H6l5-20z" />
                      </svg>

                      <div class="text-base font-medium text-gray-500">
                        OPAY
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </swiper-slide>
            <swiper-slide>
              <img
                class="mx-auto h-8"
                src="../assets/jumia.svg"
                alt="Workcation"
              />

              <blockquote class="mt-4">
                <div
                  class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900"
                >
                  <p>
                    &ldquo;Quest HMO has been a reliable HMO for our company.
                    Our staff members have easy access to healthcare via an easy
                    to use online platform which has made the process of
                    managing our HMO easier.&rdquo;
                  </p>
                </div>
                <footer class="mt-8">
                  <div class="md:flex md:items-center md:justify-center">
                    <div class="md:flex-shrink-0">
                      <img
                        class="mx-auto h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div
                      class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center"
                    >
                      <div class="text-base font-medium text-gray-900">
                        Daniel
                      </div>

                      <svg
                        class="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 0h3L9 20H6l5-20z" />
                      </svg>

                      <div class="text-base font-medium text-gray-500">
                        JUMIA
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  name: "MyComponent",
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

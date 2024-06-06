<script setup>
import { useRouter } from 'vue-router'
import NavBar from '@/components/structure/NavBar.vue'

const router = useRouter()

const goToDestinations = function () {
  router.push({ name: 'destinations' })
}
</script>

<template>
  <NavBar />
  <div>
    <div
      class="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30"
    >
      <img
        src="@/assets/svg/home-backgorund.jpg"
        class="absolute top-0 left-0 min-h-full ob"
        alt=""
      />
      <div class="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
        <div class="col-span-6">
          <span class="uppercase text-white text-xs font-bold mb-2 block">WE ARE EXPERTS</span>
          <h1 class="text-white font-extrabold text-5xl mb-8">
            Explora con Expertos: Tours y Guías Turísticos
          </h1>
          <p class="text-stone-100 text-base">
            Descubre el mundo a través de nuestros ojos: Tours y guías turísticos para vivir
            experiencias inolvidables."
          </p>
          <button
            @click="goToDestinations"
            class="mt-8 uppercase py-4 text-base font-light px-10 border border-white bg-white"
          >
            Buscar destinos
          </button>
        </div>
      </div>
    </div>
    <div class="bg-[#f7d0b6] py-20">
      <div class="max-w-screen-lg mx-auto flex justify-between items-center">
        <div class="max-w-xl">
          <h2 class="font-black text-sky-950 text-3xl mb-4">
            As the leading experts in this field, we're in over 90 countries
          </h2>
          <p class="text-base text-sky-950">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <button
          class="text-sky-950 uppercase py-3 text-base px-10 border border-sky-950 hover:bg-sky-950 hover:bg-opacity-10"
        >
          Get started
        </button>
      </div>
    </div>
    <div class="py-12 relative overflow-hidden bg-white">
      <div class="grid grid-cols-2 max-w-screen-lg mx-auto">
        <div class="w-full flex flex-col items-end pr-16">
          <h2 class="text-[#64618C] font-bold text-2xl max-w-xs text-right mb-12 mt-10">
            Whether you need Assistance
          </h2>
          <div class="h-full mt-auto overflow-hidden relative">
            <img src="https://picsum.photos/800/600" class="h-full w-full object-contain" alt="" />
          </div>
        </div>
        <div
          class="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0"
        >
          <div class="relative z-20 pl-12">
            <h2 class="text-[#f7d0b6] font-black text-5xl leading-snug mb-10">
              Finpoint is here <br />to help you
            </h2>
            <p class="text-white text-sm">
              Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus
              molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus
              euismod quis viverra nibh cras pulvinar.
            </p>
            <button
              class="mt-8 text-white uppercase py-3 text-sm px-10 border border-white hover:bg-white hover:bg-opacity-10"
            >
              Talk with expert
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4 relative overflow-hidden bg-white">
      <div class="grid grid-cols-2 max-w-screen-lg mx-auto">
        <div
          class="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-[#f7d0b6] before:top-0 before:right-0"
        >
          <div class="relative z-20 pl-12">
            <h2 class="text-sky-950 font-black text-5xl leading-snug mb-10">
              Finpoint is here <br />to help you
            </h2>
            <p class="text-sky-950 text-sm">
              Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus
              molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus
              euismod quis viverra nibh cras pulvinar.
            </p>
            <button
              class="mt-8 text-sky-950 uppercase py-3 text-sm px-10 border border-sky-950 hover:bg-white hover:bg-opacity-10"
            >
              Talk with expert
            </button>
          </div>
        </div>
        <div class="w-full flex flex-col pl-16">
          <h2 class="text-[#64618C] font-bold text-2xl max-w-xs text-left mb-12 mt-10">
            Whether you need Assistance
          </h2>
          <div class="h-full mt-auto overflow-hidden relative">
            <img src="https://picsum.photos/800/600" class="h-full w-full object-contain" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="py-12 relative overflow-hidden bg-white">
      <div class="grid grid-cols-2 max-w-screen-lg mx-auto">
        <div class="w-full flex flex-col items-end pr-16">
          <h2 class="text-[#64618C] font-bold text-2xl max-w-xs text-right mb-12 mt-10">
            Whether you need Assistance
          </h2>
          <div class="h-full mt-auto overflow-hidden relative">
            <img src="https://picsum.photos/800/600" class="h-full w-full object-contain" alt="" />
          </div>
        </div>
        <div
          class="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0"
        >
          <div class="relative z-20 pl-12">
            <h2 class="text-[#f7d0b6] font-black text-5xl leading-snug mb-10">
              Finpoint is here <br />to help you
            </h2>
            <p class="text-white text-sm">
              Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus
              molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus
              euismod quis viverra nibh cras pulvinar.
            </p>
            <button
              class="mt-8 text-white uppercase py-3 text-sm px-10 border border-white hover:bg-white hover:bg-opacity-10"
            >
              Talk with expert
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- component -->
  <footer class="bg-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <img
            class="h-20"
            src="https://aaah0mnbncqtinas.public.blob.vercel-storage.com/FX5ATkass4-no-background-VmcZHSX7xE4ng29ATNphGUdb388fxH.png"
            alt="Company name"
          />
          <p class="text-sm leading-6 text-gray-600">
            Making football look better to the world and a more respecful game.
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a href="#" class="text-yellow-500 hover:text-gray-500">
              <span class="sr-only">the team is on fire</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.074.945A4.993 4.993 0 0 0 6 5v.032c.004.6.114 1.176.311 1.709.16.428-.204.91-.61.7a5.023 5.023 0 0 1-1.868-1.677c-.202-.304-.648-.363-.848-.058a6 6 0 1 0 8.017-1.901l-.004-.007a4.98 4.98 0 0 1-2.18-2.574c-.116-.31-.477-.472-.744-.28Zm.78 6.178a3.001 3.001 0 1 1-3.473 4.341c-.205-.365.215-.694.62-.59a4.008 4.008 0 0 0 1.873.03c.288-.065.413-.386.321-.666A3.997 3.997 0 0 1 8 8.999c0-.585.126-1.14.351-1.641a.42.42 0 0 1 .503-.235Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-4 00">
              <span class="sr-only">X</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-4 h-4"
              >
                <path
                  d="M2.75 2a.75.75 0 0 0-.75.75v10.5a.75.75 0 0 0 1.5 0v-2.624l.33-.083A6.044 6.044 0 0 1 8 11c1.29.645 2.77.807 4.17.457l1.48-.37a.462.462 0 0 0 .35-.448V3.56a.438.438 0 0 0-.544-.425l-1.287.322C10.77 3.808 9.291 3.646 8 3a6.045 6.045 0 0 0-4.17-.457l-.34.085A.75.75 0 0 0 2.75 2Z"
                />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">GitHub</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">YouTube</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >Marketing</a
                  >
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >Analytics</a
                  >
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >Commerce</a
                  >
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >Insights</a
                  >
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-gray-900">Support</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >Pricing</a
                  >
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >Documentation</a
                  >
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Guides</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >API Status</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-gray-900">Company</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">About</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Jobs</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Press</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >Partners</a
                  >
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Claim</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >Privacy</a
                  >
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-xs leading-5 text-gray-500">
          &copy; 2020 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

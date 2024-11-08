<script setup lang="ts">
import { urlPage } from '@/utils/constans'
import { backHandle } from '@/utils/helper'
import { AkArrowLeft, DeGoogleOriginal } from '@kalimahapps/vue-icons'
import { useHead } from '@vueuse/head'

const back = backHandle()

useHead({
  title: 'Login | Warder',
  meta: [
    { name: 'description', content: 'Warder Login Page' },
    { name: 'keywords', content: 'marketplace, login, warder' },
  ],
})
</script>

<template>
  <div class="relative mx-auto w-full md:w-[700px] lg:w-[861px] select-none">
    <img
      src="https://images.tokopedia.net/img/oauth/background/login-bg.png"
      alt="bg-login"
      class="h-[477px] w-[700px] lg:h-[587px] lg:w-[861px] hidden md:block"
    />

    <div
      class="absolute top-0 left-0 w-full flex justify-center items-center mt-4 mb-3 md:mt-6"
    >
      <div
        class="border-none md:border-2 w-[360px] lg:w-[370px] md:p-6 md:shadow-2xl rounded-lg bg-white"
      >
        <div class="flex items-center justify-between mb-8 space-x-3 pr-1">
          <div class="flex items-center space-x-3 md:space-x-0">
            <AkArrowLeft @click="back" class="w-7 h-7 md:hidden" />
            <div class="font-bold text-2xl md:text-xl">Masuk ke Warden</div>
          </div>
          <router-link
            :to="urlPage.REGISTER_USER"
            class="text-purple-600 cursor-pointer hover:underline text-sm"
          >
            Daftar
          </router-link>
        </div>

        <input
          type="text"
          placeholder="Email"
          class="w-full rounded-lg mb-6 py-2.5 px-3 border-2 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          class="w-full rounded-lg mb-6 py-2.5 px-3 border-2 outline-none"
        />

        <button
          class="py-2.5 px-2 border-2 w-full rounded-lg mb-6 text-sm font-bold md:font-normal"
        >
          Login
        </button>

        <div class="flex items-center gap-2 mb-6">
          <div class="flex-grow border-t border-gray-300"></div>
          <span class="text-gray-500">atau masuk dengan</span>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>

        <button class="py-2.5 px-2 border-2 w-full rounded-lg mb-6">
          <div class="flex justify-center items-center space-x-1">
            <DeGoogleOriginal class="w-5 h-5" />
            <div class="text-slate-700 text-sm font-bold md:font-normal">
              Google
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

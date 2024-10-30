<script setup lang="ts">
import { urlPage } from '@/utils/constans'
import { DeGoogleOriginal } from '@kalimahapps/vue-icons'
</script>

<template>
  <div class="relative mx-auto w-full md:w-[861px]">
    <img
      src="https://images.tokopedia.net/img/oauth/background/login-bg.png"
      alt="bg-login"
      class="h-[587px] w-[861px] hidden md:block"
    />

    <div
      class="absolute top-0 left-0 w-full flex justify-center items-center mt-2 mb-3 md:mt-6"
    >
      <div
        class="border-none md:border-2 w-[360px] lg:w-[370px] md:p-6 md:shadow-2xl rounded-lg bg-white"
      >
        <div class="flex justify-between text-sm mb-8 items-center">
          <div class="font-bold text-lg">Masuk ke Warden</div>
          <router-link
            :to="urlPage.REGISTER_USER"
            class="text-purple-600 cursor-pointer hover:underline"
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

        <button class="py-2.5 px-2 border-2 w-full rounded-lg mb-6 text-sm">
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
            <div class="text-slate-700 text-sm">Google</div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { urlPage } from '@/utils/constans'
import { backHandle } from '@/utils/helper'
import { AkArrowLeft, DeGoogleOriginal } from '@kalimahapps/vue-icons'
import { useHead } from '@vueuse/head'

const back = backHandle()

useHead({
  title: 'Register | Warder',
  meta: [
    { name: 'description', content: 'Warder Register Page' },
    { name: 'keywords', content: 'marketplace, register, warder' },
  ],
})
</script>

<template>
  <div
    class="flex justify-center items-center pt-4 mb-10 md:mt-8 md:gap-7 xl:gap-[80px] bg-white min-h-full"
  >
    <div class="hidden md:block">
      <div class="flex justify-center item-center">
        <img
          src="https://images.tokopedia.net/img/user/register_icon_new.png"
          alt="img-reg"
          class="h-[303px] w-[360px]"
        />
      </div>
      <div class="font-bold text-lg mt-3 text-center">
        Jual Beli Mudah Hanya di Warder
      </div>
      <div class="mt-2 text-sm text-center">
        Gabung dan rasakan kemudahan bertransaksi di Warder
      </div>
    </div>
    <div
      class="border-none md:border-2 w-[360px] lg:w-[370px] md:p-6 md:shadow-xl"
    >
      <div
        class="flex items-center justify-start md:justify-center space-x-3 md:space-x-0"
      >
        <div class="text-start md:text-center">
          <div
            class="flex items-center justify-start md:justify-center space-x-3 md:space-x-0"
          >
            <AkArrowLeft @click="back" class="w-7 h-7 md:hidden" />
            <div class="font-bold text-2xl">Daftar Sekarang</div>
          </div>
          <div class="text-center text-sm mt-0 md:mt-1 ml-[40px] md:ml-0">
            Sudah punya akun Warder?
            <router-link
              :to="urlPage.LOGIN"
              class="text-purple-600 cursor-pointer"
              >Login</router-link
            >
          </div>
        </div>
      </div>

      <button class="py-2.5 px-2 border-2 w-full rounded-lg mt-3 md:mt-5 mb-4">
        <div class="flex justify-center items-center space-x-1">
          <DeGoogleOriginal class="w-5 h-5" />
          <div class="text-slate-700 text-sm font-bold md:font-normal">
            Google
          </div>
        </div>
      </button>

      <div class="flex items-center gap-2 mb-4">
        <div class="flex-grow border-t border-gray-300"></div>
        <span class="text-gray-500">atau</span>
        <div class="flex-grow border-t border-gray-300"></div>
      </div>

      <input
        type="text"
        placeholder="Email"
        class="w-full rounded-lg mb-4 py-2.5 px-3 border-2 outline-none"
      />

      <input
        type="password"
        placeholder="Password"
        class="w-full rounded-lg mb-4 py-2.5 px-3 border-2 outline-none"
      />

      <button
        class="py-2.5 px-2 border-2 w-full rounded-lg mb-2 text-sm font-bold md:font-normal"
      >
        Daftar
      </button>

      <div class="text-center text-sm">
        Dengan mendaftar, saya menyetujui
        <span class="text-purple-600 hover:underline cursor-pointer">
          Syarat & Ketentuan
        </span>
        serta
        <span class="text-purple-600 hover:underline cursor-pointer">
          Kebijakan Privasi Warder.
        </span>
      </div>
    </div>
  </div>
</template>

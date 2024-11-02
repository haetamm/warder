<script setup lang="ts">
import {
  AnFilledStar,
  AnOutlinedShareAlt,
  BsShop,
} from '@kalimahapps/vue-icons'
import { useRoute } from 'vue-router'

const route = useRoute()
const merchantName = route.params.merchant
</script>

<template>
  <div
    class="inline-block md:flex md:justify-between items-center border-slate-200 border-b-2 lg:border-b-none lg:border-2 p-2 md:p-4 rounded-none lg:rounded-lg w-full"
  >
    <div class="flex items-center gap-3 w-full md:w-1/2">
      <img
        src="https://images.tokopedia.net/img/cache/215-square/GAnVPX/2024/6/8/38fcb466-1a81-410a-a74c-d6c62a76a2a3.jpg"
        alt="logo-merchat"
        class="h-[92px] w-[92px] rounded-full"
      />
      <div class="w-full xl:w-1/2">
        <div class="font-bold text-2xl">{{ merchantName }}</div>
        <div class="text-sm">
          <span class="text-purple-600">Online</span> . Kab. Tangerang
        </div>
        <div
          class="flex items-center space-x-1 mt-1.5 w-full md:w-1/2 tab:w-full"
        >
          <button
            class="bg-purple-600 text-white text-center text-sm px-5 py-1.5 rounded-md w-full"
          >
            Follow
          </button>
          <button class="p-1.5 border-2 rounded-md">
            <BsShop class="w-4 h-4" />
          </button>
          <button class="p-1.5 border-2 rounded-md">
            <AnOutlinedShareAlt class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-3 md:flex items-center mt-5 md:mt-0 justify-between"
    >
      <div class="text-center px-1 xs:px-5 md:px-1.5 xl:px-5">
        <div class="flex justify-center items-center space-x-1">
          <AnFilledStar class="text-purple-600 w-6 h-6" />
          <div class="font-semibold text-md xl:font-bold">5.0</div>
        </div>
        <p class="font-normal text-sm">Rating & Ulasan</p>
      </div>
      <div
        class="text-center px-1 xs:px-5 md:px-1.5 xl:px-5 border-r-2 border-l-2"
      >
        <div class="font-semibold text-md xl:font-bold">±6 jam</div>
        <p class="font-normal text-sm">Pesanan diproses</p>
      </div>
      <div class="text-center px-1 xs:px-5 md:px-1.5 xl:px-5">
        <div class="font-semibold text-md xl:font-bold">Buka 24 jam</div>
        <p class="font-normal text-sm">Jam operasi toko</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isActive, scrollTop } from '@/utils/helper'
import { urlPage } from '@/utils/constans'

import {
  AnFilledSetting,
  FaBoxesPacking,
  FlFilledClipboardText,
  HiSolidHome,
} from '@kalimahapps/vue-icons'

const navItems = [
  {
    name: 'home',
    label: 'Home',
    route: urlPage.SELLER_HOME,
    icon: HiSolidHome,
    size: 'h-7 w-7',
  },
  {
    name: 'produk',
    label: 'Produk',
    route: '#',
    icon: FaBoxesPacking,
    size: 'h-7 w-7',
  },
  {
    name: 'pesanan',
    label: 'Pesanan',
    route: '#',
    icon: FlFilledClipboardText,
    size: 'h-7 w-7',
  },
]
</script>

<template>
  <div class="px-0 md:px-3">
    <div
      class="flex items-center justify-center xl:justify-start pb-3 space-x-0 md:space-x-3 space-y-0 shadow-custom"
    >
      <img
        src="https://images.tokopedia.net/img/seller_no_logo_3.png"
        alt="merchant-img"
        class="h-9 w-9 rounded-full shadow-lg"
      />
      <div class="hidden xl:block">
        <div class="font-bold text-md hover:text-purple-600">
          <router-link to="/serbaseratus"> Toko Serba Seratus </router-link>
        </div>
        <small>Regular Merchant</small>
      </div>
    </div>

    <div class="my-1 mt-8 xs:mt-5 md:mt-8">
      <router-link
        v-for="item in navItems"
        :key="item.name"
        :to="item.route"
        @click="scrollTop"
        :class="[
          'flex items-center hover:text-purple-600 rounded-md justify-center xl:justify-start py-2 my-1 space-x-0 md:space-x-3 xl:hover:bg-gray-200 px-2',
          isActive(item.route) ? 'text-purple-600 font-bold' : '',
        ]"
      >
        <div class="group flex relative">
          <component :is="item.icon" :class="item.size" />
          <span
            class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 xl:hidden text-sm text-gray-100 rounded-md absolute left-full ml-2 opacity-0"
            style="top: 50%; transform: translateY(-50%)"
          >
            {{ item.label }}
          </span>
        </div>
        <div class="hidden xl:block text-sm">{{ item.label }}</div>
      </router-link>
    </div>
  </div>

  <div class="px-0 md:px-3">
    <router-link
      to="#"
      class="flex items-center hover:text-purple-600 rounded-md justify-center xl:justify-start py-2 my-1 space-x-0 md:space-x-3 xl:hover:bg-gray-200 px-2"
    >
      <div class="group flex relative">
        <AnFilledSetting class="w-7 h-7" />
        <span
          class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-full ml-2 opacity-0"
          style="top: 50%; transform: translateY(-50%)"
        >
          Pengaturan
        </span>
      </div>
      <div class="hidden xl:block text-sm">Pengaturan</div>
    </router-link>
  </div>
</template>

<style scoped>
.shadow-custom {
  box-shadow: 0 3px 0px -2px #9333ea;
}
</style>

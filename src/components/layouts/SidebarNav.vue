<script setup lang="ts">
import { urlPage } from '@/utils/constans'
import { scrollTop } from '@/utils/helper'
import { defineProps } from 'vue'
import {
  AnOutlinedSetting,
  CiUser,
  ClCloseMd,
  FlBuildingShop,
  McBillLine,
  MdFavoriteBorder,
} from '@kalimahapps/vue-icons'

defineProps({
  closeSidebar: Function,
})
</script>

<template>
  <div class="w-[100vw] h-[100vh] bg-cartpage">
    <div class="w-screen fixed mx-auto">
      <div class="flex justify-between h-14 items-center px-3 bg-white">
        <div class="font-bold text-lg">Menu Utama</div>
        <ClCloseMd @click="closeSidebar" class="h-7 w-7" />
      </div>
    </div>
    <hr class="mb-0.5" />

    <div
      class="flex space-x-2 w-full justify-between bg-white py-3 px-3 mb-1 mt-[59px]"
    >
      <router-link
        :to="urlPage.LOGIN"
        @click="scrollTop"
        class="w-full px-3 py-1 text-center text-md hover:bg-purple-600 rounded-md border-2 border-purple-600 text-purple-600 hover:text-white"
      >
        Login
      </router-link>

      <router-link
        :to="urlPage.REGISTER_USER"
        @click="scrollTop"
        class="w-full px-3 py-1 text-center text-md bg-purple-600 rounded-md border-2 text-white border-purple-600"
      >
        Register
      </router-link>
    </div>

    <div class="py-3 bg-white px-3 mb-2">
      <div class="flex items-center justify-between">
        <div class="flex space-x-1 items-center">
          <img
            src="https://images.tokopedia.net/img/cache/300/tPxBYm/2023/1/20/757f728e-d320-4f75-91ac-cedc5f1edc42.jpg.webp?ect=3g"
            alt="profile-img"
            class="h-[50px] w-[50px] rounded-full"
          />
          <div class="flex items-center space-x-1">
            <CiUser class="h-6 w-6" />
            <div class="text-lg font-bold">Tatang Haetami</div>
          </div>
        </div>
        <router-link :to="urlPage.USER_SETTING" @click="closeSidebar">
          <AnOutlinedSetting class="h-6 w-6 text-black" />
        </router-link>
      </div>
      <router-link :to="urlPage.SHOP" @click="closeSidebar">
        <button class="w-full h-[42px] rounded-lg border-2 mt-3">
          Buka Toko
        </button>
      </router-link>
    </div>

    <div class="py-4 bg-white px-3 mb-2">
      <router-link
        :to="urlPage.USER_ADDRESS"
        @click="closeSidebar"
        class="flex space-x-3 h-[44px] items-center"
      >
        <FlBuildingShop class="w-7 h-7" />
        <div class="flex flex-col">
          <div>Daftar Alamat</div>
          <small>Atur alamat pengiriman belanjaan</small>
        </div>
      </router-link>
    </div>

    <div class="py-3 bg-white px-3">
      <div class="flex space-x-3 h-[44px] items-center">
        <McBillLine class="w-7 h-7" />
        <p>Daftar Transaksi</p>
      </div>
      <div class="flex space-x-3 h-[44px] items-center">
        <MdFavoriteBorder class="w-7 h-7" />
        <p>Whislist</p>
      </div>
    </div>
  </div>
</template>

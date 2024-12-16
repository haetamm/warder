<script setup lang="ts">
import { urlPage } from '@/utils/constans'
import { scrollTop } from '@/utils/helper'
import { defineProps } from 'vue'
import {
  AnOutlinedSetting,
  ClCloseMd,
  FlBuildingShop,
} from '@kalimahapps/vue-icons'
import { Button } from 'primevue'
import { useUserStore } from '@/stores/user'
import ButtonLoginAndRegis from './ButtonLoginAndRegis.vue'
import ButtonTransaction from './ButtonTransaction.vue'
import ButtonWishlist from './ButtonWishlist.vue'
import ButtonProfile from './ButtonProfile.vue'
import ButtonLogout from './ButtonLogout.vue'

const { token, roles } = useUserStore()
defineProps({
  toggleSidebar: Function,
})
</script>

<template>
  <div class="w-[100vw] h-[100vh] bg-cartpage">
    <div class="w-screen fixed mx-auto z-50 bg-blur">
      <div class="flex justify-between h-14 items-center px-4">
        <RouterLink
          :to="urlPage.HOME"
          @click="
            () => {
              toggleSidebar?.()
              scrollTop?.()
            }
          "
          class="h-[35px] w-[170px]"
        >
          <img src="/image/logo.png" alt="logo" class="h-[30px] w-[170px]" />
        </RouterLink>
        <ClCloseMd @click="toggleSidebar" class="h-7 w-7" />
      </div>
    </div>
    <div class="pt-[59px] px-4">
      <div
        v-if="!token"
        class="flex space-x-2 w-full justify-between bg-white py-3 px-3 mb-1"
      >
        <ButtonLoginAndRegis />
      </div>

      <div v-if="token" class="py-3 bg-white px-3 mb-2">
        <div class="flex items-center justify-between">
          <ButtonProfile />
          <router-link
            :to="urlPage.USER_SETTING"
            @click="
              () => {
                toggleSidebar?.()
                scrollTop?.()
              }
            "
          >
            <AnOutlinedSetting class="h-6 w-6 text-black" />
          </router-link>
        </div>

        <Button
          v-if="token && !roles.includes('ADMIN')"
          v-on:click="
            () => {
              toggleSidebar?.()
              scrollTop?.()
            }
          "
          as="router-link"
          :label="
            token && roles.includes('SELLER')
              ? 'Toko Serba Seratus'
              : 'Buka Toko'
          "
          :to="urlPage.MY_SHOP"
          class="w-full mt-3"
          :style="{
            background: 'white',
            color: 'black',
            borderColor: 'black',
          }"
        />
      </div>

      <div class="py-4 bg-white px-3 mb-2">
        <router-link
          :to="urlPage.USER_ADDRESS"
          @click="
            () => {
              toggleSidebar?.()
              scrollTop?.()
            }
          "
          class="flex space-x-3 h-[44px] items-center"
        >
          <FlBuildingShop class="w-7 h-7" />
          <div class="flex flex-col">
            <div>Daftar Alamat</div>
            <small>Atur alamat pengiriman belanjaan</small>
          </div>
        </router-link>
      </div>

      <div class="py-3 bg-white px-3 mb-1">
        <ButtonTransaction :toogleButton="toggleSidebar" />
        <ButtonWishlist :toogleButton="toggleSidebar" />
      </div>

      <div v-if="token" class="py-3 bg-white px-3">
        <ButtonLogout />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

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
  MdLogout,
} from '@kalimahapps/vue-icons'
import { Button } from 'primevue'

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
        class="flex space-x-2 w-full justify-between bg-white py-3 px-3 mb-1"
      >
        <Button
          v-on:click="scrollTop"
          as="router-link"
          label="Login"
          :to="urlPage.LOGIN"
          class="w-full"
          :style="{ background: 'white', color: '#9333ea' }"
        />
        <Button
          v-on:click="scrollTop"
          as="router-link"
          label="Register"
          :to="urlPage.REGISTER_USER"
          class="w-full"
        />
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
          v-on:click="
            () => {
              toggleSidebar?.()
              scrollTop?.()
            }
          "
          as="router-link"
          label="Buka Toko"
          :to="urlPage.MY_SHOP"
          class="w-full mt-3"
          :style="{ background: 'white', color: 'black', borderColor: 'black' }"
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
        <router-link
          :to="urlPage.TRANSACTION"
          @click="
            () => {
              toggleSidebar?.()
              scrollTop?.()
            }
          "
          class="flex space-x-3 h-[44px] items-center"
        >
          <McBillLine class="w-7 h-7" />
          <p>Daftar Transaksi</p>
        </router-link>
        <router-link
          :to="urlPage.WISHLIST"
          @click="
            () => {
              toggleSidebar?.()
              scrollTop?.()
            }
          "
          class="flex space-x-3 h-[44px] items-center"
        >
          <MdFavoriteBorder class="w-7 h-7" />
          <p>Whislist</p>
        </router-link>
      </div>

      <div class="py-3 bg-white px-3">
        <div class="flex space-x-3 h-[44px] items-center">
          <MdLogout class="w-7 h-7" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-blur {
  background-color: rgba(248, 246, 246, 0.5); /* Black color with 50% opacity */
  backdrop-filter: blur(10px); /* Apply a blur effect */
  z-index: 1000;
}
</style>

<script setup lang="ts">
import { urlPage } from '@/utils/constans'
import { ref } from 'vue'
import ButtonProfile from '../ButtonProfile.vue'
import ButtonTransaction from '../ButtonTransaction.vue'
import ButtonWishlist from '../ButtonWishlist.vue'
import ButtonLogout from '../ButtonLogout.vue'

const showProfileDropdown = ref(false)

const toogleProfile = () => {
  showProfileDropdown.value = !showProfileDropdown.value
}
</script>

<template>
  <div class="flex justify-center items-center space-x-1 cursor-pointer">
    <div class="relative">
      <div @click="toogleProfile">
        <div class="hidden md:flex items-center min-w-[120px]">
          <ButtonProfile />
        </div>
      </div>

      <div
        v-show="showProfileDropdown"
        id="profile-dropdown"
        class="hidden md:block absolute right-0 mt-4 w-[230px] bg-white border border-gray-200 rounded-md shadow-lg z-50 profile-dropdown"
      >
        <div class="text-sm text-gray-600 pt-3 px-3 p-1">
          <router-link :to="urlPage.USER_SETTING" @click="toogleProfile">
            <ButtonProfile />
          </router-link>
          <div class="mt-1">
            <ButtonTransaction :toogleButton="toogleProfile" />
          </div>
          <ButtonWishlist :toogleButton="toogleProfile" />
          <ButtonLogout />
        </div>
      </div>
    </div>
  </div>
</template>

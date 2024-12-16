<script setup lang="ts">
import { ref } from 'vue'
import { urlPage } from '@/utils/constans'
import { scrollTop } from '@/utils/helper'
import { useMediaQuery } from '@vueuse/core'
import CartEmpty from './CartEmpty.vue'
import { AnOutlinedShoppingCart } from '@kalimahapps/vue-icons'

const showCartDropdown = ref(false)
const isWebScreen = useMediaQuery('(min-width: 1280px)')

const closeDropdown = () => {
  showCartDropdown.value = false
}
</script>

<template>
  <div class="flex justify-center items-center space-x-1">
    <div class="relative">
      <router-link
        :to="urlPage.CART"
        @click="scrollTop"
        class="flex justify-center rounded-md items-center"
      >
        <AnOutlinedShoppingCart
          class="h-7 w-7 hover:text-purple-600"
          @mouseover="isWebScreen ? (showCartDropdown = true) : false"
        />
      </router-link>

      <div
        v-show="showCartDropdown"
        @mouseleave="showCartDropdown = false"
        v-click-outside="closeDropdown"
        class="absolute left-1/2 transform -translate-x-1/2 mt-5 w-[440px] bg-white border border-gray-200 rounded-md shadow-lg z-50"
      >
        <div class="text-sm text-gray-600">
          <div
            class="flex px-4 pt-3 pb-2 shadow-sm justify-between items-center"
          >
            <div class="font-bold text-md">Keranjang</div>
            <div>Lihat</div>
          </div>
          <hr class="mb-3" />
          <CartEmpty />
        </div>
      </div>
    </div>
  </div>
</template>

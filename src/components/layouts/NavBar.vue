<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import {
  AkArrowLeft,
  AnOutlinedShoppingCart,
  BxSearch,
} from '@kalimahapps/vue-icons'
import { urlPage } from '@/utils/constans'
import { useRoute } from 'vue-router'
import { useMediaQuery } from '@vueuse/core'
import { backHandle, isPageType, scrollTop } from '@/utils/helper'
import CartEmpty from './CartEmpty.vue'

const isVisible = ref(true)
const showCartDropdown = ref(false)
let lastScrollTop = 0
const route = useRoute()
const showLoginButton = ref(false)
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const isWebScreen = useMediaQuery('(min-width: 1280px)')

const back = backHandle()

const handleScroll = () => {
  const currentScrollTop = window.scrollY
  isVisible.value = currentScrollTop < lastScrollTop || currentScrollTop === 0
  lastScrollTop = currentScrollTop
}

const isProductDetailPage = (route: ReturnType<typeof useRoute>) => {
  const merchantName = route.params.merchant as string | undefined
  showLoginButton.value =
    (!!merchantName && route.path !== `/${merchantName}`) ||
    route.path === urlPage.CART
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  isProductDetailPage(route)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(
  () => route.path,
  () => {
    isProductDetailPage(route)
  },
)
</script>

<template>
  <div
    v-if="!isPageType(route, 'shipment')"
    class="w-full border-b-2 fixed bg-white z-50 py-1"
    :class="{ hidden: !isVisible }"
  >
    <div class="kontener mx-auto">
      <div
        class="flex justify-between lg:justify-center items-center px-2 lg:px-6 xl:py-1"
      >
        <RouterLink
          :to="urlPage.HOME"
          class="h-[35px] w-[170px] hidden lg:inline-block"
        >
          <img src="/image/logo.png" alt="logo" class="h-[30px] w-[170px]" />
        </RouterLink>

        <button
          class="hidden lg:inline-block px-3 py-1 text-md hover:bg-slate-50 rounded-md"
        >
          Kategori
        </button>

        <div class="flex items-center">
          <button
            v-if="showLoginButton || isPageType(route, 'merchant')"
            @click="back"
            class="pr-1.5 py-1.5 hover:text-purple-600 rounded-md block lg:hidden items-center"
          >
            <AkArrowLeft class="h-6 w-6" />
          </button>

          <div
            v-if="isPageType(route, 'cart')"
            class="inline-block lg:hidden font-bold"
          >
            Keranjang
          </div>
        </div>

        <form
          v-if="!showLoginButton || isLargeScreen"
          class="w-full mx-auto mr-3"
          @mouseover="showCartDropdown = false"
        >
          <div class="relative">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <BxSearch class="h-6 w-6" />
            </div>
            <input
              type="search"
              class="block w-full px-3 py-2 ps-10 text-sm text-gray-900 border-gray-200 border outline-purple-600 focus:border-none rounded-lg bg-gray-50"
              :placeholder="`Cari di ${isPageType(route, 'merchant') ? `toko ${route.params.merchant}` : 'waroeng sederhana'}`"
              required
            />
          </div>
        </form>

        <div class="flex justify-center items-center space-x-3">
          <div class="flex justify-center items-center space-x-1">
            <div class="relative">
              <router-link
                :to="urlPage.CART"
                @click="scrollTop"
                class="flex justify-center rounded-md items-center"
              >
                <AnOutlinedShoppingCart
                  class="h-6 w-6 hover:text-purple-600"
                  @mouseover="isWebScreen ? (showCartDropdown = true) : false"
                />
              </router-link>

              <div
                v-show="showCartDropdown"
                @mouseleave="showCartDropdown = false"
                class="absolute left-1/2 transform -translate-x-1/2 mt-3 w-[440px] bg-white border border-gray-200 rounded-md shadow-lg z-50"
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

          <div class="border-l-2 border-purple-300 py-3"></div>

          <router-link
            :to="urlPage.LOGIN"
            @mouseover="showCartDropdown = false"
            @click="scrollTop"
            class="px-3 py-0.5 text-md hover:bg-purple-600 rounded-md border-2 border-purple-600 text-purple-600 hover:text-white"
          >
            Login
          </router-link>

          <router-link
            :to="urlPage.REGISTER_USER"
            @click="scrollTop"
            class="hidden md:block px-3 py-0.5 text-md bg-purple-600 rounded-md border-2 text-white border-purple-600"
          >
            Register
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

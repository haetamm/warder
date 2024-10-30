<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import {
  AkArrowLeft,
  AnOutlinedShoppingCart,
  BxSearch,
} from '@kalimahapps/vue-icons'
import { urlPage } from '@/utils/constans'
import { useRoute, useRouter } from 'vue-router'
import { useMediaQuery } from '@vueuse/core'

const isVisible = ref(true)
let lastScrollTop = 0
const route = useRoute()
const showLoginButton = ref(false)
const isLargeScreen = useMediaQuery('(min-width: 1024px)')

const router = useRouter()

const backHandle = () => {
  router.back()
}

const handleScroll = () => {
  const currentScrollTop = window.scrollY
  isVisible.value = currentScrollTop < lastScrollTop || currentScrollTop === 0
  lastScrollTop = currentScrollTop
}

const isProductDetailPage = (path: string) => {
  showLoginButton.value = path.startsWith(urlPage.PRODUCT)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  isProductDetailPage(route.path)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(
  () => route.path,
  newPath => {
    isProductDetailPage(newPath)
  },
)
</script>

<template>
  <div
    class="w-full border-b-2 fixed bg-white z-50"
    :class="{ hidden: !isVisible }"
  >
    <div class="kontener mx-auto">
      <div
        class="flex justify-between lg:justify-center items-center px-2 lg:px-6 py-1 xl:py-1 gap-2"
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

        <button
          v-if="showLoginButton"
          @click="backHandle"
          class="px-3 py-3 hover:bg-slate-50 rounded-md block lg:hidden items-center"
        >
          <AkArrowLeft class="h-6 w-6" />
        </button>

        <form v-if="!showLoginButton || isLargeScreen" class="w-full mx-auto">
          <div class="relative">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <BxSearch class="h-6 w-6" />
            </div>
            <input
              type="search"
              class="block w-full px-3 py-2 ps-10 text-sm text-gray-900 border-gray-200 border outline-purple-600 focus:border-none rounded-lg bg-gray-50"
              placeholder="Cari di waroeng sederhana"
              required
            />
          </div>
        </form>

        <div class="flex justify-center items-center space-x-1">
          <button class="px-3 py-3 hover:bg-slate-50 rounded-md items-center">
            <AnOutlinedShoppingCart class="h-6 w-6" />
          </button>
          <div class="border-l-2 border-purple-300 py-3 px-1"></div>
          <router-link
            :to="urlPage.LOGIN"
            class="px-3 py-0.5 text-md hover:bg-purple-600 rounded-md border-2 border-purple-600 text-purple-600 hover:text-white"
          >
            Login
          </router-link>
          <router-link
            :to="urlPage.REGISTER_USER"
            class="px-3 py-0.5 text-md bg-purple-600 rounded-md border-2 text-white border-purple-600"
          >
            Register
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

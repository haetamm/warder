<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { AkArrowLeft, AkTextAlignJustified } from '@kalimahapps/vue-icons'
import { urlPage } from '@/utils/constans'
import { useRoute } from 'vue-router'
import { useMediaQuery } from '@vueuse/core'
import { backHandle, isPageType, scrollTop } from '@/utils/helper'
import ButtonCart from './ButtonCart.vue'
import { useScrollVisibility } from '@/compsables/useScrollVisibility'
import SearchBar from './SearchBar.vue'
import { Button, Dialog } from 'primevue'
import SidebarNav from './SidebarNav.vue'

const route = useRoute()
const showButton = ref(false)
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const { isVisible } = useScrollVisibility()

const back = backHandle()
const visibleBottom = ref(false)

const isProductDetailPage = (route: ReturnType<typeof useRoute>) => {
  const merchantName = route.params.merchant as string | undefined
  showButton.value =
    (!!merchantName && route.path !== `/${merchantName}`) ||
    route.path === urlPage.CART ||
    route.path === urlPage.USER_SETTING ||
    route.path === urlPage.USER_ADDRESS ||
    route.path === urlPage.MY_SHOP ||
    route.path === urlPage.WISHLIST ||
    route.path === urlPage.TRANSACTION
}

onMounted(() => {
  isProductDetailPage(route)
})

watch(
  () => route.path,
  () => {
    isProductDetailPage(route)
  },
)

const toggleSidebar = () => {
  visibleBottom.value = !visibleBottom.value
}
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
          class="h-[35px] w-[170px] hidden lg:inline-block mr-1"
        >
          <img src="/image/logo.png" alt="logo" class="h-[30px] w-[170px]" />
        </RouterLink>

        <button
          class="hidden lg:inline-block px-3 py-1 text-md hover:bg-slate-50 rounded-md mr-1.5"
        >
          Kategori
        </button>

        <div class="flex items-center">
          <button
            v-if="showButton || isPageType(route, 'merchant')"
            @click="back"
            class="pr-1.5 py-1.5 hover:text-purple-600 rounded-md block lg:hidden items-center"
          >
            <AkArrowLeft class="h-7 w-7" />
          </button>

          <div
            v-if="
              isPageType(route, 'cart') ||
              isPageType(route, 'wishlist') ||
              isPageType(route, 'userSettings') ||
              isPageType(route, 'userAddress') ||
              isPageType(route, 'transaction')
            "
            class="inline-block lg:hidden font-bold"
          >
            {{ route.name }}
          </div>
        </div>

        <div v-if="!showButton || isLargeScreen" class="w-full mx-auto mr-3">
          <SearchBar />
        </div>

        <div class="flex justify-center items-center space-x-3">
          <ButtonCart />

          <div class="border-l-2 border-purple-300 py-3"></div>

          <AkTextAlignJustified
            class="w-7 h-7 inline-block md:hidden"
            @click="visibleBottom = true"
            severity="secondary"
          />

          <div class="hidden md:flex space-x-2">
            <Button
              v-on:click="scrollTop"
              as="router-link"
              label="Login"
              :to="urlPage.LOGIN"
              class="w-full"
              :style="{
                background: 'white',
                color: '#9333ea',
                padding: '3px 12px 3px 12px',
              }"
            />
            <Button
              v-on:click="scrollTop"
              as="router-link"
              label="Register"
              :to="urlPage.REGISTER_USER"
              class="w-full"
              :style="{
                padding: '3px 12px 3px 12px',
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <Dialog
    v-model:visible="visibleBottom"
    position="bottom"
    :modal="true"
    :showHeader="false"
    :draggable="false"
    :style="{
      height: '100vh',
      margin: '0px',
      padding: '0px',
      maxHeight: '100%',
      backgroundColor: 'rgb(var(--NN50, 240, 243, 247))',
    }"
  >
    <SidebarNav :toggleSidebar="toggleSidebar" />
  </Dialog>
</template>

<style scoped>
.bg-cartpage {
  background-color: rgb(var(--NN50, 240, 243, 247));
}
</style>

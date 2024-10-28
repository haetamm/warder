<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { AnOutlinedShoppingCart, BxSearch } from '@kalimahapps/vue-icons'

const isVisible = ref(true)
let lastScrollTop = 0

const handleScroll = () => {
  const currentScrollTop = window.scrollY
  isVisible.value = currentScrollTop < lastScrollTop || currentScrollTop === 0
  lastScrollTop = currentScrollTop
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    class="w-full border-b-2 fixed bg-white z-50"
    :class="{ hidden: !isVisible }"
  >
    <div class="kontener mx-auto">
      <div class="flex justify-center items-center px-6 py-3 gap-2">
        <img
          src="/image/logo.png"
          alt="logo"
          class="hidden md:inline-block h-[35px] w-[160px]"
        />
        <button
          class="hidden md:inline-block px-3 py-1 text-md hover:bg-slate-50 rounded-md"
        >
          Kategori
        </button>

        <form class="w-full mx-auto">
          <div class="relative">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <BxSearch class="h-6 w-6" />
            </div>
            <input
              type="search"
              class="block w-full p-3 ps-10 text-sm text-gray-900 border-gray-200 border outline-purple-600 focus:border-none rounded-lg bg-gray-50"
              placeholder="Cari di waroeng sederhana"
              required
            />
          </div>
        </form>

        <button class="px-3 py-3 hover:bg-slate-50 rounded-md items-center">
          <AnOutlinedShoppingCart class="h-6 w-6" />
        </button>

        <div class="border-l-2 border-purple-300 py-3 px-1"></div>
        <button
          class="px-3 py-1 text-md hover:bg-purple-600 rounded-md border-2 border-purple-600 text-purple-600 hover:text-white"
        >
          Login
        </button>

        <button
          class="px-3 py-1 text-md bg-purple-600 rounded-md border-2 text-white border-purple-600"
        >
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

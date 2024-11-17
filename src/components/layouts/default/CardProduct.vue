<script setup lang="ts">
import { isPageType, scrollTop } from '@/utils/helper'
import type { ProductCardProps } from '@/utils/interface'
import { AnFilledStar, BsThreeDots } from '@kalimahapps/vue-icons'
import { defineProps } from 'vue'
import { useRoute } from 'vue-router'

defineProps<{
  product: ProductCardProps
}>()

const route = useRoute()
</script>

<template>
  <div
    class="h-1/2 w-full"
    :style="{
      scrollSnapAlign: 'start',
      backgroundImage: `url(${product.poster_path})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  ></div>

  <div class="h-1/2 flex flex-col text-sm">
    <router-link
      :to="`${product.merchant_name}/${product.id}`"
      :onclick="scrollTop"
      class="p-2"
      :class="
        isPageType(route, 'wishlist')
          ? 'space-y-1.5'
          : 'space-y-0 md:space-y-0.5'
      "
    >
      <p class="line-clamp-3">
        Ellipsesinc - Kaos Oversize Pria Wanita NY - Putih
      </p>
      <p class="font-bold">Rp43.900</p>
      <p>Jakarta Barat</p>
      <div class="flex items-center">
        <AnFilledStar />
        <p class="ml-1">. 4.1 | 400 Terjual</p>
      </div>
    </router-link>
    <div
      v-if="isPageType(route, 'wishlist')"
      class="flex items-center space-x-1 mt-auto mx-1 mb-1"
    >
      <div class="border-[1px] border-gray-400 rounded-lg p-2.5">
        <BsThreeDots />
      </div>
      <button
        class="px-3 py-2 rounded-lg w-full border-[1px] text-purple-600 border-purple-600"
      >
        + Keranjang
      </button>
    </div>
  </div>
</template>

<style scoped></style>

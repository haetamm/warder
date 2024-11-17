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

  <div class="h-1/2 flex flex-col text-sm text-black">
    <router-link
      :to="`${product.merchant_name}/${product.id}`"
      :onclick="scrollTop"
      class="p-2 space-y-1"
    >
      <p class="line-clamp-2">
        {{ product.product_name }} - {{ product.color }}
      </p>
      <p class="font-bold">{{ product.price }}</p>
      <p>{{ product.address }}</p>
      <div class="flex items-center">
        <AnFilledStar />
        <p class="ml-1">
          . {{ product.rating }} | {{ product.count_sales }} Terjual
        </p>
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

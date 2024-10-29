<script setup lang="ts">
import type { ProductCardProps } from '@/utils/interface'
import { AnFilledStar } from '@kalimahapps/vue-icons'
import { defineProps } from 'vue'

defineProps<{
  product: ProductCardProps
}>()
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

  <div class="p-1 h-1/2 flex flex-col justify-center text-sm">
    <p>Ellipsesinc - Kaos Oversize Pria Wanita NY - Putih</p>
    <p>Rp43.900</p>
    <p>Jakarta Barat</p>
    <div class="flex items-center">
      <AnFilledStar />
      <p class="ml-1">. 4.1 | 400 Terjual</p>
    </div>
  </div>
</template>

<style scoped></style>

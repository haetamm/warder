<script setup lang="ts">
import { ref, defineProps } from 'vue'
import CardProduct from './CardProduct.vue'
import { urlPage } from '@/utils/constans'
import type { ProductCardProps } from '@/utils/interface'
import { scrollTop } from '@/utils/helper'

defineProps<{
  products: ProductCardProps[]
}>()

const carouselRef = ref<HTMLDivElement | null>(null)

const scroll = (direction: 'left' | 'right') => {
  if (carouselRef.value) {
    const scrollAmount = carouselRef.value.offsetWidth / 2
    carouselRef.value.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <div class="kontener mx-auto px-2 xl:px-0 items-center mb-3">
    <div class="text-xl font-bold mb-2">Perlengkapan Sekolah</div>
    <div class="relative w-full h-[290px] text-sm">
      <button
        @click="scroll('left')"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      >
        ◀
      </button>

      <div
        ref="carouselRef"
        class="flex overflow-x-scroll xl:overflow-x-hidden scroll-smooth space-x-2 w-full"
        :style="{ scrollSnapType: 'x mandatory' }"
      >
        <div
          v-for="(product, index) in products"
          :key="index"
          class="relative group w-[165px] h-[286px] md:w-[185px] border-2 rounded-lg flex-shrink-0 overflow-hidden cursor-pointer"
        >
          <RouterLink
            :to="`${urlPage.PRODUCT}/${product.id}`"
            :onclick="scrollTop"
          >
            <CardProduct :product="product" />
          </RouterLink>
        </div>
      </div>

      <button
        @click="scroll('right')"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      >
        ▶
      </button>
    </div>
  </div>
</template>

<style scoped></style>

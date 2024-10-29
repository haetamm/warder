<script setup lang="ts">
import MultipleCarousel from '@/components/layouts/MultipleCarousel.vue'
import HeroCarousel from '@/components/pages/home/HeroCarousel.vue'
import { carouselData1 } from '@/utils/data'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Warder',
  meta: [
    { name: 'description', content: 'Detailed information about the product' },
    { name: 'keywords', content: 'product, details, vue' },
  ],
})
</script>

<template>
  <div class="flex-grow">
    <HeroCarousel />
    <br />
    <MultipleCarousel :products="carouselData1" />
    <br />
    <MultipleCarousel :products="carouselData1" />
    <br />
    <MultipleCarousel :products="carouselData1" />
    <br />
  </div>
</template>

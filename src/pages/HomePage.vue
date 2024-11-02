<script setup lang="ts">
import MultipleCarousel from '@/components/layouts/MultipleCarousel.vue'
import HeroCarousel from '@/components/pages/home/HeroCarousel.vue'
import ListProductHomePage from '@/components/pages/home/ListProductHomePage.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Warder',
  meta: [
    { name: 'description', content: 'Warder Home Page' },
    { name: 'keywords', content: 'marketplace, warder' },
  ],
})
</script>

<template>
  <div class="flex-grow pt-[45px] xl:pt-[55px]">
    <HeroCarousel />
    <br />
    <MultipleCarousel />
    <br />
    <MultipleCarousel />
    <br />
    <div class="kontener mx-auto">
      <ListProductHomePage />
    </div>
  </div>
</template>

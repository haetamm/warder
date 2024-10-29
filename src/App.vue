<script setup lang="ts">
import FooterComp from './components/layouts/FooterComp.vue'
import HeroCarousel from './components/layouts/HeroCarousel.vue'
import MultipleCarousel from './components/layouts/MultipleCarousel.vue'
import NavBar from './components/layouts/NavBar.vue'
import { carouselData1 } from './utils/data'
</script>

<template>
  <NavBar />
  <HeroCarousel />
  <br />
  <MultipleCarousel :products="carouselData1" />
  <br />
  <MultipleCarousel :products="carouselData1" />
  <br />
  <MultipleCarousel :products="carouselData1" />
  <br />
  <FooterComp />
  <RouterView />
</template>

<style scoped></style>

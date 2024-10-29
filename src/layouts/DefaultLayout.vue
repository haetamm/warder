<script setup lang="ts">
import FooterComp from '@/components/layouts/FooterComp.vue'
import NavBar from '@/components/layouts/NavBar.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <RouterView />
    <FooterComp />
  </div>
</template>

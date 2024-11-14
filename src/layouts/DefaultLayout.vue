<script setup lang="ts">
import FooterComp from '@/components/layouts/default/FooterComp.vue'
import NavBar from '@/components/layouts/default/NavBar.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <RouterView />
    <FooterComp />
  </div>
</template>

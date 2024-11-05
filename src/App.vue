<script setup lang="ts">
import { applyPrimaryPalette } from '@/mixins/themeMixin'
import { onMounted } from 'vue'

onMounted(() => {
  applyPrimaryPalette()
})
</script>

<template>
  <div id="#app">
    <RouterView />
  </div>
</template>

<style scoped></style>

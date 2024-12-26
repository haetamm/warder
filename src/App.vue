<script setup lang="ts">
import { applyPrimaryPalette } from '@/mixins/themeMixin'
import { onMounted } from 'vue'

onMounted(() => {
  applyPrimaryPalette()
  // document.addEventListener('contextmenu', event => {
  //   event.preventDefault()
  // })

  // document.addEventListener('keydown', event => {
  //   if (event.key === 'F12') {
  //     event.preventDefault()
  //   }

  //   if (event.ctrlKey && event.shiftKey && event.key === 'I') {
  //     event.preventDefault()
  //   }

  //   if (event.ctrlKey && event.shiftKey && event.key === 'J') {
  //     event.preventDefault()
  //   }

  //   if (event.ctrlKey && event.key === 'U') {
  //     event.preventDefault()
  //   }
  // })
})
</script>

<template>
  <div id="#app">
    <RouterView />
  </div>
</template>

<style scoped></style>

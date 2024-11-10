<script setup lang="ts">
import { Button } from 'primevue'
</script>

<template>
  <div
    class="flex tabCs:hidden hidden-costome justify-between items-center bottom-0 fixed w-full z-50 space-x-1 px-2 py-1.5 shadow-3xl shadow-black bg-white"
  >
    <Button
      label="Beli"
      class="w-full"
      :style="{ borderColor: 'var(--p-button-outlined-primary-color)' }"
      variant="outlined"
    />
    <Button label="+ Keranjang" class="w-full" />
  </div>
</template>

<style scoped>
@media (min-height: 1024px) and (min-width: 768px) {
  .hidden-costome {
    display: none;
  }
}

@media (min-height: 1180px) and (min-width: 820px) {
  .hidden-costome {
    display: none;
  }
}

@media (min-height: 1280px) {
  .hidden-costome {
    display: none;
  }
}
</style>

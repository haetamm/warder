<script setup lang="ts">
import FormProduct from '@/components/pages/sellerProductPage/FormProduct.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Tambah Produk | Warder Seller',
  meta: [
    { name: 'description', content: 'Seller dashboard product seller' },
    { name: 'keywords', content: 'product, details, vue' },
  ],
})
</script>
<template>
  <div class="w-full lg:mb-4 md:mt-2 xl:mt-4">
    <div class="mx-1 lg:mx-2 py-6 md:py-2 px-3 lg:p-6 bg-white rounded-md">
      <FormProduct />
    </div>
  </div>
</template>
<style scoped></style>

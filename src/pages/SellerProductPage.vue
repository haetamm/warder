<script setup lang="ts">
import ProductTable from '@/components/pages/sellerProductPage/ProductTable.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Produk | Warder Seller',
  meta: [
    { name: 'description', content: 'Seller dashboard product seller' },
    { name: 'keywords', content: 'product, details, vue' },
  ],
})
</script>
<template>
  <div class="w-full lg:mb-2 xl:mb-0 md:mt-2 xl:mt-4">
    <div class="mx-1 lg:mx-2 py-6 md:py-2 px-2 lg:p-6 bg-white rounded-md">
      <ProductTable />
    </div>
  </div>
</template>
<style scoped></style>

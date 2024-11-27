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
    <div class="px-2 lg:px-4">
      <ProductTable />
    </div>
  </div>
</template>
<style scoped></style>

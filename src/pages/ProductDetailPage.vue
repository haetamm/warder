<script setup lang="ts">
import CartProduct from '@/components/pages/productDetail/CartProduct.vue'
import DetailProduct from '@/components/pages/productDetail/DetailProduct.vue'
import ImageProduct from '@/components/pages/productDetail/ImageProduct.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Detail Product',
  meta: [
    { name: 'description', content: 'Detailed information about the product' },
    { name: 'keywords', content: 'product, details, vue' },
  ],
})
</script>
<template>
  <div class="flex-grow mt-[50px] xs:mt-[65px] lg:mt-[70px] mb-5">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[30%_45%_25%] kontener mx-auto gap-2"
    >
      <ImageProduct />
      <DetailProduct />
      <CartProduct />
    </div>
  </div>
</template>

<style></style>

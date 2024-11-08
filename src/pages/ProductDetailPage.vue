<script setup lang="ts">
import ButtonCheckout from '@/components/pages/productDetail/ButtonCheckout.vue'
import CartProduct from '@/components/layouts/CartProduct.vue'
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
  <div
    class="flex-grow mt-[52px] xs:mt-[55px] md:pt-[10px] lg:mt-[45px] xl:mt-[55px]"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[30%_45%_25%] kontener mx-auto gap-2"
    >
      <div
        class="h-full md:h-[calc(100vh-70px)] md:sticky top-[70px] overflow-hidden"
      >
        <ImageProduct />
      </div>

      <div
        class="overflow-y-scroll no-scrollbar h-full md:h-[calc(100vh-70px)]"
      >
        <DetailProduct />
      </div>

      <div
        class="h-full md:h-[calc(100vh-70px)] md:sticky top-[70px] overflow-hidden hidden lg:flex justify-center"
      >
        <div class="lg:w-[250px] xl:w-[268px]">
          <CartProduct />
        </div>
      </div>
    </div>
  </div>
  <ButtonCheckout />
</template>

<style scoped></style>

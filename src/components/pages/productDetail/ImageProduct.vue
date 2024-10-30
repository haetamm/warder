<script setup lang="ts">
import CartProduct from '@/components/layouts/CartProduct.vue'
</script>

<template>
  <div class="flex justify-center lg:justify-start">
    <img
      src="https://images.tokopedia.net/img/cache/700/VqbcmM/2024/1/11/cec7f6e0-8907-4674-b554-aaa2c5cbfd52.jpg.webp?ect=3g"
      alt="product-image"
      class="h-[350px] w-full xs:w-[350px] md:h-[270px] md:w-[270px] xl:h-[350px] xl:w-[350px] rounded-none xs:rounded-lg"
    />
  </div>
  <div
    class="hidden md:flex justify-center mt-6 lg:hidden cart-product-container"
  >
    <div class="w-[270px] flex justify-center">
      <CartProduct />
    </div>
  </div>
</template>

<style scoped>
@media (max-height: 500px) {
  .cart-product-container {
    display: none;
  }
}
</style>

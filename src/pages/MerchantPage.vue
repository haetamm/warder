<script setup lang="ts">
import HeaderMerchantPage from '@/components/pages/merchant/HeaderMerchantPage.vue'
import ListProduct from '@/components/pages/merchant/ListProduct.vue'
import NavListProduct from '@/components/pages/merchant/NavListProduct.vue'
</script>

<template>
  <div
    class="flex-grow kontener mx-auto mt-[55px] md:mt-[45px] lg:mt-[65px] px-1"
  >
    <HeaderMerchantPage />
    <div class="mt-5 mb-5">
      <div
        class="grid grid-cols-1 md:grid-cols-[12%_87%] xl:grid-cols-[15%_85%] gap-0 md:gap-1"
      >
        <NavListProduct />

        <ListProduct />
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

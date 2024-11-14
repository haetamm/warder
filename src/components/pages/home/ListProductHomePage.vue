<script setup lang="ts">
import CardProduct from '@/components/layouts/default/CardProduct.vue'
import { dataProduct } from '@/utils/data'
import { scrollTop } from '@/utils/helper'
</script>

<template>
  <div
    class="w-full gap-0 md:gap-1.5 grid grid-cols-1 xxs:grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 relative justify-center"
  >
    <div
      v-for="(product, index) in dataProduct"
      :key="index"
      class="relative h-min-[450px] m-3 mx-auto"
    >
      <div
        class="relative w-[250px] xxs:w-[175px] h-[286px] lg:w-[175px] xl:w-[185px] group border-[1px] rounded-lg flex-shrink-0 overflow-hidden cursor-pointer"
      >
        <router-link
          :to="`${product.merchant_name}/${product.id}`"
          :onclick="scrollTop"
        >
          <CardProduct :product="product" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardProduct from '@/components/layouts/CardProduct.vue'
import { dataProduct } from '@/utils/data'
import { scrollTop } from '@/utils/helper'
</script>

<template>
  <div
    class="overflow-y-scroll no-scrollbar h-full md:h-[calc(100vh-70px)] lg:h-[calc(100vh-89px)] border-l-none md:border-l-2"
  >
    <div class="pl-0 md:pl-3 xl:pl-8 py-1">
      <div
        class="w-full gap-0 grid grid-cols-1 xxs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 relative justify-center"
      >
        <div
          v-for="(product, index) in dataProduct"
          :key="index"
          class="relative h-min-[450px] m-3 mx-auto"
        >
          <div
            class="relative w-[250px] xxs:w-[165px] h-[286px] lg:w-[175px] xl:w-[185px] group border-2 rounded-lg flex-shrink-0 overflow-hidden cursor-pointer"
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
    </div>
  </div>
</template>

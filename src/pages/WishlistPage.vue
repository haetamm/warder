<script setup lang="ts">
import CardProduct from '@/components/layouts/default/CardProduct.vue'
import { dataProduct } from '@/utils/data'
import { useHead } from '@vueuse/head'
import { Select } from 'primevue'
import { ref } from 'vue'

useHead({
  title: 'Wishlist | Warder',
  meta: [
    { name: 'description', content: 'Warder Wishlist Page' },
    { name: 'keywords', content: 'marketplace, wishlist' },
  ],
})

const selectedSorted = ref()
const sort = ref([
  { name: 'Terbaru Disimpan', code: 'ASC' },
  { name: 'Terlama Disimpan', code: 'DESC' },
])
</script>

<template>
  <div class="flex-grow kontener mx-auto pt-[75px]">
    <div
      class="mt-1 flex justify-between items-end xs:items-center px-3 w-full"
    >
      <div class="w-full">
        <span class="hidden md:inline-block font-bold text-3xl">
          Semua Wishlist <span class="font-normal">|</span>
        </span>
        20 Barang
      </div>

      <Select
        v-model="selectedSorted"
        :options="sort"
        placeholder="Urutkan"
        optionLabel="name"
        class="w-full md:w-56"
      />
    </div>
    <div
      class="w-full gap-0 grid grid-cols-1 xxs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 relative justify-center mt-3"
    >
      <div
        v-for="(product, index) in dataProduct"
        :key="index"
        class="relative h-min-[450px] m-3 mx-auto"
      >
        <div
          class="relative w-[250px] xxs:w-[175px] xs:w-[205px] h-[400px] xl:w-[230px] group border-[1px] rounded-lg flex-shrink-0 overflow-hidden cursor-pointer"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

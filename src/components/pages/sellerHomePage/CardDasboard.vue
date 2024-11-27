<script setup lang="ts">
import { CaWarning } from '@kalimahapps/vue-icons'
import { ref } from 'vue'

const statusList = [
  {
    title: 'Produk Dilihat',
    value: '0',
    link: '/seller/product/create',
    linkText: 'Tambah Produk',
  },
  {
    title: 'Dalam Keranjang',
    value: '0',
    percentage: '0% dari 30 hari terakhir',
  },
]

const listCard = ref(statusList)
</script>

<template>
  <div
    class="inline-block lg:flex space-x-0 space-y-2 lg:space-y-0 lg:space-x-2 w-full"
  >
    <div
      v-for="(item, index) in listCard"
      :key="index"
      class="border-[1px] rounded-md w-full lg:w-1/2 p-3 text-sm"
    >
      <div class="flex items-center space-x-1 text-gray-600 mb-1">
        <div>{{ item.title }}</div>
        <CaWarning class="w-4 h-4" />
      </div>
      <div class="font-bold text-2xl mb-1">{{ item.value }}</div>
      <p v-if="item.percentage">{{ item.percentage }}</p>
      <router-link
        v-if="item.link"
        :to="item.link"
        class="text-purple-600 font-bold"
      >
        {{ item.linkText }}
      </router-link>
    </div>
  </div>
</template>

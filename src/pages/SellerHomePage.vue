<script setup lang="ts">
import CardDasboard from '@/components/pages/sellerHomePage/CardDasboard.vue'
import ListArticle from '@/components/pages/sellerHomePage/ListArticle.vue'
import StartGuide from '@/components/pages/sellerHomePage/StartGuide.vue'
import TrendCardDashboard from '@/components/pages/sellerHomePage/TrendCardDashboard.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Seller Dashboard | Warder',
  meta: [
    { name: 'description', content: 'Seller dashboard about seler' },
    { name: 'keywords', content: 'product, details, vue' },
  ],
})
</script>
<template>
  <div
    class="w-full grid grid-cols-1 lg:grid-cols-[60%_40%] xl:grid-cols-[65%_35%] lg:mb-2 xl:mb-0 min-h-screen"
  >
    <div class="mt-4 w-full md:border-r-[1px] px-2">
      <p class="font-bold text-lg">Selamat datang di Waroeng Sederhana!</p>
      <p class="text-sm">
        Kuti rekomendasi dan misi untuk raih penjualan pertama.
      </p>
      <CardDasboard />
      <TrendCardDashboard />
    </div>
    <div class="mt-4 w-full px-2 mb-5">
      <StartGuide />

      <ListArticle />
    </div>
  </div>
</template>
<style scoped></style>

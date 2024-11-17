<script setup lang="ts">
import CardDasboard from '@/components/pages/sellerHomePage/CardDasboard.vue'
import ListArticle from '@/components/pages/sellerHomePage/ListArticle.vue'
import StartGuide from '@/components/pages/sellerHomePage/StartGuide.vue'
import TrendCardDashboard from '@/components/pages/sellerHomePage/TrendCardDashboard.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Dashboard | Warder Seller',
  meta: [
    { name: 'description', content: 'Seller dashboard about seller' },
    { name: 'keywords', content: 'dashboard, details, vue' },
  ],
})
</script>
<template>
  <div
    class="w-full grid grid-cols-1 lg:grid-cols-[60%_40%] xl:grid-cols-[65%_35%] lg:mb-2 xl:pt-3 xl:mb-0 min-h-[calc(100vh-60px)]"
  >
    <div class="mt-2 w-full lg:border-r-[1px] px-1 md:px-2">
      <CardDasboard />
      <TrendCardDashboard />
    </div>
    <div class="mt-4 w-full px-1 md:px-2 mb-5">
      <StartGuide />

      <ListArticle />
    </div>
  </div>
</template>
<style scoped></style>

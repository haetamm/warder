<script setup lang="ts">
import FormRegisterMerchant from '@/components/pages/shop/FormRegisterMerchant.vue'
import MiniHero from '@/components/pages/shop/MiniHero.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'My Shop | Warder',
  meta: [
    { name: 'description', content: 'Warder My Shop Page' },
    { name: 'keywords', content: 'marketplace, warder, my shop' },
  ],
})
</script>
<template>
  <div class="flex-grow pt-[41px] xl:pt-[60px] kontener mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-[50%_50%]">
      <MiniHero />

      <FormRegisterMerchant />
    </div>
  </div>
</template>

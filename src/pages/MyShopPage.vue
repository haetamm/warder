<script setup lang="ts">
import FormRegisterMerchant from '@/components/pages/shop/FormRegisterMerchant.vue'
import MiniHero from '@/components/pages/shop/MiniHero.vue'
import { useUserStore } from '@/stores/user'
import { urlPage } from '@/utils/constans'
import { useHead } from '@vueuse/head'
import { useRouter } from 'vue-router'

const { roles } = useUserStore()
const router = useRouter()

useHead({
  title: 'My Shop | Warder',
  meta: [
    { name: 'description', content: 'Warder My Shop Page' },
    { name: 'keywords', content: 'marketplace, warder, my shop' },
  ],
})

if (roles.includes('SELLER')) {
  router.push(urlPage.SELLER_HOME)
}

if (roles.includes('ADMIN')) {
  router.push(urlPage.HOME)
}
</script>
<template>
  <div class="flex-grow pt-[41px] xl:pt-[60px] kontener mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-[50%_50%]">
      <MiniHero />

      <FormRegisterMerchant />
    </div>
  </div>
</template>

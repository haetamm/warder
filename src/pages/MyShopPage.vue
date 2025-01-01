<script setup lang="ts">
import FormRegisterMerchant from '@/components/pages/shop/FormRegisterMerchant.vue'
import MiniHero from '@/components/pages/shop/MiniHero.vue'
import { useUserStore } from '@/stores/user'
import { urlPage } from '@/utils/constans'
import { useHead } from '@vueuse/head'
import { computed, watch } from 'vue'
import { useRouter } from 'vue-router'

useHead({
  title: 'My Shop | Warder',
  meta: [
    { name: 'description', content: 'Warder My Shop Page' },
    { name: 'keywords', content: 'marketplace, warder, my shop' },
  ],
})

const userStore = useUserStore()
const roles = computed(() => userStore.roles)
const router = useRouter()

watch(
  roles,
  newRoles => {
    if (newRoles.includes('SELLER')) {
      router.push(urlPage.SELLER_HOME)
    } else if (newRoles.includes('ADMIN')) {
      router.push(urlPage.HOME)
    }
  },
  { immediate: true },
)
</script>

<template>
  <template v-if="userStore.loading">
    <div
      class="h-screen flex absolute z-50 w-full bg-white items-center justify-center"
    >
      <div class="text-xl">Loading</div>
    </div>
  </template>
  <div
    v-if="roles.length === 1 && roles.includes('USER')"
    class="flex-grow pt-[41px] xl:pt-[60px] kontener mx-auto"
  >
    <div class="grid grid-cols-1 lg:grid-cols-[50%_50%]">
      <MiniHero />
      <FormRegisterMerchant />
    </div>
  </div>
</template>

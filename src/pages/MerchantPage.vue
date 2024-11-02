<script setup lang="ts">
import HeaderMerchantPage from '@/components/pages/merchant/HeaderMerchantPage.vue'
import ListProduct from '@/components/pages/merchant/ListProduct.vue'
import NavListProduct from '@/components/pages/merchant/NavListProduct.vue'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const merchantName = computed(
  () => (route.params.merchant as string) || 'Not Found',
)

useHead({
  title: computed(() => `${merchantName.value}`),
  meta: [
    { name: 'description', content: 'Detailed information about the merchant' },
    { name: 'keywords', content: `product, details, ${merchantName.value}` },
  ],
})
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

        <div
          class="overflow-y-scroll no-scrollbar h-full md:h-[calc(100vh-70px)] lg:h-[calc(100vh-89px)] border-l-none md:border-l-2"
        >
          <ListProduct />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

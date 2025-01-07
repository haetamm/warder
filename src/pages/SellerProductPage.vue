<script setup lang="ts">
import ProductTable from '@/components/pages/sellerProductPage/ProductTable.vue'
import { useProductStore } from '@/stores/product'
import type { ProductResponse } from '@/utils/interface'
import { useHead } from '@vueuse/head'
import { useToast } from 'primevue'
import { onMounted } from 'vue'

useHead({
  title: 'Produk | Warder Seller',
  meta: [
    { name: 'description', content: 'Seller dashboard product seller' },
    { name: 'keywords', content: 'product, details, vue' },
  ],
})

const productStore = useProductStore()
const toast = useToast()

onMounted(() => {
  productStore
    .getProducts(toast)
    .then((response: ProductResponse[]) => {
      productStore.setProducts(response)
    })
    .catch((err: unknown) => {
      console.error(err)
    })
})
</script>
<template>
  <div class="w-full lg:mb-2 xl:mb-0 md:mt-2 xl:mt-4">
    <div class="mx-1 lg:mx-2 py-6 md:py-2 px-2 lg:p-6 bg-white rounded-md">
      <ProductTable />
    </div>
  </div>
</template>
<style scoped></style>

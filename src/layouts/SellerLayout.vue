<script setup lang="ts">
import SellerMobileSidebar from '@/components/layouts/seller/SellerMobileSidebar.vue'
import SellerNavBar from '@/components/layouts/seller/SellerNavBar.vue'
import SellerSidebar from '@/components/layouts/seller/SellerSidebar.vue'
import { useUserStore } from '@/stores/user'
import { urlPage } from '@/utils/constans'
import { useRouter } from 'vue-router'
import Toast from 'primevue/toast'
import { useSellerStore } from '@/stores/seller'
import { useToast } from 'primevue'
import { computed, onMounted, watch, ref } from 'vue'
import { useProductStore } from '@/stores/product'
import type { ProductResponse } from '@/utils/interface'

const sellerStore = useSellerStore()
const toast = useToast()

const userStore = useUserStore()
const productStore = useProductStore()
const roles = computed(() => userStore.roles)
const router = useRouter()

const dataLoaded = ref(false)

onMounted(() => {
  dataLoaded.value = true
  sellerStore.getSeller(toast)
  productStore.getProducts(toast).then((response: ProductResponse[]) => {
    productStore.setProducts(response)
  })
})

watch(
  roles,
  newRoles => {
    if (dataLoaded.value) {
      if (!newRoles.includes('SELLER') || newRoles.includes('ADMIN')) {
        console.log('kocak')
        router.push(urlPage.MY_SHOP)
      }
    }
  },
  { immediate: true },
)
</script>

<template>
  <Toast
    position="top-right"
    :style="{ width: '320px', fontSize: '10px' }"
    warn-icon="true"
  />
  <template v-if="userStore.loading">
    <div
      class="h-screen fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <div class="text-xl">Loading</div>
    </div>
  </template>

  <div class="bg-custom">
    <SellerNavBar />
    <div class="kontenir mx-auto">
      <div class="pt-[65px] md:pt-[54px] xl:pt-[60px] mb-14 md:mb-0">
        <div
          class="grid grid-cols-1 md:grid-cols-[13%_87%] xl:grid-cols-[16%_84%]"
        >
          <div
            class="hidden bg-white sticky top-0 border-r-2 h-full md:h-[calc(100vh-54px)] xl:h-[calc(100vh-60px)] md:flex flex-col justify-between py-3 px-[3px] xl:px-0 pt-5 z-50"
          >
            <SellerSidebar />
          </div>

          <div
            class="overflow-y-auto no-scrollbar h-full md:h-[calc(100vh-54px)] xl:h-[calc(100vh-60px)]"
          >
            <RouterView />
          </div>
        </div>
      </div>
    </div>
    <SellerMobileSidebar />
  </div>
</template>

<style scoped>
.kontenir {
  width: 100%;
}

@media (min-width: 1380px) {
  .kontenir {
    max-width: 1380px;
  }
}
</style>

<script setup lang="ts">
import SellerMobileSidebar from '@/components/layouts/seller/SellerMobileSidebar.vue'
import SellerNavBar from '@/components/layouts/seller/SellerNavBar.vue'
import SellerSidebar from '@/components/layouts/seller/SellerSidebar.vue'
</script>

<template>
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

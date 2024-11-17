<script setup lang="ts">
import SellerNavBar from '@/components/layouts/seller/SellerNavBar.vue'
import SellerSidebar from '@/components/layouts/seller/SellerSidebar.vue'
</script>

<template>
  <SellerNavBar />
  <div class="flex justify-center">
    <div class="kontener pt-[50px] lg:pt-[49px] xl:pt-[60px]">
      <div
        class="grid grid-cols-[15%_85%] xs:grid-cols-[13%_87%] xl:grid-cols-[16%_84%]"
      >
        <div
          class="sticky top-0 border-r-2 h-[calc(100vh-54px)] xl:h-[calc(100vh-60px)] flex flex-col justify-between py-3 px-[3px] xl:px-0 pt-5 z-50"
        >
          <SellerSidebar />
        </div>

        <div
          class="overflow-y-auto no-scrollbar h-[calc(100vh-50px)] xl:h-[calc(100vh-60px)]"
        >
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.kontener {
  width: 100%;
}

@media (min-width: 500px) {
  .kontener {
    max-width: 500px;
  }
}
@media (min-width: 640px) {
  .kontener {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .kontener {
    max-width: 768px;
  }
}
@media (min-width: 845px) {
  .kontener {
    max-width: 845px;
  }
}
@media (min-width: 1024px) {
  .kontener {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .kontener {
    max-width: 1280px;
  }
}

@media (min-width: 1340px) {
  .kontener {
    max-width: 1340px;
  }
}
</style>

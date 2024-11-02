<script setup lang="ts">
import { urlPage } from '@/utils/constans'
</script>

<template>
  <div class="inline-block md:flex items-center space-x-2 px-3 justify-center">
    <div class="flex justify-center items-center">
      <img
        src="https://images.tokopedia.net/img/purchase-platform/illustration/empty-state-pp.png"
        alt="no-product"
        class="w-[120px] h-[100px]"
      />
    </div>
    <div class="items-center mt-3 md:mt-0">
      <div class="text-lg font-bold text-center text-black">
        Wah, Keranjang belanjaanmu kosong
      </div>
      <div class="text-center mt-1 text-sm">
        Yuk, isi dengan barang-barang impianmu!
      </div>
      <div class="flex justify-center items-center mt-2 mb-6">
        <router-link
          :to="urlPage.HOME"
          class="py-1 px-3 border-2 rounded-md border-purple-600 text-purple-600"
        >
          Mulai Belanja
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-size-custome {
  font-size: 14px;
}
</style>

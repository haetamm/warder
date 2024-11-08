<script setup lang="ts">
import { urlPage } from '@/utils/constans'
import { scrollTop } from '@/utils/helper'
</script>

<template>
  <div
    class="flex justify-between md:hidden items-center bottom-0 fixed w-full space-x-1 px-2 py-1.5 z-50 shadow-3xl shadow-black bg-white border-t-2 border-gray-200"
  >
    <div class="flex flex-1 items-center space-x-1">
      <input type="checkbox" class="checkbox-custom" />
      <div class="text-md">semua</div>
    </div>
    <div class="flex justify-between space-x-2">
      <div class="text-normal text-sm flex-shrink-0">
        <p>Total</p>
        <p>Rp0</p>
      </div>
      <div class="flex justify-center text-center items-center">
        <router-link
          :to="urlPage.SHIPMENT"
          @click="scrollTop"
          class="w-full font-bold flex-1 min-w-[130px] py-1 border-2 border-purple-600 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          Beli
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

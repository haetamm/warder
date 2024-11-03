<script setup lang="ts">
import { ByChevronRight } from '@kalimahapps/vue-icons'
</script>

<template>
  <div class="px-4 pb-8 md:pt-[12px] flex justify-center">
    <div class="bg-white w-full rounded-xl">
      <div class="px-4 pt-4">
        <div class="font-bold text-md">Ringkasan Belanja</div>
        <div class="flex justify-between items-center border-b-2 pb-1 pr-2">
          <div class="mt-2 font-normal text-sm">Total</div>
          <div>-</div>
        </div>
        <div
          class="flex items-center justify-between mt-2 px-3 py-2 rounded-md border-2 border-purple-300 bg-purple-200"
        >
          <div class="flex items-center space-x-2">
            <img
              src="https://assets.tokopedia.net/asts/purchase-platform/icons/promo-coupon.svg"
              alt="promo-img"
              class="h-8 w-8"
            />
            <div class="text-sm">Makin hemat pakai promo</div>
          </div>
          <ByChevronRight />
        </div>
      </div>
      <div class="border-t-2 w-full my-3"></div>
      <div class="px-4 pb-6">
        <button
          disabled
          class="px-3 py-2 rounded-md bg-purple-600 w-full disabled:bg-slate-300 disabled:cursor-not-allowed"
        >
          Beli
        </button>
      </div>
    </div>
  </div>
</template>

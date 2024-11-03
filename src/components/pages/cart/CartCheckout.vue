<script setup lang="ts">
import { urlPage } from '@/utils/constans'
import { listCost } from '@/utils/data'
import { isPageType } from '@/utils/helper'
import { ByChevronRight } from '@kalimahapps/vue-icons'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="px-0 md:px-4 pb-3 md:pb-8 md:pt-[12px] flex justify-center">
    <div class="bg-white w-full rounded-none md:rounded-xl">
      <div class="px-4 pt-4">
        <div class="font-bold text-md">Ringkasan Belanja</div>
        <div
          v-if="isPageType(route, 'shipment')"
          class="items-start border-b-2 pb-2 pr-2"
        >
          <div
            class="mt-2 font-normal text-md flex justify-between items-center"
            v-for="(cost, index) in listCost"
            :key="index"
          >
            {{ cost }}
            <div>Rp0</div>
          </div>
        </div>

        <div class="flex justify-between items-center border-b-2 pb-2 pr-2">
          <div class="mt-2 font-normal text-md">
            {{ isPageType(route, 'shipment') ? 'Total Belanja' : 'Total' }}
          </div>
          <div>Rp0</div>
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
      <div class="px-4 pb-6 w-full flex justify-center text-center">
        <router-link
          :to="urlPage.SHIPMENT"
          disabled
          class="px-3 py-2 rounded-md bg-purple-600 w-full disabled:bg-slate-300 text-white"
        >
          {{ isPageType(route, 'shipment') ? 'Pilih Pembayaran' : 'Beli' }}
        </router-link>
      </div>
    </div>
  </div>
</template>

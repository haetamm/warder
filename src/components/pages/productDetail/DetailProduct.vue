<script setup lang="ts">
import { AnFilledStar } from '@kalimahapps/vue-icons'
import ShopCredential from './ShopCredential.vue'
import ShipmentProduct from './ShipmentProduct.vue'
</script>

<template>
  <div class="px-2">
    <div class="pb-6 border-b-2">
      <div class="font-bold text-xl mb-1">
        Smart watch Sport Gear Support Android IOS Sweatproof - black
      </div>
      <div class="flex lg:inline-block xl:flex items-center text-sm mb-4">
        <p class="mt-1">
          <span class="mr-1">Terjual</span>
          <span class="text-slate-500">90+</span>&nbsp; . &nbsp;
        </p>
        <p class="flex items-center mt-1">
          <AnFilledStar class="mr-1" /><span class="mr-1">4.5</span>
          <span class="text-slate-500">(45 Rating)</span>&nbsp; . &nbsp;
        </p>
        <p class="mt-1">
          <span class="mr-1">Diskusi</span>
          <span class="text-slate-500">(0)</span>
        </p>
      </div>
      <div class="text-2xl font-bold mb-1">Rp52.000</div>
      <div class="flex text-sm space-x-1">
        <small class="bg-red-400 text-white px-1 py-0 rounded-md">74%</small>
        <div class="text-slate-500 line-through">Rp200.000</div>
      </div>
    </div>
    <ShopCredential />
    <ShipmentProduct />
  </div>
</template>

<script setup lang="ts">
import { AkLocation, CaDeliveryTruck } from '@kalimahapps/vue-icons'
</script>

<template>
  <div class="pb-5 border-b-2 mt-4 px-1">
    <div class="mb-2">
      <p class="font-bold text-lg">Pengiriman</p>
      <div class="flex items-center space-x-1">
        <AkLocation class="w-5 h-5" />
        <p>Dikirim dari Jakarta Utara</p>
      </div>
      <div class="flex items-center space-x-1">
        <CaDeliveryTruck class="w-5 h-5" />
        <p>Ongkir Reguler 22rb - 22,8rb</p>
      </div>
      <p class="ml-6">Estimasi tiba 12-18 Sep</p>
    </div>
    <div class="flex items-center space-x-4">
      <div class="flex-1">
        <div class="flex ml-6 text-md min-w-0 p-0 space-x-2">
          <p>Kurir lainnya</p>
          <small class="px-2 py-0.5 bg-slate-400 rounded-md">Instan</small>
        </div>
      </div>
      <div class="font-bold text-sm text-purple-600 cursor-pointer">
        Lihat pilihan Kurir
      </div>
    </div>
  </div>
</template>

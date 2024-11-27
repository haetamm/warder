<script setup lang="ts">
import { urlPage } from '@/utils/constans'
import { scrollTop } from '@/utils/helper'
import { Button } from 'primevue'
</script>

<template>
  <div
    class="flex justify-between md:hidden items-center bottom-0 fixed w-full space-x-1 px-2 py-1.5 z-50 bg-white border-t-[1px] border-gray-200"
  >
    <div class="flex flex-1 items-center space-x-1">
      <input type="checkbox" class="checkbox-custom" />
      <div class="text-md">semua</div>
    </div>
    <div class="flex justify-between space-x-2">
      <div class="text-normal text-sm flex-shrink-0 text-end">
        <p>Total</p>
        <p>Rp0</p>
      </div>
      <div class="flex justify-center text-center items-center">
        <Button
          v-on:click="scrollTop"
          as="router-link"
          label="Beli"
          :to="urlPage.SHIPMENT"
          class="w-full flex-1 min-w-[130px]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

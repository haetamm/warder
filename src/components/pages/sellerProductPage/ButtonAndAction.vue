<script setup lang="ts">
import { urlPage } from '@/utils/constans'
import { Button } from 'primevue'

defineProps({
  handleExportCSV: {
    type: Function,
    required: true,
  },
})
</script>

<template>
  <div
    class="flex justify-between md:justify-end space-x-2 items-center order-1 lg:order-2 w-full lg:w-[40%] xl:w-full"
  >
    <Button
      icon="pi pi-external-link"
      size="small"
      :style="{ background: '#9333ea' }"
      label="Export"
      @click="handleExportCSV()"
    />
    <Button
      as="router-link"
      :to="urlPage.SELLER_CREATE_PRODUCT"
      size="small"
      :style="{ background: '#9333ea' }"
      icon="pi pi-plus"
      label="Tambah Produk"
    />
  </div>
</template>

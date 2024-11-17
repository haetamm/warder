<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Button,
  Column,
  DataTable,
  ToggleButton,
  IconField,
  InputIcon,
  InputText,
} from 'primevue'
import { productSeller } from '@/utils/data'
import { useMediaQuery } from '@vueuse/core'

const products = ref(productSeller)
const searchQuery = ref('')
const isLargeScreen = useMediaQuery('(min-width: 768px)')
const dt = ref()

// Filtered products based on search query (filter by name or SKU)
const filteredProducts = computed(() => {
  if (!searchQuery.value.trim()) {
    return products.value
  }
  return products.value.filter(
    product =>
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

const exportCSV = () => {
  dt.value.exportCSV()
}
</script>

<template>
  <div class="mx-0">
    <DataTable
      ref="dt"
      :value="filteredProducts"
      removableSort
      scrollable
      tableStyle="min-width: 360px"
      :scrollHeight="isLargeScreen ? '420px ' : 'none'"
      paginator
      class="text-black"
      :rows="9"
    >
      <div
        class="flex flex-col xs:flex-row justify-between w-full items-center mb-5"
      >
        <div
          class="w-full xs:w-1/2 inline-block xs:flex justify-start items-center order-2 xs:order-1 mt-4 xs:mt-0"
        >
          <IconField>
            <InputIcon>
              <i class="pi pi-search" />
            </InputIcon>
            <InputText
              v-model="searchQuery"
              class="w-full"
              placeholder="Cari berdasarkan Nama atau SKU"
            />
          </IconField>
        </div>

        <div
          class="flex justify-between xs:justify-end space-x-2 items-center order-1 xs:order-2 w-full xs:w-auto"
        >
          <Button
            icon="pi pi-external-link"
            class="font-bold text-sm"
            :style="{
              height: '42px',
              padding: '3px 6px 3px 6px',
              background: '#9333ea',
            }"
            label="Export"
            @click="exportCSV()"
          />
          <Button
            :style="{
              height: '42px',
              padding: '3px 6px 3px 6px',
              background: '#9333ea',
            }"
            class="font-bold text-sm"
            icon="pi pi-plus"
            label="Tambah Produk"
          />
        </div>
      </div>

      <template #empty> Tidak ada data produk yang ditemukan. </template>
      <template #loading> Memuat data produk. Mohon tunggu. </template>

      <Column
        class="min-w-[200px] text-black"
        field="name"
        header="INFO PRODUK"
        sortable
        :style="{ padding: '5px 2px 5px 2px' }"
      >
        <template #body="slotProps">
          <div class="flex space-x-2 items-center text-md">
            <img
              :src="slotProps.data.img"
              :alt="slotProps.data.img"
              class="w-[56px] h-[56px] rounded-md"
            />
            <div class="flex flex-col">
              <p class="line-clamp-2 text-sm xl:text-md">
                {{ slotProps.data.name }}
              </p>
              <small>SKU: {{ slotProps.data.sku }}</small>
            </div>
          </div>
        </template>
      </Column>
      <Column
        class="text-sm text-black"
        field="price"
        header="HARGA"
        sortable
      ></Column>
      <Column
        class="text-sm text-black"
        field="stock"
        header="STOK"
        sortable
      ></Column>
      <Column class="text-sm text-black" field="status" header="AKTIF">
        <template #body="slotProps">
          <ToggleButton
            v-model="slotProps.data.active"
            :style="{
              background: '#c084fc',
              color: 'white',
              padding: '6px 0px 6px 0px',
            }"
            class="w-20"
            onLabel="On"
            offLabel="Off"
          />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style scoped>
.p-togglebutton.p-togglebutton-checked::before {
  background: #6b21a8;
  color: white;
}
</style>

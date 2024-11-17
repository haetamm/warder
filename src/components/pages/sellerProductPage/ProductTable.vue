<script setup lang="ts">
import { ref } from 'vue'
import { Button, Column, DataTable, ToggleButton } from 'primevue'
import { productSeller } from '@/utils/data'
import { useMediaQuery } from '@vueuse/core'

const products = ref(productSeller)
const isLargeScreen = useMediaQuery('(min-width: 768px)')
const dt = ref()

const exportCSV = () => {
  dt.value.exportCSV()
}
</script>

<template>
  <div class="mx-0">
    <DataTable
      ref="dt"
      :value="products"
      removableSort
      scrollable
      tableStyle="min-width: 360px"
      :scrollHeight="isLargeScreen ? '400px ' : 'none'"
      paginator
      class="text-black"
      :rows="7"
    >
      <div class="justify-end space-x-2 flex mb-4">
        <Button
          icon="pi pi-external-link"
          class="font-bold text-sm"
          label="Export"
          @click="exportCSV()"
        />
        <Button class="font-bold text-sm" label="+ Tambah Produk" />
      </div>
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
              padding: '6px 3px 6px 3px',
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

<script setup lang="ts">
import { productPopular } from '@/utils/data'
import { currentDate } from '@/utils/helper'
import { CaWarning } from '@kalimahapps/vue-icons'
import { Column, DataTable } from 'primevue'
import { ref } from 'vue'

const products = ref(productPopular)
</script>

<template>
  <div class="mt-3 mb-0 w-full">
    <div class="border-[1px] rounded-lg w-full p-3 bg-white">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center space-x-1 font-bold text-md">
          <div>Tren Pasar</div>
          <CaWarning class="w-4 h-4" />
        </div>
        <div class="font-normal text-sm">{{ currentDate }}</div>
      </div>

      <DataTable :value="products" tableStyle="min-width: 360px ">
        <Column
          :style="{
            padding: '4px 8px 4px 8px',
            width: '60px',
          }"
        >
          <template #body="slotProps">
            <img
              :src="slotProps.data.image"
              :alt="slotProps.data.image"
              class="w-[46px] h-[46px] md:w-[55px] md:h-[55px] rounded-md"
            />
          </template>
        </Column>
        <Column field="name" header="Name" class="text-sm">
          <template #body="slotProps">
            <div class="line-clamp-1 text-black">
              {{ slotProps.data.name }}
            </div>
          </template>
        </Column>
        <Column
          field="price"
          header="Price"
          class="text-sm text-black"
        ></Column>
      </DataTable>
    </div>
  </div>
</template>

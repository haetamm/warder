<script setup lang="ts">
import { productPopular } from '@/utils/data'
import { currentDate } from '@/utils/helper'
import { CaWarning } from '@kalimahapps/vue-icons'
</script>

<template>
  <div class="mt-3 mb-0 w-full">
    <div class="border-[1px] rounded-lg w-full p-3">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center space-x-1 font-bold text-md">
          <div>Tren Pasar</div>
          <CaWarning class="w-4 h-4" />
        </div>
        <div class="font-normal text-sm">{{ currentDate }}</div>
      </div>

      <div class="overflow-x-auto w-full">
        <table class="table-auto font-normal text-md min-w-[400px] w-full">
          <thead class="font-normal">
            <tr>
              <th class="text-left py-2 px-4"></th>
              <th class="text-left py-2 px-4">Nama Produk</th>
              <th class="text-left py-2 px-4">Harga</th>
            </tr>
          </thead>
          <tbody class="text-sm">
            <tr
              v-for="(product, index) in productPopular"
              :key="index"
              class="border-b-2"
            >
              <td class="flex justify-center items-center w-14 xs:w-20 py-1">
                <img
                  :src="product.image"
                  alt="product-img"
                  class="w-[46px] h-[46px] rounded-md"
                />
              </td>
              <td class="px-4">
                {{ product.name }}
              </td>
              <td class="px-4 py-2">{{ product.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

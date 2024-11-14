<script setup lang="ts">
import { productPopular } from '@/utils/data'
import { currentDate } from '@/utils/helper'
import { AkChevronRight, CaWarning } from '@kalimahapps/vue-icons'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Seller Dashboard | Warder',
  meta: [
    { name: 'description', content: 'Seller dashboard about seler' },
    { name: 'keywords', content: 'product, details, vue' },
  ],
})
</script>
<template>
  <div
    class="w-full grid grid-cols-1 md:grid-cols-[60%_40%] xl:grid-cols-[70%_30%]"
  >
    <div class="mt-4 w-full border-r-[1px] px-2">
      <p class="font-bold text-lg">Selamat datang di Tokopedia!</p>
      <p class="text-sm">
        Kuti rekomendasi dan misi untuk raih penjualan pertama.
      </p>

      <div
        class="inline-block md:flex space-x-0 space-y-2 md:space-y-0 md:space-x-2 mt-2 w-full"
      >
        <div
          class="border-[1px] rounded-md w-full md:w-1/2 p-3 text-sm shadow-md"
        >
          <div class="flex items-center space-x-1 text-gray-600 mb-1">
            <div>Produk Dilihat</div>
            <CaWarning class="w-4 h-4" />
          </div>
          <div class="font-bold text-2xl mb-1">0</div>
          <router-link
            to="/seller/product/create"
            class="text-purple-600 font-bold"
          >
            Tambah Produk
          </router-link>
        </div>
        <div
          class="border-[1px] rounded-md w-full md:w-1/2 p-3 text-sm shadow-md"
        >
          <div class="flex items-center space-x-1 text-gray-600 mb-1">
            <div>Dalam Keranjang</div>
            <CaWarning class="w-4 h-4" />
          </div>
          <div class="font-bold text-2xl mb-1">0</div>
          <p class="">0% dari 30 hari terakhir</p>
        </div>
      </div>

      <div class="mt-3 mb-0 w-full">
        <div class="border-[1px] rounded-lg w-full p-5 shadow-md">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center space-x-1 font-bold text-md mb-2">
              <div>Tren Pasar</div>
              <CaWarning class="w-4 h-4" />
            </div>
            <div class="font-normal text-sm">{{ currentDate }}</div>
          </div>

          <div class="overflow-x-auto w-full">
            <table class="table-auto font-normal text-md min-w-[500px] w-full">
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
                  <td class="flex justify-center items-center w-20 py-1">
                    <img
                      :src="product.image"
                      alt="product-img"
                      class="w-10 h-10 rounded-md"
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
    </div>
    <div class="mt-4 w-full px-2 mb-5">
      <p class="font-bold text-lg">Keperluan untuk jualanmu</p>
      <p class="text-sm">Cek semuanya untuk tingkatkan performa toko</p>
      <div
        class="border-[1px] my-auto rounded-md w-full px-5 py-3 text-sm shadow-md mt-2 cursor-pointer h-[105px]"
      >
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-3 mb-1 justify-center">
            <img
              src="https://images.tokopedia.net/img/ns_handbook.png"
              alt="img-handbook"
              class="w-16 h-16"
            />
            <div class="flex flex-col">
              <div class="text-md font-bold">Sudah siap berjualan?</div>
              <small>Baca Panduan Memulai</small>
              <small>Usaha di Warder, yuk!</small>
            </div>
          </div>
          <AkChevronRight class="w-7 h-7" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

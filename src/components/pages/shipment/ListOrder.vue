<script setup lang="ts">
import { products } from '@/utils/data'
import { CaLocationFilled } from '@kalimahapps/vue-icons'
import { Select } from 'primevue'
import { ref } from 'vue'

const selectedCourier = ref([])
const courier = ref([
  { name: 'JNE' },
  { name: 'POS Indonesia' },
  { name: 'SiCepat' },
])
</script>

<template>
  <div class="px-0 md:px-4 pt-1 md:pt-3 pb-2">
    <div
      class="hidden md:flex bg-white w-full py-0 md:py-4 md:rounded-t-xl rounded-none justify-start px-4 items-center space-x-2"
    >
      <div class="font-bold text-lg">Pengiriman</div>
    </div>

    <div
      class="bg-white w-full py-3 md:py-6 my-2 px-2 xs:px-4 rounded-none xs:rounded-xl md:rounded-none"
    >
      <p class="text-slate-700 font-normal mb-1.5">ALAMAT PENGIRIMAN</p>
      <div class="flex items-center space-x-1 mb-1">
        <CaLocationFilled class="h-4 w-4 text-purple-600" />
        <div>Rumah . Tatang Haetami</div>
      </div>
      <div class="text-sm">
        Jln. Veteran, RT/RW : 02/03, Gambir, Kecamatan Gambir Jakarta pusat, DKI
        Jakarta
      </div>
    </div>

    <div
      v-for="(product, index) in products"
      :key="product.id"
      :class="[
        'bg-white w-full py-3 md:py-4 my-2 px-2 xs:px-4 rounded-none xs:rounded-xl md:rounded-none',
        { 'rounded-none md:rounded-b-xl': index === products.length - 1 },
      ]"
    >
      <div class="mb-2">
        <p class="text-slate-700">Pesanan {{ index + 1 }}</p>
        <div class="font-normal text-md">gemming</div>
      </div>
      <div class="flex space-x-2">
        <img
          :src="product.image"
          alt="product-img"
          class="h-[80px] w-[80px] border-2 rounded-md"
        />

        <div class="flex flex-col flex-1">
          <div class="inline-block xs:flex justify-between items-start mb-0">
            <div class="font-normal text-sm lg:text-md flex-1">
              <div class="mb-1">
                {{ product.name }}
              </div>
            </div>
            <div class="font-bold text-md">{{ `1 x ${product.price}` }}</div>
          </div>

          <div class="mt-2">
            <Select
              v-model="selectedCourier[index]"
              :options="courier"
              optionLabel="name"
              placeholder="Pilih Pengiriman"
              class="w-full"
              :style="{
                background: 'rgb(249 250 251 / var(--tw-bg-opacity)) ',
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { products } from '@/utils/data'
import { BsTrash, CaFavorite } from '@kalimahapps/vue-icons'
</script>

<template>
  <div class="px-0 md:px-4 pt-1 md:pt-3 pb-2">
    <div
      class="hidden md:flex bg-white w-full py-0 md:py-4 md:rounded-t-xl rounded-none justify-start px-4 items-center space-x-2"
    >
      <input type="checkbox" class="checkbox-custom" />
      <div class="font-bold text-md">Pilih Semua ({{ products.length }})</div>
    </div>

    <div
      v-for="(product, index) in products"
      :key="product.id"
      :class="[
        'bg-white w-full py-3 md:py-4 my-2 px-2 xs:px-4 rounded-none xs:rounded-xl md:rounded-none',
        { 'rounded-none md:rounded-b-xl': index === products.length - 1 },
      ]"
    >
      <div class="flex justify-start space-x-2 mb-1">
        <input type="checkbox" class="checkbox-custom" />
        <div class="font-bold text-md">gemming</div>
      </div>
      <div class="flex space-x-2">
        <div class="relative">
          <input type="checkbox" class="checkbox-custom" />
        </div>
        <img
          :src="product.image"
          alt="product-img"
          class="h-[80px] w-[80px] border-2 rounded-md"
        />
        <div class="flex flex-col flex-1">
          <div class="inline-block xs:flex justify-between items-start mb-0">
            <div class="font-normal text-sm lg:text-md flex-1">
              <div class="line-clamp-1">
                {{ product.name }}
              </div>
              <div>{{ product.color }}</div>
            </div>
            <div class="font-bold">{{ product.price }}</div>
          </div>

          <div class="flex justify-end space-x-4 items-center">
            <CaFavorite class="h-6 w-6 text-slate-500 cursor-pointer" />
            <BsTrash class="h-6 w-6 text-slate-500 cursor-pointer" />
            <div
              class="flex items-center border-slate-300 border-2 hover:border-purple-600 rounded-md"
            >
              <span
                class="cursor-pointer rounded-l py-0.5 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              >
                -
              </span>
              <input
                min="1"
                aria-label="input qty"
                class="h-6 w-6 border bg-white text-center text-xs outline-none border-none ng-pristine ng-valid ng-touched"
                maxlength="3"
                autofocus="false"
              />
              <span
                class="cursor-pointer rounded-r py-0.5 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              >
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

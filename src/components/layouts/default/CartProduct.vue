<script setup lang="ts">
import { Button } from 'primevue'
</script>

<template>
  <div class="w-full h-[386px] border-2 p-3 rounded-md text-sm">
    <div class="p-1 pb-2 font-bold">Atur jumlah dan catatan</div>
    <div class="flex space-x-1 items-center mb-3">
      <img
        src="https://images.tokopedia.net/img/cache/700/VqbcmM/2024/1/11/cec7f6e0-8907-4674-b554-aaa2c5cbfd52.jpg.webp?ect=3g"
        alt="product-image"
        class="w-16 h-16 rounded-md"
      />
      <p>Black</p>
    </div>
    <hr class="py-2" />
    <div class="flex items-center space-x-1 mb-3">
      <div
        class="flex items-center border-slate-300 border-2 hover:border-purple-600 rounded-md"
      >
        <span
          class="cursor-pointer rounded-l py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
        >
          -
        </span>
        <input
          min="1"
          aria-label="input qty"
          class="h-8 w-8 border bg-white text-center text-xs outline-none border-none ng-pristine ng-valid ng-touched"
          maxlength="3"
          autofocus="false"
        />
        <span
          class="cursor-pointer rounded-r py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
        >
          +
        </span>
      </div>
      <div>Stok: 90</div>
    </div>
    <div class="flex justify-end">
      <div class="text-slate-500 line-through">Rp200.000</div>
    </div>
    <div class="flex justify-between mt-1 mb-2 items-center">
      <div class="text-slate-500">Subtotal</div>
      <div class="text-lg font-bold">Rp52.000</div>
    </div>
    <Button label="+ Keranjang" class="w-full mt-2" />
    <Button
      label="Beli"
      class="w-full mt-2"
      :style="{ borderColor: 'var(--p-button-outlined-primary-color)' }"
      variant="outlined"
    />
    <div class="flex justify-center">
      <Button
        label="Wishlist"
        icon="pi pi-heart"
        size="small"
        :style="{
          backgroundColor: 'white',
          color: 'black',
          padding: '0px 3px 0px 3px',
          marginTop: '6px',
          border: 'none',
        }"
      />
    </div>
  </div>
</template>

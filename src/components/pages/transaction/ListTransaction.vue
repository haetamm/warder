<script setup lang="ts">
import { dataTransactions } from '@/utils/data'
import { FaShop, HiSolidShoppingBag } from '@kalimahapps/vue-icons'
import { ref } from 'vue'

const transactions = ref(dataTransactions)
</script>

<template>
  <div
    v-for="(transaction, index) in transactions"
    :key="index"
    class="p-2 md:p-3 border-[1px] rounded-lg mb-3"
  >
    <div
      class="flex justify-between xs:justify-start space-x-1 xs:space-x-3 items-center"
    >
      <div class="flex space-x-1 items-center">
        <HiSolidShoppingBag class="h-6 w-6 text-purple-300" />
        <div
          class="text-sm inline-block xs:flex items-center space-x-0 xs:space-x-3"
        >
          <div>Belanja</div>
          <div>{{ transaction.dateOrder }}</div>
        </div>
      </div>
      <small class="px-1 bg-purple-100 text-purple-900 rounded">
        {{ transaction.status }}
      </small>
      <div v-if="transaction.status" class="text-sm hidden xs:inline-block">
        {{ transaction.invoice }}
      </div>
    </div>
    <div class="hidden xs:flex items-center mt-2 space-x-1">
      <FaShop class="h-6 w-6 text-purple-300" />
      <p class="text-sm">{{ transaction.shopName }}</p>
    </div>
    <div
      class="inline-block xs:flex xs:justify-between space-x-0 xs:space-x-2 mt-2 w-full"
    >
      <div class="flex space-x-2 w-full xs:w-[70%]">
        <img
          :src="transaction.productImg"
          alt="product-img"
          class="h-[80px] w-[80px] border-2 rounded-md"
        />
        <div class="flex flex-col flex-1">
          <div class="inline-block xs:flex justify-between items-start mb-0">
            <div class="font-normal text-sm lg:text-md flex-1">
              <div class="font-bold line-clamp-1">
                {{ transaction.productName }}
              </div>
              <div class="mt-2">
                {{ transaction.qty }} barang x {{ transaction.price }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between xs:flex-col items-center">
        <div class="text-sm xs:border-l-[1px] pt-2 xs:p-4 my-auto">
          <p class="text-gray-500">Total Belanja</p>
          <p>{{ transaction.totalPayment }}</p>
        </div>

        <p
          class="text-sm text-center mt-0 xs:mt-2 cursor-pointer text-purple-600"
        >
          Detail Transaksi
        </p>
      </div>
    </div>
  </div>
</template>

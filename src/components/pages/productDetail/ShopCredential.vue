<script setup lang="ts">
import { scrollTop } from '@/utils/helper'
import { Button } from 'primevue'
import { useRoute } from 'vue-router'

const route = useRoute()
const merchantName = route.params.merchant
</script>

<template>
  <div class="pb-5 mt-4 border-b-2">
    <div class="flex items-center font-bold space-x-4">
      <div class="flex-shrink-0">
        <img
          src="https://images.tokopedia.net/img/cache/215-square/GAnVPX/2022/5/18/2d931baa-cb68-46f2-88a7-1e78d2adf1ba.jpg"
          class="h-12 w-12"
          alt="logo"
        />
      </div>
      <div class="flex-1 text-md min-w-0 p-0">
        <router-link
          class="hover:text-purple-600"
          @click="scrollTop"
          :to="`/${merchantName}`"
        >
          {{ merchantName }}
        </router-link>
        <p class="text-purple-600">Online</p>
      </div>
      <Button label="Follow" size="small" />
    </div>
    <div
      class="inline-block xs:flex md:inline-block xl:flex pl-[4rem] mt-3 font-normal space-x-0 xs:space-x-2 md:space-x-0 xl:space-x-2"
    >
      <p>9 rata-rata ulasan |</p>
      <p>4 Jam pesanan diproses</p>
    </div>
  </div>
</template>

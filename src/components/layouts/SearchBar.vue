<script setup lang="ts">
import { isPageType } from '@/utils/helper'
import { BxSearch } from '@kalimahapps/vue-icons'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <form class="w-full mx-auto mr-3">
    <div class="relative">
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
      >
        <BxSearch class="h-6 w-6" />
      </div>
      <input
        type="search"
        class="block w-full px-3 py-2 ps-10 text-sm text-gray-900 border-gray-200 border outline-purple-600 focus:border-purple-600 rounded-lg bg-gray-50"
        :placeholder="`Cari di ${isPageType(route, 'merchant') ? `toko ${route.params.merchant}` : 'waroeng sederhana'}`"
        required
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { dataAddress } from '@/utils/data'
import { ChTickDouble } from '@kalimahapps/vue-icons'
</script>

<template>
  <div class="mt-2 md:max-h-[420px] overflow-scroll no-scrollbar">
    <div
      v-for="address in dataAddress"
      :key="address.id"
      class="px-3 py-4 font-bold text-sm rounded-lg mt-5 bg-purple-50"
      :class="address.selected ? 'border-purple-600 border-2' : ''"
    >
      <div class="flex justify-between items-center">
        <div class="font-normal">
          <div class="flex items-center space-x-1">
            <p class="my-0.5 font-bold">{{ address.label }}</p>
            <small
              v-if="address.selected"
              class="my-0.5 bg-slate-300 p-0.5 px-1 rounded text-gray-900"
            >
              Utama
            </small>
          </div>
          <p class="text-lg my-0.5 font-bold">{{ address.name }}</p>
          <p class="my-0.5">{{ address.phone }}</p>
          <p class="my-0.5">
            {{ address.address }}
          </p>
        </div>
        <button
          v-if="!address.selected"
          class="bg-purple-600 text-white px-6 py-1.5 rounded-md hover:bg-purple-700 text-sm md:text-md"
        >
          Pilih
        </button>
        <ChTickDouble v-else class="h-8 w-8 text-purple-600" />
      </div>
      <div class="flex mt-5 space-x-4">
        <div class="text-purple-600 cursor-pointer">Ubah Alamat</div>
        <div v-if="!address.selected" class="text-purple-600 cursor-pointer">
          Hapus
        </div>
      </div>
    </div>
  </div>
</template>

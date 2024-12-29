<script setup lang="ts">
import { ChTickDouble } from '@kalimahapps/vue-icons'
import { computed } from 'vue'
import Skeleton from 'primevue/skeleton'
import AddressNotFound from './AddressNotFound.vue'
import { useAddress } from '@/stores/address'
import { capitalizeFirstLetterOnly } from '@/utils/helper'

const addressStore = useAddress()

const address = computed(() => {
  const capitalizeFields = [
    'street_name',
    'villages',
    'district',
    'regencies',
    'province',
  ]

  return [...addressStore.address]
    .sort((a, b) =>
      a.selected && !b.selected ? -1 : !a.selected && b.selected ? 1 : 0,
    )
    .map(address => {
      capitalizeFields.forEach(field => {
        if (address[field]) {
          address[field] = capitalizeFirstLetterOnly(address[field])
        }
      })
      return address
    })
})
</script>

<template>
  <div
    class="mt-2 md:max-h-[380px] xl:max-h-[450px] overflow-scroll no-scrollbar"
  >
    <template v-if="addressStore.loading">
      <Skeleton width="100%" height="200px"></Skeleton>
    </template>
    <template v-else>
      <template v-if="address.length">
        <div
          v-for="(addres, index) in address"
          :key="index"
          class="px-3 py-4 font-bold text-sm rounded-lg mt-5 bg-purple-50"
          :class="addres.selected ? 'border-purple-600 border-2' : ''"
        >
          <div class="flex justify-between items-center">
            <div class="font-normal w-[70%] xs:w-full">
              <div class="flex items-center space-x-1">
                <p class="my-0.5 font-bold">{{ addres.label }}</p>
                <small
                  v-if="addres.selected"
                  class="my-0.5 bg-slate-300 p-0.5 px-1 rounded text-gray-900"
                >
                  Utama
                </small>
              </div>
              <p class="text-lg my-0.5 font-bold">
                {{ addres.recipient_name }}
              </p>
              <p class="my-0.5 text-sm">{{ addres.phone_number }}</p>
              <small class="my-0.5">
                {{
                  `${addres.street_name}, ${addres.villages}, ${addres.district}, ${addres.regencies}, ${addres.province}, ${addres.postal_code}`
                }}
              </small>
            </div>
            <button
              v-if="!addres.selected"
              class="bg-purple-600 text-white px-6 py-1.5 rounded-md hover:bg-purple-700 text-sm md:text-md"
            >
              Pilih
            </button>
            <ChTickDouble v-else class="h-8 w-8 text-purple-600" />
          </div>
          <div class="flex mt-5 space-x-4">
            <div class="text-purple-600 cursor-pointer">Ubah Alamat</div>
            <div v-if="!addres.selected" class="text-purple-600 cursor-pointer">
              Hapus
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <AddressNotFound />
      </template>
    </template>
  </div>
</template>

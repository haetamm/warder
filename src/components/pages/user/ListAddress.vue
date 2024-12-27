<script setup lang="ts">
import { useGetAddress } from '@/stores/getAddress'
import type { AddressResponse } from '@/utils/interface'
import { ChTickDouble } from '@kalimahapps/vue-icons'
import { useToast } from 'primevue'
import { onMounted, ref } from 'vue'
import Skeleton from 'primevue/skeleton'
import AddressNotFound from './AddressNotFound.vue'

const getAddressStore = useGetAddress()
const toast = useToast()

const address = ref<AddressResponse[]>([])

onMounted(() => {
  getAddressStore
    .getAddress(toast)
    .then((response: AddressResponse[]) => {
      address.value = response.sort(
        (a, b) => (b.selected ? 1 : 0) - (a.selected ? 1 : 0),
      )
    })
    .catch((err: unknown) => {
      console.error(err)
    })
})
</script>

<template>
  <div
    class="mt-2 md:max-h-[380px] xl:max-h-[450px] overflow-scroll no-scrollbar"
  >
    <template v-if="getAddressStore.loading">
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
                  `${addres.street_name}, ${addres.subdistrict}, ${addres.district}, ${addres.city}, ${addres.province}, ${addres.postal_code}`
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

<script setup lang="ts">
import { ChTickDouble } from '@kalimahapps/vue-icons'
import { computed, ref } from 'vue'
import Skeleton from 'primevue/skeleton'
import AddressNotFound from './AddressNotFound.vue'
import { useAddress } from '@/stores/address'
import { capitalizeFirstLetterOnly } from '@/utils/helper'
import { Button, Dialog, useToast } from 'primevue'
import FormAddress from './FormAddress.vue'
import type { AddressForm, AddressResponse } from '@/utils/interface'
import { useForm } from 'vee-validate'

const addressStore = useAddress()
const visible = ref(false)
const dialogState = ref({
  id: '',
  type: '' as 'edit' | 'delete' | 'select' | '',
})

const toast = useToast()

const address = computed(() => {
  return [...addressStore.address].sort((a, b) =>
    a.selected && !b.selected ? -1 : !a.selected && b.selected ? 1 : 0,
  )
})

const { setErrors } = useForm<AddressForm>({})

const handleSelect = (address: AddressResponse) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id: _, ...addressWithoutId } = address
  const payload = {
    ...addressWithoutId,
    selected: true,
  }
  addressStore
    .putAddress(toast, payload, address.id, setErrors)
    .then(() => {})
    .catch((err: unknown) => console.error(err))
}

const handleDelete = () => {
  if (dialogState.value.id) {
    addressStore
      .deleteAddress(toast, dialogState.value.id)
      .then((response: AddressResponse) => {
        if (response) {
          dialogState.value.type = ''
          visible.value = false
        }
      })
      .catch((err: unknown) => console.error(err))
  }
}
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
          v-for="(addressItem, index) in address"
          :key="index"
          class="px-3 py-4 font-bold text-sm rounded-lg mt-5 bg-purple-50"
          :class="addressItem.selected ? 'border-purple-600 border-2' : ''"
        >
          <div class="flex justify-between items-center">
            <div class="font-normal w-[70%] xs:w-full">
              <div class="flex items-center space-x-1">
                <p class="my-0.5 font-bold">{{ addressItem.label }}</p>
                <small
                  v-if="addressItem.selected"
                  class="my-0.5 bg-slate-300 p-0.5 px-1 rounded text-gray-900"
                >
                  Utama
                </small>
              </div>
              <p class="text-lg my-0.5 font-bold">
                {{ addressItem.recipient_name }}
              </p>
              <p class="my-0.5 text-sm">{{ addressItem.phone_number }}</p>
              <p class="my-0.5">
                {{
                  `${capitalizeFirstLetterOnly(addressItem?.street_name ?? '')},
                  ${capitalizeFirstLetterOnly(addressItem?.villages ?? '')},
                  ${capitalizeFirstLetterOnly(addressItem?.district ?? '')},
                  ${capitalizeFirstLetterOnly(addressItem?.regencies ?? '')},
                  ${capitalizeFirstLetterOnly(addressItem?.province ?? '')},
                  ${addressItem?.postal_code ?? ''}`
                }}
              </p>
            </div>
            <button
              v-if="!addressItem.selected"
              @click="handleSelect(addressItem)"
              :disable="addressStore.loading ? 'Loading' : 'Pilih'"
              class="bg-purple-600 text-white px-6 py-1.5 rounded-md hover:bg-purple-700 text-sm md:text-md"
            >
              Pilih
            </button>
            <ChTickDouble v-else class="h-8 w-8 text-purple-600" />
          </div>

          <div class="flex mt-5 space-x-4">
            <div
              @click="
                (visible = true),
                  (dialogState = { id: addressItem.id, type: 'edit' })
              "
              class="text-purple-600 cursor-pointer"
            >
              Ubah Alamat
            </div>
            <div
              @click="
                (visible = true),
                  (dialogState = { id: addressItem.id, type: 'delete' })
              "
              v-if="!addressItem.selected"
              class="text-purple-600 cursor-pointer"
            >
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

  <Dialog
    v-model:visible="visible"
    modal
    :header="dialogState.type === 'edit' ? 'Ubah Alamat' : 'Hapus Alamat'"
    :style="{ width: '23rem' }"
  >
    <template v-if="dialogState.type === 'edit'">
      <FormAddress v-model:visible="visible" :id="dialogState.id" />
    </template>
    <template v-else-if="dialogState.type === 'delete'">
      <h1>Yakin dihapus??</h1>
      <div class="flex justify-end">
        <Button
          :disabled="addressStore.loading"
          :label="addressStore.loading ? 'Loading' : 'Hapus'"
          class="w-[100px] mt-3"
          @click="handleDelete"
        />
      </div>
    </template>
  </Dialog>
</template>

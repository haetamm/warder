<script setup lang="ts">
import FormAddress from '@/components/pages/user/FormAddress.vue'
import ListAddress from '@/components/pages/user/ListAddress.vue'
import { useAddress } from '@/stores/address'
import { useToast, Dialog } from 'primevue'
import { onMounted, ref } from 'vue'

const addressStore = useAddress()
const toast = useToast()
const visible = ref(false)

onMounted(() => {
  addressStore
    .getAddress(toast)
    .then(() => {})
    .catch((err: unknown) => {
      console.error(err)
    })
})
</script>

<template>
  <div class="px-2 mb-4 xs:mx-4">
    <div class="mt-6">
      <div class="flex justify-between">
        <div
          class="px-1 xxs:px-3 py-1.5 rounded-md border-2 border-purple-600 text-sm md:text-md"
        >
          Semua Alamat
        </div>
        <button
          @click="visible = true"
          class="bg-purple-600 text-white px-1 xs:px-3 py-1.5 rounded-md hover:bg-purple-700 text-sm md:text-md"
        >
          + Tambah Alamat Baru
        </button>
      </div>
      <ListAddress />
    </div>
  </div>

  <Dialog
    v-model:visible="visible"
    modal
    header="Tambah Alamat"
    :style="{ width: '23rem' }"
  >
    <FormAddress v-model:visible="visible" />
  </Dialog>
</template>

<script setup lang="ts">
import FormRegion from '@/components/pages/shop/FormRegion.vue'
import { useSellerStore } from '@/stores/seller'
import { capitalizeFirstLetterOnly } from '@/utils/helper'
import type { CurrentSellerResponse } from '@/utils/interface'
import { Button, Column, DataTable, Dialog } from 'primevue'
import { computed, ref } from 'vue'

const visible = ref(false)
const sellerStore = useSellerStore()
const seller = computed<CurrentSellerResponse | null>(() => sellerStore.seller)

const shopLocations = computed(() => {
  if (!seller.value) {
    return []
  }

  return [
    {
      address: `${capitalizeFirstLetterOnly(seller.value.street_name ?? '')}, ${capitalizeFirstLetterOnly(seller.value.villages ?? '')}, ${capitalizeFirstLetterOnly(seller.value.district ?? '')}, ${capitalizeFirstLetterOnly(seller.value.regencies ?? '')}, ${capitalizeFirstLetterOnly(seller.value.province ?? '')}`,
      city: `${capitalizeFirstLetterOnly(seller.value.district ?? '')}, ${capitalizeFirstLetterOnly(seller.value.regencies ?? '')}`,
      postcode: `${seller.value.postal_code ?? ''}`,
      status: true,
    },
  ]
})
</script>

<template>
  <div class="px-2 xs:px-[20px] mt-3 mb-5">
    <p class="font-bold text-lg">Lokasi Toko</p>

    <div class="w-full mt-3">
      <div class="text-md">
        <DataTable :value="shopLocations" tableStyle="min-width: 360px">
          <Column
            field="address"
            header="Alamat"
            class="text-md text-black min-w-[200px]"
          ></Column>
          <Column
            field="city"
            header="Kota / Kecamatan"
            class="text-md text-black"
          ></Column>
          <Column
            field="postcode"
            header="Kode Pos"
            class="text-md text-black"
          ></Column>
          <Column field="status" header="Aktif" class="text-md text-black">
            <template #body="slotProps">
              <div class="flex space-x-3 items-center">
                <label class="switch">
                  <input
                    type="checkbox"
                    class="hidden"
                    v-model="slotProps.data.status"
                  />
                  <span class="slider round"></span>
                </label>
                <Button
                  @click="visible = true"
                  label="Ubah"
                  class="w-[80px]"
                  :style="{ padding: '3px' }"
                  variant="outlined"
                />
              </div>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
  <Dialog
    v-model:visible="visible"
    modal
    header="Ubah alamat toko"
    :style="{ width: '21rem' }"
  >
    <FormRegion v-model:visible="visible" />
  </Dialog>
</template>

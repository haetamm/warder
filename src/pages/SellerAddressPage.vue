<script setup lang="ts">
import { storeLocation } from '@/utils/data'
import { Button, Column, DataTable } from 'primevue'
</script>

<template>
  <div class="px-2 xs:px-[20px] mt-3 mb-5">
    <p class="font-bold text-lg">Lokasi Toko</p>

    <div class="w-full mt-3">
      <div class="text-md">
        <DataTable :value="storeLocation" tableStyle="min-width: 360px ">
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
</template>

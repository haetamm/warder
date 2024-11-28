<script setup lang="ts">
import { Button, InputText, Textarea } from 'primevue'
</script>

<template>
  <div class="px-2 xs:px-[20px] my-3">
    <p class="font-bold text-xl">Informasi Toko</p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-3">
      <div class="text-sm border-[1px] rounded-md px-5 py-6">
        <p class="font-semibold">Nama Toko</p>
        <p>Toko serba seratus</p>
        <p class="font-semibold mt-3">Domain Toko</p>
        <p>www.warder.com/serbaseratus</p>
        <Button label="Ubah" class="w-[140px] mt-3" variant="outlined" />
      </div>
      <div class="px-0 lg:px-5">
        <p class="text-md mt-0">Slogan</p>
        <InputText class="w-full mt-1" />
        <p class="text-md mt-2">Deskripsi</p>
        <Textarea rows="3" cols="30" class="w-full mt-1" />
      </div>
    </div>
    <div class="flex justify-end px-0 lg:px-5 mt-4">
      <Button
        label="Simpan"
        class="w-[120px] mt-2"
        :style="{ padding: '5px' }"
      />
    </div>
  </div>
</template>

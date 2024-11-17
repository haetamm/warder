<script setup lang="ts">
import { AkChevronRight } from '@kalimahapps/vue-icons'
</script>

<template>
  <div
    class="border-[1px] my-auto rounded-md w-full px-5 py-3 text-sm cursor-pointer h-[105px]"
  >
    <div class="flex justify-between items-center">
      <div class="flex items-center space-x-3 mb-1 justify-center">
        <img
          src="https://images.tokopedia.net/img/ns_handbook.png"
          alt="img-handbook"
          class="w-16 h-16"
        />
        <div class="flex flex-col">
          <div class="text-md font-bold">Sudah siap berjualan?</div>
          <small>Baca Panduan Memulai</small>
          <small>Usaha di Warder, yuk!</small>
        </div>
      </div>
      <AkChevronRight class="w-7 h-7" />
    </div>
  </div>
</template>

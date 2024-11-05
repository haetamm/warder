<script setup lang="ts">
import ListAddress from '@/components/pages/user/ListAddress.vue'
</script>

<template>
  <div class="px-2 mb-4 xs:mx-4">
    <div class="mt-6">
      <div class="flex justify-between">
        <div
          class="px-3 py-1.5 rounded-md border-2 border-purple-600 text-sm md:text-md"
        >
          Daftar Alamat
        </div>
        <button
          class="bg-purple-600 text-white px-3 py-1.5 rounded-md hover:bg-purple-700 text-sm md:text-md"
        >
          + Tambah Alamat Baru
        </button>
      </div>
      <ListAddress />
    </div>
  </div>
</template>

<script setup lang="ts">
import ListTransaction from '@/components/pages/transaction/ListTransaction.vue'
import { statusData } from '@/utils/data'
import { useHead } from '@vueuse/head'
import {
  DatePicker,
  FloatLabel,
  IconField,
  InputIcon,
  InputText,
  Select,
} from 'primevue'

import { ref } from 'vue'

const dates = ref()
const selectedStatus = ref(statusData[0])
const status = ref(statusData)

useHead({
  title: 'Daftar Transaksi Pembelian | Warder',
  meta: [
    { name: 'description', content: 'Warder Transaction Page' },
    { name: 'keywords', content: 'marketplace, transaction' },
  ],
})
</script>
<template>
  <div class="flex-grow kontener mx-auto pt-[75px] px-1 xs:px-2">
    <div class="flex items-center mb-2 space-x-2 w-full">
      <IconField class="w-1/2 md:w-[70%]">
        <InputIcon class="pi pi-search" />
        <InputText
          placeholder="Cari transaksimu disini"
          :style="{ fontSize: '15px' }"
          class="w-full px-3 py-2 text-sm"
        />
      </IconField>
      <FloatLabel variant="on" class="w-1/2 md:w-[30%] text-sm">
        <DatePicker
          v-model="dates"
          inputId="over_label"
          selectionMode="range"
          showIcon
          iconDisplay="input"
          class="w-full"
        />
        <label for="over_label">Tanggal Transaksi</label>
      </FloatLabel>
    </div>
    <Select
      v-model="selectedStatus"
      :options="status"
      placeholder="Status"
      optionLabel="name"
      class="w-full xs:hidden mb-3"
    />
    <ListTransaction />
  </div>
</template>

<style scoped>
.kontener {
  width: 100%;
}

@media (min-width: 600px) {
  .kontener {
    max-width: 600px;
  }
}
@media (min-width: 640px) {
  .kontener {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .kontener {
    max-width: 768px;
  }
}
@media (min-width: 845px) {
  .kontener {
    max-width: 845px;
  }
}
@media (min-width: 1024px) {
  .kontener {
    max-width: 940px;
  }
}
</style>

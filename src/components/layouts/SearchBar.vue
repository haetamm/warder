<script setup lang="ts">
import { isPageType } from '@/utils/helper'
import { IconField, InputIcon, InputText } from 'primevue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <IconField>
    <InputIcon class="pi pi-search" />
    <InputText
      :placeholder="`Cari di ${isPageType(route, 'merchant') ? `toko ${route.params.merchant}` : 'waroeng sederhana'}`"
      :style="{ fontSize: '15px' }"
      class="w-full px-3 py-2 text-sm"
    />
  </IconField>
</template>

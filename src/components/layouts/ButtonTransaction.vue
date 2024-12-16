<script setup lang="ts">
import { urlPage } from '@/utils/constans'
import { scrollTop } from '@/utils/helper'
import { McBillLine } from '@kalimahapps/vue-icons'

defineProps({
  toogleButton: Function,
})
</script>

<template>
  <div class="flex space-x-3 h-[44px] items-center">
    <McBillLine class="w-7 h-7" />
    <router-link
      :to="urlPage.TRANSACTION"
      @click="
        () => {
          toogleButton?.()
          scrollTop?.()
        }
      "
    >
      Daftar Transaksi
    </router-link>
  </div>
</template>

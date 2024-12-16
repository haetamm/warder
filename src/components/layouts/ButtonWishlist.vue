<script setup lang="ts">
import { urlPage } from '@/utils/constans'
import { scrollTop } from '@/utils/helper'
import { MdFavoriteBorder } from '@kalimahapps/vue-icons'

defineProps({
  toogleButton: Function,
})
</script>
<template>
  <div class="flex space-x-3 h-[44px] items-center">
    <MdFavoriteBorder class="w-7 h-7" />
    <router-link
      :to="urlPage.WISHLIST"
      @click="
        () => {
          toogleButton?.()
          scrollTop?.()
        }
      "
    >
      Wishlist
    </router-link>
  </div>
</template>

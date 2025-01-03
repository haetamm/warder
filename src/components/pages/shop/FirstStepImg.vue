<script setup lang="ts">
import { listImg } from '@/utils/data'
</script>
<template>
  <div
    class="flex-col space-y-9 w-[500px] h-[380px] justify-center hidden lg:flex mt-10"
  >
    <div
      v-for="({ img, desc }, index) in listImg"
      :key="index"
      class="flex space-x-4 items-center"
    >
      <img
        :src="img"
        alt="log"
        class="w-[70px] h-[70px] rounded-xl flex-shrink-0"
      />
      <p class="text-lg">{{ desc }}</p>
    </div>
  </div>
</template>

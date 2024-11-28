<script setup lang="ts">
import { dataArticle } from '@/utils/data'
</script>

<template>
  <div
    class="border-[1px] my-auto rounded-md w-full px-5 pt-5 pb-3 text-sm mt-3 bg-white"
  >
    <div class="flex items-center space-x-3 mb-4 justify-start">
      Bacaan Terkini
      <small class="bg-red-600 text-white ml-1 px-1 py-0 rounded-md">
        Baru
      </small>
    </div>
    <div
      v-for="({ title, img, category, createdAt }, index) in dataArticle"
      :key="index"
      class="flex space-x-4 justify-start cursor-pointer hover:underline hover:text-purple-600 mb-3"
    >
      <img
        :src="img"
        alt="article-img"
        class="w-[128px] h-[74px] rounded-md object-cover"
      />
      <div class="flex-1">
        <p class="text-md font-bold line-clamp-2 mb-0.5">
          {{ title }}
        </p>
        <small>{{ category }} - {{ createdAt }}</small>
      </div>
    </div>
  </div>
</template>

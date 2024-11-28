<script setup lang="ts">
import { urlPage } from '@/utils/constans'
</script>

<template>
  <div class="bg-white min-h-screen flex flex-col">
    <div class="kontener flex-grow mx-auto px-4">
      <router-link
        :to="urlPage.HOME"
        class="justify-center items-center hidden md:flex pt-3"
      >
        <img src="/image/logo.png" alt="logo" class="w-[150px] h-[40px]" />
      </router-link>
      <RouterView />
    </div>
  </div>
</template>

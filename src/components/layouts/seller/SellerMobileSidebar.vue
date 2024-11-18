<script setup lang="ts">
import { navItems } from '@/utils/data'
import { isActive, scrollTop } from '@/utils/helper'
</script>

<template>
  <div
    class="flex md:hidden bg-blur justify-center items-center bottom-0 fixed w-full z-50 shadow-3xl py-2.5"
  >
    <router-link
      v-for="item in navItems"
      :key="item.name"
      :to="item.route"
      v-on:click="scrollTop"
      :class="[
        'flex items-center hover:text-purple-600 rounded-md justify-center px-4 xl:justify-start space-x-0 md:space-x-3 xl:hover:bg-gray-200',
        isActive(item.route) ? 'text-purple-600 font-bold' : '',
      ]"
    >
      <div class="px-4">
        <component :is="item.icon" :class="item.size" />
      </div>
    </router-link>
  </div>
</template>

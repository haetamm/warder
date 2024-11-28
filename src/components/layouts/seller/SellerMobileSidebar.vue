<script setup lang="ts">
import { navItems } from '@/utils/data'
import { isActive, scrollTop } from '@/utils/helper'
</script>

<template>
  <div
    class="flex md:hidden bg-white border-t-[1px] justify-center items-center bottom-0 fixed w-full z-50 shadow-3xl py-2.5"
  >
    <div
      v-for="item in navItems"
      :key="item.name"
      class="w-[25%] flex items-center space-x-2 justify-center"
    >
      <router-link
        :to="item.route"
        v-on:click="scrollTop"
        :class="[
          ' rounded-md ',
          isActive(item.route) ? 'text-purple-600 font-bold' : '',
        ]"
      >
        <component :is="item.icon" :class="item.size" />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { isActive } from '@/utils/helper'

defineProps({
  route: {
    type: String,
    required: true,
  },
  icon: {
    type: [Object, Function],
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'w-7 h-7',
  },
  onClick: {
    type: Function,
    default: () => {},
  },
})
</script>

<template>
  <router-link
    :to="route"
    @click="onClick"
    :class="[
      'flex items-center hover:text-purple-600 rounded-md justify-center xl:justify-start py-2 my-1 space-x-0 md:space-x-3 xl:hover:bg-gray-200 px-2',
      isActive(route) ? 'text-purple-600 font-bold' : '',
    ]"
  >
    <div class="group flex relative">
      <component :is="icon" :class="size" />
      <span
        class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 xl:hidden text-sm text-gray-100 rounded-md absolute left-full ml-2 opacity-0"
        style="top: 50%; transform: translateY(-50%)"
      >
        {{ label }}
      </span>
    </div>
    <div class="hidden xl:block text-md">{{ label }}</div>
  </router-link>
</template>

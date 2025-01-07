<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { isActive, isActiveSubLink } from '@/utils/helper'
import { subNavItems } from '@/utils/data'
import { ReArrowDropDownFill } from '@kalimahapps/vue-icons'

const isDropdownOpen = ref(false)

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

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}
</script>

<template>
  <router-link
    :to="route"
    :onClick="label === 'Produk' ? toggleDropdown : onClick"
    :class="[
      'flex items-center xl:hover:text-purple-600 rounded-md justify-center xl:justify-start py-2 my-1 space-x-0 md:space-x-3 xl:hover:bg-gray-200 px-2',
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
    <div class="hidden w-full xl:flex justify-between items-center text-md">
      <div>{{ label }}</div>
      <ReArrowDropDownFill
        v-if="label === 'Produk'"
        :class="`${isDropdownOpen ? 'rotate-180' : ''} w-8 h-8 hidden xl:block`"
      />
    </div>
  </router-link>
  <template v-if="label === 'Produk' && isDropdownOpen">
    <router-link
      v-for="subItem in subNavItems"
      :key="subItem.name"
      :to="subItem.route"
      :onClick="onClick"
      :class="[
        'flex items-center hover:text-purple-600 rounded-md justify-center xl:justify-start py-2 my-1 space-x-0 md:space-x-3 xl:space-x-10 xl:hover:bg-gray-200 px-2',
        isActiveSubLink(subItem.route) ? 'text-purple-600 font-bold' : '',
      ]"
    >
      <div class="group flex xl:hidden relative">
        <component :is="subItem.icon" :class="subItem.size" />
        <span
          class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 xl:hidden text-sm text-gray-100 rounded-md absolute left-full ml-2 opacity-0"
          style="top: 50%; transform: translateY(-50%)"
        >
          {{ subItem.label }}
        </span>
      </div>
      <small class="hidden xl:block text-md">{{ subItem.label }}</small>
    </router-link>
  </template>
</template>

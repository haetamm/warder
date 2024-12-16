<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div class="flex items-center gap-2">
    <div class="flex-grow border-t border-gray-300"></div>
    <span class="text-gray-500">{{ text }}</span>
    <div class="flex-grow border-t border-gray-300"></div>
  </div>
</template>

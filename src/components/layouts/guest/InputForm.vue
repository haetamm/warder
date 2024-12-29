<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate'

defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="mb-0">
    <Field
      :name="name"
      :type="type"
      :placeholder="placeholder"
      class="w-full rounded-lg mt-3 py-2.5 px-3 border-2 outline-none"
    />
    <ErrorMessage :name="name" class="text-red-500 text-sm px-2" />
  </div>
</template>

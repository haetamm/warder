<script setup lang="ts">
import { type PropType } from 'vue'
import InputForm from './InputForm.vue'

interface InputFieldConfig {
  name: string
  type: string
  placeholder: string
}

defineProps({
  fields: {
    type: Array as PropType<InputFieldConfig[]>,
    required: true,
  },
  onSubmit: {
    type: Function as PropType<(e?: Event) => Promise<void>>,
    required: true,
  },
  isSubmitting: {
    type: Boolean,
    required: true,
    default: false,
  },
  meta: {
    type: Object,
    required: true,
  },
  buttonName: {
    type: String,
    required: true,
  },
  onChange: {
    type: Object as PropType<Record<string, (e: Event) => void>>,
    required: true,
  },
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <template v-for="field in fields" :key="field.name">
      <InputForm
        :name="field.name"
        :type="field.type"
        :placeholder="field.placeholder"
        @input="onChange[field.name]?.($event)"
      />
    </template>
    <button
      type="submit"
      :disabled="!meta.valid"
      class="py-2.5 px-2 bg-purple-600 disabled:bg-purple-400 text-white border-2 w-full mt-3 rounded-lg mb-6 text-sm font-bold md:font-normal"
    >
      {{ isSubmitting ? 'Loading..' : buttonName }}
    </button>
  </form>
</template>

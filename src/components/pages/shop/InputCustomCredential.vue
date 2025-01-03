<script setup lang="ts">
import { FloatLabel, InputText } from 'primevue'
import { ErrorMessage, Field, useField } from 'vee-validate'
import { defineProps } from 'vue'

const props = defineProps({
  field: {
    type: Object,
    required: true,
  },
  maxLength: {
    type: Number,
    required: true,
  },
})

const { handleChange } = useField(props.field.name)

const onChange = (_name: string, event: Event) => {
  handleChange(event)
}
</script>
<template>
  <Field :name="field.name" v-slot="{ field: FieldBindingObject }">
    <div
      :class="`${field.name === 'shop_domain' ? 'flex space-x-1 justify-between items-center' : ''} w-full`"
    >
      <div
        v-if="field.name === 'shop_domain'"
        class="text-gray-500 text-md xs:text-xl"
      >
        warderrr.com/
      </div>
      <FloatLabel variant="on" class="w-full">
        <InputText
          :id="field.name"
          v-bind="FieldBindingObject"
          :placeholder="field.placeholder"
          :type="field.inputType || 'text'"
          @input="onChange(field.name, $event)"
        />
      </FloatLabel>
    </div>
    <div class="flex items-center mt-1 ml-0.5 mb-1">
      <small class="w-[97%]">
        <ErrorMessage :name="field.name" class="text-red-500 text-sm" />
      </small>
      <small class="text-sm flex justify-end">
        {{ FieldBindingObject?.value?.length }}/{{ maxLength }}
      </small>
    </div>
  </Field>
</template>

<style scoped>
.p-inputtext {
  width: 100%;
  height: 48px;
}
</style>

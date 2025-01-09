<script setup lang="ts">
import { ErrorMessage, Field } from 'vee-validate'
import { ref, onMounted, nextTick, defineProps } from 'vue'

defineProps({
  field: {
    type: Object,
    required: true,
  },
})

const inputText = ref('')
const textareaRef = ref<HTMLTextAreaElement | null>(null)

function adjustHeight() {
  if (textareaRef.value) {
    textareaRef.value.style.height = 'auto'
    textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`
  }
}

function preventNewLine(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    event.preventDefault()
  }
}

onMounted(() => {
  nextTick(() => {
    adjustHeight()
  })
})
</script>

<template>
  <Field
    :name="field.name"
    v-slot="{ field: FieldBindingObject }"
    class="dynamic-textarea-wrapper"
  >
    <textarea
      ref="textareaRef"
      v-model="inputText"
      v-bind="FieldBindingObject"
      class="dynamic-textarea"
      placeholder="Contoh: Sepatu Pria (Jenis/Kategori Produk) + Tokostore (Merek) + Kanvas Hitam (Keterangan)"
      @input="adjustHeight"
      @keydown="preventNewLine"
    />
    <small>
      <ErrorMessage :name="field.name" class="text-red-500" />
    </small>
  </Field>
</template>

<style scoped>
.dynamic-textarea-wrapper {
  position: relative;
  width: 100%;
}

.dynamic-textarea {
  width: 100%;
  min-height: 5px;
  padding: 5px 10px;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  overflow: hidden;
  resize: none;
  white-space: normal;
  word-wrap: break-word;
  transition: all 0.3s ease;
}
</style>

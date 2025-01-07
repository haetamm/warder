<script setup lang="ts">
import { defineProps, defineEmits, onMounted, ref } from 'vue'
import Editor from '@tinymce/tinymce-vue'
import { Button, FloatLabel, InputText, useToast } from 'primevue'
import { noteSchema } from '@/utils/validation'
import type { NoteForm, NoteResponse } from '@/utils/interface'
import { useNoteStore } from '@/stores/note'
import { ValidationError } from 'yup'

const props = defineProps({
  id: {
    type: Number,
    required: false,
  },
  visible: {
    type: Boolean,
    required: false,
  },
})

const editorKey = Date.now()
const emit = defineEmits(['update:visible'])
const toast = useToast()
const apiKey = import.meta.env.VITE_TINYMCE_API_KEY
const noteStore = useNoteStore()

const title = ref('')
const body = ref('')
const errors = ref<Record<string, string>>({})

onMounted(() => {
  if (props.id) {
    const note = noteStore.notes.find(
      (note: NoteResponse) => note.id === Number(props.id),
    )
    if (note) {
      title.value = note.title
      body.value = note.body
    }
  }
})

const onSubmit = async () => {
  errors.value = {}

  const formValues: NoteForm = {
    title: title.value,
    body: body.value,
  }

  try {
    noteSchema.validateSync(formValues, { abortEarly: false })

    errors.value = {}

    if (props.id) {
      await noteStore.updateNote(toast, formValues, props.id)
      emit('update:visible', false)
    } else {
      await noteStore.postNote(toast, formValues)
      emit('update:visible', false)
    }
  } catch (validationErrors: unknown) {
    if (validationErrors instanceof ValidationError) {
      validationErrors.inner.forEach(err => {
        if (err.path) {
          errors.value[err.path] = err.message
        }
      })
    }
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="my-2 w-full">
    <div class="w-full mb-2">
      <FloatLabel variant="on">
        <label for="title">Judul Catatan</label>
        <InputText id="title" v-model="title" class="p-inputtext" />
      </FloatLabel>
      <small v-if="errors.title" class="text-red-500">
        {{ errors.title }}
      </small>
    </div>

    <div class="w-full mb-2 min-h-[270px]">
      <Editor
        :key="editorKey"
        v-model="body"
        :api-key="apiKey"
        :init="{
          toolbar_mode: 'sliding',
          font_size_formats: '16px 18px 20px',
          menubar: false,
          max_height: 270,
          toolbar:
            'undo redo | bold italic underline | align lineheight | numlist bullist indent outdent | fontsize | emoticons charmap | removeformat',
        }"
      />
      <small v-if="errors.body" class="text-red-500">
        {{ errors.body }}
      </small>
    </div>

    <div class="flex justify-end">
      <Button
        class="w-full xl:w-[144px] xl:py-2 font-bold"
        type="submit"
        :label="noteStore.loading ? 'Loading' : 'Kirim'"
        :disabled="noteStore.loading"
      />
    </div>
  </form>
</template>

<style scoped>
.p-inputtext {
  width: 100%;
  height: 44px;
}
</style>

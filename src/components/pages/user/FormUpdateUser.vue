<script setup lang="ts">
import { useUpdateProfile } from '@/stores/updateProfile'
import { useUserStore } from '@/stores/user'
import { genderOptions } from '@/utils/fields'
import type { ProfileResponse, SelectedField } from '@/utils/interface'
import { updateUserSchema } from '@/utils/validation'
import { Button, DatePicker, useToast } from 'primevue'
import { ErrorMessage, Field, useForm } from 'vee-validate'
import {
  computed,
  type PropType,
  defineProps,
  defineEmits,
  ref,
  watch,
} from 'vue'

const props = defineProps({
  selectedField: {
    type: Object as PropType<SelectedField | null>,
    required: true,
  },
  profile: {
    type: Object as PropType<ProfileResponse | null>,
    required: true,
  },
  visible: {
    type: Boolean,
    required: true,
  },
  temporaryField: {
    type: [Object, String] as PropType<unknown>,
    required: false,
  },
  temporaryDateField: {
    type: Object as PropType<Date | null>,
    required: false,
  },
})

const updateProfileStore = useUpdateProfile()
const toast = useToast()
const emit = defineEmits(['update:visible'])
const { setName } = useUserStore()
const localTemporaryField = ref(props.temporaryField)
const localTemporaryDateField = ref(props.temporaryDateField)

watch(
  () => props.temporaryField,
  newVal => {
    localTemporaryField.value = newVal
  },
)

watch(
  () => props.temporaryDateField,
  newVal => {
    localTemporaryDateField.value = newVal
  },
)

const validationSchema = computed(() => {
  return updateUserSchema(props.selectedField?.value || '')
})

const { handleSubmit, meta, setErrors } = useForm({
  validationSchema,
})

const handleUpdate = handleSubmit(() => {
  const fieldKey = props.selectedField?.value as keyof ProfileResponse

  if (!fieldKey) {
    console.error('Field key is missing')
    return
  }

  let payloadValue: unknown = localTemporaryField.value

  if (
    props.selectedField?.inputType === 'date' &&
    localTemporaryDateField.value
  ) {
    payloadValue = localTemporaryDateField.value
  }

  const payload = {
    [fieldKey]: payloadValue,
  }

  updateProfileStore
    .updateProfile(toast, payload, setErrors)
    .then((response: ProfileResponse) => {
      if (response.birth_date) {
        response.birth_date = new Date(response.birth_date)
      }
      if (response.name) {
        setName(response.name)
      }
      if (props.profile) {
        Object.assign(props.profile, response)
        emit('update:visible', false)
      }
    })
    .catch((err: unknown) => {
      console.error(err)
    })
})
</script>

<template>
  <form @submit.prevent="handleUpdate">
    <div class="mb-4">
      <div class="text-sm mb-2 font-semibold">
        {{ selectedField?.label }}
      </div>
      <div
        v-if="selectedField?.inputType === 'radio'"
        class="flex justify-center space-x-4"
      >
        <Field :name="selectedField.name" v-slot="{ field }">
          <div class="flex justify-center space-x-4">
            <div
              v-for="option in genderOptions"
              :key="option.value"
              class="space-x-2 flex"
            >
              <input
                v-bind="field"
                :id="option.label"
                type="radio"
                :value="option.value"
                v-model="localTemporaryField"
              />

              <label :for="option.label" class="cursor-pointer">
                {{ option.label }}
              </label>
            </div>
          </div>
          <ErrorMessage
            :name="selectedField?.name"
            class="text-red-500 text-sm"
          />
        </Field>
      </div>
      <template v-else-if="selectedField?.inputType === 'date'">
        <Field :name="selectedField.name" v-slot="{ field }">
          <DatePicker
            v-bind="field"
            v-model="localTemporaryDateField"
            :placeholder="`Pilih ${selectedField?.label}`"
            dateFormat="dd/mm/yy"
            class="w-full"
            showIcon
          />
          <ErrorMessage
            :name="selectedField?.name ?? ''"
            class="text-red-500 text-sm"
          />
        </Field>
      </template>

      <template v-else>
        <Field
          :name="selectedField?.name ?? ''"
          :type="selectedField?.inputType ?? 'text'"
          :placeholder="`Masukkan ${selectedField?.label}`"
          v-model="localTemporaryField"
          class="w-full rounded-lg py-2.5 px-3 border-2 outline-none"
          autocomplete="off"
        />
        <ErrorMessage
          :name="selectedField?.name ?? ''"
          class="text-red-500 text-sm"
        />
      </template>
    </div>
    <div class="w-full">
      <Button
        :disabled="!meta.valid"
        type="submit"
        :label="updateProfileStore.loading ? 'Loading' : 'Save'"
        class="w-full"
      />
    </div>
  </form>
</template>

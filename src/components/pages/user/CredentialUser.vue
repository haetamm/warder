<script setup lang="ts">
import { useGetProfile } from '@/stores/getProfile'
import { fieldsProfile, genderOptions } from '@/utils/fields'
import type { ProfileResponse, SelectedField } from '@/utils/interface'
import { Button, DatePicker, Dialog, useToast } from 'primevue'
import { computed, onMounted, ref } from 'vue'
import { Field, ErrorMessage, useForm } from 'vee-validate'
import Skeleton from 'primevue/skeleton'
import { useUpdateProfile } from '@/stores/updateProfile'
import { formatDate } from '@/utils/helper'
import { updateUserSchema } from '@/utils/validation'

const visible = ref(false)
const loaded = ref(false)
const selectedField = ref<SelectedField | null>(null)
const getProfileStore = useGetProfile()
const updateProfileStore = useUpdateProfile()
const toast = useToast()

const profile = ref<ProfileResponse | null>({
  name: null,
  image: null,
  birth_date: null,
  gender: null,
  email: null,
  phone_number: null,
})

onMounted(() => {
  if (!loaded.value) {
    getProfileStore
      .getProfile(toast)
      .then((response: ProfileResponse) => {
        if (response.birth_date) {
          response.birth_date = new Date(response.birth_date)
        }
        profile.value = response
        loaded.value = true
      })
      .catch((err: unknown) => {
        console.error(err)
      })
  }
})

const groupedFields = computed(() => {
  const groups: { [key: string]: SelectedField[] } = {}
  fieldsProfile.forEach(field => {
    if (!groups[field.type]) {
      groups[field.type] = []
    }

    const selectedField: SelectedField = {
      label: field.label,
      value: field.value,
      name: field.value,
      type: field.type,
      inputType: field.inputType,
    }
    groups[field.type].push(selectedField)
  })
  return groups
})

const openDialog = (field: SelectedField) => {
  selectedField.value = field
  visible.value = true
}

const birthDate = computed({
  get() {
    return profile.value?.birth_date instanceof Date
      ? profile.value?.birth_date
      : profile.value?.birth_date
        ? new Date(profile.value?.birth_date)
        : null
  },
  set(value: Date | null) {
    profile.value!.birth_date = value
  },
})

const validationSchema = computed(() => {
  return updateUserSchema(selectedField.value?.value || '')
})

const { handleSubmit, meta } = useForm({
  validationSchema,
})

const handleUpdate = handleSubmit((values: Record<string, unknown>) => {
  const fieldKey = selectedField.value?.value as keyof ProfileResponse

  if (!fieldKey) {
    console.error('Field key is missing')
    return
  }

  const payload = {
    [fieldKey]: values[fieldKey],
  }

  updateProfileStore
    .updateProfile(toast, payload)
    .then((response: ProfileResponse) => {
      if (response.birth_date) {
        response.birth_date = new Date(response.birth_date)
      }
      if (profile.value) {
        profile.value = {
          ...profile.value,
          ...response,
        }
        visible.value = false
      }
    })
    .catch((err: unknown) => {
      console.error(err)
    })
})
</script>

<template>
  <div class="px-2 xs:mt-10">
    <template v-if="getProfileStore.loading || !profile">
      <Skeleton width="100%" height="300px"></Skeleton>
    </template>

    <template v-else>
      <div v-for="(fields, type) in groupedFields" :key="type">
        <div class="font-bold" :class="{ 'mt-6 md:mt-8': type !== 'personal' }">
          {{ type === 'personal' ? 'Ubah Biodata Diri' : 'Ubah Kontak' }}
        </div>
        <div
          v-for="field in fields"
          :key="field.value"
          class="flex my-3 md:my-5 text-sm md:text-md"
        >
          <span class="w-[114px]">{{ field.label }}</span>
          <div class="inline-block space-y-[7px] md:space-y-0 md:flex">
            <div class="mr-[12px]">
              {{
                field.value === 'birth_date'
                  ? formatDate(profile?.birth_date)
                  : profile?.[field.value as keyof ProfileResponse] || '-'
              }}
            </div>
            <div
              @click="openDialog(field)"
              class="text-purple-600 cursor-pointer"
            >
              {{
                profile?.[field.value as keyof ProfileResponse]
                  ? 'Ubah'
                  : 'Tambah'
              }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>

  <Dialog
    v-model:visible="visible"
    modal
    :header="`${
      profile?.[selectedField?.value as keyof ProfileResponse]
        ? 'Ubah'
        : 'Tambah'
    } ${selectedField?.label}`"
    :style="{ width: '21rem' }"
  >
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
              <div v-for="option in genderOptions" :key="option.value">
                <input
                  v-bind="field"
                  :id="option.label"
                  type="radio"
                  :value="option.value"
                  v-model="
                    profile![selectedField.value as keyof ProfileResponse]
                  "
                  class="mr-2"
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
              v-model="birthDate"
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
            v-model="profile![selectedField?.value as keyof ProfileResponse]"
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
  </Dialog>
</template>

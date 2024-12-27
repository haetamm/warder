<script setup lang="ts">
import { useGetProfile } from '@/stores/getProfile'
import { fieldsProfile } from '@/utils/fields'
import type { ProfileResponse, SelectedField } from '@/utils/interface'
import { Dialog, useToast } from 'primevue'
import { computed, onMounted, ref } from 'vue'
import Skeleton from 'primevue/skeleton'
import { formatDate } from '@/utils/helper'
import FormUpdateUser from './FormUpdateUser.vue'

const visible = ref(false)
const loaded = ref(false)
const selectedField = ref<SelectedField | null>(null)
const getProfileStore = useGetProfile()
const toast = useToast()
const temporaryDateField = ref<Date | null>(null)
const temporaryField = ref<unknown>(null)

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

  if (field.value === 'birth_date') {
    temporaryDateField.value =
      profile.value?.birth_date instanceof Date
        ? profile.value?.birth_date
        : profile.value?.birth_date
          ? new Date(profile.value?.birth_date)
          : null
  } else {
    selectedField.value = field
    temporaryField.value =
      profile.value?.[field.value as keyof ProfileResponse] || null
  }

  visible.value = true
}
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
    <FormUpdateUser
      :selectedField="selectedField"
      :profile="profile"
      v-model:visible="visible"
      :temporaryField="temporaryField"
      :temporaryDateField="temporaryDateField"
    />
  </Dialog>
</template>

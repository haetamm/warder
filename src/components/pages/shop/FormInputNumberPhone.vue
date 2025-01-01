<script setup lang="ts">
import { useUpdateProfile } from '@/stores/updateProfile'
import { useUserStore } from '@/stores/user'
import type { ProfileResponse, UpdateProfilePayload } from '@/utils/interface'
import { phoneNumberSchema } from '@/utils/validation'
import { Button, useToast } from 'primevue'
import { useForm } from 'vee-validate'
import InputCustomCredential from './InputCustomCredential.vue'
import { fieldsPhoneNumber } from '@/utils/fields'

const profileStore = useUpdateProfile()
const { setPhoneNumber } = useUserStore()
const toast = useToast()

const { handleSubmit, meta, setErrors } = useForm<UpdateProfilePayload>({
  validationSchema: phoneNumberSchema,
})

const onSubmit = handleSubmit((values: UpdateProfilePayload) => {
  profileStore
    .updateProfile(toast, values, setErrors)
    .then((response: ProfileResponse) => {
      if (response) {
        setPhoneNumber(response.phone_number)
      }
    })
    .catch((err: unknown) => {
      console.error(err)
    })
})
</script>

<template>
  <form @submit.prevent="onSubmit" class="w-full">
    <div v-for="field in fieldsPhoneNumber" :key="field.name">
      <InputCustomCredential :field="field" :maxLength="15" />
    </div>
    <Button
      type="submit"
      class="w-full lg:w-[144px] py-3 lg:py-2 font-bold"
      :label="profileStore.loading ? 'Loading' : 'Lanjut'"
      :disabled="profileStore.loading || !meta.valid"
    />
  </form>
</template>

<style scoped>
.p-inputtext {
  width: 100%;
  height: 48px;
}
</style>

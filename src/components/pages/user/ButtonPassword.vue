<script setup lang="ts">
import FormCustom from '@/components/layouts/guest/FormCustom.vue'
import { useChangePasswordStore } from '@/stores/changePassword'
import { fieldsChangePassword } from '@/utils/fields'
import type { ChangePasswordForm } from '@/utils/interface'
import {
  changePassworrdSchema,
  password,
  passwordLogin,
} from '@/utils/validation'
import { Dialog, useToast } from 'primevue'
import { useField, useForm } from 'vee-validate'
import { ref } from 'vue'

const visible = ref(false)
const changePasswordStore = useChangePasswordStore()
const toast = useToast()

const { handleSubmit, meta, setErrors } = useForm<ChangePasswordForm>({
  validationSchema: changePassworrdSchema,
})

const { handleChange: handlePassword } = useField('password', password)
const { handleChange: handleNewPassword } = useField(
  'newPassword',
  passwordLogin,
)

const onChange: Record<string, (e: Event) => void> = {
  password: handlePassword,
  newPassword: handleNewPassword,
}

const onSubmit = handleSubmit((values: ChangePasswordForm) => {
  changePasswordStore
    .changePassword(values, toast, setErrors)
    .then((response: string) => {
      if (response) {
        visible.value = false
      }
    })
    .catch((err: unknown) => {
      console.error(err)
    })
})
</script>

<template>
  <button
    @click="visible = true"
    class="px-4 py-1.5 w-full border-2 rounded-lg text-md mt-3 mb-6"
  >
    Ubah Kata Sandi
  </button>
  <Dialog
    v-model:visible="visible"
    modal
    header="Ubah Password"
    :style="{ width: '21rem' }"
  >
    <FormCustom
      :fields="fieldsChangePassword"
      :onSubmit="onSubmit"
      :isSubmitting="changePasswordStore.loading"
      :meta="meta"
      :onChange="onChange"
      buttonName="Ubah Password"
    />
  </Dialog>
</template>

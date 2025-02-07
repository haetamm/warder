<script setup lang="ts">
import { urlPage } from '@/utils/constans'
import { backHandleGuest } from '@/utils/helper'
import { email, loginSchema, passwordLogin } from '@/utils/validation'
import { AkArrowLeft } from '@kalimahapps/vue-icons'
import { useField, useForm } from 'vee-validate'
import { useHead } from '@vueuse/head'
import { useToast } from 'primevue/usetoast'
import FormCustom from '@/components/layouts/guest/FormCustom.vue'
import { fieldsGuest } from '@/utils/fields'
import ButtonGoogle from '@/components/layouts/guest/ButtonGoogle.vue'
import BorderLine from '@/components/layouts/guest/BorderLine.vue'
import { useUserStore } from '@/stores/user'
import type { GuestForm } from '@/utils/interface'

const toast = useToast()
const userStore = useUserStore()

const back = backHandleGuest()

useHead({
  title: 'Login | Warder',
  meta: [
    { name: 'description', content: 'Warder Login Page' },
    { name: 'keywords', content: 'marketplace, login, warder' },
  ],
})

const { handleSubmit, meta } = useForm<GuestForm>({
  validationSchema: loginSchema,
})

const { handleChange: handleEmailChange } = useField('email', email)
const { handleChange: handlePasswordChange } = useField(
  'password',
  passwordLogin,
)

const onChange: Record<string, (e: Event) => void> = {
  email: handleEmailChange,
  password: handlePasswordChange,
}

const onSubmit = handleSubmit((values: GuestForm) => {
  userStore
    .loginUser(values, toast)
    .then(() => {})
    .catch((err: unknown) => {
      console.error(err)
    })
})
</script>

<template>
  <div
    class="mx-auto w-full md:w-[700px] lg:w-[861px] select-none relative bg-white"
  >
    <img
      src="https://images.tokopedia.net/img/oauth/background/login-bg.png"
      alt="bg-login"
      class="h-[477px] w-[700px] lg:h-[587px] lg:w-[861px] hidden md:block"
    />

    <div
      class="md:absolute top-0 left-0 w-full flex justify-center items-center mt-4 mb-3 md:mt-6"
    >
      <div
        class="border-none md:border-2 w-[360px] lg:w-[370px] md:p-6 md:shadow-2xl rounded-lg bg-white"
      >
        <div class="flex items-center justify-between mb-8 space-x-3 pr-1">
          <div class="flex items-center space-x-3 md:space-x-0">
            <AkArrowLeft @click="back" class="w-7 h-7 md:hidden" />
            <div class="font-bold text-2xl md:text-xl">Masuk ke Warden</div>
          </div>
          <router-link
            :to="urlPage.REGISTER_USER"
            class="text-purple-600 cursor-pointer hover:underline text-sm"
          >
            Daftar
          </router-link>
        </div>

        <FormCustom
          :fields="fieldsGuest"
          :onSubmit="onSubmit"
          :isSubmitting="userStore.loading"
          :meta="meta"
          :onChange="onChange"
          buttonName="Login"
        />

        <div class="mb-6">
          <BorderLine text="atau masuk dengan" />
        </div>

        <div class="mb-6">
          <ButtonGoogle />
        </div>
      </div>
    </div>
  </div>
</template>

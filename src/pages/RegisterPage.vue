<script setup lang="ts">
import BorderLine from '@/components/layouts/guest/BorderLine.vue'
import ButtonGoogle from '@/components/layouts/guest/ButtonGoogle.vue'
import FormCustom from '@/components/layouts/guest/FormCustom.vue'
import { useRegisterUserStore } from '@/stores/register'
import { urlPage } from '@/utils/constans'
import { fieldsGuest } from '@/utils/fields'
import { backHandle } from '@/utils/helper'
import type { GuestForm } from '@/utils/interface'
import { registerUserSchema } from '@/utils/validation'
import { AkArrowLeft } from '@kalimahapps/vue-icons'
import { useHead } from '@vueuse/head'
import { useToast } from 'primevue'
import { useForm } from 'vee-validate'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const back = backHandle()
const toast = useToast()
const registerUserStore = useRegisterUserStore()
const router = useRouter()

useHead({
  title: 'Register | Warder',
  meta: [
    { name: 'description', content: 'Warder Register Page' },
    { name: 'keywords', content: 'marketplace, register, warder' },
  ],
})

const isSubmitting = computed(() => registerUserStore.loading)

const { handleSubmit, meta, setErrors } = useForm<GuestForm>({
  validationSchema: registerUserSchema,
})

const onSubmit = handleSubmit((values: GuestForm) => {
  registerUserStore
    .registerUser(values, toast, setErrors)
    .then((response: string) => {
      if (response) {
        router.push(urlPage.LOGIN)
      }
    })
    .catch((err: unknown) => {
      console.error(err)
    })
})
</script>

<template>
  <div
    class="flex justify-center items-center pt-4 mb-10 md:mt-8 md:gap-7 xl:gap-[80px] bg-white min-h-full"
  >
    <div class="hidden md:block">
      <div class="flex justify-center item-center">
        <img
          src="https://images.tokopedia.net/img/user/register_icon_new.png"
          alt="img-reg"
          class="h-[303px] w-[360px]"
        />
      </div>
      <div class="font-bold text-lg mt-3 text-center">
        Jual Beli Mudah Hanya di Warder
      </div>
      <div class="mt-2 text-sm text-center">
        Gabung dan rasakan kemudahan bertransaksi di Warder
      </div>
    </div>
    <div
      class="border-none md:border-2 w-[360px] lg:w-[370px] md:p-6 md:shadow-xl"
    >
      <div
        class="flex items-center justify-start md:justify-center space-x-3 md:space-x-0"
      >
        <div class="text-start md:text-center">
          <div
            class="flex items-center justify-start md:justify-center space-x-3 md:space-x-0"
          >
            <AkArrowLeft @click="back" class="w-7 h-7 md:hidden" />
            <div class="font-bold text-2xl">Daftar Sekarang</div>
          </div>
          <div class="text-center text-sm mt-0 md:mt-1 ml-[40px] md:ml-0">
            Sudah punya akun Warder?
            <router-link
              :to="urlPage.LOGIN"
              class="text-purple-600 cursor-pointer"
            >
              Login
            </router-link>
          </div>
        </div>
      </div>

      <div class="mt-3 md:mt-5 mb-4">
        <ButtonGoogle />
      </div>

      <div class="mb-2">
        <BorderLine text="atau" />
      </div>

      <FormCustom
        :fields="fieldsGuest"
        :onSubmit="onSubmit"
        :isSubmitting="isSubmitting"
        :meta="meta"
        buttonName="Daftar"
      />

      <div class="text-center text-sm">
        Dengan mendaftar, saya menyetujui
        <span class="text-purple-600 hover:underline cursor-pointer">
          Syarat & Ketentuan
        </span>
        serta
        <span class="text-purple-600 hover:underline cursor-pointer">
          Kebijakan Privasi Warder.
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fieldsCredentialShop } from '@/utils/fields'
import type {
  RegCredentialShopForm,
  RegCredentialShopResponse,
} from '@/utils/interface'
import { regCredentialShopSchema } from '@/utils/validation'
import { Button, useToast } from 'primevue'
import { useForm } from 'vee-validate'
import InputCustomCredential from './InputCustomCredential.vue'
import { useSellerStore } from '@/stores/seller'
import { useUserStore } from '@/stores/user'

const sellerStore = useSellerStore()
const toast = useToast()
const { setShopName } = useUserStore()

const { handleSubmit, meta, setErrors } = useForm<RegCredentialShopForm>({
  validationSchema: regCredentialShopSchema,
})

const onSubmit = handleSubmit((values: RegCredentialShopForm) => {
  sellerStore
    .postSeller(toast, values, setErrors)
    .then((response: RegCredentialShopResponse) => {
      if (response) {
        setShopName(response.shop_name)
      }
    })
    .catch((err: unknown) => {
      console.error(err)
    })
})
</script>

<template>
  <form @submit.prevent="onSubmit" class="w-full">
    <div class="h-[182px]">
      <div class="pb-[20px]">
        <div
          v-for="field in fieldsCredentialShop.slice(0, 1)"
          :key="field.name"
        >
          <InputCustomCredential :field="field" :maxLength="28" />
        </div>

        <div class="mb-6">
          <div
            class="inline space-x-0 xs:flex items-center xs:space-x-2 w-full"
          >
            <div class="hidden xs:block text-gray-500 text-xl">
              warderrr.com/
            </div>
            <div
              v-for="field in fieldsCredentialShop.slice(1)"
              :key="field.name"
              class="w-full"
            >
              <InputCustomCredential :field="field" :maxLength="20" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Button
      type="submit"
      class="w-full lg:w-[144px] py-3 lg:py-2 font-bold"
      :label="sellerStore.loading ? 'Loading' : 'Lanjut'"
      :disabled="sellerStore.loading || !meta.valid"
    />
  </form>
</template>

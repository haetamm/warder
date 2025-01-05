<script setup lang="ts">
import { fieldsCredentialShop } from '@/utils/fields'
import type {
  CurrentSellerResponse,
  RegCredentialSellerForm,
  RegCredentialSellerResponse,
  UpdateSellerPayload,
} from '@/utils/interface'
import { regCredentialShopSchema } from '@/utils/validation'
import { Button, useToast } from 'primevue'
import { useForm } from 'vee-validate'
import InputCustomCredential from './InputCustomCredential.vue'
import { useSellerStore } from '@/stores/seller'
import { useUserStore } from '@/stores/user'
import { computed, ref, watchEffect, defineProps, defineEmits } from 'vue'

defineProps({
  visible: {
    type: Boolean,
    required: false,
  },
})

const sellerStore = useSellerStore()
const toast = useToast()
const { setShopName } = useUserStore()
const emit = defineEmits(['update:visible'])

const seller = computed<CurrentSellerResponse | null>(() => sellerStore.seller)

const formData = ref<RegCredentialSellerForm>({
  shop_name: seller.value?.shop_name || '',
  shop_domain: seller.value?.shop_domain || '',
})

watchEffect(() => {
  if (seller.value) {
    formData.value.shop_name = seller.value.shop_name || ''
    formData.value.shop_domain = seller.value.shop_domain || ''
  }
})

const { handleSubmit, meta, setErrors } = useForm<RegCredentialSellerForm>({
  validationSchema: regCredentialShopSchema,
})

const onSubmit = handleSubmit((values: RegCredentialSellerForm) => {
  if (seller.value) {
    sellerStore
      .updateSeller(toast, values as UpdateSellerPayload, setErrors)
      .then((response: CurrentSellerResponse) => {
        if (response) {
          setShopName(response.shop_name ?? '')
          emit('update:visible', false)
        }
      })
      .catch((err: unknown) => {
        console.error(err)
      })
  } else {
    sellerStore
      .postSeller(toast, values as RegCredentialSellerForm, setErrors)
      .then((response: RegCredentialSellerResponse) => {
        if (response) {
          setShopName(response.shop_name ?? '')
        }
      })
      .catch((err: unknown) => {
        console.error(err)
      })
  }
})
</script>

<template>
  <form @submit.prevent="onSubmit" class="w-full">
    <div class="h-[157px]">
      <div class="pb-[20px]">
        <div
          v-for="field in fieldsCredentialShop.slice(0, 1)"
          :key="field.name"
        >
          <InputCustomCredential
            :field="field"
            :maxLength="28"
            v-model="formData.shop_name"
          />
        </div>

        <div class="mb-6">
          <div
            class="inline space-x-0 xs:flex items-center xs:space-x-2 w-full"
          >
            <div
              v-for="field in fieldsCredentialShop.slice(1)"
              :key="field.name"
              class="w-full"
            >
              <!-- Gunakan v-model langsung untuk binding -->
              <InputCustomCredential
                :field="field"
                :maxLength="20"
                v-model="formData.shop_domain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Button
      type="submit"
      class="w-full lg:w-[144px] py-3 lg:py-2 font-bold"
      :label="sellerStore.loading ? 'Loading' : seller ? 'Simpan' : 'Lanjut'"
      :disabled="sellerStore.loading || !meta.valid"
    />
  </form>
</template>

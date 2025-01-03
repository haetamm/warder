<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import { useSellerStore } from '@/stores/seller'
import { Button, Dialog, Textarea, useToast } from 'primevue'
import { ErrorMessage, Field, useForm } from 'vee-validate'
import { descSellerSchema } from '@/utils/validation'
import { fieldsDescSeller } from '@/utils/fields'
import type {
  CurrentSellerResponse,
  UpdateDescSellerForm,
  UpdateSellerPayload,
} from '@/utils/interface'
import InputCustomCredential from '@/components/pages/shop/InputCustomCredential.vue'
import FormCredentialShop from '@/components/pages/shop/FormCredentialShop.vue'

const visible = ref(false)
const toast = useToast()
const sellerStore = useSellerStore()
const seller = computed<CurrentSellerResponse | null>(() => sellerStore.seller)

const { handleSubmit, setErrors } = useForm<
  UpdateDescSellerForm | UpdateSellerPayload
>({
  validationSchema: descSellerSchema,
})

const formData = ref<UpdateDescSellerForm | UpdateSellerPayload>({
  slogan: seller.value?.slogan || '',
  desc: seller.value?.desc || '',
})

watchEffect(() => {
  if (seller.value) {
    formData.value.slogan = seller.value.slogan || ''
    formData.value.desc = seller.value.desc || ''
  }
})

const onSubmit = handleSubmit(
  (values: UpdateDescSellerForm | UpdateSellerPayload) => {
    values.slogan = formData.value.slogan
    values.desc = formData.value.desc
    sellerStore
      .updateSeller(toast, values, setErrors)
      .then(() => {})
      .catch((err: unknown) => {
        console.error(err)
      })
  },
)
</script>

<template>
  <div class="px-2 xs:px-[20px] my-3">
    <p class="font-bold text-xl">Informasi Toko</p>
    <form @submit.prevent="onSubmit">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-3">
        <div class="text-sm border-[1px] rounded-md px-5 py-6">
          <p class="font-semibold">Nama Toko</p>
          <p>{{ seller?.shop_name }}</p>
          <p class="font-semibold mt-3">Domain Toko</p>
          <p>www.warder.com/{{ seller?.shop_domain }}</p>
          <Button
            @click="visible = true"
            label="Ubah"
            class="w-[140px] mt-3"
            variant="outlined"
          />
        </div>
        <div class="px-0 lg:px-5">
          <div v-for="field in fieldsDescSeller.slice(0, 1)" :key="field.name">
            <p class="text-md mt-0">Slogan</p>
            <InputCustomCredential
              :field="field"
              :maxLength="48"
              v-model="formData.slogan"
            />
          </div>
          <div v-for="field in fieldsDescSeller.slice(1)" :key="field.name">
            <p class="text-md">Deskripsi</p>
            <Field :name="field.name" v-slot="{ field }">
              <Textarea
                v-model="formData.desc"
                placeholder="Deskripsi"
                rows="3"
                cols="30"
                class="w-full mt-1"
              />
              <div class="flex items-center mt-1 ml-0.5 mb-1">
                <small class="w-[97%]">
                  <ErrorMessage
                    :name="field.name"
                    class="text-red-500 text-sm"
                  />
                </small>
                <small class="text-sm flex justify-end">
                  {{ formData.desc?.length }}/140
                </small>
              </div>
            </Field>
          </div>
        </div>
      </div>
      <div class="flex justify-end px-0 lg:px-5 mt-2">
        <Button
          type="submit"
          :label="sellerStore.loading ? 'Loading' : 'Simpan'"
          class="w-[120px] mt-2"
          :style="{ padding: '5px' }"
        />
      </div>
    </form>
  </div>
  <Dialog
    v-model:visible="visible"
    modal
    header="Ubah nama toko dan domain toko"
    :style="{ width: '22rem' }"
  >
    <FormCredentialShop v-model:visible="visible" />
  </Dialog>
</template>

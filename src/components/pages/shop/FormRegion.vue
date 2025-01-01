<script setup lang="ts">
import { scrollTop } from '@/utils/helper'
import type { RegRegionSellerForm, RegSellerResponse } from '@/utils/interface'
import { districtSchema } from '@/utils/validation'
import { useForm } from 'vee-validate'
import InputSelectRegion from '../user/InputSelectRegion.vue'
import { Button, useToast } from 'primevue'
import { fieldRegisRegionSeller } from '@/utils/fields'
import InputCustomCredential from './InputCustomCredential.vue'
import { useSellerStore } from '@/stores/seller'
import { useUserStore } from '@/stores/user'

const sellerStore = useSellerStore()
const toast = useToast()
const { setRoles } = useUserStore()

const { handleSubmit, setErrors, meta } = useForm<RegRegionSellerForm>({
  validationSchema: districtSchema,
})

const onSubmit = handleSubmit((values: RegRegionSellerForm) => {
  sellerStore
    .postRegionSeller(toast, values, setErrors)
    .then((response: RegSellerResponse) => {
      if (response) {
        setRoles(response.roles)
      }
    })
    .catch((err: unknown) => {
      console.error(err)
    })
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="h-[450px]">
      <div class="w-full">
        <template v-for="field in fieldRegisRegionSeller" :key="field.name">
          <div v-if="field.type === 'text'" class="mt-3">
            <InputCustomCredential
              :field="field"
              :maxLength="Number(field.maxLength)"
            />
          </div>
          <div v-else>
            <InputSelectRegion
              :fieldName="field.name"
              :placeholder="`Pilih ${field.name}`"
            />
          </div>
        </template>
      </div>
      <Button
        @click="scrollTop"
        class="w-full xl:w-[144px] mt-4 py-3 xl:py-2 font-bold"
        type="submit"
        :label="sellerStore.loading ? 'Loading' : 'Kirim'"
        :disabled="sellerStore.loading || !meta.valid"
      />
    </div>
  </form>
</template>

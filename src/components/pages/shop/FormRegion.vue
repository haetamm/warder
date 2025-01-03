<script setup lang="ts">
import { scrollTop } from '@/utils/helper'
import type {
  CurrentSellerResponse,
  RegRegionSellerForm,
  RegSellerResponse,
  UpdateSellerPayload,
} from '@/utils/interface'
import { regionSchema, updateRegionSchema } from '@/utils/validation'
import { useForm } from 'vee-validate'
import InputSelectRegion from '../user/InputSelectRegion.vue'
import { Button, useToast } from 'primevue'
import { fieldRegisRegionSeller } from '@/utils/fields'
import InputCustomCredential from './InputCustomCredential.vue'
import { useSellerStore } from '@/stores/seller'
import { useUserStore } from '@/stores/user'
import { useRegionStore } from '@/stores/region'
import {
  computed,
  defineProps,
  ref,
  watchEffect,
  defineEmits,
  onMounted,
} from 'vue'

defineProps({
  visible: {
    type: Boolean,
    required: false,
  },
})

const emit = defineEmits(['update:visible'])
const sellerStore = useSellerStore()
const regionStore = useRegionStore()
const toast = useToast()
const { setRoles } = useUserStore()
const seller = computed<CurrentSellerResponse | null>(() => sellerStore.seller)

const schema = seller.value ? updateRegionSchema : regionSchema

const formData = ref<RegRegionSellerForm & Partial<UpdateSellerPayload>>({
  province: seller.value?.province || '',
  regencies: seller.value?.regencies || '',
  district: seller.value?.district || '',
  villages: seller.value?.villages || '',
  street_name: seller.value?.street_name || '',
  postal_code: seller.value?.postal_code || '',
})

onMounted(() => {
  regionStore.fetchProvinces()
})

watchEffect(() => {
  if (seller.value) {
    formData.value.street_name = seller.value.street_name
    formData.value.postal_code = seller.value.postal_code
  }
})

const { handleSubmit, meta, setErrors } = useForm({
  validationSchema: schema,
})

const onSubmit = handleSubmit(
  (values: RegRegionSellerForm | UpdateSellerPayload) => {
    values.province = regionStore.selectedProvince?.name ?? null
    values.regencies = regionStore.selectedRegency?.name ?? null
    values.district = regionStore.selectedDistrict?.name ?? null
    values.villages = regionStore.selectedVillage?.name ?? null

    if (seller.value) {
      sellerStore
        .updateSeller(toast, values, setErrors)
        .then((response: CurrentSellerResponse) => {
          if (response) {
            emit('update:visible', false)
          }
        })
        .catch((err: unknown) => {
          console.error(err)
        })
    } else {
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
    }
  },
)
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
              v-model="formData[field.name as keyof RegRegionSellerForm]"
            />
          </div>
          <div v-else>
            <InputSelectRegion
              :fieldName="field.name"
              :placeholder="
                seller
                  ? `Ubah ${field.placeholder}`
                  : `Pilih ${field.placeholder}`
              "
            />
          </div>
        </template>
      </div>
      <Button
        @click="scrollTop"
        class="w-full xl:w-[144px] mt-1 py-3 xl:py-2 font-bold"
        type="submit"
        :label="sellerStore.loading ? 'Loading' : seller ? 'Simpan' : 'Kirim'"
        :disabled="sellerStore.loading || !meta.valid"
      />
    </div>
  </form>
</template>

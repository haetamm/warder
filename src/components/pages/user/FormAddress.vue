<script setup lang="ts">
import InputForm from '@/components/layouts/guest/InputForm.vue'
import { useAddress } from '@/stores/address'
import { useRegionStore } from '@/stores/region' // Import region store
import type { AddressForm, AddressResponse } from '@/utils/interface'
import {
  addressSchema,
  label,
  phoneNumber,
  postalCode,
  recipientName,
  streetName,
} from '@/utils/validation'
import { Button, useToast } from 'primevue'
import { ErrorMessage, Field, useField, useForm } from 'vee-validate'
import { defineEmits, defineProps, onMounted } from 'vue'
import { fieldAddress } from '@/utils/fields'
import InputSelectRegion from './InputSelectRegion.vue'

defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
})

onMounted(() => {
  regionStore.fetchProvinces()
})

const emit = defineEmits(['update:visible'])
const addressStore = useAddress()
const regionStore = useRegionStore()
const toast = useToast()

const { handleSubmit, meta, setErrors } = useForm<AddressForm>({
  validationSchema: addressSchema,
})

const { handleChange: handleReceiptNameChange } = useField(
  'recipient_name',
  recipientName,
)
const { handleChange: handlePhoneNumberChange } = useField(
  'phone_number',
  phoneNumber,
)
const { handleChange: handleLabelChange } = useField('label', label)
const { handleChange: handleStreetNameChange } = useField(
  'street_name',
  streetName,
)
const { handleChange: handlePostalCodeChange } = useField(
  'postal_code',
  postalCode,
)

const onChange: Record<string, (e: Event) => void> = {
  recipient_name: handleReceiptNameChange,
  phone_number: handlePhoneNumberChange,
  label: handleLabelChange,
  street_name: handleStreetNameChange,
  postal_code: handlePostalCodeChange,
}

const handlePost = handleSubmit((payload: AddressForm) => {
  payload.selected = Boolean(payload.selected)
  payload.province = regionStore.selectedProvince?.name || ''
  payload.regencies = regionStore.selectedRegency?.name || ''
  payload.district = regionStore.selectedDistrict?.name || ''
  payload.villages = regionStore.selectedVillage?.name || ''

  addressStore
    .postAddress(toast, payload, setErrors)
    .then((response: AddressResponse) => {
      if (response) {
        console.log(response)
        emit('update:visible', false)
      }
    })
    .catch((err: unknown) => {
      console.error(err)
    })
})
</script>

<template>
  <form @submit.prevent="handlePost">
    <div v-for="field in fieldAddress" :key="field.name">
      <div
        v-if="field.type === 'checkbox'"
        class="my-3 mb-3 flex items-center space-x-3"
      >
        <Field name="selected" v-slot="{ field }">
          <input
            :id="field.name"
            type="checkbox"
            class="checkbox-custom"
            v-bind="field"
            v-model="field.value"
            autocomplete="off"
          />
          <ErrorMessage :name="field.name" class="text-red-500 text-sm mb-3" />
        </Field>
        <label :for="field.name">{{ field.placeholder }}</label>
      </div>
      <div v-else-if="field.type === 'select'" class="">
        <InputSelectRegion
          :fieldName="field.name"
          :placeholder="field.placeholder"
        />
      </div>

      <div v-else>
        <InputForm
          :name="field.name"
          :type="field.type"
          :placeholder="field.placeholder"
          @input="onChange[field.name]?.($event)"
        />
      </div>
    </div>

    <div class="w-full">
      <Button
        :disabled="!meta.valid"
        type="submit"
        :label="addressStore.loading ? 'Loading' : 'Save'"
        class="w-full"
      />
    </div>
  </form>
</template>

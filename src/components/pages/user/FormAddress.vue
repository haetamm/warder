<script setup lang="ts">
import { useAddress } from '@/stores/address'
import { useRegionStore } from '@/stores/region' // Import region store
import type { AddressForm, AddressResponse } from '@/utils/interface'
import {
  addressSchema,
  addressUpdateSchema,
  label,
  phoneNumber,
  postalCode,
  recipientName,
  streetName,
} from '@/utils/validation'
import { Button, useToast } from 'primevue'
import { ErrorMessage, Field, useField, useForm } from 'vee-validate'
import { defineEmits, defineProps, onMounted, reactive } from 'vue'
import InputSelectRegion from './InputSelectRegion.vue'
import type { FieldNames } from '@/utils/type'
import { fieldAddress } from '@/utils/fields'

const props = defineProps({
  id: {
    type: String,
    required: false,
  },
  visibleForm: {
    type: Boolean,
    required: false,
  },
})

const emit = defineEmits(['update:visible'])
const addressStore = useAddress()
const regionStore = useRegionStore()
const toast = useToast()

const form = reactive<AddressForm>({
  recipient_name: null,
  phone_number: null,
  label: null,
  street_name: null,
  province: null,
  regencies: null,
  district: null,
  villages: null,
  postal_code: null,
  selected: false,
})

onMounted(() => {
  regionStore.fetchProvinces()

  if (props.id) {
    const selectedAddress = addressStore.address.find(
      (address: AddressResponse) => address.id === props.id,
    )

    if (selectedAddress) {
      Object.keys(selectedAddress).forEach(key => {
        if (key in form) {
          form[key as keyof AddressForm] = selectedAddress[key]
        }
      })
    }
  }
})

const schema = props.id ? addressUpdateSchema : addressSchema
const { handleSubmit, meta, setErrors } = useForm<AddressForm>({
  validationSchema: schema,
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

const onChange: Record<FieldNames, (e: Event) => void> = {
  recipient_name: handleReceiptNameChange,
  phone_number: handlePhoneNumberChange,
  label: handleLabelChange,
  street_name: handleStreetNameChange,
  postal_code: handlePostalCodeChange,
}

const onSubmit = handleSubmit(() => {
  form.selected = Boolean(form.selected)
  form.province = regionStore.selectedProvince?.name || ''
  form.regencies = regionStore.selectedRegency?.name || ''
  form.district = regionStore.selectedDistrict?.name || ''
  form.villages = regionStore.selectedVillage?.name || ''

  if (props.id) {
    addressStore
      .putAddress(toast, form, props.id, setErrors)
      .then((response: AddressResponse) => {
        if (response) {
          emit('update:visible', false)
        }
      })
      .catch((err: unknown) => console.error(err))
  } else {
    addressStore
      .postAddress(toast, form, setErrors)
      .then((response: AddressResponse) => {
        if (response) {
          emit('update:visible', false)
        }
      })
      .catch((err: unknown) => console.error(err))
  }
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div v-for="field in fieldAddress" :key="field.name">
      <div v-if="field.type === 'select'">
        <InputSelectRegion
          :fieldName="field.name"
          :placeholder="
            props.id
              ? `Ubah ${field.placeholder}`
              : `Pilih ${field.placeholder}`
          "
        />
      </div>

      <div v-else-if="field.type === 'text'" class="mb-0">
        <Field
          v-model="form[field.name]"
          :name="field.name"
          :type="field.type"
          :placeholder="field.placeholder"
          @input="onChange[field.name]?.($event)"
          :disabled="
            ['province', 'regencies', 'district', 'villages'].includes(
              field.name,
            )
          "
          class="w-full rounded-lg mt-3 py-2.5 px-3 border-2 outline-none"
        />
        <ErrorMessage :name="field.name" class="text-red-500 text-sm px-2" />
      </div>

      <div v-else class="my-3 mb-1 flex items-center space-x-3">
        <Field name="selected" v-slot="{ field }">
          <input
            :id="field.name"
            type="checkbox"
            class="checkbox-custom"
            v-bind="field"
            v-model="form.selected"
            autocomplete="off"
          />
          <ErrorMessage :name="field.name" class="text-red-500 text-sm mb-3" />
        </Field>
        <label :for="field.name">{{ field.placeholder }}</label>
      </div>
    </div>

    <Button
      :disabled="!meta.valid"
      type="submit"
      :label="addressStore.loading ? 'Loading' : 'Save'"
      class="w-full mt-3"
    />
  </form>
</template>

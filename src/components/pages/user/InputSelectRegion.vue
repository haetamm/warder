<script setup lang="ts">
import { defineProps } from 'vue'
import { useRegionStore } from '@/stores/region'
import { Field, ErrorMessage } from 'vee-validate'
import type { Region } from '@/utils/interface'
import { capitalizeFirstLetterOnly } from '@/utils/helper'

defineProps({
  fieldName: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
})

const regionStore = useRegionStore()

const getSelectOptions = (fieldName: string) => {
  switch (fieldName) {
    case 'province':
      return regionStore.provinces
    case 'regencies':
      return regionStore.regencies
    case 'district':
      return regionStore.districts
    case 'villages':
      return regionStore.villages
    default:
      return []
  }
}

const handleSelectChange = (fieldName: string, event: Event) => {
  const selectedValue = (event.target as HTMLSelectElement).value

  if (fieldName === 'province') {
    const province = regionStore.provinces.find(
      (province: { id: string }) => province.id === selectedValue,
    ) as Region | null

    if (province) {
      regionStore.selectedProvince = province
      regionStore.fetchRegencies()
    }
  } else if (fieldName === 'regencies') {
    const regency = regionStore.regencies.find(
      (regency: { id: string }) => regency.id === selectedValue,
    ) as Region | null

    if (regency) {
      regionStore.selectedRegency = regency
      regionStore.fetchDistricts()
    }
  } else if (fieldName === 'district') {
    const district = regionStore.districts.find(
      (district: { id: string }) => district.id === selectedValue,
    ) as Region | null

    if (district) {
      regionStore.selectedDistrict = district
      regionStore.fetchVillages()
    }
  } else if (fieldName === 'villages') {
    const village = regionStore.villages.find(
      (village: { id: string }) => village.id === selectedValue,
    ) as Region | null

    if (village) {
      regionStore.selectedVillage = village
    }
  }
}
</script>

<template>
  <Field :name="fieldName" v-slot="{ field: FieldBindingObject }">
    <div>
      <select
        v-bind="FieldBindingObject"
        class="w-full rounded-lg mt-3 py-2.5 px-2 border-2 outline-none"
        @change="handleSelectChange(fieldName, $event)"
        :disabled="regionStore.loading"
      >
        <option class="text-gray-400" value="" disabled selected>
          {{ regionStore.loading ? 'Loading..' : placeholder }}
        </option>
        <option
          v-for="option in getSelectOptions(fieldName)"
          :key="option.id"
          :value="option.id"
        >
          {{ capitalizeFirstLetterOnly(option.name) }}
        </option>
      </select>
      <ErrorMessage :name="fieldName" class="text-red-500 text-sm mb-3 px-2" />
    </div>
  </Field>
</template>

<script setup lang="ts">
import { defineProps, onUnmounted } from 'vue'
import { Field, ErrorMessage, useFormContext } from 'vee-validate'
import { useRegionStore } from '@/stores/region'
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

onUnmounted(() => {
  regionStore.resetData()
})

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

const { setFieldValue } = useFormContext()

const resetSelectField = (fieldName: string) => {
  setFieldValue(fieldName, '')

  if (fieldName === 'regencies') {
    regionStore.selectedRegency = null
    regionStore.regencies = []
  } else if (fieldName === 'district') {
    regionStore.selectedDistrict = null
    regionStore.districts = []
  } else if (fieldName === 'villages') {
    regionStore.selectedVillage = null
    regionStore.villages = []
  }
}

const handleSelectChange = (fieldName: string, event: Event) => {
  const selectedValue = (event.target as HTMLSelectElement).value
  console.log(selectedValue)

  if (fieldName === 'province') {
    const province = regionStore.provinces.find(
      (province: { id: string }) => province.id === selectedValue,
    ) as Region | null

    if (province) {
      regionStore.selectedProvince = province
      regionStore.fetchRegencies()
      resetSelectField('regencies')
      resetSelectField('district')
      resetSelectField('villages')
    }
  } else if (fieldName === 'regencies') {
    const regency = regionStore.regencies.find(
      (regency: { id: string }) => regency.id === selectedValue,
    ) as Region | null

    if (regency) {
      regionStore.selectedRegency = regency
      regionStore.fetchDistricts()
      resetSelectField('district')
      resetSelectField('villages')
    }
  } else if (fieldName === 'district') {
    const district = regionStore.districts.find(
      (district: { id: string }) => district.id === selectedValue,
    ) as Region | null

    if (district) {
      regionStore.selectedDistrict = district
      regionStore.fetchVillages()
      resetSelectField('villages')
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
  <Field :name="fieldName" v-slot="{ field }">
    <select
      v-bind="field"
      :id="fieldName"
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
    <ErrorMessage :name="fieldName" class="text-red-500 text-sm mt-1" />
  </Field>
</template>

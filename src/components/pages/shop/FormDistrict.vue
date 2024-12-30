<script setup lang="ts">
import { fieldRegionPost } from '@/utils/fields'
import { scrollTop } from '@/utils/helper'
import type { RegSellerForm } from '@/utils/interface'
import { districtSchema } from '@/utils/validation'
import { useForm } from 'vee-validate'

const { handleSubmit } = useForm<RegSellerForm>({
  validationSchema: districtSchema,
})

const onSubmit = handleSubmit(() => {
  //
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="h-[260px]">
      <div class="pb-[24px]">
        <div class="mt-2 mb-3 w-full">
          <div v-for="field in fieldRegionPost" :key="field.name">
            <InputSelectRegion
              :fieldName="field.name"
              :placeholder="`Pilih ${field.name}`"
            />
          </div>
        </div>
      </div>
    </div>
    <Button
      @click="scrollTop"
      as="router-link"
      class="w-full xl:w-[144px] py-3 xl:py-2 font-bold"
      label="Selesai"
      severity="secondary"
      type="submit"
    />
  </form>
</template>

<script setup lang="ts">
import { StepItem } from 'primevue'
import { computed, onMounted, watch } from 'vue'
import Stepper from 'primevue/stepper'
import Step from 'primevue/step'
import StepPanel from 'primevue/steppanel'
import { useRegionStore } from '@/stores/region'
import { useUserStore } from '@/stores/user'
import FormInputNumberPhone from './FormInputNumberPhone.vue'
import FormCredentialShop from './FormCredentialShop.vue'
import FormRegion from './FormRegion.vue'

const userStore = useUserStore()
const phoneNumber = computed(() => userStore.phoneNumber)
const shopName = computed(() => userStore.shopName)
const shopDomain = computed(() => userStore.shopDomain)
const regionStore = useRegionStore()

const activeStep = computed(() => {
  if (userStore.phoneNumber && !userStore.shopName) {
    return '2'
  } else if (userStore.shopName && userStore.shopName) {
    return '3'
  } else {
    return '1'
  }
})

onMounted(async () => {
  await regionStore.fetchProvinces()
  await userStore.fetchUserData()
})

watch([phoneNumber, shopName], () => {
  console.log('Active Step updated:', activeStep.value)
})
</script>

<template>
  <div class="px-0 pt-4 xs:pt-0 md:pt-4 lg:pt-6 pb-6 lg:pb-12 w-full">
    <Stepper
      :value="activeStep"
      :linear="true"
      class="w-full justify-start pr-3 lg:px-6"
    >
      <!-- Step 1 -->
      <StepItem value="1" class="flex items-start">
        <Step>
          <p class="text-lg font-bold">Masukan No. Hp-mu</p>
          <p v-if="phoneNumber" class="text-lg text-start mt-1">
            {{ phoneNumber }}
          </p>
        </Step>
        <StepPanel class="w-full">
          <FormInputNumberPhone />
        </StepPanel>
      </StepItem>

      <!-- Step 2 -->
      <StepItem value="2">
        <Step>
          <p class="text-lg font-bold">Masukan Nama Toko dan Domain</p>
          <template v-if="shopName">
            <p class="text-sm text-start mt-2">Nama Toko</p>
            <div class="text-sm text-start">
              {{ shopName }}
            </div>
            <p class="text-sm text-start mt-1">Nama Domain</p>
            <div class="text-sm text-start">
              {{ shopDomain }}
            </div>
          </template>
        </Step>
        <StepPanel class="w-full">
          <FormCredentialShop />
        </StepPanel>
      </StepItem>

      <!-- Step 3 -->
      <StepItem value="3">
        <Step>
          <div class="font-bold text-lg">Masukkan Alamat Tokomu</div>
        </Step>
        <StepPanel class="w-full">
          <FormRegion />
        </StepPanel>
      </StepItem>
    </Stepper>
  </div>
</template>

<style scoped>
.p-inputtext {
  width: 100%;
  height: 48px;
}
</style>

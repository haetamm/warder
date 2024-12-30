<script setup lang="ts">
import { Button, FloatLabel, InputText, StepItem } from 'primevue'
import { onMounted, ref } from 'vue'
import Stepper from 'primevue/stepper'
import Step from 'primevue/step'
import StepPanel from 'primevue/steppanel'
import { useRegionStore } from '@/stores/region'
import FormDistrict from './FormDistrict.vue'

const phoneNumber = ref('')
const storeName = ref('')
const domainName = ref('')
const isPhoneNumberSubmitted = ref(false)
const isStoreInfoSubmitted = ref(false)
const regionStore = useRegionStore()

onMounted(() => {
  regionStore.fetchProvinces()
})

const handlePhoneNumberSubmit = (activateCallback: (step: string) => void) => {
  if (phoneNumber.value) {
    isPhoneNumberSubmitted.value = true
    activateCallback('2')
  }
}

const handleStoreInfoSubmit = (activateCallback: (step: string) => void) => {
  if (storeName.value && domainName.value) {
    isStoreInfoSubmitted.value = true
    activateCallback('3')
  }
}
</script>

<template>
  <div class="px-0 pt-4 xs:pt-0 md:pt-4 lg:pt-6 pb-6 lg:pb-12 w-full">
    <p class="text-lg px-0 lg:px-6 hidden lg:block">
      Hallo,
      <span class="font-bold mb-[24px] hidden lg:inline-block">
        Tatang Haetami
      </span>
      ayo isi detail tokomu
    </p>

    <div class="w-full px-3 lg:hidden mt-3">
      <div class="text-2xl text-start font-bold text-slate-600">
        Masukan Info Toko
      </div>
    </div>

    <Stepper value="1" :linear="true" class="w-full justify-start pr-3 lg:px-6">
      <StepItem value="1" class="flex items-start">
        <Step>
          <p class="text-lg font-bold">Masukan No. Hp-mu</p>
          <p v-if="isPhoneNumberSubmitted" class="text-lg text-start mt-1">
            {{ phoneNumber }}
          </p>
        </Step>
        <StepPanel v-slot="{ activateCallback }" class="w-full">
          <div class="h-24">
            <div class="pt-[8px] pb-[24px]">
              <div class="mt-2 mb-6">
                <FloatLabel variant="on">
                  <InputText id="phone_label" v-model="phoneNumber" />
                  <label for="phone_label">Nomor Handphone</label>
                </FloatLabel>
                <div class="text-sm text-end">{{ phoneNumber.length }}/15</div>
              </div>
            </div>
          </div>
          <Button
            :disabled="!phoneNumber"
            class="w-full lg:w-[144px] py-3 lg:py-2 font-bold"
            label="Lanjut"
            @click="handlePhoneNumberSubmit(activateCallback)"
          />
        </StepPanel>
      </StepItem>

      <StepItem value="2">
        <Step>
          <p class="text-lg font-bold">Masukan Nama Toko dan Domain</p>
          <div v-if="isStoreInfoSubmitted">
            <p class="text-sm text-start mt-2">Nama Toko</p>
            <div class="text-sm text-start">
              {{ storeName }}
            </div>
            <p class="text-sm text-start mt-1">Nama Domain</p>
            <div class="text-sm text-start">
              {{ domainName }}
            </div>
          </div>
        </Step>
        <StepPanel v-slot="{ activateCallback }" class="w-full">
          <div class="h-48">
            <div class="pt-[8px] pb-[24px]">
              <div class="mt-2 mb-6">
                <FloatLabel variant="on">
                  <InputText id="store_label" v-model="storeName" />
                  <label for="store_label">Nama Toko</label>
                </FloatLabel>
                <div class="flex justify-between text-gray-500 text-xs mt-1">
                  <div class="text-sm">
                    Pastikan nama toko yang diisi sudah benar
                  </div>
                  <div class="text-sm">{{ storeName.length }}/60</div>
                </div>
              </div>

              <div class="mt-2 mb-6">
                <div class="flex items-center space-x-2 w-full">
                  <div class="text-gray-500 text-xl">warderrr.com/</div>
                  <FloatLabel variant="on" class="w-full">
                    <InputText id="domain_label" v-model="domainName" />
                    <label for="domain_label">Nama Domain</label>
                  </FloatLabel>
                </div>
                <div class="text-sm text-end">{{ domainName.length }}/24</div>
              </div>
            </div>
          </div>
          <Button
            :disabled="!storeName || !domainName"
            class="w-full lg:w-[144px] py-3 lg:py-2 font-bold"
            label="Lanjut"
            @click="handleStoreInfoSubmit(activateCallback)"
          />
        </StepPanel>
      </StepItem>

      <StepItem value="3">
        <Step>
          <div class="font-bold text-lg">Masukkan Alamat Tokomu</div>
        </Step>
        <StepPanel class="w-full">
          <FormDistrict />
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

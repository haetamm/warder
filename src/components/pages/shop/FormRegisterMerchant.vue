<script setup lang="ts">
import { Button, FloatLabel, InputText, Select, StepItem } from 'primevue'
import { onMounted, ref } from 'vue'
import Stepper from 'primevue/stepper'
import Step from 'primevue/step'
import StepPanel from 'primevue/steppanel'
import axiosRegionInstance from '@/utils/apiRegion'
import { capitalizeFirstLetterOnly, scrollTop } from '@/utils/helper'
import { urlPage } from '@/utils/constans'

const phoneNumber = ref('')
const storeName = ref('')
const domainName = ref('')
const isPhoneNumberSubmitted = ref(false)
const isStoreInfoSubmitted = ref(false)

function handlePhoneNumberSubmit(activateCallback: (step: string) => void) {
  if (phoneNumber.value) {
    isPhoneNumberSubmitted.value = true
    activateCallback('2')
  }
}

function handleStoreInfoSubmit(activateCallback: (step: string) => void) {
  if (storeName.value && domainName.value) {
    isStoreInfoSubmitted.value = true
    activateCallback('3')
  }
}

interface Region {
  id: string
  name: string
}

const selectedProvinsi = ref<Region | null>(null)
const provinsi = ref<Region[]>([])
const selectedKab = ref<Region | null>(null)
const kab = ref<Region[]>([])
const selectedKec = ref<Region | null>(null)
const kec = ref<Region[]>([])
const selectedKel = ref<Region | null>(null)
const kel = ref<Region[]>([])

onMounted(async () => {
  try {
    const { data: response } = await axiosRegionInstance.get('provinces.json')
    provinsi.value = response
  } catch (error) {
    console.error('Error fetching provinsi:', error)
  }
})

async function fetchKabupaten() {
  if (!selectedProvinsi.value) return
  try {
    const { data: response } = await axiosRegionInstance.get(
      `regencies/${selectedProvinsi.value.id}.json`,
    )
    kab.value = await response
    selectedKab.value = null
    selectedKec.value = null
    selectedKel.value = null
    kec.value = []
    kel.value = []
  } catch (error) {
    console.error('Error fetching kabupaten:', error)
  }
}

async function fetchKecamatan() {
  if (!selectedKab.value) return
  try {
    const { data: response } = await axiosRegionInstance.get(
      `districts/${selectedKab.value.id}.json`,
    )
    kec.value = await response
    selectedKec.value = null
    selectedKel.value = null
    kel.value = []
  } catch (error) {
    console.error('Error fetching kecamatan:', error)
  }
}

async function fetchKelurahan() {
  if (!selectedKec.value) return
  try {
    const { data: response } = await axiosRegionInstance.get(
      `villages/${selectedKec.value.id}.json`,
    )
    kel.value = await response
    selectedKel.value = null
  } catch (error) {
    console.error('Error fetching kelurahan:', error)
  }
}

const fields = ref([
  {
    model: selectedProvinsi,
    options: provinsi,
    placeholder: 'Provinsi',
    onChange: fetchKabupaten,
  },
  {
    model: selectedKab,
    options: kab,
    placeholder: 'Kota/Kabupaten',
    onChange: fetchKecamatan,
  },
  {
    model: selectedKec,
    options: kec,
    placeholder: 'Kecamatan',
    onChange: fetchKelurahan,
  },
  {
    model: selectedKel,
    options: kel,
    placeholder: 'Kelurahan',
    onChange: null,
  },
])
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
          <div class="h-[240px]">
            <div class="pt-[8px] pb-[24px]">
              <div class="mt-2 mb-3 w-full">
                <template v-for="(field, index) in fields" :key="index">
                  <Select
                    v-model="field.model"
                    :options="field.options"
                    filter
                    optionLabel="name"
                    :placeholder="field.placeholder"
                    class="w-full mb-3"
                    @change="field.onChange && field.onChange()"
                  >
                    <template #value="slotProps">
                      <div v-if="slotProps.value">
                        <div>
                          {{ capitalizeFirstLetterOnly(slotProps.value.name) }}
                        </div>
                      </div>
                      <span v-else>{{ slotProps.placeholder }}</span>
                    </template>
                    <template #option="slotProps">
                      <div>{{ slotProps.option.name }}</div>
                    </template>
                  </Select>
                </template>
              </div>
            </div>
          </div>
          <Button
            v-on:click="scrollTop"
            as="router-link"
            :to="urlPage.SELLER_HOME"
            class="w-full xl:w-[144px] py-3 xl:py-2 font-bold"
            label="Selesai"
            severity="secondary"
          />
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

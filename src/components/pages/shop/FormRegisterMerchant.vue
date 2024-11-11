<script setup lang="ts">
import { Button, FloatLabel, InputText, Select, StepItem } from 'primevue'
import { onMounted, ref } from 'vue'
import Stepper from 'primevue/stepper'
import Step from 'primevue/step'
import StepPanel from 'primevue/steppanel'

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

interface Wilayah {
  id: string
  name: string
}

const selectedProvinsi = ref<Wilayah | null>(null)
const provinsi = ref<Wilayah[]>([])
const selectedKab = ref<Wilayah | null>(null)
const kab = ref<Wilayah[]>([])
const selectedKec = ref<Wilayah | null>(null)
const kec = ref<Wilayah[]>([])
const selectedKel = ref<Wilayah | null>(null)
const kel = ref<Wilayah[]>([])

// Fetch Provinsi saat pertama kali halaman di-render
onMounted(async () => {
  try {
    const response = await fetch(
      'https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json',
    )
    provinsi.value = await response.json()
  } catch (error) {
    console.error('Error fetching provinsi:', error)
  }
})

// Fetch Kabupaten berdasarkan Provinsi yang dipilih
async function fetchKabupaten() {
  if (!selectedProvinsi.value) return
  try {
    const response = await fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvinsi.value.id}.json`,
    )
    kab.value = await response.json()
    // Reset pilihan setelah level ini
    selectedKab.value = null
    selectedKec.value = null
    selectedKel.value = null
    kec.value = []
    kel.value = []
  } catch (error) {
    console.error('Error fetching kabupaten:', error)
  }
}

// Fetch Kecamatan berdasarkan Kabupaten yang dipilih
async function fetchKecamatan() {
  if (!selectedKab.value) return
  try {
    const response = await fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedKab.value.id}.json`,
    )
    kec.value = await response.json()
    // Reset pilihan setelah level ini
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
    const response = await fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedKec.value.id}.json`,
    )
    kel.value = await response.json()
    // Reset pilihan Kelurahan
    selectedKel.value = null
  } catch (error) {
    console.error('Error fetching kelurahan:', error)
  }
}
</script>

<template>
  <div class="font-sans px-0 pt-4 xs:pt-0 md:pt-4 lg:pt-6 pb-6 lg:pb-12 w-full">
    <p class="text-lg px-0 lg:px-6 hidden lg:block">
      Hallo,
      <span class="font-bold mb-[24px] hidden lg:inline-block">
        Tatang Haetami
      </span>
      ayo isi detail tokomu
    </p>

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
          <div class="h-[255px] xl:h-[165px]">
            <div class="pt-[8px] pb-[24px]">
              <div
                class="mt-2 mb-3 xl:mb-6 inline-block xl:flex items-center space-x-0 xl:space-x-2 w-full"
              >
                <Select
                  v-model="selectedProvinsi"
                  :options="provinsi"
                  filter
                  optionLabel="name"
                  placeholder="Provinsi"
                  class="w-full mb-3 xl:mb-0"
                  @change="fetchKabupaten"
                >
                  <template #value="slotProps">
                    <div v-if="slotProps.value">
                      <div>{{ slotProps.value.name }}</div>
                    </div>
                    <span v-else>{{ slotProps.placeholder }}</span>
                  </template>
                  <template #option="slotProps">
                    <div>{{ slotProps.option.name }}</div>
                  </template>
                </Select>

                <Select
                  v-model="selectedKab"
                  :options="kab"
                  filter
                  optionLabel="name"
                  placeholder="Kota/Kabupaten"
                  class="w-full"
                  @change="fetchKecamatan"
                >
                  <template #value="slotProps">
                    <div v-if="slotProps.value">
                      <div>{{ slotProps.value.name }}</div>
                    </div>
                    <span v-else>{{ slotProps.placeholder }}</span>
                  </template>
                  <template #option="slotProps">
                    <div>{{ slotProps.option.name }}</div>
                  </template>
                </Select>
              </div>

              <div
                class="mt-2 mb-3 xl:mb-6 inline-block xl:flex items-center space-x-0 xl:space-x-2 w-full"
              >
                <Select
                  v-model="selectedKec"
                  :options="kec"
                  filter
                  optionLabel="name"
                  placeholder="Kecamatan"
                  class="w-full mb-3 xl:mb-0"
                  @change="fetchKelurahan"
                >
                  <template #value="slotProps">
                    <div v-if="slotProps.value">
                      <div>{{ slotProps.value.name }}</div>
                    </div>
                    <span v-else>{{ slotProps.placeholder }}</span>
                  </template>
                  <template #option="slotProps">
                    <div>{{ slotProps.option.name }}</div>
                  </template>
                </Select>

                <Select
                  v-model="selectedKel"
                  :options="kel"
                  filter
                  optionLabel="name"
                  placeholder="Kelurahan"
                  class="w-full"
                >
                  <template #value="slotProps">
                    <div v-if="slotProps.value">
                      <div>{{ slotProps.value.name }}</div>
                    </div>
                    <span v-else>{{ slotProps.placeholder }}</span>
                  </template>
                  <template #option="slotProps">
                    <div>{{ slotProps.option.name }}</div>
                  </template>
                </Select>
              </div>
            </div>
          </div>
          <Button
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

<script setup lang="ts">
import { ChTick } from '@kalimahapps/vue-icons'
import { FloatLabel, InputText } from 'primevue'
</script>

<template>
  <div class="font-sans px-0 pt-4 lg:pt-6 lg:pb-12 w-full">
    <p class="text-lg px-0 lg:px-6 hidden lg:block">
      Hallo,
      <span class="font-bold mb-[24px] hidden lg:inline-block"
        >Tatang Haetami</span
      >
      ayo isi detail tokomu
    </p>

    <div class="flex w-full justify-center px-0.5 lg:px-6">
      <div
        class="flex flex-col items-start w-full xs:w-[450px] md:w-[55%] lg:w-full"
      >
        <div
          class="hidden lg:flex items-start relative w-full justify-center md:justify-start"
        >
          <div class="absolute top-8 left-4 h-full w-[2px] bg-purple-600"></div>
          <div
            class="flex items-center justify-center w-8 h-8 bg-purple-600 rounded-full text-white z-10"
          >
            <ChTick class="w-full" />
          </div>
          <div class="ml-0 lg:ml-5 w-full lg:w-[calc(100%-55px)]">
            <div class="font-bold text-lg">Masukan No. Hp-mu</div>
            <div class="pt-[8px] pb-[24px] text-lg">+62 822 60283287</div>
          </div>
        </div>

        <div
          class="inline-block lg:flex items-center lg:items-start relative w-full justify-center lg:justify-start px-3 lg:px-0"
        >
          <div
            class="hidden lg:inline-block absolute top-8 left-4 h-full w-[2px] bg-gray-300"
          ></div>
          <div
            class="hidden lg:flex items-center justify-center w-8 h-8 bg-white border-2 border-purple-600 rounded-full text-purple-600 font-bold z-10"
          >
            2
          </div>
          <div class="ml-0 lg:ml-5 w-full lg:w-[calc(100%-55px)]">
            <div class="hidden lg:block font-bold text-lg">
              Masukan Nama Toko dan Domain
            </div>
            <div class="pt-[8px] pb-[24px]">
              <div class="mt-2 mb-6">
                <FloatLabel variant="on">
                  <InputText id="on_label" />
                  <label for="on_label">Nama Toko</label>
                </FloatLabel>
                <div class="flex justify-between text-gray-500 text-xs mt-1">
                  <div class="text-sm">
                    Pastikan nama toko yang diisi sudah benar
                  </div>
                  <div class="text-sm">0/60</div>
                </div>
              </div>

              <div class="mt-2 mb-6">
                <div class="flex items-center space-x-2 w-full">
                  <div class="text-gray-500 text-xl">warderrr.com/</div>
                  <FloatLabel variant="on" class="w-full">
                    <InputText id="domain_label" />
                    <label for="domain_label">Nama Domain</label>
                  </FloatLabel>
                </div>
                <div class="flex justify-end text-gray-500 text-xs mt-1">
                  <div class="text-sm">0/24</div>
                </div>
              </div>

              <button
                class="w-full lg:w-[144px] py-2 font-bold bg-purple-600 text-white rounded-md"
              >
                Lanjut
              </button>
            </div>
          </div>
        </div>

        <div class="hidden lg:flex items-start w-full relative justify-start">
          <div
            class="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full text-white font-bold z-10"
          >
            3
          </div>
          <div class="ml-0 lg:ml-5 w-full lg:w-[calc(100%-55px)]">
            <div class="font-bold text-lg">Masukkan Alamat Tokomu</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.p-inputtext {
  width: 100%;
  height: 48px;
}
</style>

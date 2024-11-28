<script setup lang="ts">
import { BxPencil } from '@kalimahapps/vue-icons'

const workSchedule = [
  { day: 'Senin-Kamis', desc: '08:00 - 17:00 WIB' },
  { day: "Jum'at", desc: '08:00 - 15:00 WIB' },
  { day: 'Sabtu-Minggu', desc: 'Libur rutin (Produkmu tidak bisa dibeli)' },
]
</script>

<template>
  <div class="px-2 xs:px-[20px] my-3">
    <div class="flex items-center space-x-2">
      <img
        src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/icarus/kratos/bf512c3f.svg?ect=3g"
        alt="time-img"
        class="w-10 h-10"
      />
      <div class="flex flex-col">
        <p class="font-bold text-lg">Jam Operasional</p>
        <p class="text-sm">
          Di sini kamu bisa mengatur tokomu secara keseluruhan beroperasi rutin
          setiap minggunya.
          <span class="text-purple-600 hover:underline cursor-pointer"
            >Baca Artikel</span
          >
        </p>
      </div>
    </div>
    <div class="w-full mt-3">
      <div class="text-sm border-[1px] rounded-md px-1 md:px-5 py-6">
        <div class="flex justify-between">
          <div>
            <div
              v-for="({ day, desc }, index) in workSchedule"
              :key="index"
              class="flex space-x-2 my-1 text-sm"
            >
              <p class="border-r-2 min-w-[110px]">{{ day }}</p>
              <p class="min-w-[130px] w-full px-1">{{ desc }}</p>
            </div>
          </div>
          <div class="flex">
            <BxPencil class="w-7 h-7 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

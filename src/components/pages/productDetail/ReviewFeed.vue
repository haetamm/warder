<script setup lang="ts">
import {
  AnFilledLike,
  AnFilledStar,
  BsThreeDotsVertical,
  ByChevronBottom,
  ByChevronTop,
} from '@kalimahapps/vue-icons'
import { ref } from 'vue'

const isCollapsed = ref(true)
const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>

<template>
  <div class="mt-4 mb-10">
    <div class="flex items-center space-x-4">
      <div class="flex-shrink-0">
        <div class="font-bold text-lg">Ulasan Pilihan</div>
        <small>Menampilkan 1 dari 1 ulasan</small>
      </div>
      <div
        class="flex-1 hidden sm:inline-block font start-end text-sm font-bold min-w-0 p-0"
      >
        <p class="justify-end flex">Urutkan</p>
      </div>
      <select
        aria-label="rating"
        id="rating"
        class="bg-gray-50 cursor-pointer select-none border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option class="py-2 cursor-pointer" selected>Terbaru</option>
        <option class="py-2 cursor-pointer" value="US">Rating Tertinggi</option>
        <option class="py-2 cursor-pointer" value="CA">Rating terendah</option>
      </select>
    </div>

    <div class="flex items-center mt-6 space-x-4">
      <div class="flex-shrink-0">
        <div class="flex">
          <AnFilledStar
            v-for="index in 4"
            :key="index"
            class="text-purple-600 mr-1"
          />
          <AnFilledStar class="text-gray-300 mr-1 dark:text-gray-500" />
        </div>
      </div>
      <div class="flex-1 font text-md min-w-0 p-0">
        <p>1 hari lalu</p>
      </div>
      <BsThreeDotsVertical class="h-6 w-6" />
    </div>

    <div class="border-b-2 pb-3">
      <div class="flex items-center mt-3 font-semibold space-x-4">
        <div class="flex-shrink-0">
          <img
            width="32"
            height="32"
            class="rounded-full"
            src="https://images.tokopedia.net/img/cache/100-square/default_v3-usrnophoto.png.webp?ect=4g"
            alt="avatar"
          />
        </div>
        <div class="font text-md min-w-0 p-0">
          <p>Yoona</p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
        similique labore suscipit ipsam harum, delectus doloremque, placeat,
        animi ea recusandae consectetur aliquid praesentium eos corrupti hic
        molestias excepturi nostrum sequi.
      </p>

      <div class="flex items-center mt-3 space-x-4">
        <div class="flex-shrink-0">
          <AnFilledLike class="cursor-pointer hover:text-purple-600" />
        </div>
        <div class="flex-1 font text-md min-w-0 p-0">
          <div>Membantu</div>
        </div>
        <div
          @click="toggleCollapse"
          class="flex space-x-1 items-center cursor-pointer hover:underline"
        >
          <p class="">
            {{ isCollapsed ? 'Lihat Balasannya' : 'Tutup Balasannya' }}
          </p>
          <ByChevronBottom v-if="isCollapsed" />
          <ByChevronTop v-else />
        </div>
      </div>
    </div>

    <div v-if="!isCollapsed" class="bg-gray-300 mt-3 px-3 py-2 rounded-lg">
      <div class="flex items-center font-semibold space-x-4">
        <div class="flex-shrink-0">
          <img
            width="32"
            height="32"
            class="rounded-full"
            src="https://images.tokopedia.net/img/cache/100-square/default_v3-usrnophoto.png.webp?ect=4g"
            alt="avatar"
          />
        </div>
        <div
          class="inline-block xs:flex font-semibold text-sm items-center min-w-0 p-0 space-x-1"
        >
          <p>Advance Digital Store</p>
          <small class="bg-purple-600 rounded-md px-1 text-white"
            >penjual</small
          >
          <p>2 Jam lalu</p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
        similique labore suscipit ipsam harum, delectus doloremque, placeat,
        animi ea recusandae consectetur aliquid praesentium eos corrupti hic
        molestias excepturi nostrum sequi.
      </p>
    </div>
  </div>
</template>

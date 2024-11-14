<script setup lang="ts">
import { beliLink, jualLink, linkApps, links, linkSocmed } from '@/utils/data'
import { isPageType } from '@/utils/helper'
import { useMediaQuery } from '@vueuse/core'
import { useRoute } from 'vue-router'

const route = useRoute()
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
</script>

<template>
  <footer
    v-if="
      !isPageType(route, 'shipment') &&
      (!isPageType(route, 'myShop') || isLargeScreen)
    "
    class="w-full border-t-2 py-4 mt-1 mb-10 md:mb-0"
  >
    <div class="kontener px-3 mx-auto mt-2">
      <div class="grid md:grid-cols-3 mx-auto">
        <div class="grid grid-cols-2">
          <div>
            <div class="font-bold text-lg">Warder</div>
            <ul v-for="(link, index) in links" :key="index">
              <li class="font-normal text-sm my-1">
                <span class="cursor-pointer hover:underline">{{ link }}</span>
              </li>
            </ul>
          </div>
          <div class="inline-block">
            <div class="mb-3">
              <div class="font-bold text-lg">Beli</div>
              <ul v-for="(link, index) in beliLink" :key="index">
                <li class="font-normal text-sm my-1">
                  <span class="cursor-pointer hover:underline">{{ link }}</span>
                </li>
              </ul>
            </div>
            <div>
              <div class="font-bold text-lg">Jual</div>
              <ul v-for="(link, index) in jualLink" :key="index">
                <li class="font-normal text-sm my-1">
                  <span class="cursor-pointer hover:underline">{{ link }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-3 md:mt-0">
          <div class="flex justify-center">
            <div class="font-bold text-lg">Ikuti Kami</div>
          </div>
          <div class="flex justify-center">
            <div class="flex mt-1 space-x-1 items-center">
              <component
                v-for="(icon, index) in linkSocmed"
                :key="index"
                :is="icon.component"
                :class="[
                  'hover:text-purple-600 cursor-pointer',
                  icon.sizeClass,
                ]"
              />
            </div>
          </div>
        </div>
        <div class="justify-center items-center">
          <img
            src="https://images.tokopedia.net/img/unify/il_footer_hd_v2.png"
            alt=""
            class="w-[460px] h-[223px] hidden xl:inline-block"
          />
          <div class="flex mt-2 justify-center items-center space-x-1">
            <div v-for="(link, index) in linkApps" :key="index" class="">
              <img
                :src="link"
                class="w-[135px] h-[40px] cursor-pointer"
                alt="apps"
              />
            </div>
          </div>
          <div
            class="flex justify-center mt-5 mb-2 text-sm font-bold text-gray-500"
          >
            © 2024 - PT. Warder Market
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

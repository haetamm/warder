<script setup lang="ts">
import { scrollTop } from '@/utils/helper'

import { AnFilledSetting } from '@kalimahapps/vue-icons'
import { navItems } from '@/utils/data'
import { urlPage } from '@/utils/constans'
import NavItem from './NavItem.vue'
import { computed } from 'vue'
import { useSellerStore } from '@/stores/seller'
import type { CurrentSellerResponse } from '@/utils/interface'

const sellerStore = useSellerStore()
const seller = computed<CurrentSellerResponse | null>(() => sellerStore.seller)
</script>

<template>
  <div class="px-0 md:px-3">
    <div
      class="flex items-center justify-center xl:justify-start pb-3 space-x-0 md:space-x-3 space-y-0 shadow-custom"
    >
      <img
        src="https://images.tokopedia.net/img/seller_no_logo_3.png"
        alt="merchant-img"
        class="h-9 w-9 rounded-full shadow-lg"
      />
      <div class="hidden xl:block">
        <div class="font-bold text-md hover:text-purple-600">
          <router-link :to="`/${seller?.shop_domain}`">
            {{ seller?.shop_name }}</router-link
          >
        </div>
        <small>Regular Merchant</small>
      </div>
    </div>

    <div class="my-1 mt-8 xs:mt-5 md:mt-8">
      <NavItem
        v-for="item in navItems.slice(0, 3)"
        :key="item.name"
        :route="item.route"
        :icon="item.icon"
        :label="item.label"
        :size="item.size"
        :onClick="scrollTop"
      />
    </div>
  </div>

  <div class="px-0 md:px-3">
    <NavItem
      :route="urlPage.SELLER_SETTING"
      :icon="AnFilledSetting"
      label="Pengaturan"
      size="w-7 h-7"
      :onClick="scrollTop"
    />
  </div>
</template>

<style scoped>
.shadow-custom {
  box-shadow: 0 3px 0px -2px #9333ea;
}
</style>

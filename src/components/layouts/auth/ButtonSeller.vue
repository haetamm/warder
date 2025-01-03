<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { urlPage } from '@/utils/constans'
import { scrollTop } from '@/utils/helper'
import { ProgressSpinner } from 'primevue'
import { computed } from 'vue'

const userStore = useUserStore()
const loading = computed<boolean | null>(() => userStore.loading)
const roles = computed(() => userStore.roles)
const shopName = computed(() => userStore.shopName)
</script>

<template>
  <template v-if="loading">
    <ProgressSpinner
      style="width: 20px; height: 20px"
      strokeWidth="8"
      fill="transparent"
      animationDuration=".5s"
      aria-label="Custom ProgressSpinner"
    />
  </template>
  <router-link
    v-else
    :to="roles.includes('SELLER') ? urlPage.SELLER_HOME : urlPage.MY_SHOP"
    v-on:click="scrollTop"
    class="hidden md:flex items-center"
  >
    <div
      v-if="roles.includes('SELLER')"
      class="min-w-[150px] flex items-center"
    >
      <img
        src="https://images.tokopedia.net/img/seller_no_logo_3.png"
        alt="profile-img"
        class="h-8 w-8 rounded-full"
      />
      <div class="ml-1 line-clamp-1">{{ shopName }}</div>
    </div>
    <div
      v-else
      class="min-w-[100px] border-[1px] border-black rounded-md text-black text-center"
    >
      <p class="px-2 py-[1.5px]">Buka Toko</p>
    </div>
  </router-link>
</template>

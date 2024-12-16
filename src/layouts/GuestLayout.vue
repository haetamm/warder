<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { urlPage } from '@/utils/constans'
import Toast from 'primevue/toast'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

if (userStore.token) {
  router.push(urlPage.HOME)
}
</script>

<template>
  <Toast
    position="top-right"
    :style="{ width: '320px', fontSize: '10px' }"
    warn-icon="true"
  />
  <div class="bg-white min-h-screen flex flex-col">
    <div class="kontener flex-grow mx-auto px-4">
      <router-link
        :to="urlPage.HOME"
        class="justify-center items-center hidden md:flex pt-3"
      >
        <img src="/image/logo.png" alt="logo" class="w-[150px] h-[40px]" />
      </router-link>
      <RouterView />
    </div>
  </div>
</template>

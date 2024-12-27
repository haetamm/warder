<script setup lang="ts">
import FooterComp from '@/components/layouts/default/FooterComp.vue'
import NavBar from '@/components/layouts/default/NavBar.vue'
import { useUserStore } from '@/stores/user'
import { urlPage } from '@/utils/constans'
import { useRouter } from 'vue-router'
import Toast from 'primevue/toast'
import { computed } from 'vue'

const userStore = useUserStore()
const router = useRouter()
const token = computed(() => userStore.token)
if (!token.value) {
  router.push(urlPage.LOGIN)
}
</script>

<template>
  <Toast
    position="top-right"
    :style="{ width: '320px', fontSize: '10px' }"
    warn-icon="true"
  />
  <div class="min-h-screen flex flex-col bg-white">
    <NavBar />
    <RouterView />
    <FooterComp />
  </div>
</template>

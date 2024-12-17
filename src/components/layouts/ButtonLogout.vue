<script setup lang="ts">
import { useLogoutStore } from '@/stores/logout'
import { useUserStore } from '@/stores/user'
import { MdLogout } from '@kalimahapps/vue-icons'
import { useToast } from 'primevue'
import { useRouter } from 'vue-router'

const logoutStore = useLogoutStore()
const userStore = useUserStore()
const toast = useToast()
const router = useRouter()

const onSubmit = () => {
  logoutStore
    .logoutUser(toast)
    .then((response: string) => {
      if (response) {
        userStore.logout()
        router.go(0)
      }
    })
    .catch((err: unknown) => {
      console.error(err)
    })
}
</script>

<template>
  <div
    @click="onSubmit"
    class="flex space-x-3 h-[44px] items-center cursor-pointer"
  >
    <MdLogout class="w-7 h-7" />
    <div>{{ logoutStore.loading ? 'Loading...' : 'Logout' }}</div>
  </div>
</template>

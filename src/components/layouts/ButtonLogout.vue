<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { MdLogout } from '@kalimahapps/vue-icons'
import { Button, Dialog, useToast } from 'primevue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const toast = useToast()
const router = useRouter()
const visible = ref(false)

const onSubmit = () => {
  userStore
    .logoutUser(toast)
    .then((response: string) => {
      if (response) {
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
    @click="visible = true"
    class="flex space-x-3 h-[44px] items-center cursor-pointer"
  >
    <MdLogout class="w-7 h-7" />
    <div>Logout</div>
  </div>
  <Dialog
    v-model:visible="visible"
    modal
    header="Logout"
    :style="{ width: '20rem' }"
  >
    <h1>Logout??</h1>
    <div class="flex justify-end">
      <Button
        :disabled="userStore.loading"
        :label="userStore.loading ? 'Loading..' : 'Logout'"
        class="w-[100px] mt-3"
        @click="onSubmit"
      />
    </div>
  </Dialog>
</template>

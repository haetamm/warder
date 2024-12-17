<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { DeGoogleOriginal } from '@kalimahapps/vue-icons'
import { useUserStore } from '@/stores/user'
import { urlPage } from '@/utils/constans'
import { useLoginWithGoogleStore } from '@/stores/loginWithGoogle'
import { useToast } from 'primevue'
import { useGetAuth } from '@/stores/getAuth'
import type { LoginResponse } from '@/utils/interface'

const loginWithGoogleStore = useLoginWithGoogleStore()
const getAuthStore = useGetAuth()
const toast = useToast()
const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

const onSubmit = () => {
  try {
    loginWithGoogleStore.loginWithGoogle(toast)
  } catch (err) {
    console.error(err)
  }
}

const getAuth = (code: string) => {
  getAuthStore
    .getAuth(toast, code)
    .then((response: LoginResponse) => {
      if (response) {
        userStore.setToken(response.token)
        userStore.setRoles(response.roles)
        router.push(urlPage.HOME)
      }
    })
    .catch((err: unknown) => {
      console.error(err)
    })
}

onMounted(() => {
  const code = route.query.code
  if (typeof code === 'string') {
    getAuth(code)
  }
})

watch(
  () => route.query.code,
  newCode => {
    if (typeof newCode === 'string') {
      getAuth(newCode)
    }
  },
)
</script>

<template>
  <div>
    <button @click="onSubmit" class="py-2.5 px-2 border-2 w-full rounded-lg">
      <div class="flex justify-center items-center space-x-2">
        <DeGoogleOriginal class="w-5 h-5" />
        <div class="text-slate-700 text-sm font-bold md:font-normal">
          {{
            loginWithGoogleStore.loading || getAuthStore.loading
              ? 'Loading..'
              : 'Google'
          }}
        </div>
      </div>
    </button>
  </div>
</template>

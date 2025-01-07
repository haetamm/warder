<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { DeGoogleOriginal } from '@kalimahapps/vue-icons'
import { useUserStore } from '@/stores/user'
import { useLoginWithGoogleStore } from '@/stores/loginWithGoogle'
import { useToast } from 'primevue'

const loginWithGoogleStore = useLoginWithGoogleStore()
const toast = useToast()
const route = useRoute()
const userStore = useUserStore()

const onSubmit = () => {
  loginWithGoogleStore.loginWithGoogle(toast)
}

const getAuth = (code: string) => {
  userStore.getGoogleAuth(toast, code)
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
            loginWithGoogleStore.loading || userStore.loading
              ? 'Loading..'
              : 'Google'
          }}
        </div>
      </div>
    </button>
  </div>
</template>

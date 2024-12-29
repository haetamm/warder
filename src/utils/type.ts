import type { useToast } from 'primevue'
import type { useRouter } from 'vue-router'

export type Toast = ReturnType<typeof useToast>
export type Router = ReturnType<typeof useRouter>

export type ValidationErrors = {
  [key: string]: string[]
}

import type { useToast } from 'primevue'
import type { useRouter } from 'vue-router'

export type Toast = ReturnType<typeof useToast>
export type Router = ReturnType<typeof useRouter>

export type ValidationErrors = {
  [key: string]: string[]
}

export type Address = {
  id: string | null
  recipient_name: string | null
  phone_number: string | null
  label: string | null
  province: string | null
  city: string | null
  district: string | null
  subdistrict: string | null
  street_name: string | null
  postal_code: string | null
  selected: boolean | null
  villages?: string
  regencies?: string
}

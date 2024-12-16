import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import axiosWarderApiInstance from '@/utils/apiWarder'
import { handleApiError } from '@/utils/handleApiErrors'
import type { Toast } from '@/utils/type'
import type { GuestForm } from '@/utils/interface'

export const useLoginStore = defineStore('login', {
  state: () => ({
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async loginUser(formData: GuestForm, toast: Toast) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.post(
          'login',
          formData,
        )
        const { data } = response
        const { token } = data

        Cookies.set('token', token, { expires: 10080 })
        toast.add({
          severity: 'info',
          summary: 'Success',
          detail: 'Selamat datang kembali!',
          life: 3000,
        })
        return data
      } catch (error: unknown) {
        handleApiError(error, toast)
      } finally {
        this.loading = false
      }
    },
  },
})

import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import axiosWarderApiInstance from '@/utils/apiWarder'
import { handleApiError } from '@/utils/handleApiErrors'
import type { Toast } from '@/utils/type'

export const useLogoutStore = defineStore('logout', {
  state: () => ({
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async logoutUser(toast: Toast) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.delete('logout')
        Cookies.remove('token')
        toast.add({
          severity: 'info',
          summary: 'Logout',
          detail: response.message,
          life: 3000,
        })
        return response
      } catch (error: unknown) {
        handleApiError(error, toast)
      } finally {
        this.loading = false
      }
    },
  },
})

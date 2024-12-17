import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import axiosWarderApiInstance from '@/utils/apiWarder'
import { handleApiError } from '@/utils/handleApiErrors'
import type { Toast } from '@/utils/type'

export const useGetAuth = defineStore('getAuth', {
  state: () => ({
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async getAuth(toast: Toast, code: string) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.get(
          `login/google/callback?code=${code}`,
        )
        const { data } = response
        const { token } = data

        Cookies.set('token', token, { expires: 10080 })
        return data
      } catch (error: unknown) {
        handleApiError(error, toast)
      } finally {
        this.loading = false
      }
    },
  },
})

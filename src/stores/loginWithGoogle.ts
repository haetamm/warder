import { defineStore } from 'pinia'
import axiosWarderApiInstance from '@/utils/apiWarder'
import { handleApiError } from '@/utils/handleApiErrors'
import type { Toast } from '@/utils/type'

export const useLoginWithGoogleStore = defineStore('loginWithGoogle', {
  state: () => ({
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async loginWithGoogle(toast: Toast) {
      this.loading = true
      this.error = null
      try {
        const response = await axiosWarderApiInstance.get('login/google')
        if (response.data.url) {
          window.location.href = response.data.url
        }
      } catch (error: unknown) {
        handleApiError(error, toast)
      } finally {
        this.loading = false
      }
    },
  },
})

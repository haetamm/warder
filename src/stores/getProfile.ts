import { defineStore } from 'pinia'
import axiosWarderApiInstance from '@/utils/apiWarder'
import { handleApiError } from '@/utils/handleApiErrors'
import type { Toast } from '@/utils/type'

export const useGetProfile = defineStore('getProfile', {
  state: () => ({
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async getProfile(toast: Toast) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.get('user')
        const { data } = response
        return data
      } catch (error: unknown) {
        handleApiError(error, toast)
      } finally {
        this.loading = false
      }
    },
  },
})

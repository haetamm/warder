import { defineStore } from 'pinia'
import axiosWarderApiInstance from '@/utils/apiWarder'
import { handleApiError } from '@/utils/handleApiErrors'
import type { Toast } from '@/utils/type'

export const useGetAddress = defineStore('getAddress', {
  state: () => ({
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async getAddress(toast: Toast) {
      this.loading = true
      this.error = null
      try {
        const { data: response } =
          await axiosWarderApiInstance.get('user/address')
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

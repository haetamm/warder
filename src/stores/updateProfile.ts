import { defineStore } from 'pinia'
import axiosWarderApiInstance from '@/utils/apiWarder'
import { handleApiError } from '@/utils/handleApiErrors'
import type { Toast } from '@/utils/type'
import type { UpdateProfilePayload } from '@/utils/interface'

export const useUpdateProfile = defineStore('updateProfile', {
  state: () => ({
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async updateProfile(toast: Toast, payload: UpdateProfilePayload) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.put(
          'user',
          payload,
        )
        const { data } = response
        toast.add({
          severity: 'info',
          summary: 'Success',
          detail: 'Profile berhasil diupdate!!',
          life: 3000,
        })
        console.log(data)
        return data
      } catch (error: unknown) {
        handleApiError(error, toast)
      } finally {
        this.loading = false
      }
    },
  },
})

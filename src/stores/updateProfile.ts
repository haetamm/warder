import { defineStore } from 'pinia'
import axiosWarderApiInstance from '@/utils/apiWarder'
import { handleApiError } from '@/utils/handleApiErrors'
import type { Toast, ValidationErrors } from '@/utils/type'
import type { UpdateProfilePayload } from '@/utils/interface'

export const useUpdateProfile = defineStore('updateProfile', {
  state: () => ({
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async updateProfile(
      toast: Toast,
      payload: UpdateProfilePayload,
      setErrors: (errors: ValidationErrors) => void,
    ) {
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
          detail: 'Data berhasil diupdate!!',
          life: 3000,
        })
        return data
      } catch (error: unknown) {
        handleApiError(error, toast, setErrors)
      } finally {
        this.loading = false
      }
    },
  },
})

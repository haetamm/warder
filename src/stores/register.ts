import { defineStore } from 'pinia'
import axiosWarderApiInstance from '@/utils/apiWarder'
import { handleApiError } from '@/utils/handleApiErrors'
import type { Toast, ValidationErrors } from '@/utils/type'
import type { GuestForm } from '@/utils/interface'

export const useRegisterUserStore = defineStore('register', {
  state: () => ({
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async registerUser(
      formData: GuestForm,
      toast: Toast,
      setErrors: (errors: ValidationErrors) => void,
    ) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.post(
          'register',
          formData,
        )
        const { data } = response
        toast.add({
          severity: 'info',
          summary: 'Success',
          detail: data,
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

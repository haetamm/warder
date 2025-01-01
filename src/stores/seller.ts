import { defineStore } from 'pinia'
import axiosWarderApiInstance from '@/utils/apiWarder'
import { handleApiError } from '@/utils/handleApiErrors'
import type { Toast, ValidationErrors } from '@/utils/type'
import type {
  RegCredentialShopForm,
  RegRegionSellerForm,
} from '@/utils/interface'

export const useSellerStore = defineStore('seller', {
  state: () => ({
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async postSeller(
      toast: Toast,
      payload: RegCredentialShopForm,
      setErrors: (errors: ValidationErrors) => void,
    ) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.post(
          'seller',
          payload,
        )
        const { data } = response
        toast.add({
          severity: 'info',
          summary: 'Success',
          detail: 'Alamat berhasil ditambahkan!!',
          life: 3000,
        })
        return data
      } catch (error: unknown) {
        handleApiError(error, toast, setErrors)
      } finally {
        this.loading = false
      }
    },
    async postRegionSeller(
      toast: Toast,
      payload: RegRegionSellerForm,
      setErrors: (errors: ValidationErrors) => void,
    ) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.post(
          'seller/region',
          payload,
        )
        const { data } = response
        console.log(data)
        toast.add({
          severity: 'info',
          summary: 'Success',
          detail: 'Toko berhasil dibuat!!',
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

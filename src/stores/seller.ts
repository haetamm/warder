import { defineStore } from 'pinia'
import axiosWarderApiInstance from '@/utils/apiWarder'
import { handleApiError } from '@/utils/handleApiErrors'
import type { Toast, ValidationErrors } from '@/utils/type'
import type {
  CurrentSellerResponse,
  RegCredentialSellerForm,
  RegRegionSellerForm,
  UpdateSellerPayload,
} from '@/utils/interface'

export const useSellerStore = defineStore('seller', {
  state: () => ({
    loading: false,
    error: null as string | null,
    seller: null as CurrentSellerResponse | null,
  }),
  actions: {
    async getSeller(toast: Toast) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.get('seller')
        const { data } = response
        this.seller = data
        return data
      } catch (error: unknown) {
        handleApiError(error, toast)
      } finally {
        this.loading = false
      }
    },
    async postSeller(
      toast: Toast,
      payload: RegCredentialSellerForm,
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
    async updateSeller(
      toast: Toast,
      payload: UpdateSellerPayload,
      setErrors: (errors: ValidationErrors) => void,
    ) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.put(
          'seller',
          payload,
        )
        const { data } = response
        toast.add({
          severity: 'info',
          summary: 'Success',
          detail: 'Data berhasil diupdate!!',
          life: 3000,
        })
        this.seller = data
        return data
      } catch (error: unknown) {
        handleApiError(error, toast, setErrors)
      } finally {
        this.loading = false
      }
    },
  },
})

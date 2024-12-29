import { defineStore } from 'pinia'
import axiosWarderApiInstance from '@/utils/apiWarder'
import { handleApiError } from '@/utils/handleApiErrors'
import type { Toast, ValidationErrors } from '@/utils/type'
import type { AddressForm, AddressResponse } from '@/utils/interface'

export const useAddress = defineStore('address', {
  state: () => ({
    loading: false,
    error: null as string | null,
    address: [] as AddressResponse[],
  }),
  actions: {
    async getAddress(toast: Toast) {
      this.loading = true
      this.error = null
      try {
        const { data: response } =
          await axiosWarderApiInstance.get('user/address')
        const { data } = response
        this.address = data
        return data
      } catch (error: unknown) {
        handleApiError(error, toast)
      } finally {
        this.loading = false
      }
    },
    async postAddress(
      toast: Toast,
      payload: AddressForm,
      setErrors: (errors: ValidationErrors) => void,
    ) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.post(
          'user/address',
          payload,
        )
        const { data } = response

        if (data.selected) {
          this.address = this.address.map((address: AddressResponse) => ({
            ...address,
            selected: false,
          }))
        }

        this.address = [...this.address, data]
        return data
      } catch (error: unknown) {
        handleApiError(error, toast, setErrors)
      } finally {
        this.loading = false
      }
    },
    async putAddress(toast: Toast, payload: AddressResponse, id: string) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.put(
          `user/address/${id}`,
          payload,
        )
        const { data } = response

        this.address = this.address.map((address: AddressResponse) =>
          address.id === id ? { ...address, ...data } : address,
        )
        return data
      } catch (error: unknown) {
        handleApiError(error, toast)
      } finally {
        this.loading = false
      }
    },
  },
})

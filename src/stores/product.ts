import { defineStore } from 'pinia'
import axiosWarderApiInstance from '@/utils/apiWarder'
import { handleApiError } from '@/utils/handleApiErrors'
import type { Toast } from '@/utils/type'
import type { ProductResponse, ProductForm } from '@/utils/interface'

export const useProductStore = defineStore('products', {
  state: () => ({
    loading: false,
    error: null as string | null,
    products: [] as ProductResponse[],
  }),
  actions: {
    setProducts(products: ProductResponse[]) {
      this.products = products
    },
    async getProducts(toast: Toast) {
      this.loading = true
      this.error = null
      try {
        const { data: response } =
          await axiosWarderApiInstance.get('my-products')
        const { data } = response
        this.notes = data
        return data
      } catch (error: unknown) {
        handleApiError(error, toast)
      } finally {
        this.loading = false
      }
    },
    async postProduct(toast: Toast, payload: ProductForm) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.post(
          'products',
          payload,
        )
        const { data } = response

        this.products = [...this.products, data]
        toast.add({
          severity: 'info',
          summary: 'Success',
          detail: 'Produk berhasil ditambahkan!!',
          life: 3000,
        })
        return data
      } catch (error: unknown) {
        handleApiError(error, toast)
      } finally {
        this.loading = false
      }
    },
    async updateProduct(toast: Toast, payload: ProductForm, id: string) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.put(
          `products/${id}`,
          payload,
        )
        const { data } = response
        this.products = this.products.map((product: ProductResponse) =>
          product.id === id ? { ...product, ...data } : product,
        )

        toast.add({
          severity: 'info',
          summary: 'Success',
          detail: 'Produk berhasil diupdate!!',
          life: 3000,
        })

        return data
      } catch (error: unknown) {
        handleApiError(error, toast)
      } finally {
        this.loading = false
      }
    },
    async updateStatusProduct(toast: Toast, id: string) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.put(
          `my-products/${id}`,
        )
        const { data } = response
        this.products = this.products.map((product: ProductResponse) =>
          product.id === id ? { ...product, ...data } : product,
        )

        toast.add({
          severity: 'info',
          summary: 'Success',
          detail: response.status,
          life: 3000,
        })

        return data
      } catch (error: unknown) {
        handleApiError(error, toast)
      } finally {
        this.loading = false
      }
    },
    async deleteProduct(toast: Toast, id: string) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.delete(
          `products/${id}`,
        )
        const { data } = response
        this.products = this.products.filter(
          (product: ProductResponse) => product.id !== id,
        )
        toast.add({
          severity: 'info',
          summary: 'Success',
          detail: 'Produk berhasil dihapus!!',
          life: 3000,
        })
        return data
      } catch (error: unknown) {
        handleApiError(error, toast)
      } finally {
        this.loading = false
      }
    },
  },
})

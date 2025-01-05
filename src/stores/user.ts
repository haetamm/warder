import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import axiosWarderApiInstance from '@/utils/apiWarder'
import type { GuestForm } from '@/utils/interface'
import type { Toast } from '@/utils/type'
import { handleApiError } from '@/utils/handleApiErrors'
import { AxiosError } from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    loading: false,
    error: null as string | null,
    token: Cookies.get('token') || null,
    roles: [] as string[],
    name: null as string | null,
    image: null as string | null,
    phoneNumber: null as string | null,
    shopName: null as string | null,
    shopDomain: null as string | null,
  }),
  actions: {
    async fetchUserData() {
      const token = Cookies.get('token')
      if (token) {
        this.loading = true
        this.error = null
        try {
          const { data: response } = await axiosWarderApiInstance.get('user')
          const { data } = response
          const { roles, name, image, phone_number, shop_name, shop_domain } =
            data
          this.roles = roles
          this.name = name
          this.image = image
          this.phoneNumber = phone_number
          this.shopName = shop_name
          this.shopDomain = shop_domain
        } catch (e) {
          if (e instanceof AxiosError) {
            if (e.response?.status === 401) {
              console.error('Invalid token', e)
              this.token = null
              this.roles = []
              this.name = null
              this.image = null
              Cookies.remove('token')
            }
          }
        } finally {
          this.loading = false
        }
      }
    },
    async loginUser(formData: GuestForm, toast: Toast) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.post(
          'login',
          formData,
        )
        const { data } = response
        Cookies.set('token', data.token, { expires: 10080 })
        window.location.assign('/')
        return data
      } catch (error: unknown) {
        handleApiError(error, toast)
      } finally {
        this.loading = false
      }
    },
    setToken(token: string) {
      this.token = token
      Cookies.set('token', token)
    },
    setRoles(roles: string[]) {
      this.roles = roles
    },
    setName(name: string) {
      this.name = name
    },
    setImage(image: string) {
      this.image = image
    },
    setPhoneNumber(phoneNumber: string) {
      this.phoneNumber = phoneNumber
    },
    setShopName(shopName: string) {
      this.shopName = shopName
    },
    async getGoogleAuth(toast: Toast, code: string) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.get(
          `login/google/callback?code=${code}`,
        )
        const { data } = response
        Cookies.set('token', data.token, { expires: 10080 })
        window.location.assign('/')
        return data
      } catch (error: unknown) {
        handleApiError(error, toast)
      } finally {
        this.loading = false
      }
    },
    async logoutUser(toast: Toast) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.delete('logout')
        this.token = null
        this.roles = []
        this.name = null
        this.image = null
        this.phoneNumber = null
        this.shopName = null
        this.shopDomain = null
        Cookies.remove('token')
        toast.add({
          severity: 'info',
          summary: 'Logout',
          detail: response.message,
          life: 3000,
        })
        return response
      } catch (error: unknown) {
        handleApiError(error, toast)
      } finally {
        this.loading = false
      }
    },
  },
})

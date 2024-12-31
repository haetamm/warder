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
  }),
  actions: {
    async fetchUserData() {
      const token = Cookies.get('token')
      if (token) {
        try {
          const { data: response } = await axiosWarderApiInstance.get('user')
          const { data } = response
          this.roles = data.roles
          this.name = data.name
          this.image = data.image
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
        const { token, roles, name, image } = data
        this.token = token
        this.roles = roles
        this.name = name
        this.image = image

        Cookies.set('token', token, { expires: 10080 })
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
    async getGoogleAuth(toast: Toast, code: string) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.get(
          `login/google/callback?code=${code}`,
        )
        const { data } = response
        const { token, roles, name, image } = data
        this.token = token
        this.roles = roles
        this.name = name
        this.image = image

        Cookies.set('token', token, { expires: 10080 })
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

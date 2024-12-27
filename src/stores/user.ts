import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import axiosWarderApiInstance from '@/utils/apiWarder'

export const useUserStore = defineStore('user', {
  state: () => ({
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
          console.error('Invalid token', e)
          this.logout()
        }
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
    logout() {
      this.token = null
      this.roles = []
      this.name = null
      this.image = null
      Cookies.remove('token')
    },
  },
})

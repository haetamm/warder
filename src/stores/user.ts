import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

interface DecodedToken {
  roles?: string[]
}

const token = Cookies.get('token')
let decodedToken: DecodedToken = {}
let roles: string[] = []

if (token) {
  try {
    decodedToken = jwtDecode<DecodedToken>(token)
    roles = decodedToken.roles || []
  } catch (e) {
    console.error('Invalid token', e)
  }
}

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: Cookies.get('token') || null,
      roles: roles,
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token
      Cookies.set('token', token)
    },
    setRoles(roles: string[]) {
      this.roles = roles
    },
    logout() {
      this.token = null
      this.roles = []
      Cookies.remove('token')
    },
  },
})

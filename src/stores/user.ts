import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

interface DecodedToken {
  name: string
  image: string
  roles?: string[]
}

const token = Cookies.get('token')
let decodedToken: DecodedToken = {
  name: '',
  image: '',
}
let roles: string[] = []
let name: string | null = null
let image: string | null = null

if (token) {
  try {
    decodedToken = jwtDecode<DecodedToken>(token)
    roles = decodedToken.roles || []
    name = decodedToken.name || ''
    image = decodedToken.image || ''
  } catch (e) {
    console.error('Invalid token', e)
  }
}

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: Cookies.get('token') || null,
      roles: roles,
      name: name,
      image: image,
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

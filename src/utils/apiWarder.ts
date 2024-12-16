import axios from 'axios'
import Cookies from 'js-cookie'

const apiWarder = import.meta.env.VITE_API_WARDER_URL

const axiosWarderApiInstance = axios.create({
  baseURL: `${apiWarder}`,
})

axiosWarderApiInstance.interceptors.request.use(config => {
  const token = Cookies.get('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

axiosWarderApiInstance.interceptors.response.use(
  async response => {
    return response
  },
  error => {
    const { response } = error
    if (response.status === 401) {
      Cookies.remove('token')
    }
    throw error
  },
)

export default axiosWarderApiInstance

import axios from 'axios'
import { userApi } from './user'
import { useUserStore } from '../stores/user'

export const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
})

const updateAccessToken = async () => {
  try {
    const res = await userApi.refresh()
    const userStore = useUserStore()
    userStore.accessToken = res.data.accessToken
  } catch (error) {
    console.log('Refresh failed:', error)
    const router = (await import('../router')).default
    router.push('/login')
    throw error
  }
}

http.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()

    if (userStore.accessToken) {
      config.headers.Authorization = `Bearer ${userStore.accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

http.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    if (error) {
      const originalRequest = error.config
      console.log(originalRequest.url)
      if (originalRequest._retry || originalRequest.url.includes('/users/refresh')) {
        console.log('returning...')
        return Promise.reject(error)
      }

      if (
        error?.response?.status === 401 &&
        (error?.response?.data?.message === 'JWT expired' ||
          error?.response?.data?.message === 'Unauthorized')
      ) {
        originalRequest._retry = true
        console.log('updating token...')
        await updateAccessToken()
        await new Promise((resolve) => setTimeout(resolve, 100))
        const retry = await http(originalRequest)
        return retry
      }
      // else if (error?.response === 500) {
      // router.push({ path: '/404' })
      // }
      return Promise.reject(error)
    }
  },
)

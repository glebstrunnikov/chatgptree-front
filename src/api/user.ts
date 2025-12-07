import { http } from './index'

interface IUser {
  email: string
  name?: string
  password: string
}

export const userApi = {
  createUser: async (data: IUser) => {
    return http.post('/users/create', data)
  },
  login: async (data: { name: string; password: string }) => {
    return http.post('/users/login', data)
  },
  me: async () => {
    const res = await http.get('/users/me')
    console.log(res)
    return res
  },
  refresh: async () => {
    return http.post('/users/refresh')
  },
  logout: async () => {
    return http.post('/users/logout')
  },
}

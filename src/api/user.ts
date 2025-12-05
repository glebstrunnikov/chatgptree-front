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
}

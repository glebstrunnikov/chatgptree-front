import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { userApi } from '@/api/user'
import type { IUser, IUserResponse } from '@/types/user'

export const useUserStore = defineStore('user', () => {
  const emptyUser: IUser = {
    email: '',
    name: '',
    id: '',
    createdAt: '',
    updatedAt: '',
  }
  const accessToken = ref<string>('')
  const user = ref<IUser>(emptyUser)
  const setUserAndToken = (newUser: IUserResponse) => {
    user.value.email = newUser.email
    user.value.name = newUser.name
    user.value.id = newUser.id
    user.value.createdAt = newUser.createdAt
    user.value.updatedAt = newUser.updatedAt
    accessToken.value = newUser.accessToken
  }
  async function login(un: string, pw: string) {
    const res = await userApi.login({ name: un, password: pw })
    setUserAndToken(res.data as IUserResponse)
  }
  function logout() {
    user.value = emptyUser
    accessToken.value = ''
    userApi.logout()
  }

  return { user, accessToken, login, logout, setUserAndToken }
})

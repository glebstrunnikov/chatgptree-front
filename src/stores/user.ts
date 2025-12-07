import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { userApi } from '@/api/user'
import type { IUser } from '@/types/user'

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
  const setUser = (newUser: IUser) => {
    user.value = newUser
  }
  function logout() {
    user.value = emptyUser
    accessToken.value = ''
    userApi.logout()
  }
  return { user, accessToken, setUser, logout }
})

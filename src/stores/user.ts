import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface IUser {
  email: string
  name?: string
  id: string
  createdAt: string
  accessToken: string
}

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
  return { user, accessToken, setUser }
})

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface IUser {
  email: string
  name?: string
  id: string
  createdAt: string
}

export const useUserStore = defineStore('user', () => {
  const user = ref<IUser | null>(null)

  return { user }
})

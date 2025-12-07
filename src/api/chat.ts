import { http } from './index'
import { IMessage } from '@/types/api'

const chatApi = {
  createChat: async (
    data: { role: 'user'; content: string },
    isInitial: boolean,
    userId: number,
  ) => {},
}

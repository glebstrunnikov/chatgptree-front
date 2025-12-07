import { http } from './index'

export const chatApi = {
  createChat: async (message: string, userId: string) => {
    const res = await http.post('/chat/create', {
      isInitial: true,
      message: message,
      userId: userId,
    })
    return res
  },
}

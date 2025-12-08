import { http } from './index'

export const chatApi = {
  createChat: async (message: string, userId: string) => {
    const res = await http.post('/chat/create', {
      message: message,
      userId: userId,
    })
    return res
  },
  ask: async (message: string, userId: string, chatId: string, path: string) => {
    const res = await http.post('/chat/ask', {
      message: message,
      userId: userId,
      chatId: chatId,
      path: path,
    })

    return res
  },
  loadChat: async (chatId: string, path: string) => {
    const res = await http.get(`/chat/load/${chatId}/${path}`)
    return res
  },
}

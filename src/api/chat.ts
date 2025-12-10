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
  loadBranch: async (chatId: string, path: string) => {
    const res = await http.get(`/chat/load-branch/${chatId}/${path}`)
    console.log(res)
    return res
  },
}

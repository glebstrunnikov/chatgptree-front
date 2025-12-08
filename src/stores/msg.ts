import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IMessage } from '@/types/message'
import { useUserStore } from './user'
import { chatApi } from '@/api/chat'

export const useMsgStore = defineStore('msg', () => {
  const userStore = useUserStore()
  const messages = ref<IMessage[]>([])

  const chatId = ref<string>('')
  const tip = ref<IMessage | null>(null)

  function getHistoryByTip(tipPath: string): IMessage[] {
    const result: IMessage[] = []
    const tipParts = tipPath.split('.') || []
    tipParts.reduce((acc: string, val: string, idx: number) => {
      if (idx !== 0 && idx < tipParts.length) {
        acc = acc + '.' + val
      }
      const msgToAdd = messages.value.find((msg) => {
        return msg.path === acc
      })

      if (msgToAdd) {
        result.push(msgToAdd)
      }
    }, '0')
    return result
  }

  const branch = computed(() => {
    if (!tip.value) return []
    return getHistoryByTip(tip.value.path)
  })

  async function createChat(question: string) {
    const res = await chatApi.createChat(question, userStore.user.id)
    console.log(res)
    messages.value = res.data.messages
    chatId.value = res.data.chatId
    tip.value = res.data.messages[res.data.messages.length - 1]
  }

  async function ask(question: string) {
    if (!tip.value) {
      throw new Error('No tip message set')
    }
    const res = await chatApi.ask(question, userStore.user.id, tip.value.chatId!, tip.value.path)
    messages.value = messages.value.concat(res.data)
    tip.value = res.data[res.data.length - 1]
  }

  return {
    messages,
    chatId,
    tip,
    branch,
    createChat,
    ask,
  }
})

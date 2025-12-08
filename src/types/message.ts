export interface IMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
  path: string
  chatId?: string
  refusal?: any
  annotations?: any[]
}

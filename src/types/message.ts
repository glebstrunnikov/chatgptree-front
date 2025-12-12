export interface IMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
  path: string
  chatId?: string
  refusal?: any
  id?: string
  annotations?: any[]
  tails?: IMessageTail[]
}

export interface IMessageTail extends IMessage {
  tailPaths: string[]
}

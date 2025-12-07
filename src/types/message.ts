export interface IMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
  refusal?: any
  annotations?: any[]
}

import {http} from './index';

interface IMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

const chatApi = {
    createChat: async (data: {role: 'user', content: string}) {

    }
}
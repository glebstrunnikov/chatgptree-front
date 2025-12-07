<script setup lang="ts">
import { chatApi } from '@/api/chat'
import { useUserStore } from '@/stores/user'
import BaseButton from '@/components/ui/BaseButton.vue'
import ChatMessage from '@/components/ChatMessage.vue'
import type { IMessage } from '@/types/message'
import { ref } from 'vue'
const userStore = useUserStore()
const questionText = ref('')
const answers = ref<IMessage[] | null>(null)
async function sendQuestion() {
  const res = await chatApi.createChat(questionText.value, userStore.user.id)
  console.log(res)
  answers.value = res.data.messages
}
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <form @submit.prevent="sendQuestion" class="flex flex-col gap-4 text-center">
      <label for="question"> ask the neuromoron </label>
      <input
        id="question"
        type="text"
        class="border border-black rounded-md p-2 m-2"
        v-model="questionText"
      />
      <BaseButton @click="sendQuestion" type="submit">Send</BaseButton>
    </form>
    <div v-if="!answers" class="text-title-l text-blood p-10">Tetx will be shown here</div>
    <div v-else class="flex flex-col gap-2 justify-center">
      <ChatMessage
        v-for="(message, index) in answers"
        :key="index"
        :message="message.content"
        :role="message.role"
      ></ChatMessage>
    </div>
  </div>
</template>

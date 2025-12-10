<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

import { useMsgStore } from '@/stores/msg'
import { useRouter } from 'vue-router'
import ChatInput from '@/components/chat/ChatInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const msgStore = useMsgStore()
const router = useRouter()

const showLoader = ref(false)
const questionText = ref('')

async function sendQuestion() {
  showLoader.value = true
  await msgStore.createChat(questionText.value)
  router.push(
    '/chat?id=' + msgStore.chatId + '&path=' + msgStore.messages[msgStore.messages.length - 1].path,
  )
}
</script>

<template>
  <div class="w-full h-dvh flex flex-col justify-center items-center">
    <form class="flex flex-col gap-4 text-center items-center" @submit.prevent="sendQuestion">
      <div class="text-title-l" for="question">Ask the neuromoron</div>

      <ChatInput @submit="sendQuestion" v-model="questionText" />

      <BaseButton v-if="!showLoader" @click="sendQuestion" type="submit">Send</BaseButton>
      <i v-else class="fa-solid fa-hourglass-half"></i>
    </form>
  </div>
</template>

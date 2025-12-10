<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useMsgStore } from '@/stores/msg'
import ChatInput from '@/components/chat/ChatInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import ChatMessage from '@/components/chat/ChatMessage.vue'
import ChatBlock from '@/components/chat/ChatBlock.vue'
import type { IMessage } from '@/types/message'
const route = useRoute()
const router = useRouter()
const msgStore = useMsgStore()
const questionText = ref('')
const query = computed(() => route.query)
async function sendQuestion() {
  await msgStore.ask(questionText.value)
  questionText.value = ''
  router.replace({
    query: { ...route.query, path: msgStore.tip!.path },
  })
}
onMounted(async () => {
  if (query.value.id && query.value.path) {
    await msgStore.loadBranch(query.value.id as string, query.value.path as string)
  }
})
onUnmounted(() => {
  msgStore.clearMessages()
})
</script>

<template>
  <div class="w-full h-full flex items-center px-18 gap-6">
    <form @submit.prevent="sendQuestion" class="flex-3 flex flex-col gap-4 text-center">
      <label for="question"> ask the neuromoron </label>
      <ChatInput @submit="sendQuestion" id="question" v-model="questionText" />
      <BaseButton @click="sendQuestion" type="submit">Send</BaseButton>
    </form>
    <div class="flex-6 flex flex-col gap-4 text-center h-full overflow-y-auto">
      <ChatBlock class="w-full !h-20" />
      <div
        v-if="!msgStore.messages || !msgStore.messages.length"
        class="text-title-l text-blood p-10"
      >
        Tetx will be shown here
      </div>
      <div v-else class="flex flex-col gap-2 justify-center">
        <ChatMessage
          v-for="(message, index) in msgStore.messages"
          :key="index"
          :message="message.content"
          :role="message.role"
        ></ChatMessage>
      </div>
    </div>
  </div>
</template>

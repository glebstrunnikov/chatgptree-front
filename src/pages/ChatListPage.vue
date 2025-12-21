<script setup lang="ts">
import { onMounted } from 'vue'
import { useChatStore } from '@/stores/chat'
import ChatAbout from '@/components/chat/ChatAbout.vue'
const chatStore = useChatStore()

onMounted(() => {
  chatStore.loadChatList()
})
</script>

<template>
  <div class="w-full h-full flex items-center p-18">
    <div class="w-full flex flex-col gap-2">
      <ChatAbout v-for="chat in chatStore.chatList" :key="chat.id" :chat="chat" />
    </div>
  </div>
</template>

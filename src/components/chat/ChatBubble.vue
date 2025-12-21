<script setup lang="ts">
import type { IMessageTail } from '@/types/message'
import { useChatStore } from '@/stores/chat'
import { getTipPath } from '@/utils/getTipPath'
defineProps<{
  tail: IMessageTail
}>()
const chatStore = useChatStore()
</script>

<template>
  <router-link
    :to="`/chat?id=${chatStore.tip?.chatId}&path=${getTipPath(tail.tailPaths)}`"
    :key="tail.id"
    class="text-body-s flex justify-between items-center gap-2 w-full cursor-pointer group"
  >
    <div
      class="bg-gray-200 overflow-hidden text-ellipsis p-2 rounded-xl text-nowrap group-hover:bg-gray-300"
    >
      {{ tail.content }}
    </div>
    <div
      class="rounded-full border flex justify-center items-center w-8 h-8 shrink-0 group-hover:bg-gray-200"
    >
      <div>+{{ tail.tailPaths.length }}</div>
    </div>
  </router-link>
</template>

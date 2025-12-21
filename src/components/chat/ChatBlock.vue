<script setup lang="ts">
import { computed } from 'vue'
import type { IMessage } from '@/types/message'
import { useChatStore } from '@/stores/chat'
import ChatMessage from '@/components/chat/ChatMessage.vue'
import ChatBubble from './ChatBubble.vue'
import ChatNextBubble from './ChatNextBubble.vue'
const props = defineProps<{
  messages: [IMessage, IMessage] | [IMessage]
}>()
const chatStore = useChatStore()
const tails = computed(() => props.messages[1]?.tails || null)
</script>

<template>
  <div class="grid grid-cols-3">
    <div class="row-start-1 row-span-1 col-start-1 col-span-2">
      <ChatMessage
        :role="props.messages[0].role"
        :message="props.messages[0].content"
        :backLink="`/chat?id=${chatStore.tip?.chatId}&path=${props.messages[0].path}`"
      />
    </div>
    <div class="row-start-2 row-span-1 col-start-1 col-span-2">
      <ChatMessage
        v-if="props.messages.length === 2"
        :role="props.messages[1].role"
        :message="props.messages[1].content"
      />
    </div>
    <div class="row-start-1 row-span-2 col-start-3 col-span-1">
      <div class="flex mt-12 w-full">
        <div v-if="tails" class="min-w-0 flex-1 py-4 relative">
          <div v-for="(tail, i) in tails" :key="tail.id" class="absolute inset-0">
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
              <line
                x1="0"
                :y1="(2.5 / tails.length) * 20"
                x2="100"
                :y2="(2.5 / tails.length) * 20 + (2.5 / tails.length) * i * 40"
                stroke="currentColor"
                stroke-width="2"
                vector-effect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>
        <div v-if="tails" class="min-w-0 flex-7 flex flex-col gap-3">
          <ChatBubble v-for="tail in tails" :key="tail.id" :tail="tail" />
        </div>
      </div>
    </div>
    <div
      v-if="props.messages[0]?.tipTail?.length"
      class="row-start-3 row-span-1 col-start-1 col-span-2"
    >
      <ChatNextBubble :paths="props.messages[0].tipTail" />
    </div>
  </div>
</template>

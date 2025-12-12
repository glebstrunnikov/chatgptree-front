<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useMsgStore } from '@/stores/msg'
import ChatInput from '@/components/chat/ChatInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
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

async function loadBranchData() {
  if (query.value.id && query.value.path) {
    await msgStore.loadBranch(query.value.id as string, query.value.path as string)
  }
}

onMounted(async () => {
  await loadBranchData()
})

// Watch for query parameter changes
watch(query, async () => {
  await loadBranchData()
})
onUnmounted(() => {
  msgStore.clearMessages()
})

const groupedMessages = computed(() => {
  const result: IMessage[][] = []
  for (let i = 0; i < msgStore.messages.length; i++) {
    if (i === msgStore.messages.length - 1) {
      result.push([msgStore.messages[i]!])
    } else {
      if (i % 2 !== 0) {
        result.push([msgStore.messages[i - 1]!, msgStore.messages[i]!])
      }
    }
  }
  return result
})
</script>

<template>
  <div class="w-full h-full flex items-center px-18 gap-6">
    <form @submit.prevent="sendQuestion" class="flex-3 flex flex-col gap-4 text-center">
      <label for="question"> ask the neuromoron </label>
      <ChatInput @submit="sendQuestion" id="question" v-model="questionText" />
      <BaseButton @click="sendQuestion" type="submit">Send</BaseButton>
    </form>

    <div
      class="w-full flex-6 flex flex-col gap-4 text-center h-full overflow-y-auto overflow-x-hidden"
    >
      <div
        v-if="!msgStore.messages || !msgStore.messages.length"
        class="text-title-l text-blood p-10"
      >
        Tetx will be shown here
      </div>
      <div v-else class="w-full flex flex-col gap-2 justify-center">
        <ChatBlock
          v-for="(messagePair, index) in groupedMessages"
          :key="index"
          :messages="messagePair"
        />
      </div>
    </div>
  </div>
</template>

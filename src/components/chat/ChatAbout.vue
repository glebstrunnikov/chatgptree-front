<script setup lang="ts">
import type { IMessage } from '@/types/message'
import { getTipPath } from '@/utils/getTipPath'
const props = defineProps<{
  chat: {
    chatId: string
    firstMessage: IMessage
    paths: string[]
  }
}>()

function countBranches(paths: string[]) {
  const longestPath = paths.reduce((a, b) => (a.length >= b.length ? a : b), '')
  const maxSegments = longestPath.split('.').length
  console.log(paths)
  console.log(longestPath)
  console.log(maxSegments)
  let branchCount = 0
  for (let i = 0; i < maxSegments; i++) {
    const thisLevelPaths = paths.filter(
      (p) => p.split('.').length === i + 1 && p.split('.').pop() !== '0',
    )
    branchCount += thisLevelPaths.length
  }
  return branchCount
}
</script>

<template>
  <router-link
    :to="`/chat?id=${props.chat.chatId}&path=${getTipPath(props.chat.paths)}`"
    class="bg-gray-100 rounded-xl py-2 px-4 flex gap-2 hover:bg-gray-200 cursor-pointer"
  >
    <div class="flex-8 flex flex-col gap-2 justify-start text-start">
      <div class="text-body-s text-gray-500">First message:</div>
      <div class="text-body-m">
        {{ props.chat.firstMessage.content }}
      </div>
    </div>
    <div class="flex-1 flex flex-col gap-2 justify-start text-start">
      <div class="text-body-s text-gray-500">Messages:</div>
      <div class="text-body-m">
        {{ props.chat.paths.length }}
      </div>
    </div>
    <div class="flex-1 flex flex-col gap-2 justify-start text-start">
      <div class="text-body-s text-gray-500">Branches:</div>
      <div class="text-body-m">
        {{ countBranches(props.chat.paths) }}
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { IMessageTail } from '@/types/message'
import { useMsgStore } from '@/stores/msg'
defineProps<{
  tail: IMessageTail
}>()
const msgStore = useMsgStore()
function getTailTipPath(paths: string[]) {
  const longestLength = paths
    .map((p) => {
      return p.split('.')
    })
    .reduce((a, b) => (a.length >= b.length ? a : b), []).length
  return paths.find((p) => {
    return p.split('.').length === longestLength && p.slice(-2) === '.0'
  })
}
</script>

<template>
  <router-link
    :to="`/chat?id=${msgStore.tip?.chatId}&path=${getTailTipPath(tail.tailPaths)}`"
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

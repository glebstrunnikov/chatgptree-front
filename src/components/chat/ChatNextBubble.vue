<script setup lang="ts">
import { useChatStore } from '@/stores/chat'
const chatStore = useChatStore()
const props = defineProps<{
  paths: string[]
}>()
const primaryPaths = props.paths.filter((path) => {
  return !/[1,2,3,4,5,6,7,8,9]/g.test(path)
})
const lastPath = primaryPaths.reduce((a, b) => (a.length > b.length ? a : b), '')
</script>

<template>
  <div class="w-full mt-3 flex justify-center items-center">
    <router-link
      :to="`/chat?id=${chatStore.tip?.chatId}&path=${lastPath}`"
      class="rounded-xl p-2 border flex justify-center items-center hover:bg-gray-200 cursor-pointer"
    >
      + {{ paths.length / 2 }} more messages
    </router-link>
  </div>
</template>

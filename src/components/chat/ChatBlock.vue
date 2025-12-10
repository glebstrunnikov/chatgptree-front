<script setup lang="ts">
import { IMessage } from '@/types/message'
const props = defineProps<{
  isFirst: boolean
  messages: [IMessage, IMessage]
}>()
</script>

<template>
  <div class="grid grid-cols-2">
    <div class="row-start-1 row-span-1 col-start-1 col-span-2 bg-gray-500"></div>
    <div class="row-start-2 row-span-1 col-start-1 col-span-2 bg-amber-500"></div>
    <div class="row-start-1 row-span-2 col-start-2 col-span-1 bg-blue"></div>
  </div>
</template>

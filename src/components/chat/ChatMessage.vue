<script setup lang="ts">
const props = defineProps<{
  role: 'system' | 'user' | 'assistant'
  message: string
}>()
</script>

<template>
  <div
    class="w-full flex flex-col p-4"
    :class="role === 'user' ? 'items-end text-right' : 'items-start text-left'"
  >
    <div class="text-body-s text-gray-400 px-2 py-1">
      {{ `${role.charAt(0).toUpperCase() + role.slice(1)}:` }}
    </div>
    <div
      class="text-body-m p-2 rounded-xl overflow-hidden"
      :class="role === 'user' ? 'bg-gray-300' : 'bg-transparent'"
    >
      {{ message }}
    </div>
  </div>
</template>

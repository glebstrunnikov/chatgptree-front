<script setup lang="ts">
const props = defineProps<{
  role: 'system' | 'user' | 'assistant'
  message: string
  backLink?: string
}>()
</script>

<template>
  <div
    class="w-full flex flex-col p-4"
    :class="role === 'user' ? 'items-end text-right' : 'items-start text-left'"
  >
    <div class="flex items-center">
      <router-link v-if="backLink && role === 'assistant'" :to="props.backLink!">
        <i class="fa-solid fa-backward-fast cursor-pointer opacity-50"></i>
      </router-link>
      <div class="text-body-s text-gray-400 px-2 py-1">
        {{ `${role.charAt(0).toUpperCase() + role.slice(1)}:` }}
      </div>
    </div>
    <div
      class="text-body-m p-2 rounded-xl overflow-hidden"
      :class="role === 'user' ? 'bg-gray-300' : 'bg-transparent'"
    >
      {{ message }}
    </div>
  </div>
</template>

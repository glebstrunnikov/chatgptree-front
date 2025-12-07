<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

const questionText = ref('')
const answerText = ref('')
async function sendQuestion() {}
function createUser() {}
</script>

<template>
  <div class="w-full h-dvh flex flex-col justify-center items-center">
    <div class="max-w-150 break-all">{{ userStore.user }}</div>
    <form class="flex flex-col gap-4 text-center" @submit="sendQuestion">
      <label for="question"> ask the neuromoron </label>
      <input
        id="question"
        type="text"
        class="border border-black rounded-md p-2 m-2"
        :v-model="questionText"
      />
      <button class="border rounded-full p-2 hover:bg-gray-500 cursor-pointer" type="submit">
        Send
      </button>
    </form>
    <form @submit="createUser" class="flex gap-4 justify-center items-center"></form>
  </div>
  <div>{{ answerText }}</div>
</template>

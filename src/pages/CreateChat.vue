<script setup lang="ts">
import { ref } from 'vue'
const questionText = ref('')
const answerText = ref('Tetx will be shown here')
async function sendQuestion() {}
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <form class="flex flex-col gap-4 text-center">
      <label for="question"> ask the neuromoron </label>
      <input
        id="question"
        type="text"
        class="border border-black rounded-md p-2 m-2"
        :v-model="questionText"
      />
      <button
        class="border rounded-full p-2 hover:bg-gray-500 cursor-pointer"
        @click.prevent="sendQuestion"
      >
        Send
      </button>
    </form>
    <div class="text-title-l text-blood p-10">{{ answerText }}</div>
  </div>
</template>

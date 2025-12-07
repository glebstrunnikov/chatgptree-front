<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import { ref } from 'vue'
const questionText = ref('')
const answerText = ref('Tetx will be shown here')
async function sendQuestion() {}
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <form @submit.prevent="sendQuestion" class="flex flex-col gap-4 text-center">
      <label for="question"> ask the neuromoron </label>
      <input
        id="question"
        type="text"
        class="border border-black rounded-md p-2 m-2"
        v-model="questionText"
      />
      <BaseButton type="submit">Send</BaseButton>
    </form>
    <div class="text-title-l text-blood p-10">{{ answerText }}</div>
  </div>
</template>

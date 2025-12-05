<script setup lang="ts">
import { ref } from 'vue'
import { userApi } from '@/api/user'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

const username = ref('')
const email = ref('')
const password = ref('')
const repeatPassword = ref('')
const answerText = ref('Tetx will be shown here')

async function createUser() {
  if (password.value !== repeatPassword.value) {
    answerText.value = 'Passwords do not match'
    return
  }
  if (!username.value || !email.value || !password.value) {
    answerText.value = 'Please fill in all fields'
    return
  }
  const res = await userApi.createUser({
    name: username.value,
    email: email.value,
    password: password.value,
  })
  answerText.value = JSON.stringify(res)
  userStore.user = {
    id: res.id,
    name: res.name,
    email: res.email,
    createdAt: res.createdAt,
  }
}
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-center gap-10">
    <form class="flex gap-4 justify-center items-center">
      <div class="grid grid-cols-2">
        <label for="username">Username</label>
        <input
          id="username"
          type="text"
          class="border border-black rounded-md p-2 m-2"
          v-model="username"
        />
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          class="border border-black rounded-md p-2 m-2"
          v-model="email"
        />
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          class="border border-black rounded-md p-2 m-2"
          v-model="password"
        />
        <label for="repeatPassword">Repeat password</label>
        <input
          id="repeatPassword"
          type="password"
          class="border border-black rounded-md p-2 m-2"
          v-model="repeatPassword"
        />
      </div>

      <button
        class="border rounded-full p-2 hover:bg-gray-500 cursor-pointer"
        @click.prevent="createUser"
      >
        Create User
      </button>
    </form>

    <div class="w-full text-title-l text-blood p-10 overflow-hidden">{{ answerText }}</div>
  </div>
</template>

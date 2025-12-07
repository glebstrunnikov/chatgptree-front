<script setup lang="ts">
import { ref } from 'vue'
import { userApi } from '@/api/user'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
const userStore = useUserStore()
const router = useRouter()
const username = ref('')
const password = ref('')
async function login() {
  const res = await userApi.login({ name: username.value, password: password.value })
  console.log(res)
  //   router.push('/')
}
</script>
<template>
  <div class="flex w-full h-full items-center justify-center">
    <label for="login">Login</label>
    <input
      id="login"
      type="text"
      class="border border-black rounded-md p-2 m-2"
      v-model="username"
    />
    <label for="password">Password</label>
    <input
      id="password"
      type="password"
      class="border border-black rounded-md p-2 m-2"
      v-model="password"
    />
    <button @click="login" class="border rounded-full p-2 hover:bg-gray-500 cursor-pointer">
      Login
    </button>
  </div>
</template>

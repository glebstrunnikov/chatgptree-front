<script setup lang="ts">
import { onMounted } from 'vue'
import { userApi } from './api/user'
import { useUserStore } from './stores/user'
const userStore = useUserStore()

onMounted(async () => {
  const user = await userApi.me()
  userStore.setUserAndToken(user.data)
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>

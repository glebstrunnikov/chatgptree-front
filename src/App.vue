<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'
import { userApi } from './api/user'
import { useUserStore } from './stores/user'
const userStore = useUserStore()
const loading = ref(true)

onMounted(async () => {
  const user = await userApi.me()
  userStore.setUser(user.data)
  await nextTick()
  loading.value = false
})
</script>

<template>
  <RouterView v-if="!loading" />
</template>

<style scoped></style>

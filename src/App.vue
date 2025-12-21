<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'
import { userApi } from './api/user'
import { useUserStore } from './stores/user'
const userStore = useUserStore()
const loading = ref(true)

onMounted(async () => {
  try {
    const user = await userApi.me()
    if (user?.data) {
      userStore.setUser(user.data)
    }
  } catch (error) {
    console.log('Failed to load user:', error)
  } finally {
    await nextTick()
    loading.value = false
  }
})
</script>

<template>
  <RouterView v-if="!loading" />
</template>

<style scoped></style>

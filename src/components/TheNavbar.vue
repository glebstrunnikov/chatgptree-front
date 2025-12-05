<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const isLoggedIn = computed(() => !!userStore.user)
</script>

<template>
  <div class="w-full flex justify-start items-center gap-10 p-6">
    <RouterLink to="/create-chat"><div class="text-title-l">Talk to neuromoron</div></RouterLink>
    <RouterLink v-if="!isLoggedIn" to="/register"
      ><div class="text-title-l">Register</div></RouterLink
    >
    <RouterLink v-if="!isLoggedIn" to="/login"><div class="text-title-l">Log in</div></RouterLink>
    <RouterLink v-if="isLoggedIn" to="/logout"><div class="text-title-l">Log out</div></RouterLink>
  </div>
</template>

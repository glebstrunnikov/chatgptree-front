<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const isLoggedIn = computed(() => !!userStore.user.id)
</script>

<template>
  <div class="w-full flex justify-start items-center gap-10 p-6">
    <RouterLink to="/create-chat"><div class="text-title-l">Talk to neuromoron</div></RouterLink>
    <RouterLink v-if="!isLoggedIn" to="/register"
      ><div class="text-title-l">Register</div></RouterLink
    >
    <RouterLink v-if="!isLoggedIn" to="/login"><div class="text-title-l">Log in</div></RouterLink>
    <div @click="userStore.logout()" v-if="isLoggedIn" class="text-title-l cursor-pointer">
      Log out
    </div>
    <div v-if="isLoggedIn" class="text-title-l">Hi, {{ userStore.user?.name }}</div>
  </div>
</template>

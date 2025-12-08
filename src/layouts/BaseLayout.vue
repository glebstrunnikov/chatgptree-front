<script setup lang="ts">
import TheNavbar from '@/components/TheNavbar.vue'
</script>

<template>
  <div class="w-0 min-w-full min-h-[80dvh] h-0">
    <TheNavbar class="sticky top-0" />
    <RouterView />
  </div>
</template>

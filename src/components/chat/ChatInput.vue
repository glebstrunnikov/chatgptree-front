<script setup lang="ts">
import { ref } from 'vue'
const model = defineModel<string>()
const showScrollbar = ref(false)
function autoResize(event: Event) {
  const textarea = event.target as HTMLTextAreaElement
  textarea.style.height = 'auto'
  if (textarea.scrollHeight < 500) {
    textarea.style.height = `${textarea.scrollHeight}px`
    showScrollbar.value = false
  } else {
    showScrollbar.value = true
    textarea.style.height = '500px'
  }
}
</script>

<template>
  <textarea
    class="border border-black rounded-xl p-2 m-2 w-150 resize-none custom-scrollbar text-title-m"
    :class="showScrollbar ? 'custom-scrollbar' : 'no-scrollbar'"
    name="question"
    id="question"
    v-model="model"
    @input="autoResize"
  ></textarea>
</template>
<style scoped>
.no-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}
.no-scrollbar::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
  background-clip: padding-box;
  border: 2px solid transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Remove arrows (they don't exist on webkit scrollbars by default, but this ensures it) */
.custom-scrollbar::-webkit-scrollbar-button {
  display: none;
}

@-moz-document url-prefix() {
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #888 transparent;
  }
}
</style>

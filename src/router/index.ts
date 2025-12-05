import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '@/layouts/BaseLayout.vue'
import CreateChat from '@/pages/CreateChat.vue'
import Register from '@/pages/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BaseLayout,
      children: [
        { path: 'create-chat', component: CreateChat },
        { path: 'register', component: Register },
      ],
    },
  ],
})

export default router

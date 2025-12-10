import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '@/layouts/BaseLayout.vue'
import ChatPage from '@/pages/ChatPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import CreateChat from '@/pages/CreateChat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BaseLayout,
      children: [
        { path: 'chat', component: ChatPage, meta: { public: true } },
        { path: 'register', component: RegisterPage, meta: { public: false } },
        { path: 'login', component: LoginPage, meta: { public: false } },
        { path: 'create-chat', component: CreateChat, meta: { public: true } },
      ],
    },
  ],
})

export default router

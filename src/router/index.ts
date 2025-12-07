import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '@/layouts/BaseLayout.vue'
import CreateChat from '@/pages/CreateChat.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import TestPage from '@/pages/TestPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BaseLayout,
      children: [
        { path: 'create-chat', component: CreateChat },
        { path: 'register', component: RegisterPage },
        { path: 'login', component: LoginPage },
        { path: 'test-page', component: TestPage },
      ],
    },
  ],
})

export default router

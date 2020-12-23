import { createApp } from 'vue/dist/vue.esm-bundler.js';
import { createRouter, createWebHistory } from 'vue-router'

// ページコンポーネントをインポートする
import PhotoList from './pages/PhotoList.vue'
import Login from './pages/Login.vue'

const routes = [
    {
      path: '/',
      component: PhotoList
    },
    {
      path: '/login',
      component: Login
    }
  ]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'root',
      path: '/',
      component: HomeView
    },
    {
      name: 'Home',
      path: '/home',
      component: HomeView
    }

  ]
});


export default router

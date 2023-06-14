import { createRouter, createWebHistory } from 'vue-router'
// import { routers } from './routers.js';
import HomeView from '@/views/HomeView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name : 'root',
      path : '/',
      component : HomeView
    },
    {
      name : 'Home',
      path : '/home',
      component : HomeView
    }

  ]
});

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'KAIROSTEK'
})
export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '@/views/AboutView'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      meta: {
        title: 'Home',
      },
      component: HomeView,
      
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: 'Home',
      },
      component: HomeView,
      
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'About',
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    }
  ]
})
router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'Kairostek'
})
export default router

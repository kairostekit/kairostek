import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import Error404View from '@/views/error/404.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: Error404View ,
      meta: {
        title: 'Error 404',
      },
    },
    {
      name: 'root',
      path: '/',
      component: HomeView,
      meta: {
        title: 'Home',
      },
    },
    {
      name: 'Home',
      path: '/home',
      component: HomeView,
      meta: {
        title: 'Home'
      },
    },
    {
      name: 'About',
      path: '/about',
      component: AboutView,
      meta: {
        title: 'About'
      },
    }
  ]
});

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'KAIROSTEK'
})
export default router

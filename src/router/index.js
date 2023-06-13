import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Home',
      },
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'about',
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   // Get the page title from the route meta data that we have defined
//   // See further down below for how we setup this data
//   const title = to.meta.title
//   // If the route has a title, set it as the page title of the document/page
//   if (title) {
//     document.title = title
//   }
//   // Continue resolving the route
//   next()
// })
// {
//   path: '/',
//   component: Home,
//   meta: {
//     title: 'Home',
//   },
// },

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'KAIROSTEK'
})
export default router

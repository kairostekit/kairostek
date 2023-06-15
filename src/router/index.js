import { createRouter, createWebHistory } from 'vue-router'
// import Error404View from '@/views/error/404.vue'
import DashboardRoutes from './DashboardRoutes';
import AuthRoutes from './AuthRoutes';
// imp


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: ()=> import('@/views/error/404.vue'),
            meta: {
                title: 'Error 404',
            },
        },
        DashboardRoutes,
        AuthRoutes
    ]
});

router.beforeEach((to, from) => {
    document.title = to.meta?.title ?? 'KAIROSTEK'
})
export default router

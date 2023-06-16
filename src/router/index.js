import { createRouter, createWebHistory } from 'vue-router'
// import Error404View from '@/views/error/404.vue'
import DashboardRoutes from './DashboardRoutes';
import AuthRoutes from './AuthRoutes';
// imp
    // history: createWebHashHistory(import.meta.env.BASE_URL),
    // history: createWebHistory(import.meta.env.BASE_URL),

const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/error/404.vue'),
            meta: {
                title: 'Error 404',
            },
        },
        DashboardRoutes,
        AuthRoutes,
    ]
});


router.beforeEach((to, from, next) => {
    document.title = to.meta?.title ?? 'KAIROSTEK'
    console.log(`Navigating to: ${to.name}`);
    // next();
});
export default router

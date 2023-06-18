import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Error404View from '@/views/error/404.vue'
import DashboardRoutes from './DashboardRoutes';
import AuthRoutes from './AuthRoutes';
import FullLayout from '@/layouts/full/FullLayout.vue'
// imp


const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),

        // history: createWebHashHistory(import.meta.env.BASE_URL),
        routes: [
            {
                path: '/:pathMatch(.*)',
                name: 'error',
                component: FullLayout,
                children: [
                    {
                        name: '404',
                        path: '',
                        component: Error404View,
                        meta: {
                            title: 'Error 404',
                        }
                    }
                ]
            },
            DashboardRoutes,
            AuthRoutes
        ]
    });

router.beforeEach((to) => {
    // document.title = to.meta?.title +' - '+import.meta.env.VITE_APP_TITLE  ?? import.meta.env.VITE_APP_TITLE
    // console.log(import.meta.env.VITE_BASE_UREL)/
});
export default router

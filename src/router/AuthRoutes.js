
import BlankLayout from '@/layouts/blank/BlankLayout.vue';


const AuthRoutes = {
    name: "auth",
    path: '/',
    component: BlankLayout,
    // meta: {
    //     requiresAuth: false
    // },
    redirect: '/auth/login',
    children: [
        {
            name: 'login',
            path: '/auth/login',
            component: () => import('@/views/auth/LoginView.vue')
        },
        {
            name: 'register',
            path: '/auth/register',
            component: () => import('@/views/auth/RegisterView.vue')
        }
    ]
};

export default AuthRoutes;

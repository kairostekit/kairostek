



const AuthRoutes = {
    path: '/',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    // meta: {
    //     requiresAuth: false
    // },
    redirect: '/auth/login',
    children: [
        {
            name: 'Login',
            path: '/auth/login',
            component: () => import('@/views/auth/LoginView.vue')
        },
        {
            name: 'Register',
            path: '/auth/register',
            component: () => import('@/views/auth/RegisterView.vue')
        }
    ]
};

export default AuthRoutes;

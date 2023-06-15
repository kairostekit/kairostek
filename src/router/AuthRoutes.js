



const AuthRoutes = {
    path: '/auth',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    meta: {
        requiresAuth: false
    },
    redirect: '/auth/login',
    children: [
        {
            name: 'Login',
            path: '/auth/login',
            component: () => import('@/views/auth/LoginView.vue')
        }
    ]
};

export default AuthRoutes;

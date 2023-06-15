import HomeView from '@/views/pages/HomeView.vue';
import FullLayout from '@/layouts/full/FullLayout.vue';


const DashboardRoutes = {
    path: '/',
    meta: {
        requiresAuth: true
    },
    component: FullLayout,
    meta: {
        title: 'About',
    },
    redirect: '/dashboard',
    children: [
        {
            path: '/dashboard',
            component: HomeView,
        }
    ],
};

export default DashboardRoutes;

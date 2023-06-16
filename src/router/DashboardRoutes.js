import HomeView from '@/views/pages/HomeView.vue';
import FullLayout from '@/layouts/full/FullLayout.vue';
import AboutView from '@/views/pages/AboutView.vue';


const DashboardRoutes = {
    name: "main",
    path: '/main',
    component: FullLayout,
    // redirect: '/dashboard',
    children: [
        {
            name: 'dashboard',
            path: '/dashboard',
            component: HomeView,
            // component: () => import('@/views/pages/HomeView.vue'),
            meta: {
                title: 'Dashboard',
            },
        },
        {
            name: 'about',
            path: '/dashboard/About',
            // component: () => import('@/views/pages/AboutView.vue'),
            component: AboutView,
            meta: {
                title: 'About',
            },
        }
    ],
};

export default DashboardRoutes;

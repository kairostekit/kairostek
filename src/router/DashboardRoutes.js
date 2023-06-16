import HomeView from '@/views/pages/HomeView.vue';
import FullLayout from '@/layouts/full/FullLayout.vue';
import AboutView from '@/views/pages/AboutView.vue';


const DashboardRoutes = {
    path: '/view',
    name : "view",
    component: FullLayout,
    children: [
        {
            path: '',
            name: 'view.dashboard',
            component: HomeView,
            // component: () => import('@/views/pages/HomeView.vue'),
            meta: {
                title: 'Dashboard',
            },
        },
        {
            name: 'view.about',
            path: 'about',
            // component: () => import('@/views/pages/AboutView.vue'),
            component: AboutView,
            meta: {
                title: 'About',
            },
        }
    ],
};

export default DashboardRoutes;

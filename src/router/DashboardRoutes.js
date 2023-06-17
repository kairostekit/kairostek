import FullLayout from '@/layouts/full/FullLayout.vue';
import HomeView from '@/views/pages/HomeView.vue';
import ServiceView from '@/views/pages/ServiceView.vue';
import AboutView from '@/views/pages/AboutView.vue';
import AtricleView from '@/views/pages/AtricleView.vue';
import ClentView from '@/views/pages/ClentView.vue';
import ContactView from '@/views/pages/ContactView.vue';


const DashboardRoutes = {
    path: '/view',
    name: "view",
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
            name: 'view.service',
            path: 'service',
            // component: () => import('@/views/pages/AboutView.vue'),
            component: ServiceView,
            meta: {
                title: 'OUR SERVIVES',
            },
        },
        {
            name: 'view.about',
            path: 'about',
            // component: () => import('@/views/pages/AboutView.vue'),
            component: AboutView,
            meta: {
                title: 'ABOUT US',
            },
        },
        {
            name: 'view.atricle',
            path: 'atricle',
            // component: () => import('@/views/pages/AboutView.vue'),
            component: AtricleView,
            meta: {
                title: 'ATRICLES',
            },
        },
        {
            name: 'view.clent',
            path: 'clent',
            // component: () => import('@/views/pages/AboutView.vue'),
            component: ClentView,
            meta: {
                title: 'CLIENTS',
            },
        },
        {
            name: 'view.contact',
            path: 'contact',
            // component: () => import('@/views/pages/AboutView.vue'),
            component: ContactView,
            meta: {
                title: 'CONTACT',
            },
        },
    ],
};

export default DashboardRoutes;

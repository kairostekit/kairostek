import FullLayout from '@/layouts/full/FullLayout.vue';
import HomeView from '@/views/pages/HomeView.vue';
import ServiceView from '@/views/pages/ServiceView.vue';
import AboutView from '@/views/pages/AboutView.vue';
import AtricleView from '@/views/pages/AtricleView.vue';
import ClentView from '@/views/pages/ClentView.vue';
import ContactView from '@/views/pages/ContactView.vue';
import BlogAllView from '@/views/pages/BlogAllView.vue';
import BlogSingleView from '@/views/pages/BlogSingleView.vue';

const DashboardRoutes = {
    path: '/view',
    name: "view",
    component: FullLayout,
    children: [
        {
            path: '',
            component: HomeView,
            meta: {
                title: 'Dashboard',
            },
        },
        {
            path: 'dashboard',
            name: 'view.dashboard',
            component: HomeView,
            meta: {
                title: 'Dashboard',
            },
        },
        {
            name: 'view.service',
            path: 'service',
            component: ServiceView,
            meta: {
                title: 'OUR SERVIVES',
            },
        },
        {
            name: 'view.about',
            path: 'about',
            component: AboutView,
            meta: {
                title: 'ABOUT US',
            },
        },
        {
            path: 'blog',
            children: [
                {
                    name: 'view.blog',
                    path: '',
                    component: BlogAllView,
                    meta: {
                        title: 'ATRICLES',
                    },
                },
                {
                    name: 'view.blog.single',
                    path: "single",
                    component: BlogSingleView,
                    meta: {
                        title: 'BLOG SINGLE',
                    },
                }

            ]
        },
        {
            name: 'view.clent',
            path: 'clent',
            component: ClentView,
            meta: {
                title: 'CLIENTS',
            },
        },
        {
            name: 'view.contact',
            path: 'contact',
            component: ContactView,
            meta: {
                title: 'CONTACT',
            },
        },
    ],
};

export default DashboardRoutes;

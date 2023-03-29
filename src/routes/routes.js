// import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AdminDashboardLayout from '@/views/Layout/AdminDashboardLayout.vue';
import UserDashboardLayout from '@/views/Layout/UserDashboardLayout.vue';
import PublicLayout from '@/views/Layout/PublicLayout.vue';
import AuthLayout from '@/views/Layout/AuthLayout.vue';
// GeneralViews
import NotFound from '@/views/GeneralViews/NotFoundPage.vue';
import RegisterApplySuccess from '@/views/GeneralViews/RegisterApplySuccess.vue';

// Dashboard pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard/Dashboard.vue');

// const TimeLine = () => import(/* webpackChunkName: "pages" */ '@/views/Pages/TimeLinePage.vue');
const Home = () => import(/* webpackChunkName: "pages" */ '@/views/Home.vue');
const About = () => import(/* webpackChunkName: "pages" */ '@/views/About.vue');


let authPages = {
    path: '/',
    component: AuthLayout,
    name: '首页',
    redirect: '/home',
    children: [
        {
            path: '/home',
            name: 'Home',
            component: Home,
        },
        {
            path: '/about',
            name: 'About',
            component: About,
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {path: '/registerApplySuccess', component: RegisterApplySuccess},
        {path: '*', component: NotFound}
    ]
};

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    authPages,
];

export default routes;

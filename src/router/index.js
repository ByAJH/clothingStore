import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = () => import('views/home/home');
const category = () => import('views/category/category');
const shopingCar = () => import('views/shopingcar/shopingCar');
const profile = () => import('views/profile/profile');
const Detail = () => import('views/detail/Detail');


const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/category',
        component: category
    },
    {
        path: '/shopingcar',
        component: shopingCar
    },
    {
        path: '/profile',
        component: profile
    },
    {
        path: '/detail/:iid',
        // path: '/detail',
        component: Detail
    }

]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
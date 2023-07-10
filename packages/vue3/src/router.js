import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./components/home.vue'),
        redirect: () => {
            return {
                path: '/login',
            }

        }
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('./components/search.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./components/login.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
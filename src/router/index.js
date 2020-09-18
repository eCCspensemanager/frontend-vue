import Vue from 'vue';
import VueRouter from 'vue-router';
import ExpensesPage from '@/components/transaction/expenses-page.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Expenses',
    component: ExpensesPage,
  },
  {
    path: '/settings',
    name: 'Settings',
    // Generates separate chunk (settings.[hash].js), which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "settings" */ '@/components/settings/settings-page.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // Generates separate chunk (about.[hash].js), which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/about/about-page.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

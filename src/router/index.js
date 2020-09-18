import Vue from 'vue';
import VueRouter from 'vue-router';
import TransactionTable from '@/components/transaction/transaction-table.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Expenses',
    component: TransactionTable,
  },
  {
    path: '/settings',
    name: 'Settings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/settings/settings-page.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../components/about/about-page.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

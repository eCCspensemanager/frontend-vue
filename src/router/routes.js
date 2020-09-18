import ExpensesPage from '@/components/transaction/expenses-page.vue';

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

export default routes;

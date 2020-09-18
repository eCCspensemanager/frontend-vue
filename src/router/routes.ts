import ExpensesPage from '@/components/transaction/expenses-page.vue';

export const EXPENSES_ROUTE = '/';
export const SETTINGS_ROUTE = '/settings';
export const ABOUT_ROUTE = '/about';

const routes = [
  {
    path: EXPENSES_ROUTE,
    name: 'Expenses',
    component: ExpensesPage,
  },
  {
    path: SETTINGS_ROUTE,
    name: 'Settings',
    // Generates separate chunk (settings.[hash].js), which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "settings" */ '@/components/settings/settings-page.vue'),
  },
  {
    path: ABOUT_ROUTE,
    name: 'About',
    // Generates separate chunk (about.[hash].js), which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/about/about-page.vue'),
  },
];

export default routes;

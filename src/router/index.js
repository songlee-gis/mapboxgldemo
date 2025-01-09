import { createRouter, createWebHistory } from 'vue-router';
import SidebarLayout from '../views/SidebarLayout.vue';

const routes = [
  {
    path: '/',
    name: 'SidebarLayout',
    component: SidebarLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
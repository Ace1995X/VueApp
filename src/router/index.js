import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Videoigre from '../views/Videoigre.vue';
import VR from '../views/VR.vue';
import Karte from '../views/Karte.vue';
import Price from '../views/Price.vue';
import Muzeji from '../views/Muzeji.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/videoigre', component: Videoigre },
  { path: '/vr', component: VR },
  { path: '/karte', component: Karte },
  { path: '/price', component: Price },
  { path: '/muzeji', component: Muzeji },
  { path: '/:pathMatch(.*)*', component: () => import('../views/NotFound.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
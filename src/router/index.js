import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../components/Landing.vue';
import SignUp from "../components/SignUp.vue";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue';
import JoinView from '../views/JoinView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name: "login",
      component: LoginView
    },
    {
      path: "/join",
      name: "join",
      component : JoinView
    }
  ]
})

export default router

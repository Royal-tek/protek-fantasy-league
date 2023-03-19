import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddPlayer from '../views/AddPlayer.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-player',
    name: 'AddPlayer',
    component: AddPlayer
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

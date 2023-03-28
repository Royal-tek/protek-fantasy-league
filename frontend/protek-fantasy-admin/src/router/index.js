import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddPlayer from '../views/AddPlayer.vue'
import ManagePlayer from '../views/ManagePlayers.vue'
import AssignCoach from '../views/AssignCoach.vue'

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
  },
  {
    path: '/manage-players',
    name: 'ManagePlayer',
    component: ManagePlayer
  },
  {
    path: '/assign-coach',
    name: 'AssignCoach',
    component: AssignCoach
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PickTeam from '../views/PickTeam.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta : {
      title : 'Home'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta : {
      title : 'About'
    }
  },
  {
    path: '/pickteam',
    name: 'PickTeam',
    component: PickTeam,
    meta : {
      title : 'Pick-team'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  document.title = `${to.meta.title} || ProtekLeaugue`
  next()
})


export default router

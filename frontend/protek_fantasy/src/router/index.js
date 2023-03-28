import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PickTeam from '../views/PickTeam.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import PlayerRegister from '../views/PlayerRegister.vue'
import CoachAdmin from '../views/CoachAdmin.vue'

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
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta : {
      title : 'Login'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta : {
      title : 'Register'
    }
  },
  {
    path: '/player-register',
    name: 'PlayerRegister',
    component: PlayerRegister,
    meta : {
      title : 'PlayerRegister'
    }
  },
  {
    path: '/coach-admin',
    name: 'CoachAdmin',
    component: CoachAdmin,
    meta : {
      title : 'CoachAdmin'
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

import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/modules/dashboard/Dashboard'
import Login from '@/components/modules/login/Login'
import store from '../store'
import UserRouter from '../components/modules/users/UsersRouter'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        title: 'Dashboard'
      }
    },
    UserRouter,
    {
      path: '/login',
      component: Login,
      name: 'login'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!store.getters.isAuthenticated && to.name !== 'login') {
    return next('/login')
  }
  return next()
})

export default router

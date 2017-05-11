import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/modules/dashboard/Dashboard'
import UsersList from '@/components/modules/users/UsersList'
import UserCreate from '@/components/modules/users/UserCreate'
import Login from '@/components/modules/login/Login'
import store from '../store'

Vue.use(Router)

const VirtualRoute = {
  template: '<router-view></router-view>'
}

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
    {
      path: '/users',
      component: VirtualRoute,
      meta: {
        breadcrumb: 'Users',
        title: 'Users'
      },
      children: [
        {
          name: 'users.list',
          path: '',
          component: UsersList,
          meta: {
            breadcrumb: 'List',
            title: 'List of Users'
          }
        },
        {
          name: 'users.create',
          path: '/create',
          component: UserCreate,
          meta: {
            breadcrumb: 'Create',
            title: 'Create User'
          }
        }
      ]
    },
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

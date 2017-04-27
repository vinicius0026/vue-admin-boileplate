import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/modules/Hello'
import UsersList from '@/components/modules/users/UsersList'
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
      name: 'hello',
      component: Hello,
      meta: {
        title: 'Home'
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

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/views/Hello'
import UsersList from '@/components/views/users/UsersList'

Vue.use(Router)

const VirtualRoute = {
  template: '<router-view></router-view>'
}

export default new Router({
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
    }
  ]
})

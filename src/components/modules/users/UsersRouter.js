import UsersList from './UsersList'
import UserCreate from './UserCreate'
import UserDetails from './UserDetails'

const VirtualRoute = {
  template: '<router-view></router-view>'
}

export default {
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
      path: 'create',
      component: UserCreate,
      meta: {
        breadcrumb: 'Create',
        title: 'Create User'
      }
    }
  ]
}

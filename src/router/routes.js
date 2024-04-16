export const routes = [
  {
    path: '/',
    name: 'start',
    component: () => import('@/views/GetStartedView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterView.vue')
  }
]

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/profile',
    name: 'profileSettings',
    component: () => import('@/views/ProfileSettingsView.vue')
  },
  {
    path: '/guide',
    name: 'guide',
    component: () => import('@/views/GuideProfileView.vue')
  }
]

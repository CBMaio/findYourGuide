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
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterView.vue')
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
  },
  {
    path: '/destinations',
    name: 'destinations',
    component: () => import('@/views/DestinationsView.vue')
  },
  {
    path: '/destination',
    name: 'destination',
    component: () => import('@/views/DestinationDetailView.vue')
  }
]

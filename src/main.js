import './assets/css/base.css'
import './assets/css/tailwind.css'
import 'tailwindcss/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(PrimeVue)

app.mount('#app')

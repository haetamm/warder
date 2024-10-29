import './assets/main.scss'
import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'

const app = createApp(App)
const head = createHead();

app.use(createPinia())
app.use(head)
app.use(router).mount('#app')

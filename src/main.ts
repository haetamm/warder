import './assets/main.scss'
import './assets/style.css'
import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Tooltip from 'primevue/tooltip'

import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { clickOutside } from './directives/clickOutside'

const app = createApp(App)
app.directive('click-outside', clickOutside)
app.directive('tooltip', Tooltip)
const head = createHead()
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.use(createPinia())
app.use(head)
app.use(router).mount('#app')

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
import ToastService from 'primevue/toastservice'
import { clickOutside } from './directives/clickOutside'

const app = createApp(App)
const head = createHead()

app.use(createPinia())
app.directive('click-outside', clickOutside)
app.directive('tooltip', Tooltip)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.use(ToastService)

app.use(head)
app.use(router).mount('#app')

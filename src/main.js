import { createApp } from 'vue'
import Tres from '@tresjs/core'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

const app = createApp(App)

app.use(router)
app.use(Tres)

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia"

import { createWebHashHistory, createRouter } from 'vue-router/auto'

const app = createApp(App)

app.use(createPinia())

const router = createRouter({
    history: createWebHashHistory()
})

app.use(router)

app.mount('#app')

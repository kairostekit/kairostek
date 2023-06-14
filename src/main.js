import './assets/css/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

router.beforeEach((to, from) => {
    document.title = to.meta?.title ?? 'KAIROSTEK'
})
app.use(createPinia())
app.use(router)

app.mount('#app')

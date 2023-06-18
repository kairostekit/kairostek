// Add Css Basse

// import('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');

// import('@/assets/plugins/jquery/jquery.min.js')





import { createApp } from 'vue'
import { createPinia } from 'pinia'



import App from './App.vue'
import router from './router'

const app = createApp(App)


app.use(createPinia())
app.use(router)
// app.use(axios);
// app.use(jquery);
// app.use(bootstrap);

app.mount('#app')

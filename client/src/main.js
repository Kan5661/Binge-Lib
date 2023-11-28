import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.errorHandler = (err) => {
    console.log('Global error handler', err)
}

app.mount('#app')

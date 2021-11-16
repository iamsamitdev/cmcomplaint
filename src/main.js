import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import Tailwind CSS มาใช้งาน
import '@/styles/tailwind.css'

createApp(App).use(store).use(router).mount('#app')

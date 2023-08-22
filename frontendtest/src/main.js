import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import css from '../src/assets/css/styles.css'

createApp(App).use(store).use(router).use(bootstrap).use(css).mount('#app')

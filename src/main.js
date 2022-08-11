import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import App from './App.vue'

let app = createApp(App)
app.use(ElementPlus)
app.mount('#app')

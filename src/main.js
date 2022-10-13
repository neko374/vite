import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'
import axios from "./plugins/axios"
var app = createApp(App)
app.use(router)
app.config.globalProperties.$axios = axios;
app.use(ElementPlus)
app.mount('#app')
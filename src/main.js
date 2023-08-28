import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 引入样式初始化文件
import '@/styles/common.scss'
import App from './App.vue'
import router from './router'
import {lazyPlugin} from "@/directives";
import {componentsPlugin} from "@/components"

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(lazyPlugin).use(componentsPlugin)
app.mount('#app')

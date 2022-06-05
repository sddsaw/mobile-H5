import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import '@/styles/index.scss'// 重置css样式
import 'virtual:svg-icons-register'
//  navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
createApp(App).use(router).mount('#app')

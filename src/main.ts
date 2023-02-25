import { createApp } from 'vue'
import { setupStore } from './stores/index'

import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue';                      // ant-design ui
import 'ant-design-vue/dist/antd.css';

import './assets/main.css'

const app = createApp(App)

// 配置 store
setupStore(app)
app.use(router)

app.use(Antd)

app.mount('#app')

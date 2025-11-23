import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
import CdnImage from './components/CdnImage.vue'
import MediaAsset from './components/MediaAsset.vue'
import './styles/main.scss'

const app = createApp(App)

// 注册全局组件
app.component('CdnImage', CdnImage)
app.component('MediaAsset', MediaAsset)

app.use(router)
app.use(MotionPlugin)

app.mount('#app')

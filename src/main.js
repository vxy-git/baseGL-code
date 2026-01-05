import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
import CdnImage from './components/CdnImage.vue'
import MediaAsset from './components/MediaAsset.vue'
import VideoModal from './components/VideoModal.vue'
import './styles/main.scss'

const app = createApp(App)
const pinia = createPinia()

// 注册全局组件
app.component('CdnImage', CdnImage)
app.component('MediaAsset', MediaAsset)
app.component('VideoModal', VideoModal)

app.use(pinia)
app.use(router)
app.use(MotionPlugin)

app.mount('#app')

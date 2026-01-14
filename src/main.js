import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'
import { createAppRouter, initialCmsNavData } from './router'
import { useCmsNavStore } from '@/stores/cmsNav'
import CdnImage from './components/CdnImage.vue'
import MediaAsset from './components/MediaAsset.vue'
import VideoModal from './components/VideoModal.vue'
import './styles/main.scss'

;(async () => {
  const app = createApp(App)
  const pinia = createPinia()

  // 注册全局组件
  app.component('CdnImage', CdnImage)
  app.component('MediaAsset', MediaAsset)
  app.component('VideoModal', VideoModal)

  app.use(pinia)

  const router = await createAppRouter()

  // 同步路由预加载的数据到 Store
  if (initialCmsNavData) {
    const cmsNavStore = useCmsNavStore(pinia)
    cmsNavStore.setNavData(initialCmsNavData)
  }

  app.use(router)
  app.use(MotionPlugin)
  app.use(ElementPlus, {
    locale: zhCn,
  })

  app.mount('#app')
})()

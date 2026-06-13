import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'
import { createAppRouter, createStaticRouter, initialCmsNavData } from './router'
import { useCmsNavStore } from '@/stores/cmsNav'
import CdnImage from './components/CdnImage.vue'
import MediaAsset from './components/MediaAsset.vue'
import VideoModal from './components/VideoModal.vue'
import { logger } from '@/utils/logger'
import './styles/main.scss'

;(async () => {
  try {
    const app = createApp(App)
    const pinia = createPinia()

    // 注册全局组件
    app.component('CdnImage', CdnImage)
    app.component('MediaAsset', MediaAsset)
    app.component('VideoModal', VideoModal)

    app.use(pinia)
    app.use(MotionPlugin)
    app.use(ElementPlus, {
      locale: zhCn,
    })

    // 先使用静态降级路由立即挂载应用，避免 CMS API 响应慢时白屏
    const router = createStaticRouter()
    app.use(router)
    app.mount('#app')

    // 异步加载 CMS 动态路由并补充到路由器中
    const cmsRouter = await createAppRouter()

    // 同步路由预加载的数据到 Store
    if (initialCmsNavData) {
      const cmsNavStore = useCmsNavStore(pinia)
      cmsNavStore.setNavData(initialCmsNavData)
    }

    // 保存当前路径，用于路由替换后重新匹配
    const currentPath = router.currentRoute.value.fullPath

    // 移除已有路由后注册新路由，确保以 CMS 路由为最新
    const currentRoutes = router.getRoutes()
    currentRoutes.forEach(r => {
      if (r.name) router.removeRoute(r.name)
    })

    cmsRouter.getRoutes().forEach(r => {
      router.addRoute(r)
    })

    // 重新匹配当前路径，确保新加载的 CMS 路由生效
    router.replace(currentPath)
  } catch (err) {
    logger.error('[main] CMS 动态路由加载失败，使用静态降级路由:', err.message)
  }
})()

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
// Element Plus 全量导入（约 2MB）
// 注意：form-create 插件动态渲染依赖 Element Plus 全局注册的组件，
// 贸然切换按需导入会导致 ContactUs 表单组件渲染异常
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
  const pinia = createPinia()

  try {
    // 提前发起 CMS 请求（不等应用挂载），缩短数据加载窗口
    const cmsPromise = createAppRouter()

    const app = createApp(App)

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

    // 等待 CMS 动态路由加载完成
    const cmsRouter = await cmsPromise

    // 剔除通配兜底路由，只统计真正的 CMS 页面路由
    const cmsPageRoutes = cmsRouter.getRoutes().filter(r => r.name !== 'catchAll')

    if (cmsPageRoutes.length > 0) {
      // 保存当前路径，用于路由替换后重新匹配
      const currentPath = router.currentRoute.value.fullPath

      // 移除已有静态路由后注册 CMS 路由
      const currentRoutes = router.getRoutes()
      currentRoutes.forEach(r => {
        if (r.name) router.removeRoute(r.name)
      })
      cmsRouter.getRoutes().forEach(r => {
        router.addRoute(r)
      })

      // 等待导航完成后再标记 navResolved，确保 router-view 首次渲染就是 CMS 路由
      await router.replace(currentPath)
    }

    // 同步 CMS 数据到 Store（无论路由是否替换，有数据就同步）
    // setNavData 内部会设置 navResolved = true
    if (initialCmsNavData) {
      const cmsNavStore = useCmsNavStore(pinia)
      cmsNavStore.setNavData(initialCmsNavData)
    } else {
      // CMS 无数据，标记已解析，保留静态路由降级
      const cmsNavStore = useCmsNavStore(pinia)
      cmsNavStore.markResolved()
    }
  } catch (err) {
    const cmsNavStore = useCmsNavStore(pinia)
    cmsNavStore.markResolved()
    logger.error('[main] CMS 动态路由加载失败，使用静态降级路由:', err.message)
  }
})()

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

CALEAF TECH 官网 (caleaftech.com)，Vue 3 + Vite 6 SPA。核心架构为 **CMS 动态驱动 + 双重降级**。

## 常用命令

```bash
pnpm dev       # 开发服务器 (localhost:3002)
pnpm build     # 生产构建（Terser 压缩，移除 console/debugger）
pnpm preview   # 预览构建产物
```

## 核心架构

### 双重路由启动策略（`src/main.js` + `src/router/index.js`）

应用启动分两步，解决 CMS API 慢导致白屏问题：

1. **立即挂载**：`createStaticRouter()` 创建静态降级路由 → `app.mount('#app')`，页面立即渲染
2. **异步增强**：`createAppRouter()` 从 CMS API 获取动态路由 → 替换路由表 → `router.replace(currentPath)`
3. **失败兜底**：CMS API 失败时保留静态降级路由

### CMS 数据流

```
CMS API (getCmsNavPublicList)
  ├─→ Router: pageTypeComponentMap 映射 pageType → Vue 组件 → 路由配置
  │     └─→ meta + props (pageConfig) 通过路由传递给页面组件
  └─→ Pinia Store (cmsNav): fetchAllNavs() → 永久缓存
        └─→ computed getters (headerNavs, footerNavs, productCategories, bannerNavs)
```

**pageTypeComponentMap** 在 `src/router/index.js` 中将 CMS 的 `pageType` 映射到 Vue 组件（懒加载）：
- `home` → Home, `technology` → Technology, `contactus` → ContactUs
- `universe_series` → Universe Series, `unicorn_series` → Unicorn Series
- `unit_pro` → Unit Pro, `dukes` → Dukes
- `list` → ProductList, `page` → 通用 Page, `why_caleaf` → WhyCaleaf

### 三级数据降级（`src/composables/useUnitData.js`）

每个页面 Unit 的数据获取优先级：
1. `props.data`（CMS 通过路由 props 下发）
2. Pinia Store 中的 CMS 缓存数据
3. `src/data/` 本地静态降级数据（`index.js` + `xxx-unitN.js`）

降级链使用深层合并：CMS 的部分字段不会覆盖本地默认的嵌套对象。

### 页面架构模式

所有页面遵循统一模式（参考任一 `src/views/` 下的页面）：
1. 接收 `pageConfig` props（含 `moduleList: { unitX: { data, enabled } }`）
2. 定义 `componentMap` 将 Unit key 映射到对应组件
3. 使用 `useRenderList(pageConfig)` 生成动态渲染列表
4. 模板中 `v-for` 循环渲染

### API 层（`src/api/`）

- **cmsNav.js**：核心数据源，`getCmsNavPublicList()` 实现了模块级缓存（`_cachedResult` + `_pendingRequest` 防并发重复请求），支持 `forceRefresh`
- **infoData.js**：表单提交（`/infoData/createInfoPublicData`）
- **formdesign.js**：动态表单配置获取

### HTTP 客户端（`src/utils/request.js`）

基于原生 `fetch`，15s 超时，统一 `{ success, data, message }` 返回格式，`code === 0` 为业务成功。通过 `request.get()` / `request.post()` 调用。

### 环境变量（`.env` / `.env.example`）

- `VITE_BASE_URL`：CDN 域名（`https://img.cloudcode.ink/`）
- `VITE_API_BASE_URL`：API 基础地址
- `VITE_FORM_UUID`：表单 UUID

**注意**：`.env` 已被 `.gitignore` 排除，不会被 Git 跟踪。新增环境变量需同步到 `.env.example` 模板文件。

## 关键 Composables

- **useUnitData(pageConfig, dataKey, localData, options)**：通用数据合并，支持 `deepMergeKeys` 指定需要深层合并的字段
- **useRenderList(pageConfig)**：根据 `moduleList` 动态生成组件渲染列表，支持 `dataKeyFor` 函数映射
- **useGsap(options)**：GSAP ScrollTrigger 上下文管理（自动清理），包含 `useScrollAnimation` / `useParallax`
- **useHeaderNav()**：Header 导航交互逻辑（桌面端下拉菜单、移动端抽屉、滚动响应）

## 日志规范

使用 `src/utils/logger.js` 统一日志工具：
- `logger.log/warn/debug`：仅开发环境输出
- `logger.error`：所有环境保留
- **不要直接使用** `console.log`，应通过 `logger` 调用

## 注意事项

- **包管理器**：使用 `pnpm`，存在 `pnpm-lock.yaml`。`yarn.lock` 是历史残留，应忽略。
- **样式方案**：Tailwind CSS + SCSS 混用，`src/styles/variables.scss` 已通过 vite 全局注入，SCSS 中可直接使用变量。
- **自适应方案**：PostCSS pxtorem 将 px 转换为 rem（PC 基准 1200px/10，移动端 380px/10），通过 `src/composables/rem.js` 计算。
- **移动端断点**：`MOBILE_BREAKPOINT = 1025`（定义在 `src/composables/fit.js`）。
- **构建分包**：`vue` + `vue-router` 打包为 `vue-vendor` chunk，`gsap` + `@vueuse/motion` 打包为 `animation` chunk。
- **静态资源**：`public/` 目录约 749MB，含大量 tar 压缩包和媒体资源，构建产物 `dist/` 约 751MB。
- **Element Plus**：全量导入 + 中文语言包，约 2MB。
- **@form-create/element-ui**：仅 ContactUs 页面使用，用于动态表单渲染。
- **useMobileDetect.js**：移动端检测 composable，封装了 `MOBILE_BREAKPOINT` + resize 监听 + 生命周期管理。用于 Unit Pro~4 和 Technology 页面组件。
- **项目无单元测试、无 ESLint/Prettier 配置**，代码审查依赖人工。

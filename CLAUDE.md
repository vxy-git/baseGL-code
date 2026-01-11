# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 **Vue 3** 的单页应用 (SPA),采用 **CMS 驱动的动态架构**。页面内容和路由配置主要由后端 CMS API 控制,本地数据作为降级方案。

- **框架**: Vue 3.5.13 (Composition API)
- **构建工具**: Vite 6.0.5
- **状态管理**: Pinia 2.3.1
- **路由**: Vue Router 4.5.0 (动态生成)
- **样式**: Tailwind CSS 3.4.1 + SCSS
- **动画**: GSAP 3.12.5, @vueuse/motion 2.2.6

## 开发命令

```bash
# 开发环境 (端口 3002)
npm run dev     # 或 pnpm dev

# 生产构建
npm run build   # 或 pnpm build

# 预览构建结果
npm run preview
```

## 核心架构

### 1. 动态路由生成系统

**关键文件**: `src/router/index.js`

路由不是静态配置的,而是从 CMS API 动态生成:

```javascript
// 路由生成流程
1. 调用 getCmsNavPublicList() → 从后端获取导航配置
2. 过滤 status='启用' 的导航项
3. 根据 pageType 映射到对应组件
4. pageConfig 通过 props 传递给页面组件
5. 自动注册到 Vue Router
```

**pageType 到组件的映射**:
- `home` → `views/Home/index.vue`
- `technology` → `views/Technology/index.vue`
- `contactus` → `views/ContactUs/index.vue`
- `unit_pro` → `views/Product1/index.vue`
- `unicorn_series` → `views/Product3/index.vue`
- `universe_series` → `views/Product2/index.vue`
- `dukes` → `views/Product4/index.vue`
- `list` → `views/ProductList/index.vue`
- `page` → `views/Page/index.vue` (通用模板)

### 2. 双重数据源架构

#### 数据源 1: 本地 CMS 数据 (降级方案)
- 位置: `src/data/` (按页面分层的模块化数据)
- API 层: `src/api/cms.js` (已废弃但保留)
- Hook: `src/composables/useCmsPage.js`

#### 数据源 2: 远程 CMS API (主要数据源)
- API 层: `src/api/cmsNav.js`
- 接口: `/api/cmsnav/getCmsNavPublicList`
- Store: `src/stores/cmsNav.js` (Pinia)

**降级机制示例** (Header 组件):
```javascript
const navItems = computed(() => {
  // 优先使用 CMS 数据,否则使用静态配置
  return cmsNavStore.headerNavs.length > 0
    ? cmsNavStore.headerNavs
    : headerData.navItems
})
```

### 3. CMS 数据结构

#### 导航数据结构
```javascript
{
  ID: 数值,
  navName: 'Home',           // 导航名称 (路由标识)
  navUrl: '/',               // URL 路径
  pageType: 'home',          // 页面类型 (决定组件)
  status: '启用',            // 启用状态
  headerShow: true,          // 是否在 Header 显示
  footerShow: true,          // 是否在 Footer 显示
  parentId: 0,               // 父级 ID (0 为顶级)
  sort: 1,                   // 排序
  moduleList: {              // 页面模块数据
    unit1: { enabled: true, data: {...} },
    unit2: { enabled: true, data: {...} },
    item: { enabled: true, data: {...} }
  }
}
```

#### 产品分类三级结构
```
Products (navName='Products')
  └─ Series (子导航, 如 'Vaporizers')
      └─ Product (产品项, 如 'UNIT Pro')
          └─ moduleList.item.data (产品详情)
```

**Pinia Store** (`src/stores/cmsNav.js`) 提供的计算属性:
- `headerNavs`: Header 导航列表
- `footerNavs`, `footerColumns`: Footer 导航
- `productCategories`: 产品分类数据 (供 Nav 下拉菜单使用)
- `bannerNavs`: Banner 轮播数据

## 组件开发模式

### 1. 页面组件动态渲染

**标准模式** (Product1-4 页面):

```vue
<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  pageConfig: { type: Object, default: () => ({}) }
})

// 组件映射表
const componentMap = {
  unit1: Unit1,
  unit2: Unit2,
  unit3: Unit3,
  // ...
}

// 默认渲染顺序
const defaultOrder = ['unit1', 'unit2', 'unit3', ...]

// 动态渲染列表
const renderList = computed(() => {
  const moduleList = props.pageConfig?.moduleList

  if (moduleList) {
    return defaultOrder
      .filter(key => moduleList[key]?.enabled !== false)
      .map(key => ({
        key,
        component: componentMap[key],
        data: moduleList[key].data
      }))
  }

  // 降级: 无 CMS 数据时使用本地默认数据
  return defaultOrder.map(key => ({
    key,
    component: componentMap[key],
    data: null
  }))
})
</script>

<template>
  <component
    v-for="item in renderList"
    :key="item.key"
    :is="item.component"
    :data="item.data"
  />
</template>
```

### 2. Unit 组件数据合并

**标准模式** (所有 Unit 子组件):

```vue
<script setup>
import { computed } from 'vue'
import { product1Unit1Data } from '@/data/product1/product1-unit1'

const props = defineProps({
  data: { type: Object, default: null }
})

// 合并 CMS 数据和本地数据
const unitData = computed(() => {
  if (props.data) {
    return { ...product1Unit1Data, ...props.data }
  }
  return product1Unit1Data
})
</script>

<template>
  <div>{{ unitData.content.title }}</div>
</template>
```

**关键原则**:
- CMS 数据覆盖本地默认值
- 无 CMS 数据时自动降级到本地数据
- 保持组件独立性和可测试性

### 3. 响应式适配

**断点配置**:
- 移动端断点: `1024px` (定义在 `composables/fit.js`)
- PC/移动端组件切换:

```javascript
import { isMobile } from '@/composables/fit'

const componentMap = {
  unit3: Unit3,      // PC 组件
  m_unit3: m_Unit3   // 移动端组件
}

const defaultOrder = computed(() =>
  isMobile.value
    ? ['unit1', 'unit2', 'm_unit3', ...]  // 移动端顺序
    : ['unit1', 'unit2', 'unit3', ...]    // PC 端顺序
)
```

## 重要组件

### MediaAsset 组件
**位置**: `src/components/MediaAsset.vue`

统一的媒体资源管理组件,支持图片和视频:

```vue
<!-- 视频示例 -->
<MediaAsset
  type="video"
  src="/videos/product.mp4"
  :viewPlay="true"      // 视口内自动播放
  :hoverPlay="true"     // 鼠标悬停播放
  :muted="true"
  :loop="true"
/>

<!-- 图片示例 -->
<MediaAsset
  type="image"
  src="/images/product.png"
  :lazy="true"          // 懒加载
  cdnUrl="https://custom-cdn.com"
/>
```

**功能**:
- 自动 CDN URL 拼接 (使用 `VITE_BASE_URL`)
- 懒加载支持
- 视频交互播放 (Intersection Observer)
- 移动端自动优化

### CdnImage 组件
**位置**: `src/components/CdnImage.vue`

CDN 图片组件,支持懒加载和自定义 CDN:

```vue
<CdnImage
  src="/images/product.png"
  :lazy="true"
  cdnUrl="https://custom-cdn.com"
  alt="Product"
/>
```

### Header 组件
**位置**: `src/components/Header/index.vue`

包含:
- 导航菜单 (支持 CMS 数据降级)
- 移动端抽屉菜单
- Nav 下拉菜单 (产品分类)

### Nav 组件
**位置**: `src/components/Nav/index.vue`

产品下拉菜单,支持三级产品分类结构。

**数据来源优先级**:
1. `cmsNavStore.productCategories` (CMS 数据)
2. 本地 `productsData` (降级方案)

## 命名约定

### 数据文件命名
```
src/data/
├── product1/
│   ├── product1-unit1.js  → 导出 product1Unit1Data
│   ├── product1-unit2.js  → 导出 product1Unit2Data
│   └── ...
├── product2/
│   ├── product2-unit1.js  → 导出 product2Unit1Data
│   └── ...
└── ...
```

**规则**: `product{X}Unit{X}Data`

### 模块命名约定
- `unit1-9`: 标准内容模块
- `item`: 产品信息模块 (供产品列表使用)
- `gsapU`: GSAP 动画模块 (Product2 特殊模块)
- `videoU`: 视频模块 (Product2 特殊模块)

### 组件组织约定
```
views/ProductX/
├── index.vue              # 主页面 (动态渲染逻辑)
└── components/
    ├── Unit1/
    │   ├── index.vue      # PC 组件
    │   └── m_index.vue    # 移动端组件 (可选)
    ├── Unit2/
    └── ...
```

## 关键文件路径

### 配置文件
- `vite.config.js` - Vite 配置 (路径别名、构建优化)
- `tailwind.config.js` - Tailwind CSS 配置
- `.env` - 环境变量 (VITE_BASE_URL, VITE_API_BASE_URL)

### 路由和状态
- `src/router/index.js` - 动态路由生成
- `src/stores/cmsNav.js` - CMS 导航数据 Store

### API 层
- `src/api/cmsNav.js` - CMS 导航 API (真实后端)
- `src/api/cms.js` - CMS 数据模拟层 (本地数据,已废弃)

### 页面示例
- `src/views/Product1/index.vue` - Product1 主页面
- `src/views/ProductList/index.vue` - 产品列表页

## 样式系统

### 双样式架构
- **Tailwind CSS**: 工具类,用于响应式布局和快速原型
- **SCSS**: 组件样式,用于复杂动画和特殊布局

### Rem 适配
PostCSS 配置自动转换 px 到 rem (1rem = 16px):

```javascript
// postcss.config.js
postcss-pxtorem: {
  rootValue: 16,
  propList: ['*'],
  exclude: /node_modules/i
}
```

### SCSS 全局变量
**位置**: `src/styles/variables.scss`

```scss
$primary-color: #1CE785;
$text-color: #111111;
// ...
```

## 开发注意事项

### 添加新页面
1. 在 CMS 后台创建导航配置 (navUrl, pageType)
2. 在 `src/router/index.js` 的 `pageTypeMap` 添加映射
3. 创建页面组件 (接收 `pageConfig` props)
4. 添加本地数据文件到 `src/data/` (作为降级方案)

### 添加新 Unit 模块
1. 创建 Unit 组件 (接收 `data` props)
2. 导出本地默认数据到 `src/data/productX/productX-unitY.js`
3. 在页面组件的 `componentMap` 中注册
4. 添加到 `defaultOrder` 数组

### CMS 数据对接检查清单
- [ ] 组件接收 `data` props
- [ ] 实现数据合并逻辑: `{ ...localData, ...props.data }`
- [ ] 在 `moduleList` 中添加对应的模块配置
- [ ] 测试 CMS 数据禁用时的降级行为

### 动画使用
- GSAP Hook: `src/composables/useGsap.js`
- 页面滚动动画
- 下拉菜单进入/离场动画
- 产品卡片交错淡入动画

## 环境变量

```bash
# .env
VITE_BASE_URL=https://img.cloudcode.ink/
VITE_API_BASE_URL=http://localhost:8080/api
```

使用方式: `import.meta.env.VITE_BASE_URL`

## 路径别名

```json
{
  "@/*": "./src/*"
}
```

示例: `import { foo } from '@/utils/foo'`

## 生产部署

生产构建自动优化:
- 移除 console 和 debugger
- 代码分割 (vue-vendor, animation chunks)
- Terser 压缩
- Autoprefixer

## 调试技巧

### 检查 CMS 数据加载
```javascript
import { useCmsNavStore } from '@/stores/cmsNav'

const cmsNavStore = useCmsNavStore()
console.log('CMS 导航数据:', cmsNavStore.navList)
console.log('产品分类:', cmsNavStore.productCategories)
```

### 检查页面配置
```javascript
const props = defineProps({
  pageConfig: { type: Object, default: () => ({}) }
})

console.log('页面配置:', props.pageConfig)
console.log('模块列表:', props.pageConfig?.moduleList)
```

## 常见问题

**Q: 路由不生效?**
A: 检查 `src/router/index.js` 中的 `pageTypeMap` 是否包含对应映射

**Q: CMS 数据未加载?**
A: 检查 `src/stores/cmsNav.js` 是否已初始化,查看控制台 API 错误

**Q: 组件显示空白?**
A: 确认 `moduleList[moduleName].enabled` 是否为 `true`

**Q: 移动端样式错误?**
A: 检查是否在 `defaultOrder` 中使用了 `m_` 前缀的移动端组件

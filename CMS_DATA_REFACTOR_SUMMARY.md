# CMS 数据架构重构总结

## 已完成的工作

### 1. 数据文件结构重构 ✅

已将原有的平铺数据文件结构重构为按页面分层的结构：

```
src/data/
├── home/
│   ├── index.js          # 首页完整配置（包含路由、模块等）
│   ├── home-unit1.js     # 各模块源数据
│   ├── home-unit2.js
│   ├── home-unit3.js
│   ├── home-unit4.js
│   ├── home-unit5.js
│   └── home-unit6.js
├── product1/             # UNIT Pro 产品页
│   ├── index.js
│   └── product1-unit*.js
├── product2/             # UNIVERSE Series 产品页
│   ├── index.js
│   └── product2-unit*.js
├── product3/             # UNICORN Series 产品页
│   ├── index.js
│   └── product3-unit*.js
├── product4/             # DUKES 产品页
│   ├── index.js
│   └── product4-unit*.js
├── productlist/          # 产品列表页
│   ├── index.js
│   ├── products.js
│   └── productlist.js
├── technology/           # 技术页
│   ├── index.js
│   └── technology-unit*.js
├── contactus/            # 联系页
│   ├── index.js
│   └── contactus.js
└── common/               # 全局配置
    ├── index.js
    ├── header.js
    └── footer.js
```

### 2. 页面数据配置文件创建 ✅

为每个页面创建了 `index.js` 配置文件，包含：

**配置结构：**
```javascript
{
  // 路由配置
  route: '/unit_pro',           // 页面路由路径
  routeName: 'product1',        // 路由名称

  // 导航配置
  showInHeader: true,           // 是否在 header 导航中显示
  showInFooter: true,           // 是否在 footer 导航中显示
  navLabel: 'UNIT Pro',         // 导航显示的标签文本
  navOrder: 2,                  // 导航排序

  // 页面模板
  template: 'ProductPage',      // 使用哪个页面模板渲染

  // 页面元数据
  meta: {
    title: 'UNIT Pro - Caleaf',
    description: '...'
  },

  // 模块数据集合
  modules: {
    unit1: {
      enabled: true,            // 是否启用该模块
      data: { /* unit1 的具体内容数据 */ }
    },
    // ... 其他模块
  }
}
```

**已创建的页面配置文件：**
- ✅ `src/data/home/index.js`
- ✅ `src/data/product1/index.js`
- ✅ `src/data/product2/index.js`
- ✅ `src/data/product3/index.js`
- ✅ `src/data/product4/index.js`
- ✅ `src/data/productlist/index.js`
- ✅ `src/data/technology/index.js`
- ✅ `src/data/contactus/index.js`
- ✅ `src/data/common/index.js`

### 3. CMS API 模拟层创建 ✅

创建了统一的 CMS API 模拟层：

**文件：** `src/api/cms.js`

**提供的方法：**
- `fetchPage(pageId)` - 获取单个页面配置
- `fetchAllPages()` - 获取所有页面配置（用于生成路由和导航）
- `fetchMultiplePages(pageIds)` - 获取多个页面配置
- `fetchPageByRoute(routePath)` - 根据路由路径获取页面配置
- `fetchNavigation()` - 获取导航数据（Header 和 Footer）

### 4. Composable 数据钩子创建 ✅

创建了 Vue 3 Composition API 风格的数据钩子：

**文件：** `src/composables/useCmsPage.js`

**提供的 Hooks：**
- `useCmsPage(pageId)` - 页面数据获取 Hook
  - 返回：`pageData`, `commonData`, `loading`, `error`, `refresh`, `enabledModules`

- `useCmsNavigation()` - 导航数据获取 Hook
  - 返回：`navigation`, `loading`, `error`, `refresh`

### 5. 动态路由生成器实现 ✅

更新了路由配置以支持从 CMS 数据动态生成路由：

**文件：** `src/router/index.js`

**改动：**
- ✅ 导入 `fetchAllPages` API
- ✅ 创建 `generateRoutes()` 异步函数
- ✅ 根据 CMS 数据动态生成路由配置
- ✅ 将页面配置通过 props 传递给组件

---

## 后续需要完成的工作

### 1. 更新 Header 组件支持动态导航

**目标：** 将 Header 组件从使用硬编码的 `headerData` 改为使用动态生成的导航数据。

**需要修改的文件：**
- `src/components/Header/index.vue`

**改动内容：**
```javascript
// 修改前
import { headerData } from '@/data/header'

// 修改后
import { useCmsNavigation } from '@/composables/useCmsPage'

const { navigation } = useCmsNavigation()
// 使用 navigation.value.header 获取动态导航数据
```

### 2. 更新 Footer 组件支持动态导航

**目标：** 将 Footer 组件从使用硬编码的 `footerData` 改为使用动态生成的导航数据。

**需要修改的文件：**
- `src/components/Footer.vue`

**改动内容：**
```javascript
// 修改前
import { footerData } from '@/data/footer'

// 修改后
import { useCmsNavigation } from '@/composables/useCmsPage'

const { navigation } = useCmsNavigation()
// 使用 navigation.value.footer 获取动态导航数据
```

### 3. 更新页面组件使用 CMS 数据

**需要修改的文件：**
- `src/views/Home/index.vue`
- `src/views/Product1/index.vue`
- `src/views/Product2/index.vue`
- `src/views/Product3/index.vue`
- `src/views/Product4/index.vue`
- `src/views/ProductList/index.vue`
- `src/views/Technology/index.vue`
- `src/views/ContactUs/index.vue`

**改动模式：**
```vue
<script setup>
// 修改前
import { homeUnit1Data } from '@/data/home-unit1'
import { homeUnit2Data } from '@/data/home-unit2'
// ...

// 修改后
import { useCmsPage } from '@/composables/useCmsPage'

const { pageData, loading, error, enabledModules } = useCmsPage()
// 通过计算属性访问各模块数据
const unit1Data = computed(() => pageData.value?.modules?.unit1?.data)
const unit2Data = computed(() => pageData.value?.modules?.unit2?.data)
// ...
</script>

<template>
  <div v-if="loading">加载中...</div>
  <div v-else-if="error">加载失败: {{ error }}</div>
  <div v-else>
    <Unit1 v-if="pageData?.modules?.unit1?.enabled" :data="unit1Data" />
    <Unit2 v-if="pageData?.modules?.unit2?.enabled" :data="unit2Data" />
    <!-- ... 其他模块 -->
  </div>
</template>
```

### 4. 创建通用页面模板（可选）

如果需要真正的通用页面模板，可以创建：

**文件结构：**
```
src/templates/
├── HomePage.vue         # 首页模板
├── ProductPage.vue      # 产品页模板（通用）
├── ProductListPage.vue  # 产品列表页模板
├── TechnologyPage.vue   # 技术页模板
└── ContactPage.vue      # 联系页模板
```

**模板示例：**
```vue
<!-- src/templates/ProductPage.vue -->
<script setup>
import { computed } from 'vue'
const props = defineProps({
  pageData: { type: Object, required: true },
  commonData: { type: Object, required: true }
})

const enabledModules = computed(() => {
  return Object.entries(props.pageData.modules)
    .filter(([_, module]) => module.enabled)
    .map(([moduleName, module]) => ({
      name: moduleName,
      data: module.data
    }))
})
</script>

<template>
  <div class="product-page">
    <component
      v-for="module in enabledModules"
      :key="module.name"
      :is="module.name.charAt(0).toUpperCase() + module.name.slice(1)"
      :data="module.data"
    />
  </div>
</template>
```

---

## 数据流程说明

### 当前架构的数据流向：

```
1. CMS 数据层（src/data/）
   ↓ 包含页面配置、路由信息、模块数据

2. API 层（src/api/cms.js）
   ↓ 模拟 CMS 接口，返回完整数据

3. Router 层（src/router/index.js）
   ↓ 从 API 获取所有页面配置，动态生成路由

4. Composable 层（src/composables/useCmsPage.js）
   ↓ 组件使用 Hook 获取页面数据和导航数据

5. 组件层（src/views/ 和 src/components/）
   ↓ 使用 Composable 获取数据，渲染页面

6. Header/Footer 组件
   ↓ 使用 useCmsNavigation 获取动态导航配置
```

### 关键特性：

1. **数据驱动路由** - 页面路由完全由 CMS 数据配置决定
2. **动态导航** - Header 和 Footer 导航根据 `showInHeader` 和 `showInFooter` 自动生成
3. **模块开关** - 通过 `enabled` 字段控制模块是否显示
4. **模板选择** - 通过 `template` 字段选择页面渲染模板
5. **元数据管理** - 统一的 SEO 元数据配置

---

## 迁移检查清单

- [x] 创建页面数据文件夹结构
- [x] 移动数据文件到对应页面文件夹
- [x] 创建各页面的 index.js 配置文件
- [x] 创建 common 全局配置文件
- [x] 创建 CMS API 模拟层
- [x] 创建 useCmsPage composable
- [x] 更新路由配置支持动态生成
- [ ] 更新 Header 组件支持动态导航
- [ ] 更新 Footer 组件支持动态导航
- [ ] 更新页面组件使用 CMS 数据
- [ ] 测试所有页面功能
- [ ] 测试动态路由跳转
- [ ] 测试导航生成逻辑
- [ ] 测试模块开关功能

---

## 使用示例

### 在新页面中使用 CMS 数据：

```vue
<template>
  <div v-if="loading">加载中...</div>
  <div v-else-if="error">错误: {{ error }}</div>
  <div v-else>
    <h1>{{ pageData?.meta?.title }}</h1>

    <!-- 遍历所有启用的模块 -->
    <component
      v-for="module in enabledModules"
      :key="module.name"
      :is="getComponentName(module.name)"
      :data="module.data"
    />
  </div>
</template>

<script setup>
import { useCmsPage } from '@/composables/useCmsPage'
import { computed } from 'vue'

const { pageData, loading, error, enabledModules } = useCmsPage()

const getComponentName = (moduleName) => {
  // 根据模块名返回对应的组件名
  return moduleName.charAt(0).toUpperCase() + moduleName.slice(1)
}
</script>
```

### 获取动态导航：

```vue
<template>
  <nav v-if="!loading">
    <router-link
      v-for="item in navigation?.header?.navigation"
      :key="item.to"
      :to="item.to"
    >
      {{ item.label }}
    </router-link>
  </nav>
</template>

<script setup>
import { useCmsNavigation } from '@/composables/useCmsPage'

const { navigation, loading } = useCmsNavigation()
</script>
```

---

## 注意事项

1. **数据路径更新** - 所有从 `@/data/` 导入数据的组件都需要更新导入路径
2. **异步数据** - CMS 数据是异步获取的，需要处理 loading 和 error 状态
3. **响应式数据** - 使用 `computed` 属性访问嵌套的模块数据
4. **模块开关** - 组件需要根据 `enabled` 字段条件渲染模块
5. **路由配置** - 路由现在是动态生成的，修改数据文件后需要重新启动开发服务器

---

## 后续优化建议

1. **数据缓存** - 在 CMS API 层添加缓存机制，避免重复请求
2. **类型定义** - 使用 TypeScript 定义数据结构，提高类型安全
3. **错误处理** - 添加更完善的错误处理和重试机制
4. **加载优化** - 实现按需加载，只加载当前页面的数据
5. **真实 API** - 后续可以轻松替换为真实的 CMS 后端 API

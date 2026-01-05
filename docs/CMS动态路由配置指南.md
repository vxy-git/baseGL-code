# CMS 动态路由配置指南

本文档详细说明如何在 CMS 后台配置动态路由,实现页面路由和导航的完全动态化管理。

## 📋 目录

1. [系统架构概述](#系统架构概述)
2. [CMS 数据库字段说明](#cms-数据库字段说明)
3. [路由配置流程](#路由配置流程)
4. [配置示例](#配置示例)
5. [API 函数使用](#api-函数使用)
6. [常见问题](#常见问题)

---

## 系统架构概述

### 动态路由工作原理

```
┌─────────────────────────────────────────────────────────────┐
│              CMS 动态路由系统工作流程                         │
└─────────────────────────────────────────────────────────────┘

1. CMS 后台配置
   └─ 在 cms_nav 表中添加页面配置
      ├─ 设置 route (路由路径)
      ├─ 设置 routeName (路由名称)
      ├─ 设置 template (模板类型)
      └─ 设置 linkType (链接标识)

2. 前端 API 调用
   └─ getAllPageRoutes()
      ├─ 请求 getCmsNavPublicList API
      └─ 提取页面级别的配置 (parentId=0)

3. 路由生成
   └─ generateRoutes() 函数
      ├─ 遍历 CMS 返回的页面配置
      ├─ 根据 routeName 映射到组件
      └─ 生成 Vue Router 配置

4. 导航集成
   └─ Header/Footer 组件
      ├─ 从 CMS 获取导航数据
      ├─ 显示 navLabel
      └─ 点击跳转到 route

5. 页面渲染
   └─ 组件接收 pageConfig props
      ├─ 使用 modules 配置渲染模块
      └─ 显示动态内容
```

### 核心特性

- ✅ **完全动态化**: 所有路由由 CMS 配置驱动
- ✅ **降级机制**: API 失败时使用本地配置
- ✅ **模块化页面**: 每个页面由多个可配置的模块组成
- ✅ **灵活映射**: 支持多种组件映射方式
- ✅ **导航集成**: 自动生成 Header 和 Footer 导航

---

## CMS 数据库字段说明

### 基础字段

| 字段名 | 类型 | 必填 | 说明 | 示例值 |
|--------|------|------|------|--------|
| `ID` | int | ✅ | 主键 ID | 1, 2, 3... |
| `navName` | string | ✅ | 导航/页面名称 | "UNIT Pro", "UNIVERSE Series" |
| `navUrl` | string | ✅ | 路由路径 | "/unit_pro", "/universe_series" |
| `status` | string | ✅ | 状态 | "启用" 或 "停用" |
| `sort` | int | ❌ | 排序字段(数字越小越靠前) | 1, 2, 3... |

### 路由配置字段

| 字段名 | 类型 | 必填 | 说明 | 示例值 |
|--------|------|------|------|--------|
| `routeName` | string | ✅ | 路由名称(映射到组件) | "product1", "product2" |
| `linkType` | string | ✅ | 链接类型(用于产品跳转) | "unit_pro", "universe_series" |
| `template` | string | ❌ | 模板类型 | "ProductPage", "HomePage" |
| `category` | string | ❌ | 分类 | "product", "technology", "company", "banner" |

### 导航显示字段

| 字段名 | 类型 | 必填 | 说明 | 示例值 |
|--------|------|------|------|--------|
| `headerShow` | boolean | ❌ | 是否在 Header 导航显示 | true/false |
| `footerShow` | boolean | ❌ | 是否在 Footer 导航显示 | true/false |
| `parentId` | int | ❌ | 父导航 ID (0 表示顶级) | 0 |

### 扩展字段

| 字段名 | 类型 | 必填 | 说明 | 示例值 |
|--------|------|------|------|--------|
| `description` | text | ❌ | 页面描述 | "Professional vaporizer..." |
| `icon` | string | ❌ | 图标路径 | "/assets/img/icon.png" |
| `link` | string | ❌ | 跳转链接(用于 Banner) | "/product-detail" |
| `alt` | string | ❌ | 替代文本 | "UNIT Pro Product" |
| `target` | string | ❌ | 打开方式 | "_self", "_blank" |
| `modules` | json | ❌ | 页面模块配置 | 见下方说明 |
| `meta` | json | ❌ | 页面元数据 | {title, description, ...} |
| `extra` | json | ❌ | 额外配置字段 | {...} |

---

## 路由配置流程

### 步骤 1: 在 CMS 后台添加页面配置

1. 登录 CMS 后台
2. 进入"导航管理"或"CMS 导航"模块
3. 点击"添加导航"
4. 填写配置信息(参考下方配置示例)
5. 保存

### 步骤 2: 配置路由和组件映射

**重要字段说明**:

1. **navUrl** (路由路径)
   - 格式: 以 `/` 开头的路径
   - 示例: `/unit_pro`, `/universe_series`, `/technology`
   - 这将直接成为 Vue Router 的 path

2. **routeName** (路由名称)
   - 用途: 映射到具体的组件
   - 可选值: 'home', 'product1', 'product2', 'product3', 'product4', 'productlist', 'technology', 'contactus'
   - 必须与 `/src/router/index.js` 中的 componentMap 对应

3. **linkType** (链接类型)
   - 用途: 产品列表中的跳转标识
   - 格式: 不含斜杠的字符串
   - 示例: 'unit_pro', 'universe_series', 'unicorn_series', 'dukes'
   - 在产品列表中点击时,会跳转到对应的路由

4. **template** (模板类型)
   - 用途: 指定使用的页面模板
   - 可选值: 'HomePage', 'ProductPage', 'ProductListPage', 'TechnologyPage', 'ContactPage'
   - 当 routeName 不存在时,使用此字段映射组件

### 步骤 3: 设置导航显示

- **headerShow**: 设为 `true` 则在顶部导航栏显示
- **footerShow**: 设为 `true` 则在底部导航栏显示
- **sort**: 数字越小,在导航中越靠前

### 步骤 4: 配置页面模块

在 `modules` 字段中配置页面的模块单元:

```json
{
  "unit1": {
    "enabled": true,
    "data": {
      "title": "Product Title",
      "description": "Product description"
    }
  },
  "unit2": {
    "enabled": true,
    "data": {...}
  }
}
```

### 步骤 5: 前端自动集成

- ✅ 路由自动生成 (无需修改代码)
- ✅ 导航自动更新 (Header/Footer)
- ✅ 产品列表自动显示 (通过 linkType)
- ✅ 页面自动渲染 (根据 modules 配置)

---

## 配置示例

### 示例 1: 产品详情页 (UNIT Pro)

**CMS 配置**:

| 字段 | 值 |
|------|-----|
| navName | "UNIT Pro" |
| navUrl | "/unit_pro" |
| routeName | "product1" |
| linkType | "unit_pro" |
| template | "ProductPage" |
| category | "product" |
| status | "启用" |
| headerShow | true |
| footerShow | true |
| sort | 3 |
| description | "Professional vaporizer designed for rosin" |

**结果**:
- 路由: `http://yoursite.com/unit_pro`
- 组件: `/src/views/Product1/index.vue`
- Header 导航: 显示 "UNIT Pro"
- 产品列表: 点击产品卡片跳转到 `/unit_pro`

### 示例 2: 首页

**CMS 配置**:

| 字段 | 值 |
|------|-----|
| navName | "Home" |
| navUrl | "/" |
| routeName | "home" |
| linkType | "home" |
| template | "HomePage" |
| category | "page" |
| status | "启用" |
| headerShow | true |
| footerShow | false |
| sort | 1 |

### 示例 3: 技术页面

**CMS 配置**:

| 字段 | 值 |
|------|-----|
| navName | "Technology" |
| navUrl | "/technology" |
| routeName | "technology" |
| linkType | "technology" |
| template | "TechnologyPage" |
| category | "technology" |
| status | "启用" |
| headerShow | true |
| footerShow | true |
| sort | 4 |

### 示例 4: Banner 轮播图

**CMS 配置**:

| 字段 | 值 |
|------|-----|
| navName | "UNIVERSE Banner" |
| navUrl | "/assets/home/Banner-1-UNIVERSE.mp4" |
| routeName | "banner-1" |
| linkType | null |
| template | null |
| category | "banner" |
| status | "启用" |
| headerShow | false |
| footerShow | false |
| sort | 1 |
| link | "/universe_series" |
| description | "UNICORE powered, the way to infinite." |
| alt | "UNIVERSE Series" |

**注意**: Banner 的 `navUrl` 字段存储的是媒体文件路径,不是路由路径。

---

## API 函数使用

### 1. 获取所有页面路由配置

```javascript
import { getAllPageRoutes } from '@/api/cmsNav'

const pageRoutes = await getAllPageRoutes()

// 返回格式:
[
  {
    route: '/unit_pro',
    routeName: 'product1',
    linkType: 'unit_pro',
    showInHeader: true,
    showInFooter: true,
    navLabel: 'UNIT Pro',
    navOrder: 3,
    template: 'ProductPage',
    category: 'product',
    meta: { title, description, ... },
    id: 1,
    enabled: true,
    modules: {},
    extra: {}
  },
  // ... 更多页面配置
]
```

### 2. 根据 linkType 获取页面配置

```javascript
import { getPageByLinkType } from '@/api/cmsNav'

// 产品列表点击时调用
const pageConfig = await getPageByLinkType('unit_pro')

if (pageConfig) {
  router.push(pageConfig.route)  // 跳转到 /unit_pro
}
```

### 3. 根据路由路径获取页面配置

```javascript
import { getPageByRoute } from '@/api/cmsNav'

const pageConfig = await getPageByRoute('/unit_pro')

console.log(pageConfig.routeName)  // 'product1'
console.log(pageConfig.template)   // 'ProductPage'
```

### 4. 获取完整配置(导航 + 路由)

```javascript
import { getNavigationAndRoutes } from '@/api/cmsNav'

const config = await getNavigationAndRoutes()

// config.navigation - 导航数据
// config.routes - 路由配置
// config.headerNav - Header 导航
// config.footerNav - Footer 导航
// config.productNav - 产品导航
// config.bannerData - Banner 数据
```

---

## 路由与组件映射

### routeName 映射表

| routeName | 组件路径 | 用途 |
|-----------|---------|------|
| 'home' | `/src/views/Home/index.vue` | 首页 |
| 'product1' | `/src/views/Product1/index.vue` | UNIT Pro |
| 'product2' | `/src/views/Product2/index.vue` | UNIVERSE Series |
| 'product3' | `/src/views/Product3/index.vue` | UNICORN Series |
| 'product4' | `/src/views/Product4/index.vue` | DUKES |
| 'productlist' | `/src/views/ProductList/index.vue` | 产品列表 |
| 'technology' | `/src/views/Technology/index.vue` | 技术页面 |
| 'contactus' | `/src/views/ContactUs/index.vue` | 联系我们 |

### template 映射表

| template | 组件路径 | 说明 |
|----------|---------|------|
| 'HomePage' | `/src/views/Home/index.vue` | 首页模板 |
| 'ProductPage' | `/src/views/Product1/index.vue` | 通用产品页模板(默认) |
| 'ProductListPage' | `/src/views/ProductList/index.vue` | 产品列表页模板 |
| 'TechnologyPage' | `/src/views/Technology/index.vue` | 技术页模板 |
| 'ContactPage' | `/src/views/ContactUs/index.vue` | 联系页模板 |

### 映射优先级

```
1. 优先使用 routeName 映射
   ↓ (如果 routeName 不存在)
2. 使用 template 映射
   ↓ (如果 template 也不存在)
3. 使用默认组件 (ProductPage)
```

---

## 产品列表 linkType 映射

### 现有产品映射

| linkType | route | routeName | 产品名称 |
|----------|-------|-----------|---------|
| 'unit_pro' | '/unit_pro' | 'product1' | UNIT Pro |
| 'universe_series' | '/universe_series' | 'product2' | UNIVERSE Series |
| 'unicorn_series' | '/unicorn_series' | 'product3' | UNICORN Series |
| 'dukes' | '/dukes' | 'product4' | DUKES |

### 如何添加新产品

假设要添加新产品 "SuperDevice":

1. **在 CMS 中添加页面配置**:
   - navName: "SuperDevice"
   - navUrl: "/superdevice"
   - routeName: "product5" (需要在 router/index.js 中添加映射)
   - linkType: "superdevice"

2. **在产品列表数据中添加**:
   ```javascript
   {
     id: 106,
     name: 'SuperDevice',
     linkType: 'superdevice',  // 必须与 CMS 配置一致
     description: 'New product',
     // ...
   }
   ```

3. **在路由配置中添加组件映射** (如果需要独立页面):
   ```javascript
   // /src/router/index.js
   const componentMap = {
     // ...
     'product5': () => import('@/views/Product5/index.vue'),
   }
   ```

---

## 常见问题

### Q1: CMS 配置的路由不生效?

**A**: 检查以下几点:
1. `status` 字段是否为 "启用"
2. `routeName` 是否在 componentMap 中存在
3. `navUrl` 是否以 `/` 开头
4. 查看浏览器控制台是否有错误日志

### Q2: 产品列表点击后跳转错误?

**A**: 确保:
1. 产品数据中的 `linkType` 与 CMS 配置的 `linkType` 完全一致
2. CMS 中该页面的 `status` 为 "启用"
3. 路由路径正确配置

### Q3: 如何添加新的产品页面?

**A**: 三种方式:
1. **使用现有模板**: 设置 `template: 'ProductPage'`,使用通用产品页
2. **创建新组件**: 在 `/src/views/` 下创建新组件,在 `routeName` 中引用
3. **复制现有产品**: 复制 Product1-4 的组件和数据文件

### Q4: Banner 不显示?

**A**: 检查:
1. `category` 是否为 "banner"
2. `status` 是否为 "启用"
3. `navUrl` 是否为有效的媒体文件路径
4. 查看控制台日志

### Q5: 如何禁用某个页面?

**A**:
- 方式1: 在 CMS 中将 `status` 改为 "停用"
- 方式2: 设置 `headerShow: false` 和 `footerShow: false`
- 页面仍可通过直接访问 URL 打开,但不会在导航中显示

### Q6: 如何修改路由路径?

**A**:
- 在 CMS 中修改 `navUrl` 字段
- 保存后前端会自动更新
- 无需修改代码
- 注意: 修改后旧路径将失效

### Q7: modules 配置如何使用?

**A**:
```json
{
  "unit1": {
    "enabled": true,
    "data": {
      "title": "Custom Title",
      "description": "Custom Description"
    }
  }
}
```

组件中接收:
```javascript
const props = defineProps({
  pageConfig: Object
})

const unit1Data = computed(() => {
  return props.pageConfig?.modules?.unit1?.data || defaultData
})
```

### Q8: 如何实现多级导航?

**A**:
- 设置 `parentId` 字段
- 顶级导航: `parentId = 0`
- 子导航: `parentId = 父导航的 ID`

示例:
```javascript
// 父导航
{
  ID: 1,
  navName: "Products",
  navUrl: "/products",
  parentId: 0
}

// 子导航
{
  ID: 2,
  navName: "UNIT Pro",
  navUrl: "/unit_pro",
  parentId: 1  // 指向父导航 ID
}
```

---

## 总结

### 关键要点

1. ✅ **navUrl**: 路由路径,直接对应 URL
2. ✅ **routeName**: 路由名称,映射到具体组件
3. ✅ **linkType**: 链接标识,用于产品跳转
4. ✅ **template**: 模板类型,通用组件映射
5. ✅ **category**: 分类字段,用于筛选不同类型的数据

### 配置检查清单

- [ ] 所有必填字段已填写
- [ ] status 设为 "启用"
- [ ] navUrl 以 `/` 开头
- [ ] routeName 在 componentMap 中存在
- [ ] linkType 与产品数据一致
- [ ] sort 字段设置正确
- [ ] headerShow / footerShow 配置正确

### 下一步

1. 在 CMS 后台添加页面配置
2. 测试路由是否正常生成
3. 检查导航是否正确显示
4. 验证产品跳转功能
5. 查看浏览器控制台日志

如有问题,请参考 `/docs/CMS数据对接实施指南.md` 和已完成的示例代码。

# CMS 数据对接实施指南

本文档说明如何为项目中的各个组件添加 CMS 动态数据支持。

## 📋 目录

1. [已完成的工作](#已完成的工作)
2. [为组件添加 CMS 对接的步骤](#为组件添加-cms-对接的步骤)
3. [示例代码](#示例代码)
4. [数据格式说明](#数据格式说明)
5. [常见问题](#常见问题)

---

## 已完成的工作

### ✅ 1. API 层扩展

**文件**: `/src/api/cmsNav.js`

新增的函数:
- `getNavigationByCategory(category)` - 按分类获取导航数据
- `getProductNavigation()` - 获取产品导航
- `getTechnologyNavigation()` - 获取技术导航
- `getCompanyNavigation()` - 获取公司信息导航
- `getBannerNavigation()` - 获取 Banner 数据
- `getAllCategorizedNavigation()` - 一次性获取所有分类数据

### ✅ 2. 降级配置文件

**文件**: `/src/data/common/banner.js`

包含以下降级配置:
- `bannerFallbackData` - Banner 降级数据
- `productFallbackData` - 产品降级数据
- `technologyFallbackData` - 技术降级数据
- `companyFallbackData` - 公司信息降级数据

### ✅ 3. 示例组件更新

**文件**: `/src/views/Home/components/Unit1/index.vue` (首页 Banner)

已实现:
- 从 CMS API 动态获取 Banner 数据
- 自动降级到本地配置
- 数据格式转换

---

## 为组件添加 CMS 对接的步骤

### 步骤 1: 导入必要的模块

```javascript
import { ref, computed, onMounted } from 'vue'
import { getProductNavigation } from '@/api/cmsNav'  // 根据需要选择API
import { productsData } from '@/data/productlist/products'  // 本地降级配置
```

### 步骤 2: 定义响应式状态

```javascript
// 动态数据
const dynamicData = ref([])
const isLoading = ref(false)
```

### 步骤 3: 创建数据获取函数

```javascript
const fetchData = async () => {
  isLoading.value = true

  try {
    const data = await getProductNavigation()  // 调用相应的API

    if (data && data.length > 0) {
      // 成功: 使用动态数据
      dynamicData.value = data
    } else {
      // 失败: 降级到本地配置
      dynamicData.value = productsData
    }
  } catch (error) {
    console.error('获取数据失败:', error)
    // 异常: 降级到本地配置
    dynamicData.value = productsData
  } finally {
    isLoading.value = false
  }
}
```

### 步骤 4: 使用计算属性

```javascript
const displayData = computed(() => {
  return dynamicData.value.length > 0
    ? dynamicData.value
    : productsData  // 降级配置
})
```

### 步骤 5: 组件挂载时获取数据

```javascript
onMounted(() => {
  fetchData()
})
```

### 步骤 6: 模板中使用计算属性

```vue
<template>
  <div v-if="isLoading">加载中...</div>
  <div v-else>
    <div v-for="item in displayData" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>
```

---

## 示例代码

### 示例 1: 产品列表组件

**原始代码** (不使用 CMS):
```javascript
import { productsData } from '@/data/productlist/products'

const products = productsData.products[0]
```

**使用 CMS 后**:
```javascript
import { ref, computed, onMounted } from 'vue'
import { getProductNavigation } from '@/api/cmsNav'
import { productsData } from '@/data/productlist/products'

// 动态数据
const dynamicProducts = ref([])
const isLoadingProducts = ref(false)

// 获取产品数据
const fetchProductData = async () => {
  isLoadingProducts.value = true

  try {
    const products = await getProductNavigation()

    if (products && products.length > 0) {
      // 转换 CMS 数据为组件所需格式
      dynamicProducts.value = products.map(p => ({
        id: p.id,
        name: p.text,
        to: p.to,
        // ... 其他字段映射
      }))
    } else {
      dynamicProducts.value = productsData.products[0]
    }
  } catch (error) {
    console.error('获取产品数据失败:', error)
    dynamicProducts.value = productsData.products[0]
  } finally {
    isLoadingProducts.value = false
  }
}

// 计算属性
const products = computed(() => {
  return dynamicProducts.value.length > 0
    ? dynamicProducts.value
    : productsData.products[0]
})

onMounted(() => {
  fetchProductData()
})
```

### 示例 2: 技术页面组件

```javascript
import { ref, computed, onMounted } from 'vue'
import { getTechnologyNavigation } from '@/api/cmsNav'
import { technologyUnit1Data } from '@/data/technology/technology-unit1'

const dynamicTechData = ref([])

const fetchTechData = async () => {
  try {
    const data = await getTechnologyNavigation()
    if (data && data.length > 0) {
      dynamicTechData.value = data
    } else {
      // 降级到本地配置
      dynamicTechData.value = [technologyUnit1Data]
    }
  } catch (error) {
    console.error('获取技术数据失败:', error)
    dynamicTechData.value = [technologyUnit1Data]
  }
}

const techData = computed(() => {
  return dynamicTechData.value.length > 0
    ? dynamicTechData.value
    : [technologyUnit1Data]
})

onMounted(() => {
  fetchTechData()
})
```

### 示例 3: 公司信息组件

```javascript
import { ref, computed, onMounted } from 'vue'
import { getCompanyNavigation } from '@/api/cmsNav'
import { companyFallbackData } from '@/data/common/banner'

const dynamicCompanyData = ref([])

const fetchCompanyData = async () => {
  try {
    const data = await getCompanyNavigation()
    if (data && data.length > 0) {
      dynamicCompanyData.value = data
    } else {
      dynamicCompanyData.value = companyFallbackData
    }
  } catch (error) {
    console.error('获取公司信息失败:', error)
    dynamicCompanyData.value = companyFallbackData
  }
}

const companyInfo = computed(() => {
  return dynamicCompanyData.value.length > 0
    ? dynamicCompanyData.value
    : companyFallbackData
})

onMounted(() => {
  fetchCompanyData()
})
```

---

## 数据格式说明

### CMS 数据库字段

在 CMS 后台添加导航时,需要设置以下字段:

| 字段名 | 说明 | 示例值 |
|--------|------|--------|
| `navName` | 导航名称 | "UNIVERSE Series" |
| `navUrl` | 导航链接 | "/universe_series" |
| `category` | 分类字段 | "product", "technology", "company", "banner" |
| `status` | 状态 | "启用" 或 "停用" |
| `headerShow` | 是否在 Header 显示 | true/false |
| `footerShow` | 是否在 Footer 显示 | true/false |
| `parentId` | 父导航 ID (0 表示顶级) | 0 |
| `sort` | 排序字段 | 1, 2, 3... |
| `icon` | 图标路径 | "/assets/img/icon.png" |
| `target` | 打开方式 | "_self", "_blank" |
| `link` | 跳转链接 (用于 Banner) | "/product-detail" |
| `description` | 描述文本 | "Product description" |
| `alt` | 替代文本 | "UNIVERSE Series" |

### 分类字段 (category) 说明

| 分类值 | 用途 | 示例 |
|--------|------|------|
| `product` | 产品相关导航 | 产品列表、产品详情 |
| `technology` | 技术相关导航 | 技术页面、技术单元 |
| `company` | 公司信息导航 | 关于我们、联系方式 |
| `banner` | 轮播图数据 | 首页 Banner、产品页 Banner |

---

## 常见问题

### Q1: 如何判断数据来自 CMS 还是本地配置?

**A**: 检查控制台日志:
- CMS 数据成功: 显示 `✅ XXX 分类导航数据: X 条`
- 使用降级配置: 显示 `⚠️ 获取 XXX 分类数据失败`

### Q2: 数据格式不匹配怎么办?

**A**: 在 `fetchData` 函数中进行数据转换:

```javascript
dynamicData.value = cmsData.map(item => ({
  newField: item.oldField,  // 字段重命名
  computed: item.field1 + item.field2  // 计算字段
}))
```

### Q3: 如何添加新的分类?

**A**:
1. 在 CMS 后台添加导航时,设置新的 `category` 值
2. 在 `/src/api/cmsNav.js` 中添加对应的获取函数:

```javascript
export async function getNewCategoryNavigation() {
  return getNavigationByCategory('new-category')
}
```

### Q4: 如何处理分页数据?

**A**: 修改 API 调用参数:

```javascript
const result = await getCmsNavPublicList({
  page: 1,
  pageSize: 20,
  order: 'sort'
})
```

### Q5: 如何实现数据缓存?

**A**: 使用 `localStorage` 或 `sessionStorage`:

```javascript
const fetchWithCache = async () => {
  // 检查缓存
  const cached = localStorage.getItem('bannerData')
  if (cached) {
    dynamicData.value = JSON.parse(cached)
    return
  }

  // 获取新数据
  const data = await getBannerNavigation()
  localStorage.setItem('bannerData', JSON.stringify(data))
  dynamicData.value = data
}
```

---

## 下一步工作

### 需要更新的组件列表

- [x] 首页 Banner (Unit1) - 已完成
- [ ] 产品列表页 (`/src/views/ProductList/index.vue`)
- [ ] 技术页面 (`/src/views/Technology/index.vue`)
- [ ] 产品详情页 (Product1-4)
- [ ] 联系我们页 (`/src/views/ContactUs/index.vue`)

### 更新建议

1. **优先级高**: 用户访问频繁的页面(首页、产品列表)
2. **优先级中**: 产品详情页
3. **优先级低**: 技术页面、联系我们页面

### 测试清单

- [ ] CMS API 正常时,显示动态数据
- [ ] CMS API 失败时,降级到本地配置
- [ ] 数据格式正确显示
- [ ] 链接跳转正常
- [ ] 图片/视频加载正常
- [ ] 在控制台查看日志输出

---

## 总结

通过遵循本指南,你可以为项目中的任何组件添加 CMS 动态数据支持。关键点:

1. ✅ 使用统一的 API 函数
2. ✅ 实现降级机制
3. ✅ 使用计算属性
4. ✅ 在 `onMounted` 中获取数据
5. ✅ 正确处理数据格式转换

如果有任何问题,请参考已完成的示例组件: `/src/views/Home/components/Unit1/index.vue`

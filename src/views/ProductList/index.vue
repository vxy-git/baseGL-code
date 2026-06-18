<template>
  <div class="product-list-page">
    <Header header-class="white" show-line />
    <div class="header-divider" />

    <main class="main-content c_1300">
      <section class="catalog-intro">
        <h1 class="catalog-title c_padding">{{ listData.pageTitle }}</h1>
        <Tabs
          class="mt-[30px]"
          :list="tabsList"
          :model-value="tabsCurrent"
          @update:model-value="handleTabChange"
        ></Tabs>
      </section>

      <section ref="catalogGridRef" class="catalog-grid c_padding" aria-label="Product Gallery">
        <article v-for="product in products" :key="product.id" class="product-card">
          <ProductItem :data="product" show-desc />
        </article>

        <article
          v-for="n in fillerCount"
          :key="'filler-' + n"
          class="product-card"
          aria-hidden="true"
        >
          <div class="placeholder" />
        </article>
      </section>

      <nav class="pagination" aria-label="Catalog pagination">
        <button
          v-for="page in pages"
          :key="page"
          class="page-button"
          :class="{ active: page === currentPage }"
          @click="handlePageChange(page)"
        >
          {{ page }}
        </button>
      </nav>
    </main>

    <Footer show-line />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Footer from '@/components/Footer/Footer.vue'
import Header from '@/components/Header/index.vue'
import Tabs from '@/components/Tabs/index.vue'
import ProductItem from '@/components/ProductItem/index.vue'
import { productsData } from '@/data/product_list/products'
import { listData } from '@/data/product_list/list'
import { useCmsNavStore } from '@/stores/cmsNav'
import { logger } from '@/utils/logger'

const props = defineProps({
  pageConfig: { type: Object, default: () => ({}) },
})

const route = useRoute()
const router = useRouter()
const cmsNavStore = useCmsNavStore()

// 页码容量：CMS 优先 → 静态降级，兜底 8
const pageSize = computed(() => {
  const cms = props.pageConfig?.moduleList?.unit?.data?.pageSize
  const num = Number(cms)
  if (!isNaN(num) && num > 0) return num
  return Number(listData.pageSize) || 8
})

const cmsCategories = computed(() => cmsNavStore.productCategories || [])
const currentPage = ref(1)

// 提取 tabs 列表（优先使用 CMS 数据）
const tabsList = computed(() => {
  if (cmsCategories.value.length > 0) {
    return cmsCategories.value.map(cat => cat.label)
  }

  // 降级到静态数据
  return productsData.tabs
})

// 根据路由判断当前分类
const currentCategory = computed(() => {
  // 1. 优先从路由 meta 获取分类 ID
  if (route.meta.ID) {
    return cmsCategories.value.find(cat => cat.id === route.meta.ID)
  }

  // 2. 根据 navUrl 匹配当前路径
  const currentPath = route.path
  return cmsCategories.value.find(cat => cat.navUrl === currentPath)
})

// 当前分类的索引
const tabsCurrent = computed(() => {
  if (!currentCategory.value) {
    logger.warn('⚠️ [ProductList] 未找到当前分类，使用默认索引 0')
    return 0
  }

  const index = cmsCategories.value.findIndex(cat => cat.id === currentCategory.value.id)

  if (index === -1) {
    logger.warn(`⚠️ [ProductList] 分类索引未找到: ${currentCategory.value.label}`)
    return 0
  }

  return index
})

// 全部产品列表（不分页）
const allProducts = computed(() => {
  if (cmsCategories.value.length > 0 && cmsCategories.value[tabsCurrent.value]) {
    return cmsCategories.value[tabsCurrent.value].products
  }
  return productsData.products[tabsCurrent.value] || []
})

// 当前页产品（客户端分页）
const products = computed(() => {
  const size = pageSize.value
  const start = (currentPage.value - 1) * size
  return allProducts.value.slice(start, start + size)
})

// 总页数（根据产品数量动态计算）
const totalPages = computed(() => {
  const count = allProducts.value.length
  return Math.max(1, Math.ceil(count / pageSize.value))
})

const pages = computed(() => Array.from({ length: totalPages.value }, (_, i) => i + 1))

// Tab 切换事件处理：跳转到对应分类的路由
const handleTabChange = index => {
  const cmsCategories = cmsNavStore.productCategories || []
  const category = cmsCategories[index]

  if (category?.navUrl) {
    currentPage.value = 1 // 切换分类时重置页码
    router.push(category.navUrl)
  } else {
    logger.warn(`⚠️ [ProductList] Tab ${index} 对应的路由不存在`)
  }
}

const handlePageChange = page => {
  currentPage.value = page
  // 滚动到产品列表顶部
  catalogGridRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const catalogGridRef = ref(null)
const columns = ref(1)

const updateColumns = () => {
  const el = catalogGridRef.value
  const width = el ? el.clientWidth : 0
  const calc = Math.floor((width + listData.card.gap) / (listData.card.width + listData.card.gap))
  columns.value = Math.max(1, calc)
}

onMounted(() => {
  updateColumns()
  window.addEventListener('resize', updateColumns, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateColumns)
})

const fillerCount = computed(() => {
  const len = products.value.length
  const cols = columns.value || 1
  const remainder = len % cols
  return remainder === 0 ? 0 : cols - remainder
})
</script>

<style scoped lang="scss">
.product-list-page {
  background: #ffffff;
  color: #111111;
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
}

.site-header {
  max-width: 1920px;
  margin: 0 auto;
  padding: 30px clamp(1.5rem, 8vw, 310px);
  display: flex;
  align-items: center;
  gap: clamp(1rem, 4vw, 4rem);
}

.logo {
  width: 187px;
  height: auto;
  display: block;
}

.nav-link {
  color: #555555;
  font-size: 16px;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #1ce785;
  }
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 18px;
}

.contact-btn {
  background: #1ce785;
  border: none;
  border-radius: 50px;
  padding: 10px 30px;
  font-size: 18px;
  color: #222222;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
}

.search-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(17, 17, 17, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111111;
  background: #ffffff;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #f2f2f2;
  }
}

.header-divider {
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.08);
}

.main-content {
  margin: 0 auto;
  padding-top: 205px;
  padding-bottom: 124px;
}

.catalog-intro {
  width: 100%;
  margin: 0 auto;
}

.catalog-title {
  color: #000;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.catalog-grid {
  margin: 72px auto 0;
  display: flex;
  flex-wrap: wrap;
  column-gap: 26px;
  row-gap: 30px;
  width: 100%;
}

.product-card {
  flex: 0 0 auto;
  max-width: 47.7%;
}

.pagination {
  margin: 57px auto 0;
  display: flex;
  justify-content: center;
  gap: 12px;
}

.page-button {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #ffffff;
  color: #999999;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    background: #1ce785;
    color: #111111;
    border-color: transparent;
    box-shadow: 0 10px 30px rgba(28, 231, 133, 0.35);
  }

  &:hover:not(.active) {
    color: #111111;
  }
}

.placeholder {
  width: 305px;
  height: 440px;
  border-radius: 20px;
  background: transparent;
  visibility: hidden;
  pointer-events: none;
}
</style>

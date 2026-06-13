<template>
  <div class="product-list-page">
    <Header headerClass="white" showLine />
    <div class="header-divider" />

    <main class="main-content c_1300">
      <section class="catalog-intro">
        <h1 class="catalog-title c_padding">{{ productListData.pageTitle }}</h1>
        <Tabs class="mt-[30px]" :list="tabsList" :modelValue="tabsCurrent" @update:modelValue="handleTabChange"></Tabs>
      </section>

      <section class="catalog-grid c_padding" aria-label="Product Gallery" ref="catalogGridRef">
        <article v-for="product in products" :key="product.id" class="product-card">
          <ProductItem :data="product" show-desc />
        </article>

        <article v-for="n in fillerCount" :key="'filler-' + n" class="product-card" aria-hidden="true">
          <div class="placeholder" />
        </article>
      </section>

      <nav class="pagination" aria-label="Catalog pagination">
        <button v-for="page in pages" :key="page" class="page-button" :class="{ active: page === currentPage }">
          {{ page }}
        </button>
      </nav>
    </main>

    <Footer showLine />
  </div>
</template>

<script setup>
import { h, ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Footer from '@/components/Footer/Footer.vue'
import Header from "@/components/Header/index.vue";
import Tabs from "@/components/Tabs/index.vue";
import ProductItem from '@/components/ProductItem/index.vue'
import { productsData } from '@/data/productlist/products'
import { productListData } from '@/data/productlist/productlist'
import { useCmsNavStore } from '@/stores/cmsNav'

const route = useRoute()
const router = useRouter()
const cmsNavStore = useCmsNavStore()

// 提取 tabs 列表（优先使用 CMS 数据）
const tabsList = computed(() => {
  const cmsCategories = cmsNavStore.productCategories || []
  if (cmsCategories.length > 0) {
    return cmsCategories.map(cat => cat.label)
  }

  // 降级到静态数据
  return productsData.tabs
})

// 根据路由判断当前分类
const currentCategory = computed(() => {
  const cmsCategories = cmsNavStore.productCategories || []

  // 1. 优先从路由 meta 获取分类 ID
  if (route.meta.ID) {
    return cmsCategories.find(cat => cat.id === route.meta.ID)
  }

  // 2. 根据 navUrl 匹配当前路径
  const currentPath = route.path
  return cmsCategories.find(cat => cat.navUrl === currentPath)
})

// 当前分类的索引
const tabsCurrent = computed(() => {
  if (!currentCategory.value) {
    console.warn('⚠️ [ProductList] 未找到当前分类，使用默认索引 0')
    return 0
  }

  const cmsCategories = cmsNavStore.productCategories || []
  const index = cmsCategories.findIndex(cat => cat.id === currentCategory.value.id)

  if (index === -1) {
    console.warn(`⚠️ [ProductList] 分类索引未找到: ${currentCategory.value.label}`)
    return 0
  }

  return index
})

// 产品列表（优先使用 CMS 数据）
const products = computed(() => {
  // 优先使用 CMS 数据
  const cmsCategories = cmsNavStore.productCategories || []
  if (cmsCategories.length > 0 && cmsCategories[tabsCurrent.value]) {
    return cmsCategories[tabsCurrent.value].products
  }

  // 降级到静态数据
  return productsData.products[tabsCurrent.value] || []
})

// Tab 切换事件处理：跳转到对应分类的路由
const handleTabChange = (index) => {
  const cmsCategories = cmsNavStore.productCategories || []
  const category = cmsCategories[index]

  if (category?.navUrl) {
    router.push(category.navUrl)
  } else {
    console.warn(`⚠️ [ProductList] Tab ${index} 对应的路由不存在`)
  }
}

const pages = productListData.pagination.pages
const currentPage = productListData.pagination.currentPage

const YouTubeIcon = () =>
  h('svg', { viewBox: '0 0 24 24', width: 20, height: 20, fill: 'none' }, [
    h('path', {
      d: 'M22 12c0-2.21-.18-3.72-.35-4.5-.19-.82-.82-1.46-1.64-1.65C18.22 5.67 12 5.67 12 5.67s-6.22 0-8.01.18c-.82.19-1.45.83-1.64 1.65C2.18 8.28 2 9.79 2 12s.18 3.72.35 4.5c.19.82.82 1.46 1.64 1.65 1.78.18 8.01.18 8.01.18s6.22 0 8.01-.18c.82-.19 1.45-.83 1.64-1.65.17-.78.35-2.29.35-4.5Z',
      fill: '#111111'
    }),
    h('path', { d: 'm10 15 5-3-5-3v6Z', fill: '#fff' })
  ])

const LinkedInIcon = () =>
  h('svg', { viewBox: '0 0 24 24', width: 18, height: 18, fill: 'none' }, [
    h('rect', { x: 3, y: 3, width: 18, height: 18, rx: 2, fill: '#111111' }),
    h('path', {
      d: 'M9 10h2v8H9v-8Zm1-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4 4h2v1.1c.28-.53.97-1.2 2.1-1.2 2.24 0 2.9 1.46 2.9 3.36V18h-2v-4.2c0-1-.02-2.28-1.4-2.28-1.4 0-1.62 1.1-1.62 2.2V18h-2v-8Z',
      fill: '#fff'
    })
  ])

const FacebookIcon = () =>
  h('svg', { viewBox: '0 0 24 24', width: 18, height: 18, fill: 'none' }, [
    h('rect', { x: 3, y: 3, width: 18, height: 18, rx: 2, fill: '#111111' }),
    h('path', {
      d: 'M13.3 18v-4.5h1.7l.25-2h-1.95v-1.3c0-.58.19-1 1.18-1H15V7.4c-.21-.03-.93-.1-1.77-.1-1.75 0-2.95 1.07-2.95 3.03V11.5H8.5v2h1.78V18h3.02Z',
      fill: '#fff'
    })
  ])

const InstagramIcon = () =>
  h('svg', { viewBox: '0 0 24 24', width: 18, height: 18, fill: 'none' }, [
    h('rect', { x: 3, y: 3, width: 18, height: 18, rx: 5, fill: '#111111' }),
    h('path', {
      d: 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm3.5-5.9a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4Z',
      fill: '#fff'
    })
  ])

const TikTokIcon = () =>
  h('svg', { viewBox: '0 0 24 24', width: 18, height: 18, fill: 'none' }, [
    h('rect', { x: 3, y: 3, width: 18, height: 18, rx: 4, fill: '#111111' }),
    h('path', {
      d: 'M15.5 9.8c.55.42 1.22.7 1.95.74V8.6a3.2 3.2 0 0 1-2-.74V6.5h-1.85v7.06a1.32 1.32 0 0 1-2.65 0 1.32 1.32 0 0 1 1.94-1.15v-1.9a3.23 3.23 0 0 0-.9-.13 3.2 3.2 0 1 0 3.2 3.2V9.8Z',
      fill: '#fff'
    })
  ])

const socialIcons = [
  { name: 'YouTube', href: '#', icon: YouTubeIcon },
  { name: 'LinkedIn', href: '#', icon: LinkedInIcon },
  { name: 'Facebook', href: '#', icon: FacebookIcon },
  { name: 'Instagram', href: '#', icon: InstagramIcon },
  { name: 'TikTok', href: '#', icon: TikTokIcon }
]

const catalogGridRef = ref(null)
const columns = ref(1)

const updateColumns = () => {
  const el = catalogGridRef.value
  const width = el ? el.clientWidth : 0
  const calc = Math.floor((width + productListData.card.gap) / (productListData.card.width + productListData.card.gap))
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

.nav-links {
  display: flex;
  gap: clamp(1.5rem, 4vw, 4rem);
  flex: 1;
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

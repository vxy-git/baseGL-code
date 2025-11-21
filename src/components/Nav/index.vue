<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import gsap from 'gsap'

const productImage = 'https://www.figma.com/api/mcp/asset/7cfd8a26-51a1-4fef-a8d0-b5764e769beb'

// 当前激活的分类 ID
const activeCategoryId = ref(1)

// 分类及其对应的产品数据
const categories = ref([
  {
    id: 1,
    label: 'For Resin/Rosin',
    products: [
      { id: 1, name: 'UNIT PRO', badge: 'New', variant: '1mL/2mL', image: productImage },
      { id: 2, name: 'UNIT MAX', badge: 'Hot', variant: '2mL', image: productImage },
      { id: 3, name: 'UNIT MINI', badge: '', variant: '0.5mL', image: productImage },
      { id: 4, name: 'UNIT PLUS', badge: 'New', variant: '1.5mL', image: productImage },
      { id: 5, name: 'UNIT SLIM', badge: '', variant: '1mL', image: productImage },
      { id: 6, name: 'UNIT BASIC', badge: '', variant: '1mL/2mL', image: productImage },
    ]
  },
  {
    id: 2,
    label: 'Pod System',
    products: [
      { id: 7, name: 'POD X1', badge: 'New', variant: '1mL', image: productImage },
      { id: 8, name: 'POD X2', badge: 'Hot', variant: '2mL', image: productImage },
      { id: 9, name: 'POD PRO', badge: '', variant: '1.5mL', image: productImage },
      { id: 10, name: 'POD MINI', badge: '', variant: '0.8mL', image: productImage },
      { id: 11, name: 'POD MAX', badge: 'New', variant: '3mL', image: productImage },
      { id: 12, name: 'POD LITE', badge: '', variant: '1mL', image: productImage },
    ]
  },
  {
    id: 3,
    label: 'Full Ceramic',
    products: [
      { id: 13, name: 'CERAMIC PRO', badge: 'New', variant: '1mL', image: productImage },
      { id: 14, name: 'CERAMIC MAX', badge: '', variant: '2mL', image: productImage },
      { id: 15, name: 'CERAMIC MINI', badge: 'Hot', variant: '0.5mL', image: productImage },
      { id: 16, name: 'CERAMIC PLUS', badge: '', variant: '1.5mL', image: productImage },
      { id: 17, name: 'CERAMIC SLIM', badge: '', variant: '1mL', image: productImage },
      { id: 18, name: 'CERAMIC BASIC', badge: 'New', variant: '1mL/2mL', image: productImage },
    ]
  },
  {
    id: 4,
    label: 'D9 Distillate',
    products: [
      { id: 19, name: 'D9 PRO', badge: 'New', variant: '1mL', image: productImage },
      { id: 20, name: 'D9 MAX', badge: 'Hot', variant: '2mL', image: productImage },
      { id: 21, name: 'D9 MINI', badge: '', variant: '0.5mL', image: productImage },
      { id: 22, name: 'D9 PLUS', badge: '', variant: '1.5mL', image: productImage },
      { id: 23, name: 'D9 SLIM', badge: 'New', variant: '1mL', image: productImage },
      { id: 24, name: 'D9 BASIC', badge: '', variant: '1mL/2mL', image: productImage },
    ]
  },
  {
    id: 5,
    label: 'US Stock',
    products: [
      { id: 25, name: 'US PRO', badge: 'New', variant: '1mL', image: productImage },
      { id: 26, name: 'US MAX', badge: '', variant: '2mL', image: productImage },
      { id: 27, name: 'US MINI', badge: 'Hot', variant: '0.5mL', image: productImage },
      { id: 28, name: 'US PLUS', badge: '', variant: '1.5mL', image: productImage },
      { id: 29, name: 'US SLIM', badge: '', variant: '1mL', image: productImage },
      { id: 30, name: 'US BASIC', badge: 'New', variant: '1mL/2mL', image: productImage },
    ]
  },
  {
    id: 6,
    label: 'Dab Pen',
    products: [
      { id: 31, name: 'DAB PRO', badge: 'New', variant: '1mL', image: productImage },
      { id: 32, name: 'DAB MAX', badge: 'Hot', variant: '2mL', image: productImage },
      { id: 33, name: 'DAB MINI', badge: '', variant: '0.5mL', image: productImage },
      { id: 34, name: 'DAB PLUS', badge: '', variant: '1.5mL', image: productImage },
      { id: 35, name: 'DAB SLIM', badge: 'New', variant: '1mL', image: productImage },
      { id: 36, name: 'DAB BASIC', badge: '', variant: '1mL/2mL', image: productImage },
    ]
  },
  {
    id: 7,
    label: '510 Cartridge',
    products: [
      { id: 37, name: '510 PRO', badge: 'New', variant: '1mL', image: productImage },
      { id: 38, name: '510 MAX', badge: '', variant: '2mL', image: productImage },
      { id: 39, name: '510 MINI', badge: 'Hot', variant: '0.5mL', image: productImage },
      { id: 40, name: '510 PLUS', badge: '', variant: '1.5mL', image: productImage },
      { id: 41, name: '510 SLIM', badge: '', variant: '1mL', image: productImage },
      { id: 42, name: '510 BASIC', badge: 'New', variant: '1mL/2mL', image: productImage },
    ]
  },
  {
    id: 8,
    label: 'D8 Distillate',
    products: [
      { id: 43, name: 'D8 PRO', badge: 'New', variant: '1mL', image: productImage },
      { id: 44, name: 'D8 MAX', badge: 'Hot', variant: '2mL', image: productImage },
      { id: 45, name: 'D8 MINI', badge: '', variant: '0.5mL', image: productImage },
      { id: 46, name: 'D8 PLUS', badge: '', variant: '1.5mL', image: productImage },
      { id: 47, name: 'D8 SLIM', badge: 'New', variant: '1mL', image: productImage },
      { id: 48, name: 'D8 BASIC', badge: '', variant: '1mL/2mL', image: productImage },
    ]
  },
])

// 计算属性：当前激活的分类
const activeCategory = computed(() =>
  categories.value.find(cat => cat.id === activeCategoryId.value)
)

// 计算属性：当前显示的产品列表
const displayedProducts = computed(() =>
  activeCategory.value?.products || []
)

// 接收父组件传递的显示状态
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  onContentMouseEnter: {
    type: Function,
    default: null
  },
  onContentMouseLeave: {
    type: Function,
    default: null
  }
})

const emit = defineEmits(['close'])

// Refs
const dropdownRef = ref(null)
const overlayRef = ref(null)
const contentRef = ref(null)
const sidebarRef = ref(null)
const categoryItemsRef = ref([])
const productCardsRef = ref([])
const ctaButtonRef = ref(null)

// 处理分类 hover 切换
const handleCategoryHover = (categoryId) => {
  if (activeCategoryId.value === categoryId) return // 避免重复触发

  activeCategoryId.value = categoryId

  // 产品列表切换动画
  nextTick(() => {
    if (productCardsRef.value?.length) {
      gsap.fromTo(productCardsRef.value,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.03,
          ease: 'power2.out'
        }
      )
    }
  })
}

// 动画时间线
let timeline = null

// 入场动画
const animateIn = () => {
  if (!dropdownRef.value) return

  timeline = gsap.timeline()

  // 1. 遮罩层淡入
  timeline.fromTo(overlayRef.value,
    { opacity: 0 },
    { opacity: 1, duration: 0.3, ease: 'power2.out' }
  )

  // 2. 内容容器从上滑下 + 淡入
  timeline.fromTo(contentRef.value,
    {
      y: -100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power3.out'
    },
    0.1 // 稍微延迟，与遮罩层重叠
  )

  // 3. 侧边栏淡入
  timeline.fromTo(sidebarRef.value,
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' },
    0.2
  )

  // 4. 分类项依次淡入
  timeline.fromTo(categoryItemsRef.value,
    { opacity: 0, y: 10 },
    {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: 0.03, // 每项间隔 30ms
      ease: 'power2.out'
    },
    0.3
  )

  // 5. 产品卡片依次淡入
  timeline.fromTo(productCardsRef.value,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.05, // 每张卡片间隔 50ms
      ease: 'power2.out'
    },
    0.35
  )

  // 6. CTA 按钮淡入
  if (ctaButtonRef.value) {
    timeline.fromTo(ctaButtonRef.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
      0.5
    )
  }
}

// 离场动画
const animateOut = (callback) => {
  if (!dropdownRef.value || !timeline) {
    callback?.()
    return
  }

  const outTimeline = gsap.timeline({
    onComplete: callback
  })

  // 快速淡出所有元素
  outTimeline.to([contentRef.value, overlayRef.value], {
    opacity: 0,
    duration: 0.25,
    ease: 'power2.in'
  })
}

// 关闭菜单
const closeMenu = () => {
  animateOut(() => {
    emit('close')
  })
}

// 监听 visible 变化
watch(() => props.visible, async (newVal) => {
  if (newVal) {
    await nextTick() // 确保 DOM 已渲染
    animateIn()
    // 防止背景滚动
    document.body.style.overflow = 'hidden'
  } else {
    // 恢复滚动
    document.body.style.overflow = ''
  }
})

// 生命周期
onMounted(async () => {
  if (props.visible) {
    await nextTick()
    animateIn()
    document.body.style.overflow = 'hidden'
  }
})

onBeforeUnmount(() => {
  if (timeline) {
    timeline.kill()
  }
  // 恢复滚动
  document.body.style.overflow = ''
})

// 暴露方法供父组件调用
defineExpose({
  animateIn,
  animateOut
})
</script>

<template>
  <!-- 下拉菜单容器 -->
  <div v-if="visible" ref="dropdownRef" class="nav-dropdown-wrapper">
    <!-- 遮罩层 -->
    <div ref="overlayRef" class="nav-overlay" @click="closeMenu" @mouseenter="props.onContentMouseLeave"></div>

    <!-- 内容区域 -->
    <div ref="contentRef" class="nav-dropdown-content" @mouseenter="props.onContentMouseEnter"
      @mouseleave="props.onContentMouseLeave">
      <main class="content container-1300">
        <aside ref="sidebarRef" class="sidebar h-full pt-[38px] border-r-[1px] border-r-solid border-[#000000]/12">
          <h2 class="sidebar-title pl-[2px]">Innovative products</h2>
          <ul class="category-list">
            <li v-for="(category, index) in categories" :key="category.id"
              :ref="el => { if (el) categoryItemsRef[index] = el }"
              :class="['category-item', { active: category.id === activeCategoryId }]"
              @mouseenter="handleCategoryHover(category.id)">
              {{ category.label }}
            </li>
          </ul>
        </aside>

        <section class="grid-section">
          <div class="product-grid">
            <article v-for="(product, index) in displayedProducts" :key="product.id"
              :ref="el => { if (el) productCardsRef[index] = el }" class="px-[21px] product-card pt-[23px]">
              <div class="badge self-start">{{ product.badge }}</div>
              <img :src="product.image" :alt="`${product.name} product`" class="product-image mt-[28px]" />
              <div class="product-info mt-[11px]">
                <h3 class="product-name">{{ product.name }}</h3>
                <div class="product-variant mt-[3px]">{{ product.variant }}</div>
              </div>
            </article>
          </div>

          <div ref="ctaButtonRef" class="cta-row">
            <button class="cta-button">
              <span>Explore our In-Ones</span>
              <img src="@/assets/img/icon42.png" alt="" />
            </button>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* 下拉菜单包装器 */
.nav-dropdown-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  overflow: hidden;
  pointer-events: auto;
}

/* 遮罩层 */
.nav-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  cursor: pointer;
  backdrop-filter: blur(2px);
}

/* 内容区域 */
.nav-dropdown-content {
  position: absolute;
  top: 110px;
  /* Header 高度 */
  left: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: 2;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  max-height: calc(100vh - 110px);
  overflow-y: auto;
  will-change: transform, opacity;
}

/* 滚动条样式 - 悬浮型，与全局保持一致 */
.nav-dropdown-content::-webkit-scrollbar {
  width: 10px;
}

.nav-dropdown-content::-webkit-scrollbar-track {
  background: transparent;
}

.nav-dropdown-content::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

.nav-dropdown-content::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid transparent;
  background-clip: padding-box;
}

.product-page {
  font-family: 'Roboto', 'Arial', sans-serif;
  color: #111111;
  background-color: #ffffff;
  height: 100vh;
  box-sizing: border-box;
}

.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 60px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-image {
  width: 187px;
  height: 30px;
  object-fit: contain;
}

.logo-text {
  display: none;
}

.nav-links {
  display: flex;
  gap: 32px;
  font-size: 16px;
  color: #555555;
}

.nav-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link:focus {
  color: #1ce785;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.contact-button {
  background-color: #1ce785;
  color: #222222;
  border: none;
  border-radius: 50px;
  padding: 10px 36px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contact-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(28, 231, 133, 0.25);
}

.icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.icon-button:hover {
  background-color: rgba(28, 231, 133, 0.1);
}

.icon-button img {
  width: 22px;
  height: 22px;
}

.divider {
  margin-top: 20px;
  height: 1px;
  width: 100%;
  background: linear-gradient(90deg, rgba(232, 236, 243, 0), #e8ecf3 20%, #e8ecf3 80%, rgba(232, 236, 243, 0));
}

.content {
  display: flex;
  align-items: flex-start;
  margin: 60px auto 60px;
  padding-bottom: 60px;
}

.sidebar {
  width: 272px;
}

.sidebar-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 24px;
}

.category-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #555555;
}

.category-item {
  width: 220px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 28px;
}

.category-item:hover {
  background-color: #f4f6fb;
  color: #111111;
}

.category-item.active {
  background-color: #f8f9fd;
  color: #111111;
  box-shadow: inset 0 0 0 1px rgba(232, 236, 243, 0.8);
}

.grid-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 41px;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
  padding-left: 62px;
  row-gap: 19px;
}

.product-card {
  position: relative;
  background-color: #f8f9fd;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 12px 30px rgba(17, 17, 17, 0.04);
  width: 230px;
  height: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(17, 17, 17, 0.08);

    .product-image {
      transform: scale(1.1);
    }
  }
}

.badge {
  border-radius: 50px;
  background-color: transparent;
  color: #1ce785;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
}

.product-image {
  width: 135px;
  height: 120px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.product-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.product-name {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #000000;
  line-height: 32px;
}

.product-variant {
  font-size: 14px;
  color: #111111;
  background-color: #1ce785;
  width: 80px;
  height: 26px;
  border-radius: 50px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cta-row {
  display: flex;
  justify-content: center;
  margin-top: 33px;
  padding-left: 62px;
}

.cta-button {
  padding-right: 25px;
  padding-left: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 240px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid #ededed;
  color: #333;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  /* 200% */
}

.cta-button img {
  width: 7px;
  height: 14px;
}

.cta-button:hover {
  background-color: #f8f9fd;
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(17, 17, 17, 0.08);
}
</style>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit1Data } from '@/data/blog_detail/unit1'
import { shareData } from '@/data/common/share'
import { useCmsNavStore } from '@/stores/cmsNav'
import { buildBlogDetailPathFromCategory } from '@/utils/blogRoute'
import { normalizePath } from '@/utils/blogRoute'
import { logger } from '@/utils/logger'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const route = useRoute()
const cmsNavStore = useCmsNavStore()
const cmsUnitData = computed(() => currentPost.value?.moduleList?.unit1?.data || null)
const resolvedUnitData = useUnitData(props, unit1Data, { cmsData: cmsUnitData })
const articleGridRef = ref(null)
const articleAsideRef = ref(null)
const isCompactAside = ref(false)
const isAsideOpen = ref(false)
const activeTocTarget = ref('')

const COMPACT_ASIDE_WIDTH = 1360

const asideState = reactive({
  left: 0,
  top: 0,
  navTop: 0,
  navRight: 0,
  navSize: 52,
})

const asideStyle = computed(() => {
  if (isCompactAside.value) {
    return {
      top: `${asideState.navTop + asideState.navSize}px`,
      right: `${asideState.navRight}px`,
    }
  }

  return {
    position: 'fixed',
    top: `${asideState.top}px`,
    left: `${asideState.left}px`,
    width: '320px',
  }
})

const navStyle = computed(() => {
  if (!isCompactAside.value) return {}

  return {
    position: 'fixed',
    top: `${asideState.navTop}px`,
    right: `${asideState.navRight}px`,
  }
})

const currentPostId = computed(() => {
  const routeId = Number(route.params.id)
  if (!Number.isNaN(routeId) && routeId > 0) return routeId
  const metaId = Number(route.meta.ID)
  return !Number.isNaN(metaId) && metaId > 0 ? metaId : null
})

const currentTag = computed(() => String(route.params.tag || '').trim())

const currentCategory = computed(() =>
  (cmsNavStore.blogCategories || []).find(category =>
    category.slug === currentTag.value || category.posts?.some(post => post.id === currentPostId.value)
  )
)

const currentPost = computed(() =>
  currentCategory.value?.posts?.find(post => post.id === currentPostId.value) || null
)

const shareConfig = computed(() => cmsNavStore.commonShareData || shareData)
const articleTitle = computed(() => resolvedUnitData.value.title || '')
const articleSections = computed(() => resolvedUnitData.value.sections || [])
const visibleArticleSections = computed(() =>
  articleSections.value.filter(section => section && (section.title || section.content || section.logo))
)
const articleAuthor = computed(() => resolvedUnitData.value.author || {})
const shareLinks = computed(() => shareConfig.value.links || [])
const articleDate = computed(() => resolvedUnitData.value.date || formatPagerDate(currentPost.value?.createdAt))
const hasAuthorCard = computed(
  () => Boolean(articleAuthor.value.title || articleAuthor.value.description)
)
const hasArticleHeader = computed(() => Boolean(articleTitle.value || articleDate.value || shareLinks.value.length))
const hasArticleBody = computed(() =>
  visibleArticleSections.value.length || hasAuthorCard.value || prevNextPager.value.previous || prevNextPager.value.next
)

const slugify = value =>
  String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const getSectionId = (section, index) => {
  if (!section?.anchor) return ''
  return section.id || slugify(section.title) || `section-${index + 1}`
}

const tocItems = computed(() =>
  visibleArticleSections.value
    .filter(section => section.anchor && section.title)
    .map((section, index) => ({
      label: section.title,
      target: getSectionId(section, index),
    }))
)

const activeTocIndex = computed(() => {
  const index = tocItems.value.findIndex(item => item.target === activeTocTarget.value)
  return index === -1 ? 0 : index
})

const tocHeight = computed(() => {
  const rowHeight = 46
  const count = Math.max(tocItems.value.length, 1)
  return `${count * rowHeight}px`
})

const tocActiveStyle = computed(() => ({
  top: `${activeTocIndex.value * 46}px`,
  height: '46px',
}))

const tocBodyStyle = computed(() => ({
  height: tocHeight.value,
}))

const tocLineStyle = computed(() => ({
  height: tocHeight.value,
}))

const breadcrumbItems = computed(() => {
  const categoryLabel = currentCategory.value?.label || 'Blog'
  const categoryPath = normalizePath(currentCategory.value?.navUrl || '/blog') || '/blog'
  const articleLabel = articleTitle.value

  return [
    { label: 'Home', to: '/' },
    { label: 'Blog', to: '/blog' },
    categoryLabel ? { label: categoryLabel, to: categoryPath } : null,
    articleLabel ? { label: articleLabel, to: '' } : null,
  ].filter(Boolean)
})

const prevNextPager = computed(() => {
  const posts = (currentCategory.value?.posts || [])
    .filter(post => post && post.id)
    .slice()
    .sort((a, b) => {
      const sortDiff = (Number(a.sort) || 0) - (Number(b.sort) || 0)
      if (sortDiff !== 0) return sortDiff
      return Number(a.id) - Number(b.id)
    })

  const currentIndex = posts.findIndex(post => post.id === currentPostId.value)
  if (currentIndex === -1) return { previous: null, next: null }

  const previous = currentIndex > 0 ? posts[currentIndex - 1] : null
  const next = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
  return { previous, next }
})

const resolvePostPath = post => {
  if (post?.navUrl) return post.navUrl
  const category = currentCategory.value || { slug: currentTag.value }
  return buildBlogDetailPathFromCategory(category, post.id)
}

const scrollToSection = target => {
  if (typeof window === 'undefined' || !target) return

  const element = document.getElementById(target)
  if (!element) return

  const headerOffset = 120
  const top = element.getBoundingClientRect().top + window.scrollY - headerOffset
  window.scrollTo({
    top: Math.max(0, top),
    behavior: 'smooth',
  })
}

const handleTocClick = target => {
  isAsideOpen.value = false
  activeTocTarget.value = target
  scrollToSection(target)
}

const updateActiveToc = () => {
  if (typeof window === 'undefined' || !tocItems.value.length) {
    activeTocTarget.value = ''
    return
  }

  const offset = 180
  const candidates = tocItems.value
    .map((item, index) => {
      const element = document.getElementById(item.target)
      if (!element) return null
      const rect = element.getBoundingClientRect()
      return {
        ...item,
        index,
        top: rect.top,
      }
    })
    .filter(Boolean)

  if (!candidates.length) return

  const current = [...candidates]
    .filter(item => item.top - offset <= 0)
    .sort((a, b) => b.top - a.top)[0] || candidates[0]

  activeTocTarget.value = current.target
}

const dataSource = computed(() => {
  if (props.data && typeof props.data === 'object') return '后台数据'
  if (cmsUnitData.value) return 'CMS 数据'
  return '兜底数据'
})

watch(
  () => [cmsNavStore.navResolved, dataSource.value],
  ([resolved, source]) => {
    if (!resolved && source === '兜底数据' && !props.data) return
    logger.log(`📦 BlogDetail Unit1 使用${source}渲染`)
  },
  { immediate: true }
)

const formatPagerDate = value => {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

const updateViewportMode = () => {
  if (typeof window === 'undefined') return
  isCompactAside.value = window.innerWidth <= COMPACT_ASIDE_WIDTH
  if (!isCompactAside.value) {
    isAsideOpen.value = false
  }
}

const updateAsidePosition = () => {
  if (typeof window === 'undefined') return
  updateViewportMode()

  const grid = articleGridRef.value
  if (!grid) return

  const fixedTop = 160
  const gridRect = grid.getBoundingClientRect()
  const minTop = gridRect.top

  if (isCompactAside.value) {
    asideState.navSize = window.innerWidth <= 768 ? 48 : 52
    asideState.navRight = window.innerWidth <= 768 ? window.innerWidth * 0.03 : window.innerWidth * 0.03
    asideState.navTop = Math.min(
      Math.max(fixedTop, minTop),
      gridRect.bottom - asideState.navSize
    )
    return
  }

  const aside = articleAsideRef.value
  if (!aside) return

  const asideHeight = aside.offsetHeight
  const maxTop = gridRect.bottom - asideHeight

  asideState.left = gridRect.left + 980
  asideState.top = Math.min(Math.max(fixedTop, minTop), maxTop)
}

onMounted(() => {
  updateViewportMode()
  updateAsidePosition()
  updateActiveToc()
  window.addEventListener('scroll', updateAsidePosition, { passive: true })
  window.addEventListener('scroll', updateActiveToc, { passive: true })
  window.addEventListener('resize', updateAsidePosition)
  window.addEventListener('resize', updateActiveToc)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateAsidePosition)
  window.removeEventListener('scroll', updateActiveToc)
  window.removeEventListener('resize', updateAsidePosition)
  window.removeEventListener('resize', updateActiveToc)
})

watch(
  tocItems,
  () => {
    updateActiveToc()
  },
  { immediate: true }
)
</script>

<template>
  <article class="unit1 c_1300 c_padding">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <template v-for="(item, index) in breadcrumbItems" :key="item.label">
        <RouterLink
          v-if="item.to && index < breadcrumbItems.length - 1"
          class="breadcrumbLink"
          :to="item.to"
        >
          {{ item.label }}
        </RouterLink>
        <span v-else :aria-current="index === breadcrumbItems.length - 1 ? 'page' : null">
          {{ item.label }}
        </span>
        <span v-if="index < breadcrumbItems.length - 1">/</span>
      </template>
    </nav>

    <header v-if="hasArticleHeader" class="articleHeader">
      <h1 v-if="articleTitle">{{ articleTitle }}</h1>
      <!-- <div v-if="articleDate || shareLinks.length" class="articleMeta">
        <time v-if="articleDate">{{ articleDate }}</time>
        <div v-if="shareLinks.length" class="shareBlock">
          <span>{{ shareConfig.label }}</span>
          <div class="shareList">
            <a v-for="link in shareLinks" :key="link.name" href="#" :aria-label="link.name">
              <MediaAsset class="shareIcon" type="image" :src="link.icon" :alt="link.name" />
            </a>
          </div>
        </div>
      </div> -->
    </header>

    <div v-if="hasArticleHeader && hasArticleBody" class="divider"></div>

    <div v-if="hasArticleBody" ref="articleGridRef" class="articleGrid" :class="{ 'no-toc': !tocItems.length }">
      <main class="articleMain">
        <template v-for="(section, index) in visibleArticleSections" :key="index">
          <section
            class="articleSection"
            :class="{ heroSection: index === 0 }"
          >
            <div class="sectionBody">
              <h2
                v-if="section.title"
                :id="section.anchor ? getSectionId(section, index) : undefined"
                class="sectionTitle"
              >
                {{ section.title }}
              </h2>
              <div v-if="section.content" class="richText" v-html="section.content"></div>
            </div>
            <MediaAsset
              v-if="section.logo"
              class="sectionImage"
              type="image"
              :src="section.logo"
              :alt="section.title || articleTitle"
              :lazy="false"
            />
          </section>
        </template>

        <section v-if="hasAuthorCard" id="author-caleaf" class="authorCard">
          <MediaAsset
            v-if="articleAuthor.logo"
            class="authorLogoImage"
            type="image"
            :src="articleAuthor.logo"
            :alt="articleAuthor.title || 'Author'"
            :lazy="false"
          />
          <div v-else class="authorLogo">
            {{ (articleAuthor.title || 'CA').slice(0, 2).toUpperCase() }}
          </div>
          <div>
            <h2>{{ articleAuthor.title }}</h2>
            <p>{{ articleAuthor.description }}</p>
          </div>
        </section>

        <section v-if="prevNextPager.previous || prevNextPager.next" class="pagerRow">
          <router-link
            v-if="prevNextPager.previous"
            class="pagerLink"
            :to="resolvePostPath(prevNextPager.previous)"
          >
            <span class="pagerLabel">Previous</span>
            <h2>{{ prevNextPager.previous.title }}</h2>
          </router-link>
          <router-link
            v-if="prevNextPager.next"
            class="pagerLink"
            :to="resolvePostPath(prevNextPager.next)"
          >
            <span class="pagerLabel">Next</span>
            <h2>{{ prevNextPager.next.title }}</h2>
          </router-link>
        </section>
      </main>

      <div v-if="tocItems.length" class="articleNavControl">
        <button
          type="button"
          class="articleNavButton"
          :aria-expanded="isAsideOpen"
          aria-controls="blog-detail-toc"
          :style="navStyle"
          @click="isAsideOpen = !isAsideOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <aside
        v-if="tocItems.length"
        id="blog-detail-toc"
        ref="articleAsideRef"
        class="articleAside"
        :class="{ compact: isCompactAside, open: isAsideOpen }"
        :style="asideStyle"
      >
        <div class="tocCard">
          <h2>In this article</h2>
          <div class="tocBody" :style="tocBodyStyle">
            <span class="tocLine" :style="tocLineStyle"></span>
            <span class="tocActive" :style="tocActiveStyle"></span>
            <nav>
              <a
                v-for="item in tocItems"
                :key="item.label"
                :href="`#${item.target}`"
                :class="{ active: activeTocTarget === item.target }"
                @click.prevent="handleTocClick(item.target)"
              >
                {{ item.label }}
              </a>
            </nav>
          </div>
        </div>
      </aside>
    </div>
  </article>
</template>

<style scoped lang="scss">
.unit1 {
  padding-top: 130px;
  padding-bottom: 68px;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  color: #111;
  font-size: 16px;
  line-height: 19px;
}

.breadcrumbLink {
  color: inherit;
  text-decoration: none;
}

.breadcrumbLink:hover {
  text-decoration: underline;
}

.articleHeader {
  margin-top: 85px;

  h1 {
    margin: 0;
    color: #111;
    font-size: 40px;
    font-weight: 700;
    line-height: 47px;
  }
}

.articleMeta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin-top: 57px;

  time {
    display: block;
    color: #666;
    font-size: 16px;
    line-height: 24px;
  }
}

.divider {
  width: 100%;
  height: 1px;
  margin-top: 44px;
  background: rgb(0 0 0 / 20%);
}

.articleGrid {
  position: relative;
  display: grid;
  grid-template-columns: 900px 320px;
  gap: 80px;
  align-items: start;
  margin-top: 59px;
}

.articleGrid.no-toc {
  grid-template-columns: minmax(0, 1fr);
}

.articleNavControl {
  display: none;
}

.articleNavButton {
  position: relative;
  height: 52px;
  width: 52px;
  border: 1px solid rgb(0 0 0 / 10%);
  border-radius: 0;
  background: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 0;
  cursor: pointer;

  span {
    display: block;
    width: 26px;
    height: 2px;
    background: #fff;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: center;
  }

  &[aria-expanded='true'] {
    span:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
      transform: scaleX(0);
    }

    span:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
    }
  }
}

.articleMain {
  min-width: 0;
}

.sectionTitle {
  max-width: 825px;
  margin: 0;
  color: #111;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.2;
}

.sectionTitle {
  scroll-margin-top: 120px;
  margin-top: 56px;
  margin-bottom: 24px;
}

.richText {
  margin-top: 0;
  color: #111;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;

  :deep(p) {
    margin: 0;
  }

  :deep(p + p),
  :deep(p + ul),
  :deep(p + ol),
  :deep(ul + p),
  :deep(ol + p) {
    margin-top: 30px;
  }

  :deep(img) {
    display: block;
    width: 100%;
    height: auto;
    margin-top: 24px;
    object-fit: cover;
  }

  :deep(a) {
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  :deep(ul),
  :deep(ol) {
    margin: 24px 0 0;
    padding-left: 24px;
  }

  :deep(li + li) {
    margin-top: 10px;
  }

  :deep(strong),
  :deep(b) {
    font-weight: 700;
  }
}

.articleSection {
  margin-top: 56px;
}

.articleSection.heroSection {
  margin-top: 0;
}

.articleSection.heroSection .sectionBody {
  margin-top: 0;
  padding-top: 0;
}

.articleSection.heroSection .sectionTitle {
  margin-top: 0;
}

.sectionImage {
  display: block;
  width: 100%;
  aspect-ratio: 900 / 593;
  margin-top: 24px;
  object-fit: cover;
}

.sectionBody {
  margin-top: 24px;
}

.authorCard {
  scroll-margin-top: 120px;
  display: grid;
  grid-template-columns: 106px minmax(0, 1fr);
  gap: 36px;
  align-items: center;
  min-height: 200px;
  margin-top: 88px;
  padding: 40px;
  background: #f8f9fd;

  h2 {
    margin: 0;
    color: #111;
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
  }

  p {
    max-width: 680px;
    margin: 10px 0 0;
    color: #111;
    font-size: 16px;
    line-height: 24px;
  }
}

.authorLogo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 106px;
  height: 106px;
  border-radius: 50%;
  background: #fff;
  color: #111;
  font-size: 24px;
  font-weight: 700;
}

.authorLogoImage {
  width: 82px;
  height: 82px;
  object-fit: contain;
  border-radius: 50%;
  background: #fff;
  border: 12px solid #fff;
}

.pagerRow {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 86px;
}

.pagerLink {
  display: flex;
  align-items: baseline;
  gap: 14px;
  color: inherit;
  text-decoration: none;
}

.pagerLink:hover h2 {
  text-decoration: underline;
}

.pagerLabel {
  flex: 0 0 auto;
  color: #111;
  font-size: 16px;
  line-height: 24px;
}

.pagerLink h2 {
  flex: 1;
  margin: 0;
  color: #111;
  font-size: 16px;
  font-weight: 400;
  line-height: 36px;
}

.articleAside {
  grid-column: 2;
  z-index: 20;
  width: 320px;
  height: max-content;
}

.articleAside.compact {
  display: none;
}

.shareBlock {
  display: flex;
  align-items: center;
  gap: 50px;

  span {
    color: #111;
    font-size: 16px;
    line-height: 24px;
  }
}

.shareList {
  display: flex;
  gap: 10px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f8f9fd;
    color: #111;
    text-decoration: none;
  }
}

.shareIcon {
  display: block;
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.tocCard {
  min-height: 0;
  padding: 30px 31px;
  background: linear-gradient(180deg, #f8f9fd 0%, rgb(248 249 253 / 0%) 100%);

  h2 {
    margin: 0 0 27px;
    color: #111;
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
  }
}

.tocBody {
  position: relative;
  display: grid;
  grid-template-columns: 2px 1fr;
  gap: 23px;
}

.tocLine,
.tocActive {
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
}

.tocLine {
  background: #d9d9d9;
}

.tocActive {
  background: #111;
}

.tocBody nav {
  grid-column: 2;
  display: flex;
  flex-direction: column;
  min-width: 0;

  a {
    display: block;
    max-width: 100%;
    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #111;
    font-size: 18px;
    line-height: 46px;
    text-decoration: none;
  }

  a.active {
    font-weight: 700;
  }
}

@media screen and (max-width: 1360px) {
  .articleGrid {
    grid-template-columns: minmax(0, 1fr) 52px;
    gap: 24px;
    align-items: start;
  }

  .articleNavControl {
    display: block;
    z-index: 35;
    grid-column: 2;
    grid-row: 1;
    width: 52px;
    height: 52px;
  }

  .articleNavButton {
    width: 52px;
    height: 52px;
  }

  .articleAside.compact {
    position: fixed;
    z-index: 34;
    width: min(520px, 94vw);
    max-width: 520px;
    max-height: calc(100vh - 242px);
    overflow-y: auto;
  }

  .articleAside.compact.open {
    display: block;
  }

  .tocCard {
    min-height: auto;
    background: #fff;
    box-shadow: 0 18px 46px rgb(0 0 0 / 12%);
  }
}

@media screen and (max-width: $breakpoint-mobile) {
  .unit1 {
    padding-top: 104px;
    padding-bottom: 48px;
  }

  .articleHeader {
    margin-top: 44px;

    h1 {
      font-size: 32px;
      line-height: 40px;
    }

  }

  .articleMeta {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-top: 28px;
  }

  .divider {
    margin-top: 30px;
  }

  .articleGrid {
    grid-template-columns: minmax(0, 1fr) 48px;
    gap: 14px;
    margin-top: 40px;
  }

  .sectionTitle {
    font-size: 26px;
    line-height: 34px;
  }

  .richText {
    font-size: 17px;
    line-height: 28px;
  }

  .articleSection {
    margin-top: 44px;
  }

  .sectionBody {
    margin-top: 18px;
  }

  .authorCard {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 28px 24px;
  }

  .pagerRow {
    gap: 18px;
    margin-top: 58px;
  }

  .articleAside {
    width: 100%;
  }

  .articleNavControl {
    width: 48px;
    height: 48px;
  }

  .articleNavButton {
    width: 48px;
    height: 48px;
  }

  .articleAside.compact {
    max-width: none;
    max-height: calc(100vh - 232px);
  }

  .tocCard {
    min-height: auto;
  }
}
</style>

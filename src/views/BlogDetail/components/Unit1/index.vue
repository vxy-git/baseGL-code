<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit1Data } from '@/data/blogDetail/unit1'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit1Data)
const articleGridRef = ref(null)
const articleAsideRef = ref(null)
const isCompactAside = ref(false)
const isAsideOpen = ref(false)

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
  window.addEventListener('scroll', updateAsidePosition, { passive: true })
  window.addEventListener('resize', updateAsidePosition)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateAsidePosition)
  window.removeEventListener('resize', updateAsidePosition)
})
</script>

<template>
  <article class="unit1 c_1300 c_padding">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <template v-for="(item, index) in unitData.breadcrumb" :key="item">
        <span>{{ item }}</span>
        <span v-if="index < unitData.breadcrumb.length - 1">/</span>
      </template>
    </nav>

    <header class="articleHeader">
      <h1>{{ unitData.title }}</h1>
      <div class="articleMeta">
        <time>{{ unitData.date }}</time>
        <div class="shareBlock">
          <span>{{ unitData.share.label }}</span>
          <div class="shareList">
            <a v-for="link in unitData.share.links" :key="link.name" href="#" :aria-label="link.name">
              <MediaAsset class="shareIcon" type="image" :src="link.icon" :alt="link.name" />
            </a>
          </div>
        </div>
      </div>
      </header>

    <div class="divider"></div>

    <div ref="articleGridRef" class="articleGrid">
      <main class="articleMain">
        <h2 class="introTitle">{{ unitData.intro }}</h2>
        <MediaAsset
          class="articleImage"
          type="image"
          :src="unitData.hero.src"
          :alt="unitData.hero.alt"
          :lazy="false"
        />

        <template v-for="(section, index) in unitData.sections" :key="index">
          <h2
            v-if="section.type === 'heading'"
            :id="section.id"
            class="sectionTitle"
          >
            {{ section.title }}
          </h2>
          <MediaAsset
            v-else-if="section.type === 'image'"
            class="articleImage"
            type="image"
            :src="section.src"
            :alt="section.alt"
            :lazy="false"
          />
          <div v-else-if="section.type === 'paragraphs'" class="paragraphGroup">
            <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
          </div>
        </template>

        <section id="author-caleaf" class="authorCard">
          <div class="authorLogo">CA</div>
          <div>
            <h2>{{ unitData.author.title }}</h2>
            <p>{{ unitData.author.description }}</p>
          </div>
        </section>

        <section v-if="unitData.pager" class="pagerRow">
          <div class="pagerLabels">
            <span v-for="label in unitData.pager.labels" :key="label">{{ label }}</span>
          </div>
          <div class="pagerCopy">
            <h2>{{ unitData.pager.title }}</h2>
            <p>{{ unitData.pager.description }}</p>
          </div>
        </section>
      </main>

      <div class="articleNavControl">
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
        id="blog-detail-toc"
        ref="articleAsideRef"
        class="articleAside"
        :class="{ compact: isCompactAside, open: isAsideOpen }"
        :style="asideStyle"
      >
        <div class="tocCard">
          <h2>{{ unitData.toc.title }}</h2>
          <div class="tocBody">
            <span class="tocLine"></span>
            <span class="tocActive"></span>
            <nav>
              <a
                v-for="item in unitData.toc.items"
                :key="item.label"
                :href="`#${item.target}`"
                @click="isAsideOpen = false"
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

.introTitle,
.sectionTitle {
  max-width: 825px;
  margin: 0;
  color: #111;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.2;
}

.articleImage {
  display: block;
  width: 100%;
  aspect-ratio: 900 / 593;
  margin-top: 24px;
  object-fit: cover;
}

.sectionTitle {
  scroll-margin-top: 120px;
  margin-top: 56px;
  margin-bottom: 24px;
}

.paragraphGroup {
  margin-top: 0;

  p {
    margin: 0;
    color: #111;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
  }

  p + p {
    margin-top: 30px;
  }
}

.articleImage + .paragraphGroup {
  margin-top: 0;
}

.paragraphGroup + .articleImage {
  margin-top: 46px;
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

.pagerRow {
  display: grid;
  grid-template-columns: 62px minmax(0, 375px);
  gap: 47px;
  align-items: start;
  margin-top: 86px;
}

.pagerLabels {
  display: flex;
  flex-direction: column;

  span {
    color: #111;
    font-size: 16px;
    line-height: 36px;
  }
}

.pagerCopy {
  h2,
  p {
    margin: 0;
    color: #111;
    font-size: 16px;
    font-weight: 400;
    line-height: 36px;
  }
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
  min-height: 572px;
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
  height: 470px;
  background: #d9d9d9;
}

.tocActive {
  height: 46px;
  background: #111;
}

.tocBody nav {
  grid-column: 2;
  display: flex;
  flex-direction: column;

  a {
    color: #111;
    font-size: 18px;
    line-height: 46px;
    text-decoration: none;
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

  .introTitle,
  .sectionTitle {
    font-size: 26px;
    line-height: 34px;
  }

  .paragraphGroup p {
    font-size: 17px;
    line-height: 28px;
  }

  .authorCard {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 28px 24px;
  }

  .pagerRow {
    grid-template-columns: 1fr;
    gap: 18px;
    margin-top: 58px;
  }

  .pagerLabels {
    flex-direction: row;
    gap: 24px;
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

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import FeaturedCarousel from '@/components/FeaturedCarousel/index.vue'
import { listData } from '@/data/blog/list'
import { postsData } from '@/data/blog/posts'
import { useUnitData } from '@/composables/useUnitData'
import { useCmsNavStore } from '@/stores/cmsNav'
import { normalizePath } from '@/utils/blogRoute'

const props = defineProps({
  data: { type: [Object, Array], default: null },
})

const defaultArrowIcon = '/api/uploads/file/default/assets/img/icon4_active.png'
const route = useRoute()
const cmsNavStore = useCmsNavStore()
const mergedData = useUnitData(props, listData)
const unitData = computed(() => {
  if (Array.isArray(props.data)) {
    return { ...listData, posts: props.data }
  }
  return mergedData.value
})
const cmsCategories = computed(() => cmsNavStore.blogCategories || [])

const currentCategory = computed(() => {
  if (route.meta.ID) {
    return cmsCategories.value.find(cat => cat.id === route.meta.ID)
  }
  return cmsCategories.value.find(cat => normalizePath(cat.navUrl) === route.path)
})

const tabsCurrent = computed(() => {
  if (!cmsCategories.value.length) return -1
  const index = currentCategory.value
    ? cmsCategories.value.findIndex(cat => cat.id === currentCategory.value.id)
    : -1
  return index === -1 ? 0 : index
})

const currentUnitData = computed(() => {
  const category = cmsCategories.value[tabsCurrent.value]
  const categoryData = category?.moduleList?.unit?.data
  if (Array.isArray(categoryData)) {
    return { ...unitData.value, posts: categoryData }
  }
  if (Array.isArray(category?.posts)) {
    return {
      ...unitData.value,
      ...(categoryData && typeof categoryData === 'object' ? categoryData : {}),
      posts: category.posts,
    }
  }
  return categoryData && typeof categoryData === 'object'
    ? { ...unitData.value, ...categoryData }
    : unitData.value
})

const resolvePosts = data => {
  if (Array.isArray(data.newsList)) return data.newsList
  if (Array.isArray(data.posts)) return data.posts
  if (Array.isArray(data.blogs)) return data.blogs
  if (Array.isArray(data.list)) return data.list
  if (Array.isArray(data.items)) return data.items
  if (cmsNavStore.hasData) return []
  return postsData.posts
}

const list = computed(() =>
  resolvePosts(currentUnitData.value).map(post => ({
      ...post,
      type: post.type || 'image',
      src: post.logo || post.featuredImage || post.src || post.image || post.cover || post.thumbnail,
      alt: post.alt || post.title,
    }))
)

const startIndex = computed(() => (list.value.length > 2 ? 1 : 0))
</script>

<template>
  <FeaturedCarousel
    v-if="list.length"
    :items="list"
    :arrow-icon="defaultArrowIcon"
    :start-index="startIndex"
    container-class="bg-white"
  >
    <template #slide-content="{ item }">
      <router-link v-if="item.link" class="slideLink" :to="item.link" :aria-label="item.title">
        <div class="textOverlay">
          <p class="featuredDate">{{ item.date }}</p>
          <h1 class="featuredTitle">{{ item.title }}</h1>
        </div>
      </router-link>
      <div v-else class="textOverlay">
        <p class="featuredDate">{{ item.date }}</p>
        <h1 class="featuredTitle">{{ item.title }}</h1>
      </div>
    </template>
  </FeaturedCarousel>
</template>

<style scoped lang="scss">
.slideLink {
  position: absolute;
  inset: 0;
  z-index: 15;
  display: block;
  color: inherit;
  text-decoration: none;
}

.textOverlay {
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  min-height: 174px;
  padding: 56px 94px 40px;
  border-radius: 0 0 20px 20px;
  background: linear-gradient(180deg, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 72%) 100%);
  color: #fff;
  text-decoration: none;
}

.featuredDate {
  margin: 0 0 13px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
}

.featuredTitle {
  max-width: 651px;
  margin: 0 auto;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  line-height: 41px;
  text-align: center;
}

@media screen and (max-width: $breakpoint-mobile) {
  .textOverlay {
    min-height: auto;
    padding: 38px 20px 22px;
  }

  .featuredDate {
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 20px;
  }

  .featuredTitle {
    font-size: 22px;
    line-height: 28px;
  }
}
</style>

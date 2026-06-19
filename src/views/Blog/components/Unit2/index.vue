<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { listData } from '@/data/blog/list'
import { postsData } from '@/data/blog/posts'
import { useCmsNavStore } from '@/stores/cmsNav'
import { buildBlogDetailPathFromCategory } from '@/utils/blogRoute'

const props = defineProps({
  data: {
    type: [Object, Array],
    default: null,
  },
})

const mergedData = useUnitData(props, listData)
const cmsNavStore = useCmsNavStore()
const route = useRoute()
const router = useRouter()
const unitData = computed(() => {
  if (Array.isArray(props.data)) {
    return { ...listData, posts: props.data }
  }
  return mergedData.value
})
const currentPage = ref(1)
const cmsCategories = computed(() => cmsNavStore.blogCategories || [])

const tabsList = computed(() => {
  if (cmsCategories.value.length > 0) {
    return cmsCategories.value.map(cat => cat.label)
  }
  if (cmsNavStore.hasData) {
    return []
  }
  return postsData.tabs
})

const currentCategory = computed(() => {
  if (route.meta.ID) {
    return cmsCategories.value.find(cat => cat.id === route.meta.ID)
  }
  return cmsCategories.value.find(cat => cat.navUrl === route.path)
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
  if (Array.isArray(data.posts)) return data.posts
  if (Array.isArray(data.blogs)) return data.blogs
  if (Array.isArray(data.list)) return data.list
  if (Array.isArray(data.items)) return data.items
  if (cmsNavStore.hasData) return []
  return postsData.posts
}

const posts = computed(() => resolvePosts(currentUnitData.value))
const pageSize = computed(() => Number(currentUnitData.value.pageSize) || 9)
const totalPages = computed(() => Math.max(1, Math.ceil(posts.value.length / pageSize.value)))
const pages = computed(() => Array.from({ length: totalPages.value }, (_, index) => index + 1))
const currentPosts = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return posts.value.slice(start, start + pageSize.value)
})

const resolvePostPath = post => {
  if (post.link) return post.link
  if (post.navUrl) return post.navUrl
  const category = currentCategory.value || { slug: post.categorySlug }
  return buildBlogDetailPathFromCategory(category, post.id)
}

const handleTabChange = index => {
  const category = cmsCategories.value[index]
  if (category?.navUrl) {
    currentPage.value = 1
    router.push(category.navUrl)
  }
}

const handlePageChange = page => {
  currentPage.value = page
}

watch(tabsCurrent, () => {
  currentPage.value = 1
})
</script>

<template>
  <section class="unit2 c_1300 c_padding">
    <div class="blogHeader">
      <h2>{{ unitData.title }}</h2>
      <nav class="tabList" aria-label="Blog categories">
        <a
          v-for="(tab, index) in tabsList"
          :key="tab"
          href="#"
          class="tabItem"
          :class="{ active: index === tabsCurrent }"
          @click.prevent="handleTabChange(index)"
        >
          {{ tab }}
        </a>
      </nav>
    </div>

    <div class="postGrid">
      <router-link
        v-for="post in currentPosts"
        :key="post.id"
        class="postCard"
        :to="resolvePostPath(post)"
      >
        <MediaAsset
          class="postImage"
          type="image"
          :src="post.image || post.cover || post.thumbnail || post.featuredImage"
          alt=""
        />
        <div class="postBody">
          <p class="postCategory">{{ post.category }}</p>
          <h3>{{ post.title }}</h3>
          <p class="postDescription">{{ post.description }}</p>
          <time>{{ post.date }}</time>
        </div>
      </router-link>
    </div>

    <nav class="pagination" aria-label="Blog pagination">
      <button
        v-for="page in pages"
        :key="page"
        type="button"
        class="page-button"
        :class="{ active: page === currentPage }"
        @click="handlePageChange(page)"
      >
        {{ page }}
      </button>
    </nav>
  </section>
</template>

<style scoped lang="scss">
.unit2 {
  padding-top: 99px;
  padding-bottom: 145px;
}

.blogHeader {
  display: grid;
  grid-template-columns: 82px 1fr;
  column-gap: 18px;
  align-items: center;
}

.blogHeader h2 {
  margin: 0;
  color: #000;
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
}

.tabList {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  min-width: 0;
  overflow-x: auto;
  white-space: nowrap;
  flex-wrap: wrap;
}

.tabItem {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  text-decoration: none;
}

.tabItem.active {
  color: #111;
  font-weight: 600;
}

.postGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 61px 50px;
  margin-top: 57px;
}

.postCard {
  min-width: 0;
  color: inherit;
  text-decoration: none;
}

.postImage {
  display: block;
  width: 100%;
  aspect-ratio: 400 / 280;
  object-fit: cover;
}

.postBody {
  padding-top: 16px;
}

.postCategory {
  margin: 0 0 15px;
  color: #1ce785;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
}

.postBody h3 {
  margin: 0;
  color: #111;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
}

.postDescription {
  margin: 42px 0 0;
  color: #666;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.postBody time {
  display: block;
  margin-top: 25px;
  color: #666;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 76px;
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

@media screen and (max-width: $breakpoint-mobile) {
  .unit2 {
    padding-top: 54px;
    padding-bottom: 72px;
  }

  .blogHeader h2 {
    font-size: 34px;
    line-height: 40px;
  }

  .tabItem {
    font-size: 20px;
    line-height: 26px;
  }

  .postGrid {
    grid-template-columns: 1fr;
    gap: 44px;
    margin-top: 38px;
  }

  .postCategory {
    font-size: 22px;
    line-height: 28px;
  }

  .postBody h3 {
    font-size: 22px;
    line-height: 28px;
  }

  .postDescription {
    margin-top: 22px;
    font-size: 18px;
    line-height: 24px;
  }

  .pagination {
    flex-wrap: wrap;
    margin-top: 54px;
  }
}
</style>

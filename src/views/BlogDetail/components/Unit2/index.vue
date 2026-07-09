<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit2Data } from '@/data/blog_detail/unit2'
import { useCmsNavStore } from '@/stores/cmsNav'
import { buildBlogDetailPathFromCategory, normalizePath } from '@/utils/blogRoute'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit2Data)
const route = useRoute()
const cmsNavStore = useCmsNavStore()

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

const shufflePosts = posts => {
  const seed = currentPostId.value || 0
  return [...posts]
    .map((post, index) => ({
      post,
      sort: Math.sin((post.id || index + 1) * 10000 + seed) % 1,
    }))
    .sort((a, b) => a.sort - b.sort)
    .map(item => item.post)
}

const relatedPosts = computed(() => {
  if (!currentCategory.value) return []
  const posts = (currentCategory.value.posts || []).filter(post => post.id !== currentPostId.value)
  return shufflePosts(posts).slice(0, 3)
})

const viewAllPath = computed(() =>
  normalizePath(currentCategory.value?.navUrl || unitData.value.viewAllPath || '/blog')
)
const resolvePostPath = post =>
  post.navUrl
    ? normalizePath(post.navUrl)
    : buildBlogDetailPathFromCategory(currentCategory.value || { slug: currentTag.value }, post.id)
</script>

<template>
  <section v-if="relatedPosts.length" class="unit2 c_1300 c_padding">
    <div class="relatedHeader">
      <h2>{{ unitData.title }}</h2>
      <router-link :to="viewAllPath">{{ unitData.viewAllText }}</router-link>
    </div>

    <div class="postGrid">
      <router-link
        v-for="post in relatedPosts"
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
  </section>
</template>

<style scoped lang="scss">
.unit2 {
  padding-top: 0;
  padding-bottom: 120px;
}

.relatedHeader {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h2 {
    margin: 0;
    color: #111;
    font-size: 40px;
    font-weight: 700;
    line-height: 47px;
  }

  a {
    width: 400px;
    color: #111;
    font-size: 16px;
    line-height: 32px;
    text-align: right;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
}

.postGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 50px;
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
  line-height: 24px;
}

.postBody time {
  display: block;
  margin-top: 25px;
  color: #666;
  font-size: 16px;
  line-height: 24px;
}

@media screen and (max-width: $breakpoint-mobile) {
  .unit2 {
    padding-bottom: 72px;
  }

  .relatedHeader {
    h2 {
      font-size: 32px;
      line-height: 40px;
    }

    a {
      width: auto;
    }
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
}
</style>

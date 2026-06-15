<script setup>
import { computed, ref } from 'vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit2Data } from '@/data/blog/unit2'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit2Data)
const currentPage = ref(1)

const pages = computed(() => unitData.value.pages)

const handlePageChange = page => {
  currentPage.value = page
}
</script>

<template>
  <section class="unit2 c_1300 c_padding">
    <div class="blogHeader">
      <h2>{{ unitData.title }}</h2>
      <nav class="tabList" aria-label="Blog categories">
        <a v-for="tab in unitData.tabs" :key="tab" href="#" class="tabItem">{{ tab }}</a>
      </nav>
    </div>

    <div class="postGrid">
      <article v-for="post in unitData.posts" :key="post.id" class="postCard">
        <img class="postImage" :src="post.image" alt="" />
        <div class="postBody">
          <p class="postCategory">{{ post.category }}</p>
          <h3>{{ post.title }}</h3>
          <p class="postDescription">{{ post.description }}</p>
          <time>{{ post.date }}</time>
        </div>
      </article>
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

.postGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 61px 50px;
  margin-top: 57px;
}

.postCard {
  min-width: 0;
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
  color: #1CE785;
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

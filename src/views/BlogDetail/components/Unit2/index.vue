<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit2Data } from '@/data/blogDetail/unit2'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit2Data)
</script>

<template>
  <section class="unit2 c_1300 c_padding">
    <div class="pagerRow">
      <div class="pagerLabels">
        <span v-for="label in unitData.pager.labels" :key="label">{{ label }}</span>
      </div>
      <div class="pagerCopy">
        <h2>{{ unitData.pager.title }}</h2>
        <p>{{ unitData.pager.description }}</p>
      </div>
    </div>

    <div class="relatedHeader">
      <h2>{{ unitData.title }}</h2>
      <router-link :to="unitData.viewAllPath">{{ unitData.viewAllText }}</router-link>
    </div>

    <div class="postGrid">
      <router-link
        v-for="post in unitData.posts"
        :key="post.id"
        class="postCard"
        :to="`/blog/${post.id}`"
      >
        <MediaAsset class="postImage" type="image" :src="post.image" alt="" />
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

.pagerRow {
  display: grid;
  grid-template-columns: 62px minmax(0, 375px);
  gap: 47px;
  align-items: start;
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

.relatedHeader {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 94px;

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

  .pagerRow {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .pagerLabels {
    flex-direction: row;
    gap: 24px;
  }

  .relatedHeader {
    margin-top: 58px;

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

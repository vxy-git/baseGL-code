<script setup>
import { ref, computed, onMounted } from 'vue'
import MediaAsset from '@/components/MediaAsset.vue'
import { homeUnit6Data } from '@/data/home/home-unit6'
import { useCmsNavStore } from '@/stores/cmsNav'

const props = defineProps({
  data: {
    type: Object,
    default: null
  }
})

const cmsNavStore = useCmsNavStore()

const cmsData = computed(() => {
  const homeNav = cmsNavStore.getNavByName('Home')
  return homeNav?.moduleList?.unit6?.data || null
})

const unitData = computed(() => {
  // 1. Props
  if (props.data) return { ...homeUnit6Data, ...props.data }

  // 2. CMS Store
  if (cmsData.value) {
    return {
      ...homeUnit6Data,
      ...cmsData.value
    }
  }

  // 3. Local
  return homeUnit6Data
})

const isPlaying = ref(false)

const playVideo = () => {
  isPlaying.value = true
}

onMounted(() => {
  // Store 会自动处理缓存，只在首次调用时请求 API
  cmsNavStore.fetchAllNavs().catch(error => {
    console.error('❌ Unit6 组件获取导航数据失败:', error)
  })
})
</script>

<template>
  <div class="c_padding">
    <div class="c_1300 mt-[85px] mx-auto rounded-[20px] overflow-hidden">
      <div>
        <div class="relative">
          <div v-if="!isPlaying" class="size-full absolute z-10 top-0 left-0 flex flex-col justify-center">
            <div class="titleText">{{ unitData.title }}</div>
            <div class="label">
               {{ unitData.description }}
            </div>
          </div>
          <MediaAsset
            v-if="!isPlaying"
            class="h-[560px] w-full object-cover block"
            type="image"
            :src="unitData.backgroundImage"
            alt="Beyond Limits background"
          />
          <MediaAsset
            v-else
            class="h-[560px] w-full object-contain bg-black"
            type="video"
            :src="unitData.videoSrc"
            :poster="unitData.backgroundImage"
            :autoplay="true"
            :loop="true"
            :controls="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.titleText {
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 59px;
}
.label{
  text-align: justify;
  max-width: 90%;
  margin: 27.25px auto 0;
  width: 1000px;
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 136.364% */
}
</style>
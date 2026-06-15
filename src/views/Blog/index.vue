<script setup>
import { useRenderList } from '@/composables/useRenderList'
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/Footer.vue'
import Unit1 from './components/Unit1/index.vue'
import Unit2 from './components/Unit2/index.vue'

const props = defineProps({
  pageConfig: {
    type: Object,
    default: () => ({}),
  },
})

const componentMap = {
  unit1: Unit1,
  unit2: Unit2,
}

const defaultOrder = ['unit1', 'unit2']

const { renderList } = useRenderList(props, componentMap, defaultOrder)
</script>

<template>
  <div class="blogPage">
    <Header header-class="white" show-line />
    <main class="blogMain">
      <component :is="item.component" v-for="item in renderList" :key="item.key" :data="item.data" />
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.blogPage {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: #fff;
  color: #111;
  font-family: Roboto, sans-serif;
}

.blogMain {
  width: 100%;
}
</style>

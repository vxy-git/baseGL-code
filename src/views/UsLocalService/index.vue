<script setup>
import { useRenderList } from '@/composables/useRenderList'
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/Footer.vue'
import Unit1 from './components/Unit1/index.vue'
import Unit2 from './components/Unit2/index.vue'
import Unit3 from './components/Unit3/index.vue'
import Unit4 from './components/Unit4/index.vue'
import Unit5 from './components/Unit5/index.vue'
import Unit6 from './components/Unit6/index.vue'
import Unit7 from './components/Unit7/index.vue'

const props = defineProps({
  pageConfig: {
    type: Object,
    default: () => ({}),
  },
})

const componentMap = {
  unit1: Unit1,
  unit2: Unit2,
  unit3: Unit3,
  unit4: Unit4,
  unit5: Unit5,
  unit6: Unit6,
  unit7: Unit7,
}

const defaultOrder = ['unit1', 'unit2', 'unit3', 'unit4', 'unit5', 'unit6', 'unit7']

const { renderList } = useRenderList(props, componentMap, defaultOrder)
</script>

<template>
  <div class="usLocalService">
    <Header header-class="white" show-line />
    <component :is="item.component" v-for="item in renderList" :key="item.key" :data="item.data" />
    <Footer show-line />
  </div>
</template>

<style scoped lang="scss">
.usLocalService {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: #fff;
  color: #111;
  font-family: Roboto, sans-serif;
}
</style>

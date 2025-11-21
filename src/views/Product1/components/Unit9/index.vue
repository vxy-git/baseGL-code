<script setup>
import specs from '@/assets/product1/specs.mp4'
const deviceSpecs = [
  {
    label: 'Dimension(mm)',
    value: '71.0H*37.5W*13.0D'
  },
  {
    label: 'Tank Volume',
    value: '1mL / 2mL'
  },
  {
    label: 'Battery Capacity',
    value: '280mAh'
  },
  {
    label: 'Resistance',
    value: '1.8ohm'
  },
  {
    label: 'Voltage',
    value: '1.8V-2.0V-2.2V'
  },
  {
    label: 'Housing Material',
    value: 'Plastic'
  },
  {
    label: 'Ceramic Core',
    value: 'Unicore'
  },
  {
    label: 'Charging',
    value: 'Type-C'
  },
  {
    label: 'Options of Activation',
    value: 'Button & Inhale Activated'
  }
]
</script>

<template>
  <div class="pt-[138px] pb-[47px]">
    <div class="title text-center">
      SPECS
    </div>
    <div class="flex c_1300 c_padding mx-auto px-[35px] justify-between m_flex_col_r overflow-hidden">
      <div class="w-[683px] max-w-full flex-shrink-0 pt-[66px] relative z-[1]">
        <div v-for="(item, index) in deviceSpecs" :key="index" class="flex border-b border-white/20">
          <div class="tableText w-[370px]">{{ item.label }}</div>
          <div class="tableText">{{ item.value }}</div>
        </div>
      </div>
      <div class="w-[500px] h-[730px] relative">
      <video class="absolute h-[1000px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover" :src="specs" autoplay muted playsinline loop></video>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #FFF;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.tableText {
  color: #D9D9D9;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 69px;
}
</style>
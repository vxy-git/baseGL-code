<script setup>
const deviceSpecs1 = [
  { label: "Dimension(mm)", value: "99.3H*22.3W*10.4D" },
  { label: "Tank Volume", value: "0.5mL/1mL" },
  { label: "Battery Capability", value: "280mAh" },
  { label: "Resistance", value: "1.8ohm" },
  { label: "Voltage Setting", value: "2.0V" },
  { label: "Housing Material", value: "Plastic" },
  { label: "Ceramic Core", value: "UNICORE" },
  { label: "Central Post", value: "Post-free" },
  { label: "Charging", value: "Type-C" },
  { label: "Options of Activation", value: "Inhale Activated" }
]

const deviceSpecs2 = [
  { label: "Dimension(mm)", value: "93.3H*23.5W*13.5D" },
  { label: "Tank Volume", value: "0.5mL/1mL" },
  { label: "Battery Capability", value: "280mAh" },
  { label: "Resistance", value: "1.8ohm" },
  { label: "Voltage Setting", value: "1.8V - 2.0V - 2.2V" },
  { label: "Housing Material", value: "Plastic" },
  { label: "Ceramic Core", value: "UNICORE" },
  { label: "Central Post", value: "Post-free" },
  { label: "Charging", value: "Type-C" },
  { label: "Options of Activation", value: "Button & Inhale Activated" }
]


</script>

<template>
  <div class="c_1230 c_padding mx-auto pt-[187px] pb-[162px]">
    <div class="title">
      Specifications&nbsp;
    </div>
    <div class="relative mt-[58px] flex justify-start gap-[40px] m_flex_col_r">
      <div class="shrink-0 flex gap-y-[15px] gap-x-[20px] w-[460px] flex-wrap ">
        <div v-for="item in deviceSpecs1" class="item flex flex-col items-center justify-center">
          <div class="label">
            {{item.label}}
          </div>
          <div class="value mt-[9px]">
            {{item.value}}
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col items-center justify-center">
        <img class="max-h-[414px]" src="@/assets/img/icon70.png" alt="">
        <div class="text7 mt-[26px] -translate-x-[4px] text-center">UNIVERSE</div>
      </div>
    </div>
    <div class="relative mt-[120px] flex justify-end gap-[40px] m_flex_col">
      <div class="w-full flex flex-col items-center justify-center -translate-y-[20px] pr-[80px] m_pr_0">
        <img class="max-h-[414px]" src="@/assets/img/icon70.png" alt="">
        <div class="text7 mt-[30px] -translate-x-[16px] text-center">NIVERSE Pro</div>
      </div>
      <div class="shrink-0 flex gap-y-[8px] gap-x-[17px] w-[460px] flex-wrap">
        <div v-for="item in deviceSpecs2" class="item flex flex-col items-center justify-center">
          <div class="label">
            {{item.label}}
          </div>
          <div class="value mt-[9px]">
            {{item.value}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #000;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.item {
  width: 220px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.2);

  .label {
    color: #666;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .value {
    color: #111;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}

.text7 {
  color: #000;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
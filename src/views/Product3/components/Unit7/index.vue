<script setup>
const deviceSpecs1 = [
  { label: "Dimension(mm)", value: "99.3H*22.3W*10.4D" },
  { label: "Tank Volume", value: "0.5mL / 1mL" },
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
  { label: "Tank Volume", value: "0.5mL / 1mL" },
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
  <div class="w-[1230px] mx-auto mt-[188px] pb-[180px]">
    <div class="title">
      Specifications
    </div>
    <div class="relative mt-[55px]">
      <div class="flex gap-y-[15px] gap-x-[20px] w-[460px] flex-wrap ">
        <div v-for="item in deviceSpecs1" class="item flex flex-col items-center justify-center">
          <div class="label">
            {{item.label}}
          </div>
          <div class="value mt-[9px]">
            {{item.value}}
          </div>
        </div>
      </div>
      <img src="@/assets/img/icon39.png" class="w-[832px] absolute right-[-239px] -top-[120px]" alt="">
    </div>
    <div class="relative mt-[124px] overflow-hidden">

      <img src="@/assets/img/icon40.png" class="w-[892px] absolute left-[-299px] -top-[134px]" alt="">
      <div class="flex float-right gap-y-[15px] gap-x-[20px] w-[460px] flex-wrap ">
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
.title{
  color: #000;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.item{
  width: 220px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 10px;
  opacity: 0.2;
  background: #D9D9D9;
  .label{
    color: #666;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .value{
    color: #111;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
</style>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { FastImageSequence } from '@mediamonks/fast-image-sequence';

gsap.registerPlugin(ScrollTrigger)

const _ref = ref({})
const setRef = (name) => (ref) => {
    _ref.value[name] = ref;  
};

const setGsap = (timeouts) => {
  const acProThirteen_textU = document.getElementsByClassName("acProThirteen_textU");


  setRef("unit3")(new FastImageSequence(document.getElementById('unit3'), {
      frames: 18,
      src: [
          {
              tarURL: '/product1.tar',
              imageURL: (index) => `product1/frame${index + 1}.png`,
          },
      ],
      loop: false,
      objectFit: 'cover',
  }));
  gsap.timeline({
      scrollTrigger: {
          pin: true,
          trigger: "#unit3", // 触发器元素
          start: "50% 50%", // 页面滚动到一半时触发（视窗高度的50%，元素的50%）
          end: "+=5000px", // 动画结束的位置
          scrub: true, // 让动画随着滚动同步播放
          onUpdate: (self) => {
              const progress = self.progress.toFixed(2) * 19;

              if (_ref.value["unit3"]) {
                  _ref.value["unit3"].progress = self.progress;
              }

              if (progress >= 5 && progress <= 18) {
                  Array.from(acProThirteen_textU).forEach((el) => {
                      el.style.opacity = (10 - (progress - 85)) / 10;
                  });
              }
          },
      },
  });
};

onMounted(() => {
  setGsap();
})
</script>

<template>
  <div class="c_1300 c_padding">
    <div class=""></div>
    <div id="unit3" class="h-100vh mt-[133px] ">
      <div class="title">
        UNICORE<br />
        POWERED
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  text-align: center;
  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px;
  /* 100% */
  background: linear-gradient(180deg, #1CE785 0%, #A8FFD5 50%, #1CE785 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.smallTitle {
  padding-right: 10px;
  color: #1CE785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.wTitle {
  color: #FFF;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin-top: 20px;
}

.text {
  max-width: 1200px;
  margin: 0 auto;
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
}

.text1 {
  color: #1CE785;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  /* 75% */
}

.text2 {
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
  margin-top: 0px;
}
</style>
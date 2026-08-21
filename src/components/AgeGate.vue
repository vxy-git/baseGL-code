<template>
  <Teleport to="body">
    <transition name="age-gate-fade">
      <section v-if="visible" class="age-gate" role="dialog" aria-modal="true" aria-labelledby="age-gate-title">
        <div class="age-gate__content">
          <h1 id="age-gate-title" class="age-gate__title">Are you 21 or older?</h1>

          <div class="age-gate__actions">
            <button class="age-gate__button age-gate__button--primary" type="button" @click="confirmAge">
              Yes
            </button>
            <button class="age-gate__button" type="button">No</button>
          </div>
        </div>
      </section>
    </transition>
  </Teleport>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const visible = ref(true)
let originalOverflow = ''

const confirmAge = () => {
  visible.value = false
  document.body.style.overflow = originalOverflow
}

onMounted(() => {
  originalOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
})

onBeforeUnmount(() => {
  document.body.style.overflow = originalOverflow
})
</script>

<style scoped lang="scss">
.age-gate {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: grid;
  place-items: center;
  min-height: 100dvh;
  padding: 24px;
  color: #fff;
  background: #050505;
}

.age-gate__content {
  width: max-content;
  padding: 80px 120px;
  border: 2px solid #1ce785;
  border-radius: 26px;
  text-align: center;
}

.age-gate__title {
  margin: 0;
  font-size: clamp(38px, 5.6vw, 76px);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.age-gate__actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: clamp(42px, 6vw, 72px);
}

.age-gate__button {
  width: 180px;
  min-height: 58px;
  padding: 14px 30px;
  background-color: #272727;
  border-radius: 0;
  color: #fff;
  font: inherit;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.08em;
  // text-transform: uppercase;
  cursor: pointer;
  transition:
    color 0.25s ease,
    background-color 0.25s ease;
}

.age-gate__button:hover,
.age-gate__button:focus-visible {
  opacity: 0.85;
}

.age-gate__button--primary {
  border-color: #1ce785;
  color: #222;
  background: #1ce785;
}

.age-gate-fade-leave-active {
  transition: opacity 0.35s ease;
}

.age-gate-fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: $breakpoint-mobile) {
  .age-gate__content {
    padding: 60px 80px;
  }

  .age-gate__title {
    font-size: 38px;
  }
}
</style>

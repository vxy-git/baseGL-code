<script setup>
import { useUnitData } from '@/composables/useUnitData'
import { unit2Data } from '@/data/why-caleaf/unit2'

const props = defineProps({
  data: { type: Object, default: null },
})

const unitData = useUnitData(props, unit2Data)
</script>

<template>
  <section class="why-caleaf-facts">
    <div class="facts-container">
      <h2 class="facts-title">{{ unitData.title }}</h2>

      <div class="facts-grid">
        <!-- Row 1: 4 items -->
        <div class="facts-row-top">
          <div class="fact-item">
            <div class="fact-number">
              <span class="fact-prefix">{{ unitData.items[0].prefix }}</span>
              <span class="fact-suffix">{{ unitData.items[0].suffix }}</span>
            </div>
            <div class="fact-label">{{ unitData.items[0].label }}</div>
          </div>

          <div class="fact-item">
            <div class="fact-number-single">{{ unitData.items[1].number }}</div>
            <div class="fact-label">{{ unitData.items[1].label }}</div>
          </div>

          <div class="fact-item">
            <div class="fact-number">
              <span class="fact-prefix">{{ unitData.items[5].prefix }}</span>
              <span class="fact-suffix">{{ unitData.items[5].suffix }}</span>
            </div>
            <div class="fact-label">{{ unitData.items[5].label }}</div>
          </div>

          <div class="fact-item">
            <div class="fact-number">
              <span class="fact-prefix">{{ unitData.items[6].prefix }}</span>
              <span class="fact-suffix">{{ unitData.items[6].suffix }}</span>
            </div>
            <div class="fact-label">{{ unitData.items[6].label }}</div>
          </div>
        </div>

        <!-- Row 2: 3 items, centered -->
        <div class="facts-row-bottom">
          <div class="fact-item">
            <div class="fact-number-single">{{ unitData.items[2].number }}</div>
            <div class="fact-label">{{ unitData.items[2].label }}</div>
          </div>

          <div class="fact-item">
            <div class="fact-number-single">{{ unitData.items[3].number }}</div>
            <div class="fact-label">{{ unitData.items[3].label }}</div>
          </div>

          <div class="fact-item">
            <div class="fact-locations">{{ unitData.items[4].locations }}</div>
            <div class="fact-label">{{ unitData.items[4].label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.why-caleaf-facts {
  width: 100%;
  display: flex;
  justify-content: center;
}

.facts-container {
  max-width: $breakpoint-design;
  width: 100%;
  padding: 88px 0 0; // 990 - 222 (hero top) - 680 (hero height) = 88
}

.facts-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #000000;
  text-align: center;
  margin-bottom: 82px; // 1119 - 1037 (title bottom) = 82
}

.facts-grid {
  max-width: 100%;
  width: 1300px;
  margin: 0 auto;
}

.facts-row-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;

  .fact-item {
    flex: 1;
  }
}

.facts-row-bottom {
  display: flex;
  justify-content: space-between;
  width: 73%;
  margin: auto;
  // gap: 100px;
}

.fact-item {
  text-align: center;
}

.fact-number {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #000000;
  line-height: 1.2;
  margin-bottom: 12px;

  .fact-prefix {
    font-size: 50px;
  }

  .fact-suffix {
    font-size: 30px;
  }
}

.fact-number-single {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 50px;
  color: #000000;
  line-height: 1.2;
  margin-bottom: 12px;
}

.fact-locations {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  text-align: center;
  margin-bottom: 12px;
  line-height: 1.4;
  white-space: break-spaces;
}

.fact-label {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #666666;
}

// 移动端适配
@media (max-width: $breakpoint-tablet) {
  .facts-container {
    padding: 60px 0 0;
  }

  .facts-title {
    font-size: 28px;
  }

  .fact-number-single {
    font-size: 36px;
  }

  .fact-number .fact-prefix {
    font-size: 36px;
  }

  .fact-number .fact-suffix {
    font-size: 22px;
  }

  .fact-locations {
    font-size: 16px;
  }

  .fact-label {
    font-size: 14px;
  }
}
</style>

<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import ContactFormCard from '@/components/ContactFormCard/index.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit6Data } from '@/data/customize/unit6'
import { data as contactData } from '@/data/contactus/data'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit6Data)
</script>

<template>
  <section class="unit6">
    <div class="contactPanel">
      <MediaAsset :src="unitData.background" type="image" alt="" class="contactBg" />
      <ContactFormCard
        class="floatingFormCard"
        :title="unitData.formTitle"
        :submit-text="unitData.submitText"
        :form-data="contactData"
      />
    </div>
    <div class="socialBlock">
      <h2>{{ unitData.socialTitle }}</h2>
      <a href="https://www.instagram.com/caleaftech/" target="_blank" rel="noreferrer" aria-label="Instagram">
        <span></span>
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit6 {
  background: #fff;
}

.contactPanel {
  position: relative;
  height: 780px;
  overflow: hidden;
}

.contactBg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.floatingFormCard {
  position: absolute;
  top: 75px;
  left: 50%;
  transform: translateX(-50%);
}

.socialBlock {
  min-height: 456px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
  color: #111;
}

.socialBlock h2 {
  font-size: 60px;
  font-weight: 700;
  line-height: 1;
}

.socialBlock a {
  position: relative;
  width: 64px;
  height: 64px;
  border: 4px solid #111;
  border-radius: 18px;
  color: #111;
}

.socialBlock a::before {
  content: '';
  position: absolute;
  top: 13px;
  right: 13px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #111;
}

.socialBlock span {
  position: absolute;
  inset: 15px;
  border: 4px solid #111;
  border-radius: 50%;
}

@media screen and (max-width: $breakpoint-mobile) {
  .contactPanel {
    height: auto;
    min-height: 720px;
    padding: 44px 20px;
  }

  .contactBg {
    position: absolute;
    inset: 0;
  }

  .floatingFormCard {
    position: relative;
    top: auto;
    left: auto;
    margin: 0 auto;
    transform: none;
  }

  .socialBlock {
    min-height: 320px;
    gap: 34px;
  }

  .socialBlock h2 {
    font-size: 40px;
  }
}
</style>

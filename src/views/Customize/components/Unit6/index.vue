<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import ContactFormCard from '@/components/ContactFormCard/index.vue'
import ConnectSocial from '@/components/ConnectSocial/index.vue'
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
    <ConnectSocial
      :title="unitData.socialTitle"
      :instagram-icon="unitData.instagramIcon"
      :instagram-link="unitData.instagramLink"
    />
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

}
</style>

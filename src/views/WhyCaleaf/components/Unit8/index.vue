<script setup>
import ConnectSocial from '@/components/ConnectSocial/index.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit8Data } from '@/data/why_caleaf/unit8'

const props = defineProps({
  data: { type: Object, default: null },
})

const unitData = useUnitData(props, unit8Data)
</script>

<template>
  <ConnectSocial
    :title="unitData.title"
    :instagram-icon="unitData.instagramIcon"
    :instagram-link="unitData.instagramLink"
  />
</template>

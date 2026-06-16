<script setup>
import ConnectSocial from '@/components/ConnectSocial/index.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit7Data } from '@/data/us_local_service/unit7'

const props = defineProps({
  data: { type: Object, default: null },
})

const unitData = useUnitData(props, unit7Data)
</script>

<template>
  <ConnectSocial
    :title="unitData.title"
    :instagram-icon="unitData.instagramIcon"
    :instagram-link="unitData.instagramLink"
  />
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  showDesc: {
    type: Boolean,
    default: false
  },
  clickable: {
    type: Boolean,
    default: true
  },
  width: {
    type: [String, Number],
    default: '100%'
  },
  minWidth: {
    type: [String, Number],
    default: '295px'
  },
  height: {
    type: [String, Number],
    default: '440px'
  },
  padding: {
    type: [String, Number],
    default: '28px'
  },
  showCapacity: {
    type: Boolean,
    default: true
  },
  showBadge: {
    type: Boolean,
    default: true
  },
  ctaText: {
    type: String,
    default: 'Learn more'
  }
})

const emit = defineEmits(['click'])

const router = useRouter()
const productLink = (linkType) => `/${linkType}`

const normalizeSize = (value) => (typeof value === 'number' ? `${value}px` : value)

const cardStyle = computed(() => ({
  '--card-width': normalizeSize(props.width),
  '--card-min-width': normalizeSize(props.minWidth),
  '--card-height': normalizeSize(props.height),
  // '--card-padding': normalizeSize(props.padding)
}))

const handleClick = () => {
  emit('click', props.data)
  if (!props.clickable) return
  router.push(productLink(props.data?.linkType))
}
</script>

<template>
  <div class="product-item" :style="cardStyle">
    <div class="card-surface" @click="handleClick">
      <img v-if="data.background" class="product-featured-image" :src="data.background"
        :alt="(data.alt || data.name) + ' featured'">
      <div class="media">
        <img class="product-image" :src="data.image" :alt="data.alt || data.name">
      </div>
      <span class="mask"></span>
      <div class="contentBox">
        <div class="text-group">
          <span v-if="showBadge && data.isNew" class="badge">New</span>
          <h3 class="product-name">{{ data.name }}</h3>
          <p v-if="showDesc && data.description" class="product-desc">{{ data.description }}</p>
        </div>
        <div class="card-footer">
          <span class="more">{{ ctaText }}</span>
          <span v-if="showCapacity && data.capacity" class="capacity-chip">{{ data.capacity }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-item {
  // min-width: var(--card-min-width);
  // width: var(--card-width);
  // height: var(--card-height);
  flex-shrink: 0;
  display: flex;
  align-items: stretch;
}

.contentBox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  padding: 30px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.card-surface {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: var(--card-padding);
  border-radius: 20px;
  overflow: hidden;
  background: #f8f9fd;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, color 0.3s ease;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    border: 1px solid rgba(28, 231, 133, 0.08);
    pointer-events: none;
    z-index: 1;
  }

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    color: #ffffff;

    .product-featured-image {
      opacity: 1;
      transform: scale(1.1);
    }

    .product-image {
      opacity: 0;
    }

    .product-name,
    .product-desc {
      color: #ffffff;
    }
  }
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 145px;
  border-radius: 20px 20px 0 0;
  opacity: 0.3;
  background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%);
}

.badge {
  color: #1CE785;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  transition: color 0.3s ease;
}

.media {
  // position: absolute;
  // top: 0;
  // left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.product-featured-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transform: scale(1);
  transition: opacity 0.5s ease, transform 0.5s ease;
  z-index: 0;
}

.product-image {
  position: relative;
  z-index: 2;
  transition: opacity 0.5s ease;
}

.text-group {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product-name {
  color: #ffffff;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  transition: color 0.3s ease;
}

.product-desc {
  font-size: 16px;
  color: #ffffff;
  opacity: 0.7;
  line-height: 1.6;
  transition: color 0.3s ease;
  text-align: center;
}

.more {
  color: #fafafa;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  text-decoration: underline;
}

.card-footer {
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.capacity-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  line-height: 30px;
  border-radius: 50px;
  font-size: 16px;
  background: #ffffff;
  color: #111111;
  font-weight: 600;
}
</style>

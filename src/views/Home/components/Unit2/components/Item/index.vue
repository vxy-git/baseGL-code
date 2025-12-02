<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const router = useRouter()
const productLink = (linkType) => `/${linkType || 1}`
const goProduct = () => {
  router.push(productLink(props.data?.linkType))
}
</script>

<template>
<div class="item">
  <div class="card-surface" @click="goProduct">
    <img v-if="data.background" class="product-featured-image" :src="data.background" :alt="data.alt + ' featured'">
    <div class="media">
      <img class="product-image" :src="data.image" :alt="data.alt">
    </div>
    <span class="mask"></span>
    <div class="text-group">
      <span v-if="data.isNew" class="badge">New</span>
      <h3 class="product-name">{{ data.name }}</h3>
      <p class="product-desc">{{ data.description }}</p>
    </div>
    <div class="card-footer">
      <span class="more">Learn more</span>
      <span class="capacity-chip">{{ data.capacity }}</span>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.item{
  min-width: 280px;
  width: 100%;
  height: 440px;
  flex-shrink: 0;
  display: flex;
  align-items: stretch;
}

.card-surface {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 28px;
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
  position: absolute;
  top: 0;
  left: 0;
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
  position: absolute;
  left: 28px;
  bottom: 28px;
  right: 28px;
  z-index: 1;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.capacity-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  border-radius: 50px;
  font-size: 16px;
  background: #ffffff;
  color: #111111;
  font-weight: 600;
}
</style>

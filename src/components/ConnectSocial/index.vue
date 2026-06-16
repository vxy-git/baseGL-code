<script setup>
defineProps({
  title: {
    type: String,
    default: 'Connect with us',
  },
  instagramIcon: {
    type: String,
    default: '/assets/img/icon-instagram-large.svg',
  },
  instagramLink: {
    type: String,
    default: 'https://www.instagram.com/caleaftechofficial/',
  },
})
</script>

<template>
  <section class="connectSocial c_1300">
    <h2 class="connectTitle">{{ title }}</h2>
    <a
      class="connectIcon"
      :href="instagramLink"
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram"
    >
      <img :src="instagramIcon" alt="Instagram" />
    </a>
  </section>
</template>

<style scoped lang="scss">
.connectSocial {
  width: 100%;
  padding: 154px 0 124px;
  text-align: center;
}

.connectTitle {
  margin-bottom: 48px;
  color: #111;
  font-family: Roboto, sans-serif;
  font-size: 60px;
  font-weight: 700;
  line-height: 30px;
}

.connectIcon {
  display: block;
  width: 64px;
  height: 64px;
  margin: 0 auto;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.connectIcon:hover {
  opacity: 0.7;
}

.connectIcon img {
  width: 100%;
  height: 100%;
}

@media (max-width: $breakpoint-tablet) {
  .connectSocial {
    padding: 80px 20px;
  }

  .connectTitle {
    margin-bottom: 30px;
    font-size: 32px;
    line-height: 1.2;
  }
}
</style>

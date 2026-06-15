<script setup>
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/Footer.vue'
import MediaAsset from '@/components/MediaAsset.vue'
import ContactFormCard from '@/components/ContactFormCard/index.vue'
import { data } from '@/data/contactus/data'
</script>

<template>
  <div>
    <div class="contactPage">
      <Header header-class="white" />

      <!-- Hero Section -->
      <section class="hero mt_nav">
        <div class="heroBackground">
          <MediaAsset
            :src="data.heroBanner"
            type="image"
            class="heroImage m_hide"
            alt=""
            :lazy="false"
          />
          <MediaAsset
            :src="data.heroBannerMobile"
            type="image"
            class="heroImage pc_hide"
            alt=""
            :lazy="false"
          />
        </div>
        <div class="size-full absolute top-0 left-0 flex flex-col justify-center">
          <div class="heroContent">
            <h1 class="heroTitle w-full c_1300 c_padding text-right">
              {{ data.content.heroTitle }}
            </h1>
            <div class="divider"></div>
            <div class="w-full c_1300 c_padding m-auto flex flex-col items-end">
              <p class="heroEmail">Email: {{ data.contact.email }}</p>
              <div class="socialSection mt-[34px] pr-[4px]">
                <p class="followText">{{ data.content.followText }}</p>
                <a :href="data.contact.instagramLink" target="_blank" rel="noopener noreferrer">
                  <MediaAsset
                    :src="data.icons.instagram"
                    type="image"
                    class="socialIcon"
                    alt="Instagram"
                    :lazy="false"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Form Section -->
      <section class="formSection overflow-hidden c_padding">
        <div class="formContainer">
          <ContactFormCard
            :title="data.content.formTitle"
            :submit-text="data.content.submitButtonText"
            :form-data="data"
          />
          <div class="formImage">
            <MediaAsset :src="data.icons.product" type="image" alt="Product Image" :lazy="false" />
          </div>
        </div>
      </section>
    </div>
    <div class="mt-[16px]">
      <Footer />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
.hero {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
}

.contactPage {
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  font-family: Roboto, sans-serif;
  color: #555;
}

.heroBackground {
  width: 100%;
  height: 100%;
}

.heroImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.heroContent {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  z-index: 10;
  padding-bottom: 70px;
}

.heroTitle {
  white-space: nowrap;
  color: #fff;
  font-family: Roboto;
  font-size: 100px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.heroEmail {
  color: #fff;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  margin-top: 18px;
  line-height: 35px;
}

.divider {
  height: 1px;
  background-color: #fff;
  opacity: 0.2;
  margin-top: 2.5px;
  width: 100vw;
}

.socialSection {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 25px;
}

.followText {
  color: #fff;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.socialIcon {
  object-fit: contain;
  width: 44px;
  height: 44px;
  margin-right: -5px;
}

/* Form Section */
.formSection {
  width: 100%;
  background-color: #fff;
  padding-top: 100px;
}

.formContainer {
  max-width: 1500px;
  min-height: 780px;
  border-radius: 20px;
  background: #f8f9fc;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 3.125vw;
  padding: 75px 30px;
}

.form {
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.formImage {
  width: 687px;
  height: 693.134px;
  margin-top: -45px;
  display: flex;
  align-items: center;
}

.formImage img {
  max-width: 687px;
  width: 100%;
  height: auto;
  object-fit: cover;
}

@media screen and (max-width: $breakpoint-mobile) {
  .heroContent {
    margin-top: 30vh;
  }

  .socialIcon {
    width: 100px;
    height: 100px;
  }
}
</style>

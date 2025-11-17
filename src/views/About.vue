<template>
  <img src="/about.jpg" alt="Overlay Image"
       class="pointer-events-none z-50 absolute top-0 left-1/2 -translate-x-1/2 w-full opacity-50"/>

  <div :class="$style.contactPage">
    <Header headerClass="white"/>

    <!-- Hero Section -->
    <section :class="$style.hero">
      <div :class="$style.heroBackground">
        <img src="@/assets/img/icon43.png" :class="$style.heroImage" alt=""/>
      </div>
      <div :class="$style.heroContent">
        <h1 :class="$style.heroTitle">Get in Touch</h1>
        <p :class="$style.heroEmail">Email: info@caleaftech.com</p>
        <div :class="$style.divider"></div>
        <div :class="$style.socialSection" class="mt-[34px] pr-[4px]">
          <p :class="$style.followText">Follow Us</p>
          <img src="@/assets/img/icon44.png" :class="$style.socialIcon" alt="Instagram"/>
        </div>
      </div>
    </section>

    <!-- Form Section -->
    <section :class="$style.formSection" class="overflow-hidden">
      <div :class="$style.formContainer" class="pl-[156px] pr-[160px] !pt-[75px]">
        <div :class="$style.formCard" class="px-[40px] pt-[55px]">
          <h2 :class="$style.formTitle">Get Samples and Pricing</h2>
          <form :class="$style.form">
            <div :class="$style.formField">
              <input type="text" placeholder="Your name*"/>
            </div>
            <div :class="$style.formField">
              <input type="email" placeholder="Email Address*"/>
            </div>
            <div :class="$style.formField">
              <input type="text" placeholder="Country*"/>
              <img src="@/assets/img/icon46.png" :class="$style.dropdownIcon" alt=""/>
            </div>
            <div :class="$style.formField">
              <input type="text" placeholder="State"/>
              <img src="@/assets/img/icon46.png" :class="$style.dropdownIcon" alt=""/>
            </div>
            <div :class="$style.formField">
              <input type="tel" placeholder="Phone Number"/>
            </div>
            <div :class="$style.formField">
              <textarea placeholder="Message"></textarea>
            </div>
            <button type="submit" :class="$style.submitBtn">SUBMIT</button>
          </form>
        </div>
        <div :class="$style.formImage">
          <img src="@/assets/img/icon45.png" alt="Product Image"/>
        </div>
      </div>
    </section>


  </div>
  <div class="bg-white mt-[16px]">
    <Footer/>
  </div>
</template>

<style module>
/* Main Container */
.contactPage {
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  font-family: Roboto, sans-serif;
  color: #555;
}

/* Header */
.header {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: transparent;
  z-index: 100;
  padding: 30px 0;
}

.headerContent {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 310px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
}

.logo {
  width: 187.2px;
  height: 30px;
  object-fit: cover;
}

.nav {
  flex: 1;
  margin-left: 60px;
  font-size: 16px;
}

.contactBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1ce785;
  border-radius: 50px;
  width: 140px;
  height: 40px;
  color: #222;
  font-size: 18px;
  margin-right: 32px;
  cursor: pointer;
}

.headerIcon {
  width: 22px;
  height: 22px;
}

/* Hero Section */
.hero {
  position: relative;
  width: 100%;
  height: 975px;
  display: flex;
  //align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  padding-top: 290px;
}

.heroBackground {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.heroImage {
  width: 100%;
  height: 975px;
  object-fit: cover;
}

.heroContent {
  margin: 0 auto;
  width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  z-index: 10;
}

.heroTitle {
  color: #FFF;
  font-family: Roboto;
  font-size: 100px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.heroEmail {
  color: #FFF;
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
  margin-top: 30px;
  width: 100vw;
  transform: translateX(calc((100vw - 1300px) / 2));

}

.socialSection {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 25px;
}

.followText {
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.socialIcon {
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
  width: 1500px;
  height: 780px;
  border-radius: 20px;
  background: #F8F9FC;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.formCard {
  width: 440px;
  height: 630px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
}

.formTitle {
  color: #000;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.form {
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 2px;
}

.formField {
  position: relative;
}

.formField input,
.formField textarea {
  width: 100%;
  padding: 15px 14px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  color: #555;
  box-sizing: border-box;
}

.formField input {
  height: 50px;
}

.formField textarea {
  height: 100px;
  resize: vertical;
}

.formField input::placeholder,
.formField textarea::placeholder {
  color: #555;
}

.dropdownIcon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  object-fit: contain;
}

.submitBtn {
  width: 100%;
  height: 50px;
  background-color: #1ce785;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  color: #111;
  cursor: pointer;
}

.formImage {
  width: 687px;
  height: 693.134px;
  flex-shrink: 0;
  aspect-ratio: 687.00/693.13;
  margin-top: -45px;
}

.formImage img {
  max-width: 687px;
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Footer */
.footer {
  width: 100%;
  background-color: #fff;
  padding: 60px 0 30px 0;
}

.footerContent {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 310px;
}

.footerColumns {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 60px;
  margin-bottom: 50px;
}

.footerColumn h3 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin: 0 0 32px 0;
}

.footerColumn ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footerColumn li {
  font-size: 16px;
  line-height: 32px;
  color: #555;
}

.subscribeText {
  font-size: 16px;
  line-height: 32px;
  color: #555;
  margin: 0 0 17px 0;
}

.subscribeForm {
  display: flex;
  margin-bottom: 17px;
}

.subscribeForm input {
  flex: 1;
  height: 44px;
  padding: 0 17px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  color: #555;
}

.subscribeForm input::placeholder {
  color: #999;
}

.subscribeForm button {
  width: 90px;
  height: 44px;
  background-color: #1ce785;
  border: none;
  color: #000;
  font-size: 16px;
  line-height: 32px;
  cursor: pointer;
}

.privacyCheckbox {
  display: flex;
  gap: 12px;
  margin-bottom: 36px;
}

.privacyCheckbox input[type="checkbox"] {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-top: 3px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}

.privacyCheckbox label {
  font-size: 14px;
  line-height: 22px;
  color: #555;
}

.privacyLink {
  color: #000;
}

.socialIcons {
  display: flex;
  gap: 32px;
}

.socialIcons img {
  width: 18px;
  height: 18px;
}

.footerBottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.copyright,
.designer {
  font-size: 14px;
  line-height: 22px;
  color: #555;
}
</style>
<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer.vue";
</script>
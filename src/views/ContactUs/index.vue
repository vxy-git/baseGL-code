<script setup>
import { ref, computed } from 'vue'
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer.vue";

const formData = ref({
  name: '',
  email: '',
  country: '',
  state: '',
  phone: '',
  message: ''
})

const showCountryDropdown = ref(false)
const showStateDropdown = ref(false)

const countries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'Germany',
  'France',
  'China',
  'Japan',
  'South Korea',
  'Singapore',
  'India',
  'Brazil',
  'Mexico',
  'Netherlands',
  'Sweden'
]

const statesByCountry = {
  'United States': [
    'California', 'Texas', 'Florida', 'New York', 'Pennsylvania',
    'Illinois', 'Ohio', 'Georgia', 'North Carolina', 'Michigan',
    'New Jersey', 'Virginia', 'Washington', 'Arizona', 'Massachusetts'
  ],
  'Canada': [
    'Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba',
    'Saskatchewan', 'Nova Scotia', 'New Brunswick', 'Newfoundland and Labrador',
    'Prince Edward Island'
  ],
  'China': [
    'Beijing', 'Shanghai', 'Guangdong', 'Zhejiang', 'Jiangsu',
    'Sichuan', 'Hubei', 'Fujian', 'Shaanxi', 'Hunan'
  ],
  'Australia': [
    'New South Wales', 'Victoria', 'Queensland', 'Western Australia',
    'South Australia', 'Tasmania', 'Australian Capital Territory',
    'Northern Territory'
  ]
}

const availableStates = computed(() => {
  return statesByCountry[formData.value.country] || []
})

const selectCountry = (country) => {
  formData.value.country = country
  formData.value.state = '' // 重置州选择
  showCountryDropdown.value = false
}

const selectState = (state) => {
  formData.value.state = state
  showStateDropdown.value = false
}

// 切换下拉框显示
const toggleCountryDropdown = () => {
  showCountryDropdown.value = !showCountryDropdown.value
  showStateDropdown.value = false
}

const toggleStateDropdown = () => {
  if (availableStates.value.length > 0) {
    showStateDropdown.value = !showStateDropdown.value
    showCountryDropdown.value = false
  }
}

// 关闭所有下拉框
const closeDropdowns = () => {
  showCountryDropdown.value = false
  showStateDropdown.value = false
}
</script>

<template>
  <div @click="closeDropdowns">
    <!-- <img src="/about.jpg" alt="Overlay Image"
         class="pointer-events-none z-50 absolute top-0 left-1/2 -translate-x-1/2 w-full opacity-50"/> -->

    <div class="contactPage">
      <Header headerClass="white" />

      <!-- Hero Section -->
      <section class="hero">
        <div class="heroBackground">
          <img src="@/assets/img/icon43.png" class="heroImage" alt="" />
          <div class="divider"></div>
        </div>
        <div class="heroContent c_1300 c_padding">
          <h1 class="heroTitle">Get in Touch</h1>
          <p class="heroEmail">Email: info@caleaftech.com</p>
          <div class="socialSection mt-[34px] pr-[4px]">
            <p class="followText">Follow Us</p>
            <img src="@/assets/img/icon44.png" class="socialIcon" alt="Instagram" />
          </div>
        </div>
      </section>

      <!-- Form Section -->
      <section class="formSection overflow-hidden c_padding">
        <div class="formContainer">
          <div class="formCard px-[40px] pt-[60px]">
            <h2 class="formTitle">Get Samples and Pricing</h2>
            <form class="form" @click.stop>
              <div class="formField">
                <input type="text" v-model="formData.name" placeholder="Your name*" />

              </div>
              <div class="formField">
                <input type="email" v-model="formData.email" placeholder="Email Address*" />
              </div>

              <div class="formField selectField">
                <div class="selectInput" @click="toggleCountryDropdown">
                  <span :class="formData.country ? 'selectedValue' : 'placeholder'">
                    {{ formData.country || 'Country*' }}
                  </span>
                  <img src="@/assets/img/icon46.png" :class="['dropdownIcon', showCountryDropdown && 'rotated']"
                    alt="" />
                </div>
                <div v-if="showCountryDropdown" class="dropdownList" @click.stop>
                  <div v-for="country in countries" :key="country" class="dropdownItem" @click="selectCountry(country)">
                    {{ country }}
                  </div>
                </div>
              </div>

              <div class="formField selectField">
                <div :class="['selectInput', !formData.country && 'disabled']" @click="toggleStateDropdown">
                  <span :class="formData.state ? 'selectedValue' : 'placeholder'">
                    {{ formData.state || 'State' }}
                  </span>
                  <img src="@/assets/img/icon46.png" :class="['dropdownIcon', showStateDropdown && 'rotated']" alt="" />
                </div>
                <div v-if="showStateDropdown && availableStates.length > 0" class="dropdownList" @click.stop>
                  <div v-for="state in availableStates" :key="state" class="dropdownItem" @click="selectState(state)">
                    {{ state }}
                  </div>
                </div>
              </div>

              <div class="formField">
                <input type="tel" v-model="formData.phone" placeholder="Phone Number" />
              </div>
              <div class="formField">
                <textarea v-model="formData.message" placeholder="Message"></textarea>
              </div>
              <button type="submit" class="submitBtn">SUBMIT</button>
            </form>
          </div>
          <div class="formImage">
            <img src="@/assets/img/icon45.png" alt="Product Image" />
          </div>
        </div>
      </section>
    </div>
    <div class="bg-white mt-[16px]">
      <Footer />
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  min-height: calc(975px / 1920px * 100vw);
  position: relative;
  width: 100%;
  height: 975px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  
}
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

.heroBackground {
  position: absolute;
  top: 0;
  left: 0;
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
  position: absolute;
  top: 50%;
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
  max-width: 1500px;
  height: 780px;
  border-radius: 20px;
  background: #F8F9FC;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 3.125vw;
  padding: 75px 30px;
}

.formCard {
  flex-shrink: 0;
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

/* 自定义下拉选择框 */
.selectField {
  position: relative;
  z-index: 10;
}

.selectInput {
  width: 100%;
  height: 50px;
  padding: 15px 14px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  color: #555;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  transition: border-color 0.2s;
}

.selectInput:hover {
  border-color: #1ce785;
}

.selectInput.disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
  opacity: 0.6;
}

.placeholder {
  color: #555;
}

.selectedValue {
  color: #222;
  font-weight: 500;
}

.dropdownIcon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  object-fit: contain;
  pointer-events: none;
  transition: transform 0.2s;
}

.dropdownIcon.rotated {
  transform: translateY(-50%) rotate(180deg);
}

/* 下拉列表 */
.dropdownList {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  max-height: 200px;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.dropdownItem {
  padding: 12px 14px;
  font-size: 16px;
  color: #555;
  cursor: pointer;
  transition: background-color 0.2s;
}

.dropdownItem:hover {
  background-color: #f8f9fc;
  color: #222;
}

.dropdownItem:active {
  background-color: #e8f5e9;
}

/* 下拉列表滚动条样式 */
.dropdownList::-webkit-scrollbar {
  width: 6px;
}

.dropdownList::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.dropdownList::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.dropdownList::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

.submitBtn {
  margin-top: 5px;
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
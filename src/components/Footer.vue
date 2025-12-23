<template>
  <footer class="site-footer c_padding">
    <div class="footer-container c_1300">
      <div class="footer-box">
        <div class="footer-columns">
          <!-- Products Column -->
          <div class="footer-column">
            <h4 class="footer-heading">Products</h4>
            <ul class="footer-links">
              <li>
                <RouterLink :to="{ path: '/list', query: { tab: 0 } }">For Resin/Rosin</RouterLink>
              </li>
              <!-- <li><a href="#">Pod System</a></li>
              <li><a href="#">Full Ceramic</a></li> -->
              <li>
                <RouterLink :to="{ path: '/list', query: { tab: 1 } }">D9 Distillate</RouterLink>
              </li>
              <!-- <li><a href="#">US STOCK</a></li>
              <li><a href="#">Dab Pen</a></li>
              <li><a href="#">510 Cartridge</a></li>
              <li><a href="#">D8 Distillate</a></li> -->
            </ul>
          </div>

          <!-- Technology Column -->
          <div class="footer-column">
            <h4 class="footer-heading">Technology</h4>
            <ul class="footer-links">
              <li>
                <RouterLink to="/technology">UNICORE</RouterLink>
              </li>
              <!-- <li><a href="#">Repair Service</a></li>
              <li><a href="#">After-Sales Policy</a></li>
              <li><a href="#">Care Service</a></li>
              <li><a href="#">Downloads</a></li> -->
            </ul>
          </div>

          <!-- Customize Column -->
          <div class="footer-column pl-[20px]">
            <h4 class="footer-heading">Customize</h4>
            <ul class="footer-links">
              <!-- <li><a href="#">For Resin/</a></li>
              <li><a href="#">Rosin</a></li>
              <li><a href="#">Pod System</a></li>
              <li><a href="#">Full Ceramic</a></li>
              <li><a href="#">D9 Distillate</a></li>
              <li><a href="#">US STOCK</a></li>
              <li><a href="#">Dab Pen</a></li>
              <li><a href="#">510 Cartridge</a></li>
              <li><a href="#">D8 Distillate</a></li> -->
            </ul>
          </div>

          <!-- Why Caleaf Column -->
          <div class="footer-column">
            <h4 class="footer-heading">Why Caleaf</h4>
            <ul class="footer-links">
              <!-- <li><a href="#">About Caleaf</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">CSR</a></li>
              <li><a href="#">Awards</a></li>
              <li><a href="#">Join Us</a></li> -->
            </ul>
          </div>

        </div>
        <!-- Subscribe Column -->
        <div class="footer-column subscribe-column">
          <h4 class="footer-heading">Subscribe</h4>
          <p class="subscribe-text">Get the latest news from CALEAF TECH</p>
          <form class="subscribe-form" @submit.prevent="handleSubscribe">
            <input id="subscribe-email" type="email" name="email" placeholder="Email" v-model="email"
              autocomplete="email" class="email-input" />
            <button type="submit" class="signup-btn">Sign Up</button>
          </form>
          <label class="consent-label">
            <input type="checkbox" v-model="agreeToPrivacy" />
            <span>
              I agree with the
              <a href="#">Privacy Policy</a>
              and I'd like to receive the latest CALEAF TECH news and deals by email.
            </span>
          </label>


          <div class="social-links mt-[20px]">
            <h4 class="footer-heading">Follow</h4>
            <!-- <a href="#" aria-label="YouTube" class="social-link">
              <div style="width: 100%; height: 100%; position: relative; overflow: hidden">
                <div style="width: 18px; height: 12.75px; left: 0px; top: 3px; position: absolute; background: #76767F">
                </div>
              </div>
            </a>
            <a href="#" aria-label="LinkedIn" class="social-link">
              <div style="width: 100%; height: 100%; position: relative; overflow: hidden">
                <div
                  style="width: 15.76px; height: 15.72px; left: 1.08px; top: 1.14px; position: absolute; background: #76767F">
                </div>
              </div>
            </a>
            <a href="#" aria-label="Facebook" class="social-link">
              <div style="width: 100%; height: 100%; position: relative; overflow: hidden">
                <div
                  style="width: 8.68px; height: 16.71px; left: 4.66px; top: 0.64px; position: absolute; background: #76767F">
                </div>
              </div>
            </a> -->
            <a href="https://www.instagram.com/caleaftechofficial/" target="_blank" aria-label="Instagram"
              class="social-link">
              <svg t="1766474912709" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="1613" xmlns:xlink="http://www.w3.org/1999/xlink" width="200"
                height="200">
                <path
                  d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9z m0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zM725.5 250.7c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9c-0.1-26.6-21.4-47.9-47.9-47.9z"
                  p-id="1614"></path>
                <path
                  d="M911.8 512c0-55.2 0.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-0.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-0.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9 0.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165z m-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"
                  p-id="1615"></path>
              </svg>
            </a>
            <!-- <a href="#" aria-label="TikTok" class="social-link">
              <div style="width: 100%; height: 100%; position: relative; overflow: hidden">
                <div
                  style="width: 15.64px; height: 18px; left: 1.18px; top: 0px; position: absolute; background: #76767F">
                </div>
              </div>
            </a> -->
          </div>
        </div>
      </div>

      <!-- Separator Line -->
      <div class="footer-separator"></div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p class="copyright">Copyright © 2025 CALEAF TECH All rights reserved.</p>
        <p class="designer">Designed by HOLY</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const agreeToPrivacy = ref(false)

const handleSubscribe = () => {
  if (email.value && agreeToPrivacy.value) {
    // 处理订阅逻辑
    console.log('Subscribe:', email.value)
    // 可以在这里添加实际的订阅 API 调用
  }
}
</script>

<style scoped lang="scss">
.site-footer {
  padding: 88px 0 40px;
}

.footer-container {
  margin: 0 auto;
}

.footer-box {
  display: flex;
  justify-content: space-between;
}

.footer-columns {
  max-width: 943px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.footer-column {
  h4 {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #000000;
    margin: 0 0 8px 0;
  }
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0;

  li {
    margin: 0;
    line-height: 32px;
  }

  a {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #555555;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #1ce785;
    }
  }
}

.subscribe-column {
  width: 298px;

  .subscribe-text {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #555555;
    line-height: 32px;
    margin: 0 0 16px 0;
  }
}

.subscribe-form {
  display: flex;
  align-items: center;
  // gap: 12px;
  margin-bottom: 19px;

  .email-input {
    flex: 1;
    height: 44px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 0 20px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    background: #ffffff;
    color: #111111;

    &::placeholder {
      color: #999999;
    }

    &:focus {
      outline: none;
      border-color: #1ce785;
    }
  }

  .signup-btn {
    white-space: nowrap;
    width: max-content;
    padding: 0 10px;
    height: 44px;
    border: none;
    background: #1ce785;
    color: #111111;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }
}

.consent-label {
  transform: translateX(3px);
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #555555;
  line-height: 22px;
  cursor: pointer;

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    margin-top: 3px;
    cursor: pointer;
    flex-shrink: 0;
  }

  a {
    color: #000000;
    text-decoration: none;

    &:hover {
      color: #1ce785;
    }
  }
}

.footer-separator {
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  margin: 0 0 30px 0;
  margin-top: 22px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 40px;

  .footer-heading {
    margin-bottom: 0;
  }
}

.social-link {
  display: inline-flex;
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  svg {
    width: 100%;
    height: 100%;
  }
}

.copyright,
.designer {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #555555;
  line-height: 22px;
  margin: 0;
}

.copyright {
  text-align: left;
}

.designer {
  text-align: right;
}
</style>

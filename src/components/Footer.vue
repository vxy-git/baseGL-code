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
            <a href="#" aria-label="Instagram" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                <path
                  d="M13.8876 9.1366C13.8876 11.7605 11.7599 13.8876 9.13661 13.8876C6.51274 13.8876 4.38567 11.7605 4.38567 9.13661C4.38554 8.82987 4.41557 8.52385 4.47532 8.22297H1.2793V14.538C1.2793 15.8936 2.37737 16.9939 3.73528 16.9939H14.5379C15.8936 16.9939 16.9939 15.8947 16.9939 14.538V8.22297H13.799C13.8578 8.52397 13.8875 8.82991 13.8876 9.1366ZM14.5379 1.2793H3.73528C2.37851 1.2793 1.2793 2.37909 1.2793 3.73528V6.39569H5.25705C6.11702 5.18053 7.53373 4.38567 9.13661 4.38567C10.7395 4.38567 12.1562 5.18055 13.0162 6.39569H16.9939V3.73528C16.9939 2.37965 15.8941 1.2793 14.5379 1.2793ZM15.7394 4.31258C15.7394 4.5547 15.5418 4.75114 15.3008 4.75114H13.9863C13.7454 4.75114 13.5478 4.55356 13.5478 4.31258V2.99694C13.5478 2.75482 13.7459 2.55839 13.9863 2.55839H15.3008C15.543 2.55839 15.7394 2.75596 15.7394 2.99694V4.31258ZM12.0603 9.13661C12.0603 7.52118 10.7509 6.21295 9.13661 6.21295C7.52233 6.21295 6.21295 7.52118 6.21295 9.13661C6.21295 10.752 7.52233 12.0603 9.13661 12.0603C10.7509 12.0603 12.0603 10.752 12.0603 9.13661Z"
                  fill="#76767F" />
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

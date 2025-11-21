<template>
  <footer class="site-footer container-box">
    <div class="footer-container container-1300">
      <div class="footer-box">
        <div class="footer-columns">
          <!-- Products Column -->
          <div class="footer-column">
            <h4 class="footer-heading">Products</h4>
            <ul class="footer-links">
              <li><a href="#">For Resin/Rosin</a></li>
              <li><a href="#">Pod System</a></li>
              <li><a href="#">Full Ceramic</a></li>
              <li><a href="#">D9 Distillate</a></li>
              <li><a href="#">US STOCK</a></li>
              <li><a href="#">Dab Pen</a></li>
              <li><a href="#">510 Cartridge</a></li>
              <li><a href="#">D8 Distillate</a></li>
            </ul>
          </div>

          <!-- Technology Column -->
          <div class="footer-column">
            <h4 class="footer-heading">Technology</h4>
            <ul class="footer-links">
              <li><a href="#">Product Support</a></li>
              <li><a href="#">Repair Service</a></li>
              <li><a href="#">After-Sales Policy</a></li>
              <li><a href="#">Care Service</a></li>
              <li><a href="#">Downloads</a></li>
            </ul>
          </div>

          <!-- Customize Column -->
          <div class="footer-column pl-[20px]">
            <h4 class="footer-heading">Customize</h4>
            <ul class="footer-links">
              <li><a href="#">For Resin/</a></li>
              <li><a href="#">Rosin</a></li>
              <li><a href="#">Pod System</a></li>
              <li><a href="#">Full Ceramic</a></li>
              <li><a href="#">D9 Distillate</a></li>
              <li><a href="#">US STOCK</a></li>
              <li><a href="#">Dab Pen</a></li>
              <li><a href="#">510 Cartridge</a></li>
              <li><a href="#">D8 Distillate</a></li>
            </ul>
          </div>

          <!-- Why Caleaf Column -->
          <div class="footer-column">
            <h4 class="footer-heading">Why Caleaf</h4>
            <ul class="footer-links">
              <li><a href="#">About Caleaf</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">CSR</a></li>
              <li><a href="#">Awards</a></li>
              <li><a href="#">Join Us</a></li>
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
        </div>
      </div>

      <!-- Separator Line -->
      <div class="footer-separator"></div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <!-- <div class="social-links">
          <a href="#" aria-label="YouTube" class="social-link">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path
                d="M22 12c0-2.21-.18-3.72-.35-4.5-.19-.82-.82-1.46-1.64-1.65C18.22 5.67 12 5.67 12 5.67s-6.22 0-8.01.18c-.82.19-1.45.83-1.64 1.65C2.18 8.28 2 9.79 2 12s.18 3.72.35 4.5c.19.82.82 1.46 1.64 1.65 1.78.18 8.01.18 8.01.18s6.22 0 8.01-.18c.82-.19 1.45-.83 1.64-1.65.17-.78.35-2.29.35-4.5Z"
                fill="#111111" />
              <path d="m10 15 5-3-5-3v6Z" fill="#fff" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" class="social-link">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" fill="#111111" />
              <path
                d="M9 10h2v8H9v-8Zm1-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4 4h2v1.1c.28-.53.97-1.2 2.1-1.2 2.24 0 2.9 1.46 2.9 3.36V18h-2v-4.2c0-1-.02-2.28-1.4-2.28-1.4 0-1.62 1.1-1.62 2.2V18h-2v-8Z"
                fill="#fff" />
            </svg>
          </a>
          <a href="#" aria-label="Facebook" class="social-link">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" fill="#111111" />
              <path
                d="M13.3 18v-4.5h1.7l.25-2h-1.95v-1.3c0-.58.19-1 1.18-1H15V7.4c-.21-.03-.93-.1-1.77-.1-1.75 0-2.95 1.07-2.95 3.03V11.5H8.5v2h1.78V18h3.02Z"
                fill="#fff" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" class="social-link">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="5" fill="#111111" />
              <path
                d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm3.5-5.9a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4Z"
                fill="#fff" />
            </svg>
          </a>
          <a href="#" aria-label="TikTok" class="social-link">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="4" fill="#111111" />
              <path
                d="M15.5 9.8c.55.42 1.22.7 1.95.74V8.6a3.2 3.2 0 0 1-2-.74V6.5h-1.85v7.06a1.32 1.32 0 0 1-2.65 0 1.32 1.32 0 0 1 1.94-1.15v-1.9a3.23 3.23 0 0 0-.9-.13 3.2 3.2 0 1 0 3.2 3.2V9.8Z"
                fill="#fff" />
            </svg>
          </a>
        </div> -->
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
    width: 90px;
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
  gap: 18px;
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

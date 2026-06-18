<template>
  <footer class="site-footer">
    <div class="c_1300 c_padding">
      <div v-if="showLine" class="line"></div>
      <div class="footer-container">
        <div class="footer-box">
          <div class="footer-columns">
            <div
              v-for="(column, index) in footerColumns"
              :key="index"
              class="footer-column"
              :class="{ 'pl-[20px]': column.title === 'Customize' }"
            >
              <h4 class="footer-heading">{{ column.title }}</h4>
              <ul v-if="column.links && column.links.length > 0" class="footer-links">
                <li v-for="(link, linkIndex) in column.links" :key="linkIndex">
                  <RouterLink v-if="link.to" :to="link.to">{{ link.text }}</RouterLink>
                  <a v-else-if="link.href" :href="link.href">{{ link.text }}</a>
                </li>
              </ul>
              <ul v-else class="footer-links"></ul>
            </div>
          </div>
          <!-- Subscribe Column -->
          <div class="footer-column subscribe-column">
            <h4 class="footer-heading">{{ commonFooterData.subscribe.title }}</h4>
            <p class="subscribe-text">{{ commonFooterData.subscribe.description }}</p>
            <form class="subscribe-form" @submit.prevent="handleSubscribe">
              <input
                id="subscribe-email"
                v-model="email"
                type="email"
                name="email"
                :placeholder="commonFooterData.subscribe.inputPlaceholder"
                autocomplete="email"
                class="email-input"
              />
              <button type="submit" class="signup-btn">
                {{ commonFooterData.subscribe.buttonText }}
              </button>
            </form>
            <p v-if="subscribeError" class="subscribe-error">{{ subscribeError }}</p>
            <label class="consent-label">
              <input v-model="agreeToPrivacy" type="checkbox" />
              <span>
                {{ commonFooterData.subscribe.privacyText }}
                <button type="button" class="privacy-link-btn">
                  {{ commonFooterData.subscribe.privacyLinkText }}
                </button>
                {{ commonFooterData.subscribe.privacySuffix }}
              </span>
            </label>

            <div class="social-links mt-[20px]">
              <h4 class="footer-heading">{{ commonFooterData.social.title }}</h4>
              <a
                v-for="(social, index) in commonFooterData.social.links"
                :key="index"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="social.title"
                class="social-link"
              >
                <svg
                  t="1766474912709"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1613"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="200"
                  height="200"
                >
                  <path
                    d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9z m0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zM725.5 250.7c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9c-0.1-26.6-21.4-47.9-47.9-47.9z"
                    p-id="1614"
                  ></path>
                  <path
                    d="M911.8 512c0-55.2 0.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-0.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-0.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9 0.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165z m-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"
                    p-id="1615"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Separator Line -->
        <div class="footer-separator"></div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <p class="copyright">{{ commonFooterData.bottom.copyright }}</p>
          <p class="designer">{{ commonFooterData.bottom.designer }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { footerData } from '@/data/common/footer'
import { productsData } from '@/data/product_list/products'
import { useCmsNavStore } from '@/stores/cmsNav'
import { logger } from '@/utils/logger'

defineProps({
  showLine: {
    type: Boolean,
  },
})

// ========== 使用 Pinia Store 获取导航数据 ==========
const cmsNavStore = useCmsNavStore()

const deepMerge = (target, source) => {
  if (!source || typeof source !== 'object') return target
  const result = { ...target }
  for (const key of Object.keys(source)) {
    if (
      source[key] &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key]) &&
      target[key] &&
      typeof target[key] === 'object' &&
      !Array.isArray(target[key])
    ) {
      result[key] = deepMerge(target[key], source[key])
    } else {
      result[key] = source[key]
    }
  }
  return result
}

const commonFooterData = computed(() => deepMerge(footerData, cmsNavStore.commonFooterData))

/**
 * 获取产品分类链接数据
 * 显示产品分类（For Resin/Rosin、D9 Distillate），而不是具体产品
 * 优先使用 CMS 数据，降级到本地数据
 */
const getProductLinks = computed(() => {
  // 优先使用 CMS 产品分类数据
  const productCategoriesData = cmsNavStore.productCategories
  if (productCategoriesData && productCategoriesData.length > 0) {
    return productCategoriesData.map(category => ({
      text: category.label,
      to: category.navUrl || `/list?tab=${category.id}`,
    }))
  }

  // 降级: 使用本地产品数据的 tabs
  return productsData.tabs.map((tab, index) => ({
    text: tab,
    to: `/list?tab=${index}`,
  }))
})

// 计算属性: 返回最终使用的 Footer 列数据（优先使用 CMS 列结构）
const footerColumns = computed(() => {
  const columns =
    cmsNavStore.footerColumns && cmsNavStore.footerColumns.length > 0
      ? cmsNavStore.footerColumns
      : commonFooterData.value.columns

  // 为 Products 列添加产品分类数据
  return columns.map(column => {
    // 如果是 Products 列，使用产品分类数据
    if (column.title === 'Products') {
      return {
        title: column.title,
        links: getProductLinks.value,
      }
    }

    // 其他列保持原样
    return column
  })
})

const email = ref('')
const agreeToPrivacy = ref(false)

const subscribeError = ref('')

const handleSubscribe = async () => {
  if (email.value && agreeToPrivacy.value) {
    subscribeError.value = '订阅功能暂未开放，敬请期待'
    logger.log('Subscribe:', email.value)
  } else if (!email.value) {
    subscribeError.value = '请输入邮箱地址'
  } else {
    subscribeError.value = '请同意隐私政策'
  }
}
</script>

<style scoped lang="scss">
.line {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.site-footer {
  background-color: #ffffff;
}

.footer-container {
  padding: 88px 0 40px;
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

  input[type='checkbox'] {
    width: 16px;
    height: 16px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    margin-top: 3px;
    cursor: pointer;
    flex-shrink: 0;
  }

  a,
  .privacy-link-btn {
    color: #000000;
    text-decoration: none;
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;

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

.subscribe-error {
  font-size: 14px;
  color: #dc2626;
  margin-top: 8px;
}

.copyright {
  text-align: left;
}

.designer {
  text-align: right;
}
</style>

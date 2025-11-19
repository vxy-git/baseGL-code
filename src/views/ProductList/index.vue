<template>
  <div class="product-list-page">
    <!-- 覆盖图层 -->
    <!-- <img src="/product.jpg" alt="Overlay Image" class="pointer-events-none absolute  top-0 left-1/2 -translate-x-1/2 z-50 w-full opacity-50"/> -->

    <Header headerClass="white" border/>
    <div class="header-divider" />

    <main class="main-content">
      <section class="catalog-intro">
        <h1 class="catalog-title">Innovative products</h1>
        <Tabs class="mt-[30px]" :list="tabsList" v-model="tabsCurrent"></Tabs>
      </section>

      <section class="catalog-grid" aria-label="Product Gallery">
        <article
          v-for="product in products"
          :key="product.id"
          class="product-card"
        >
          <div
            class="card-surface"
            :style="{ '--hover-bg': `url(${product.background})` }"
          >
            <span v-if="product.isNew" class="badge">New</span>



            <div class="text-group mt-[7px]">
              <h3 class="product-name">{{ product.name }}</h3>
              <p class="product-desc">{{ product.description }}</p>
            </div>
            <div class="media">
              <img src="@/assets/img/icon47.png" :alt="product.alt" loading="lazy" class="product-image" />
            </div>
            <div class="card-footer">
              <span class="capacity-chip">{{ product.capacity }}</span>
            </div>
          </div>
        </article>
      </section>

      <nav class="pagination" aria-label="Catalog pagination">
        <button
          v-for="page in pages"
          :key="page"
          class="page-button"
          :class="{ active: page === currentPage }"
        >
          {{ page }}
        </button>
      </nav>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { h, ref } from 'vue'
import Footer from '@/components/Footer.vue'
import Header from "@/components/Header/index.vue";
import Tabs from "@/components/Tabs/index.vue";

const logoImage = ref('/images/logo/logo.png')

const navItems = ['Products', 'Technology', 'Customize', 'US Local Service', 'Why Caleaf']


const tabsCurrent = ref(0)
const tabsList = [
  'For Resin/Rosin',
  'Pod System',
  'Full Ceramic',
  'D9 Distillate',
  'US Stock',
  'Dab Pen',
  '510 Cartridge',
  'D8 Distillate'
]

const activeFilterIndex = 0

const products = ref([
  {
    id: 1,
    name: 'UNIT',
    description: 'UNICORE™ tech & large display',
    capacity: '1mL/2mL',
    image: '/images/products/product-2.png',
    background: '/images/products/product-featured.png',
    alt: 'UNIT device',
    isNew: true
  },
  {
    id: 2,
    name: 'UNIT',
    description: 'UNICORE™ tech & large display',
    capacity: '1mL/2mL',
    image: '/images/products/product-2.png',
    background: '/images/products/product-featured.png',
    alt: 'UNIT device',
    isNew: true
  },
  {
    id: 3,
    name: 'UNIT',
    description: 'UNICORE™ tech & large display',
    capacity: '1mL/2mL',
    image: '/images/products/product-2.png',
    background: '/images/products/product-featured.png',
    alt: 'UNIT device',
    isNew: true
  },
  {
    id: 4,
    name: 'UNIT',
    description: 'UNICORE™ tech & large display',
    capacity: '1mL/2mL',
    image: '/images/products/product-2.png',
    background: '/images/products/product-featured.png',
    alt: 'UNIT device',
    isNew: true
  },
  {
    id: 5,
    name: 'UNIT',
    description: 'UNICORE™ tech & large display',
    capacity: '1mL/2mL',
    image: '/images/products/product-2.png',
    background: '/images/products/product-featured.png',
    alt: 'UNIT device',
    isNew: true
  },
  {
    id: 6,
    name: 'UNIT',
    description: 'UNICORE™ tech & large display',
    capacity: '1mL/2mL',
    image: '/images/products/product-2.png',
    background: '/images/products/product-featured.png',
    alt: 'UNIT device',
    isNew: true
  },
  {
    id: 7,
    name: 'UNIT',
    description: 'UNICORE™ tech & large display',
    capacity: '1mL/2mL',
    image: '/images/products/product-2.png',
    background: '/images/products/product-featured.png',
    alt: 'UNIT device',
    isNew: true
  },
  {
    id: 8,
    name: 'UNIT',
    description: 'UNICORE™ tech & large display',
    capacity: '1mL/2mL',
    image: '/images/products/product-2.png',
    background: '/images/products/product-featured.png',
    alt: 'UNIT device',
    isNew: true
  },
  {
    id: 9,
    name: 'UNIT',
    description: 'UNICORE™ tech & large display',
    capacity: '1mL/2mL',
    image: '/images/products/product-2.png',
    background: '/images/products/product-featured.png',
    alt: 'UNIT device',
    isNew: true
  },
  {
    id: 10,
    name: 'UNIT',
    description: 'UNICORE™ tech & large display',
    capacity: '1mL/2mL',
    image: '/images/products/product-2.png',
    background: '/images/products/product-featured.png',
    alt: 'UNIT device',
    isNew: true
  },
  {
    id: 11,
    name: 'UNIT',
    description: 'UNICORE™ tech & large display',
    capacity: '1mL/2mL',
    image: '/images/products/product-2.png',
    background: '/images/products/product-featured.png',
    alt: 'UNIT device',
    isNew: true
  },
  {
    id: 12,
    name: 'UNIT',
    description: 'UNICORE™ tech & large display',
    capacity: '1mL/2mL',
    image: '/images/products/product-2.png',
    background: '/images/products/product-featured.png',
    alt: 'UNIT device',
    isNew: true
  },
  {
    id: 13,
    name: 'UNIT',
    description: 'UNICORE™ tech & large display',
    capacity: '1mL/2mL',
    image: '/images/products/product-2.png',
    background: '/images/products/product-featured.png',
    alt: 'UNIT device',
    isNew: true
  },
  {
    id: 14,
    name: 'UNIT',
    description: 'UNICORE™ tech & large display',
    capacity: '1mL/2mL',
    image: '/images/products/product-2.png',
    background: '/images/products/product-featured.png',
    alt: 'UNIT device',
    isNew: true
  },
  {
    id: 15,
    name: 'UNIT',
    description: 'UNICORE™ tech & large display',
    capacity: '1mL/2mL',
    image: '/images/products/product-2.png',
    background: '/images/products/product-featured.png',
    alt: 'UNIT device',
    isNew: true
  },
  {
    id: 16,
    name: 'UNIT',
    description: 'UNICORE™ tech & large display',
    capacity: '1mL/2mL',
    image: '/images/products/product-2.png',
    background: '/images/products/product-featured.png',
    alt: 'UNIT device',
    isNew: true
  }
])

const pages = [1, 2, 3, 4, 5, 6, 7]
const currentPage = 4

const footerLinks = {
  products: [
    'For Resin/Rosin',
    'Pod System',
    'Full Ceramic',
    'D9 Distillate',
    'US Stock',
    'Dab Pen',
    '510 Cartridge',
    'D8 Distillate'
  ],
  technology: [
    'Product Support',
    'Repair Service',
    'After-Sales Policy',
    'Care Service',
    'Downloads'
  ],
  customize: [
    'For Resin/Rosin',
    'Pod System',
    'Full Ceramic',
    'D9 Distillate',
    'US Stock',
    'Dab Pen',
    '510 Cartridge',
    'D8 Distillate'
  ],
  why: ['About Caleaf', 'Press', 'Blog', 'CSR', 'Awards', 'Join Us']
}

const YouTubeIcon = () =>
  h('svg', { viewBox: '0 0 24 24', width: 20, height: 20, fill: 'none' }, [
    h('path', {
      d: 'M22 12c0-2.21-.18-3.72-.35-4.5-.19-.82-.82-1.46-1.64-1.65C18.22 5.67 12 5.67 12 5.67s-6.22 0-8.01.18c-.82.19-1.45.83-1.64 1.65C2.18 8.28 2 9.79 2 12s.18 3.72.35 4.5c.19.82.82 1.46 1.64 1.65 1.78.18 8.01.18 8.01.18s6.22 0 8.01-.18c.82-.19 1.45-.83 1.64-1.65.17-.78.35-2.29.35-4.5Z',
      fill: '#111111'
    }),
    h('path', { d: 'm10 15 5-3-5-3v6Z', fill: '#fff' })
  ])

const LinkedInIcon = () =>
  h('svg', { viewBox: '0 0 24 24', width: 18, height: 18, fill: 'none' }, [
    h('rect', { x: 3, y: 3, width: 18, height: 18, rx: 2, fill: '#111111' }),
    h('path', {
      d: 'M9 10h2v8H9v-8Zm1-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4 4h2v1.1c.28-.53.97-1.2 2.1-1.2 2.24 0 2.9 1.46 2.9 3.36V18h-2v-4.2c0-1-.02-2.28-1.4-2.28-1.4 0-1.62 1.1-1.62 2.2V18h-2v-8Z',
      fill: '#fff'
    })
  ])

const FacebookIcon = () =>
  h('svg', { viewBox: '0 0 24 24', width: 18, height: 18, fill: 'none' }, [
    h('rect', { x: 3, y: 3, width: 18, height: 18, rx: 2, fill: '#111111' }),
    h('path', {
      d: 'M13.3 18v-4.5h1.7l.25-2h-1.95v-1.3c0-.58.19-1 1.18-1H15V7.4c-.21-.03-.93-.1-1.77-.1-1.75 0-2.95 1.07-2.95 3.03V11.5H8.5v2h1.78V18h3.02Z',
      fill: '#fff'
    })
  ])

const InstagramIcon = () =>
  h('svg', { viewBox: '0 0 24 24', width: 18, height: 18, fill: 'none' }, [
    h('rect', { x: 3, y: 3, width: 18, height: 18, rx: 5, fill: '#111111' }),
    h('path', {
      d: 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm3.5-5.9a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4Z',
      fill: '#fff'
    })
  ])

const TikTokIcon = () =>
  h('svg', { viewBox: '0 0 24 24', width: 18, height: 18, fill: 'none' }, [
    h('rect', { x: 3, y: 3, width: 18, height: 18, rx: 4, fill: '#111111' }),
    h('path', {
      d: 'M15.5 9.8c.55.42 1.22.7 1.95.74V8.6a3.2 3.2 0 0 1-2-.74V6.5h-1.85v7.06a1.32 1.32 0 0 1-2.65 0 1.32 1.32 0 0 1 1.94-1.15v-1.9a3.23 3.23 0 0 0-.9-.13 3.2 3.2 0 1 0 3.2 3.2V9.8Z',
      fill: '#fff'
    })
  ])

const socialIcons = [
  { name: 'YouTube', href: '#', icon: YouTubeIcon },
  { name: 'LinkedIn', href: '#', icon: LinkedInIcon },
  { name: 'Facebook', href: '#', icon: FacebookIcon },
  { name: 'Instagram', href: '#', icon: InstagramIcon },
  { name: 'TikTok', href: '#', icon: TikTokIcon }
]
</script>

<style lang="scss" scoped>

.product-list-page {
  background: #ffffff;
  color: #111111;
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
}

.site-header {
  max-width: 1920px;
  margin: 0 auto;
  padding: 30px clamp(1.5rem, 8vw, 310px);
  display: flex;
  align-items: center;
  gap: clamp(1rem, 4vw, 4rem);
}

.logo {
  width: 187px;
  height: auto;
  display: block;
}

.nav-links {
  display: flex;
  gap: clamp(1.5rem, 4vw, 4rem);
  flex: 1;
}

.nav-link {
  color: #555555;
  font-size: 16px;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #1ce785;
  }
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 18px;
}

.contact-btn {
  background: #1ce785;
  border: none;
  border-radius: 50px;
  padding: 10px 30px;
  font-size: 18px;
  color: #222222;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
}

.search-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(17, 17, 17, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111111;
  background: #ffffff;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #f2f2f2;
  }
}

.header-divider {
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.08);
}

.main-content {
  width: 1300px;
  margin: 0 auto;
  padding-top: 205px;
  border-bottom: 1px solid rgba(0,0,0,.1);
  padding-bottom: 124px;
}

.catalog-intro {
  width: 1300px;
  margin: 0 auto;
}

.catalog-title {
  color: #000;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.filter-strip {
  display: flex;
  flex-wrap: nowrap;
  padding: 5px;
  border-radius: 50px;
  background: #f8f9fd;
  width: 1300px;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.filter-chip {
  border: none;
  border-radius: 50px;
  padding: 14px 32px;
  background: transparent;
  font-size: 18px;
  color: #444444;
  cursor: pointer;
  transition: all 0.2s ease;

  &.active {
    background: #ffffff;
    color: #111111;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  }

  &:hover:not(.active) {
    background: rgba(28, 231, 133, 0.12);
    color: #111111;
  }
}

.catalog-grid {
  margin: 72px auto 0;
  display: flex;
  flex-wrap: wrap;
  column-gap: 26px;
  row-gap: 30px;
  width: 1300px;

}


.card-surface {
  padding:28px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 305px;
  height: 440px;
  border-radius: 20px;
  min-height: 420px;
  overflow: hidden;
  background: #f8f9fd;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, color 0.3s ease;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: var(--hover-bg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

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
    //transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    color: #ffffff;

    &::before {
      opacity: 1;
    }

    .product-image {
      opacity: 0;
    }

    .badge {
      color: #1ce785;
    }

    .product-name,
    .product-desc {
      color: #ffffff;
    }
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  margin-top: 25px;

  img {
    width: 231px;
    max-width: 231px;
    height: auto;
    object-fit: contain;
  }
}

.product-image {
  transition: opacity 0.3s ease;
}

.text-group {
  position: relative;
  z-index: 1;
}

.product-name {
  color: #000000;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 145.455% */
  transition: color 0.3s ease;
}

.product-desc {
  font-size: 16px;
  color: #555555;
  opacity: 0.7;
  line-height: 1.6;
  transition: color 0.3s ease;
}

.card-footer {
  position: relative;
  z-index: 1;
  margin-top: 30px;
}

.capacity-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  border-radius: 50px;
  font-size: 16px;
  background: #1ce785;
  color: #111111;
  font-weight: 600;
}

.pagination {
  margin: 57px auto 0;
  display: flex;
  justify-content: center;
  gap: 12px;
}

.page-button {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #ffffff;
  color: #999999;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    background: #1ce785;
    color: #111111;
    border-color: transparent;
    box-shadow: 0 10px 30px rgba(28, 231, 133, 0.35);
  }

  &:hover:not(.active) {
    color: #111111;
  }
}


@media (max-width: 1400px) {
  .catalog-intro,
  .catalog-grid {
    width: 100%;
    max-width: 1300px;
  }

  .filter-strip {
    width: 100%;
  }
}

@media (max-width: 1200px) {
  .site-header,
  .main-content,
  .footer-inner {
    padding-left: 40px;
    padding-right: 40px;
  }

  .nav-links {
    display: none;
  }

  .footer-columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .footer-bottom {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    gap: 12px;
  }

  .legal,
  .credit {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .site-header {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .header-actions {
    width: 100%;
    justify-content: flex-end;
  }

  .filter-strip {
    width: 100%;
  }

  .catalog-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .footer-columns {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  .catalog-grid {
    grid-template-columns: 1fr;
  }

  .subscribe-form {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
}
</style>


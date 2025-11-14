<template>
  <div class="product-detail-page">
    <!-- Header Navigation -->
    <header class="site-header">
      <div class="logo-area">
        <img :src="logoImage" alt="CALEAF TECH" class="logo" />
      </div>
      <nav class="nav-links">
        <a v-for="item in navItems" :key="item" href="#" class="nav-link">
          {{ item }}
        </a>
      </nav>
      <div class="header-actions">
        <button class="contact-btn">Contact</button>
        <button class="search-btn" aria-label="Search">
          <svg viewBox="0 0 22 22" width="22" height="22" fill="none">
            <circle cx="9.5" cy="9.5" r="8.5" stroke="currentColor" stroke-width="2" />
            <path d="M15.5 15.5L20 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </header>

    <!-- Hero Section - Product Showcase -->
    <section class="hero-section">
      <!-- Mask group background -->
      <div class="hero-mask-group">
        <div class="mask-layer-1" :style="{ maskImage: `url('${productImages.mask}')` }"></div>
        <div class="mask-layer-2" :style="{ maskImage: `url('${productImages.mask}')` }"></div>
      </div>
      
      <!-- Ellipse backgrounds -->
      <div class="ellipse-7">
        <img :src="productImages.ellipse7" alt="" />
      </div>
      <div class="ellipse-8">
        <img :src="productImages.ellipse8" alt="" />
      </div>
      
      <!-- Dark background bar -->
      <div class="hero-dark-bar"></div>
      
      <!-- Intersect decoration -->
      <div class="hero-intersect">
        <img :src="productImages.intersect" alt="" />
      </div>
      
      <!-- Product images with precise positioning -->
      <div class="product-image-1">
        <img :src="productImages.unicorn" alt="UNICORN" />
      </div>
      <div class="product-image-2">
        <img :src="productImages.unicornPro" alt="UNICORN PRO" />
      </div>
      
      <!-- Badges with precise positioning -->
      <div class="product-badge badge-1">
        <span>0.5mL / 1mL</span>
      </div>
      <div class="product-badge badge-2">
        <span>0.5mL / 1mL</span>
      </div>
      
      <!-- Titles with precise positioning -->
      <h2 class="product-title title-unicorn">UNICORN</h2>
      <h2 class="product-title title-unicorn-pro">UNICORN PRO</h2>
      
      <!-- Subtitle -->
      <p class="hero-subtitle">Unicore powered, unlock the magic.</p>
    </section>

    <!-- UNICORN Section -->
    <section class="product-section unicorn-section">
      <p class="section-label">UNICORN</p>
      <div class="product-image-container">
        <img :src="productImages.unicornLarge" alt="UNICORN" class="section-product-image" />
      </div>
      <div class="section-content">
        <h3 class="section-title">
          <span>Super thin. Strikingly light.</span>
          <span>Shockingly strong.</span>
        </h3>
      </div>
    </section>

    <!-- UNICORN PRO Section -->
    <section class="product-section unicorn-pro-section">
      <p class="section-label">UNICORN PRO</p>
      <div class="product-image-container">
        <img :src="productImages.unicornProLarge" alt="UNICORN PRO" class="section-product-image" />
      </div>
      <div class="section-content">
        <h3 class="section-title">
          <span>Tiny powerhouse</span>
          <span>Exceptional pro capability.</span>
        </h3>
      </div>
    </section>

    <!-- Take Your Pick Section -->
    <section class="pick-section">
      <p class="section-label">Take your pick</p>
      <h3 class="section-title">Either one's a winner</h3>
      <div class="pick-grid">
        <div class="pick-card">
          <div class="pick-placeholder"></div>
        </div>
        <div class="pick-card">
          <div class="pick-placeholder"></div>
        </div>
      </div>
    </section>

    <!-- Gold Standard Section -->
    <section class="gold-standard-section">
      <div class="section-background"></div>
      <div class="section-content">
        <h2 class="main-title">
          <span class="highlight">Gold</span>
          <span>standard for Resin/Rosin</span>
        </h2>
        <div class="product-image-container">
          <img :src="productImages.goldStandard" alt="Gold Standard" class="feature-image" />
        </div>
        <p class="section-label">UNICORE powered</p>
        <h3 class="feature-title">33% in pore uniformity</h3>
        <p class="feature-description">
          We pioneered the use of aerospace-grade, high-thermal-conductivity ceramics, firing temperature at 1832 °F to create a 20% denser, uniformly porous structure that perfectly matches resin and rosin molecules, eliminating any risk of dry burn for consistently optimal performance.
        </p>
        <div class="feature-image-container">
          <img :src="productImages.ceramicCore" alt="Ceramic Core" class="feature-image" />
        </div>
      </div>
    </section>

    <!-- Firing Temperature Comparison -->
    <section class="comparison-section">
      <div class="comparison-card">
        <div class="comparison-header">
          <div class="arrow-icon"></div>
          <span class="percentage">20%</span>
        </div>
        <p class="comparison-label">Firing temp</p>
        <div class="progress-bar">
          <div class="progress-fill"></div>
        </div>
        <p class="progress-label">CALEAF TECH 1832 ℉ (1000℃)</p>
        <div class="progress-bar secondary">
          <div class="progress-fill secondary"></div>
        </div>
        <p class="progress-label secondary">Others 1472 ℉ (800℃)</p>
      </div>
      <div class="comparison-image">
        <img :src="productImages.comparison" alt="Comparison" class="feature-image" />
      </div>
    </section>

    <!-- 100% Rosin-Ready Section -->
    <section class="rosin-ready-section">
      <div class="section-background"></div>
      <div class="section-content">
        <p class="section-label">100% Rosin-Ready</p>
        <h3 class="section-title">
          <span>Savor the most natural</span>
          <span>and rich flavors</span>
        </h3>
        <p class="feature-description">
          Our patented U-shape ceramic design is 30% thinner than ordinary ceramics, which means fewer terpene molecules are filtered out and the rich, natural flavors are preserved.
        </p>
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-value">30%</span>
            <p class="stat-label">Thinner in Structure</p>
          </div>
          <div class="stat-item">
            <span class="stat-value">45%</span>
            <div class="arrow-icon"></div>
            <p class="stat-label">Flavor Retention</p>
          </div>
        </div>
        <div class="feature-image-container">
          <img :src="productImages.flavorComparison" alt="Flavor Comparison" class="feature-image" />
        </div>
      </div>
    </section>

    <!-- No More Dry Burning Section -->
    <section class="dry-burn-section">
      <div class="section-background"></div>
      <div class="section-content">
        <p class="section-label">Built-in wires</p>
        <h3 class="section-title">No more dry burning</h3>
        <p class="feature-description">
          The heating coil is embedded within the ceramic core, this way, the oil is heated by the ceramic core and not by exposed hot wires, so every draw releases rich THC and terpenes without a hint of burn, guaranteeing a flawless session every time.
        </p>
        <div class="comparison-visual">
          <div class="comparison-item">
            <p class="comparison-text">Others</p>
          </div>
          <div class="comparison-item highlight">
            <p class="comparison-text">UNICORE</p>
          </div>
        </div>
        <div class="feature-image-container">
          <img :src="productImages.wireComparison" alt="Wire Comparison" class="feature-image" />
        </div>
      </div>
    </section>

    <!-- UNICORN PRO Activation Section -->
    <section class="activation-section">
      <div class="section-background"></div>
      <div class="section-content">
        <p class="section-label">UNICORN PRO</p>
        <h3 class="section-title">Inhale & Button Activated</h3>
        <div class="activation-grid">
          <div class="activation-card">
            <div class="card-placeholder"></div>
          </div>
          <div class="activation-card">
            <div class="card-placeholder"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Smart Display Section -->
    <section class="smart-display-section">
      <div class="section-background"></div>
      <div class="section-content">
        <p class="section-label">UNICORN</p>
        <p class="section-label pro">UNICORN PRO</p>
        <h2 class="main-title gradient">Smart Display</h2>
        <h3 class="section-title">Upgrade your adventure</h3>
        <div class="display-grid">
          <div class="display-card">
            <div class="card-placeholder"></div>
            <div class="card-badge">3-Temperature Control</div>
          </div>
          <div class="display-card">
            <div class="card-placeholder"></div>
            <div class="card-badge">Battery Life Monitor</div>
          </div>
          <div class="display-card">
            <div class="card-placeholder"></div>
            <div class="card-badge">Dosing Timer</div>
          </div>
          <div class="display-card">
            <div class="card-placeholder"></div>
            <div class="card-badge">Preheat Status Indication</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nothing Basic Section -->
    <section class="basic-section">
      <div class="section-background"></div>
      <div class="section-content">
        <h3 class="section-title">Nothing "basic" about it.</h3>
      </div>
    </section>

    <!-- Design Your Own Section -->
    <section class="customize-section">
      <div class="section-background light"></div>
      <div class="section-content">
        <p class="section-label">ULTRA-LARGE SMART DISPLAY</p>
        <h3 class="section-title">Design Your Own</h3>
        <p class="feature-description">
          Customize it further with any brand graphics to create your unique brand screen. Drive market trends with a design that breaks the mold and leads the way.
        </p>
        <div class="color-options">
          <div v-for="(color, index) in colorOptions" :key="index" class="color-circle" :class="{ active: index === 2 }"></div>
        </div>
      </div>
    </section>

    <!-- Specifications Section -->
    <section class="specs-section">
      <div class="section-content">
        <h3 class="section-title">Specifications</h3>
        <div class="specs-grid">
          <div class="specs-column">
            <div class="spec-item">
              <p class="spec-label">Dimension(mm)</p>
              <p class="spec-value">99.3H*22.3W*10.4D</p>
            </div>
            <div class="spec-item">
              <p class="spec-label">Tank Volume</p>
              <p class="spec-value">0.5mL/ 1mL</p>
            </div>
            <div class="spec-item">
              <p class="spec-label">Battery Capability</p>
              <p class="spec-value">280mAh</p>
            </div>
            <div class="spec-item">
              <p class="spec-label">Resistance</p>
              <p class="spec-value">1.8ohm</p>
            </div>
            <div class="spec-item">
              <p class="spec-label">Voltage Setting</p>
              <p class="spec-value">2.0V</p>
            </div>
            <div class="spec-item">
              <p class="spec-label">Housing Material</p>
              <p class="spec-value">Plastic</p>
            </div>
            <div class="spec-item">
              <p class="spec-label">Ceramic Core</p>
              <p class="spec-value">UNICORE</p>
            </div>
            <div class="spec-item">
              <p class="spec-label">Central Post</p>
              <p class="spec-value">Post-free</p>
            </div>
            <div class="spec-item">
              <p class="spec-label">Charging</p>
              <p class="spec-value">Type-C</p>
            </div>
            <div class="spec-item">
              <p class="spec-label">Options of Activation</p>
              <p class="spec-value">Inhale Activated</p>
            </div>
          </div>
          <div class="specs-image">
            <img :src="productImages.unicornSpec" alt="UNICORN Specifications" class="spec-image" />
            <p class="spec-product-name">UNICORN</p>
          </div>
          <div class="specs-column">
            <div class="spec-item">
              <p class="spec-label">Dimension(mm)</p>
              <p class="spec-value">93.3H*23.5W*13.5D</p>
            </div>
            <div class="spec-item">
              <p class="spec-label">Tank Volume</p>
              <p class="spec-value">0.5mL/ 1mL</p>
            </div>
            <div class="spec-item">
              <p class="spec-label">Battery Capability</p>
              <p class="spec-value">280mAh</p>
            </div>
            <div class="spec-item">
              <p class="spec-label">Resistance</p>
              <p class="spec-value">1.8ohm</p>
            </div>
            <div class="spec-item">
              <p class="spec-label">Voltage Setting</p>
              <p class="spec-value">1.8V-2.0V-2.2V</p>
            </div>
            <div class="spec-item">
              <p class="spec-label">Housing Material</p>
              <p class="spec-value">Plastic</p>
            </div>
            <div class="spec-item">
              <p class="spec-label">Ceramic Core</p>
              <p class="spec-value">UNICORE</p>
            </div>
            <div class="spec-item">
              <p class="spec-label">Central Post</p>
              <p class="spec-value">Post-free</p>
            </div>
            <div class="spec-item">
              <p class="spec-label">Charging</p>
              <p class="spec-value">Type-C</p>
            </div>
            <div class="spec-item">
              <p class="spec-label">Options of Activation</p>
              <p class="spec-value">Button & Inhale Activated</p>
            </div>
          </div>
          <div class="specs-image">
            <img :src="productImages.unicornProSpec" alt="UNICORN PRO Specifications" class="spec-image" />
            <p class="spec-product-name">UNICORN Pro</p>
          </div>
        </div>
      </div>
    </section>

    <!-- More Products Section -->
    <section class="more-products-section">
      <div class="section-background"></div>
      <div class="section-content">
        <h2 class="main-title italic">More Products</h2>
        <div class="products-carousel">
          <button class="carousel-btn prev" aria-label="Previous">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>
          <div class="products-grid">
            <div v-for="(product, index) in moreProducts" :key="index" class="product-card">
              <div class="card-image-container">
                <img :src="product.image" :alt="product.name" class="card-product-image" />
              </div>
              <div class="card-content">
                <h4 class="card-title">{{ product.name }}</h4>
                <p class="card-description">{{ product.description }}</p>
                <button class="card-button">View More</button>
              </div>
            </div>
          </div>
          <button class="carousel-btn next" aria-label="Next">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Footer from '@/components/Footer.vue'

const logoImage = ref('https://www.figma.com/api/mcp/asset/dad85060-6cbe-4299-a1aa-62e9a3df4555')

const navItems = ['Products', 'Technology', 'Customize', 'US Local Service', 'Why Caleaf']

// Product images - using Figma actual URLs
const productImages = ref({
  // Hero section images
  unicorn: 'https://www.figma.com/api/mcp/asset/b189634b-14bf-42ff-8b88-8c0826df2412', // 301-317_00000 3
  unicornPro: 'https://www.figma.com/api/mcp/asset/1bfb9f22-b192-468b-bb34-e77bde632f44', // 301-317_00007 1
  unicornLarge: 'https://www.figma.com/api/mcp/asset/a8ab16e9-07f9-4d7c-8955-a483b45809b9', // 316y_00016 1
  unicornProLarge: 'https://www.figma.com/api/mcp/asset/619403cb-6734-4d93-815d-27007d9a8132', // 301-317_00016 1
  
  // Feature section images
  goldStandard: 'https://www.figma.com/api/mcp/asset/c9e9720d-98e4-405a-b3e6-39608a7bf47a', // 316y_00000 1
  ceramicCore: 'https://www.figma.com/api/mcp/asset/a3c42c6c-62ae-4102-b482-e48ed1efbab6', // 316_00004 1
  comparison: 'https://www.figma.com/api/mcp/asset/406014b3-4084-4f69-8302-b614b2d9f64e', // 316_00011 1
  flavorComparison: 'https://www.figma.com/api/mcp/asset/406014b3-4084-4f69-8302-b614b2d9f64e', // 316_00011 1
  wireComparison: 'https://www.figma.com/api/mcp/asset/a3fd73ea-572d-4133-a6c5-20150b87b486', // 4 静态图 1
  
  // Spec images
  unicornSpec: 'https://www.figma.com/api/mcp/asset/b189634b-14bf-42ff-8b88-8c0826df2412', // 301-317_00000 3
  unicornProSpec: 'https://www.figma.com/api/mcp/asset/b189634b-14bf-42ff-8b88-8c0826df2412', // 301-317_00000 2
  
  // Background and decoration images
  mask: 'https://www.figma.com/api/mcp/asset/09d9f937-12a7-4199-bee4-f17529359df2', // img11 - mask
  ellipse7: 'https://www.figma.com/api/mcp/asset/9af8688f-2975-4910-99b1-d621539d6193',
  ellipse8: 'https://www.figma.com/api/mcp/asset/31ff1b9f-d5e8-43e5-83e4-26eef5161210',
  intersect: 'https://www.figma.com/api/mcp/asset/cf4a2452-25a7-4fc3-a215-b4a0c1f5408a',
  arrowIcon: 'https://www.figma.com/api/mcp/asset/d78395ba-2c28-4935-a846-6bffd930a79d', // img12
  moreProductImage: 'https://www.figma.com/api/mcp/asset/b083bd57-5c33-41c1-bab3-6fa7f299eb06' // img13
})

const colorOptions = ref([1, 2, 3, 4, 5, 6, 7])

const moreProducts = ref([
  {
    name: 'UNIT',
    description: 'UNICORE™ tech & large display',
    image: 'https://www.figma.com/api/mcp/asset/b083bd57-5c33-41c1-bab3-6fa7f299eb06'
  },
  {
    name: 'UNIT',
    description: 'UNICORE™ tech & large display',
    image: 'https://www.figma.com/api/mcp/asset/b083bd57-5c33-41c1-bab3-6fa7f299eb06'
  },
  {
    name: 'UNIT',
    description: 'UNICORE™ tech & large display',
    image: 'https://www.figma.com/api/mcp/asset/b083bd57-5c33-41c1-bab3-6fa7f299eb06'
  },
  {
    name: 'UNIT',
    description: 'UNICORE™ tech & large display',
    image: 'https://www.figma.com/api/mcp/asset/b083bd57-5c33-41c1-bab3-6fa7f299eb06'
  }
])
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&family=Outfit:wght@400;600&display=swap');

.product-detail-page {
  background: #ffffff;
  color: #111111;
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
}

// Header Styles
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

// Hero Section - Mixed approach: precise positioning on large screens, responsive on smaller
.hero-section {
  position: relative;
  width: 100%;
  min-height: 980px;
  background: #000000;
  overflow: hidden;
  
  @media (min-width: 1920px) {
    height: 980px;
  }
}

// Mask group background
.hero-mask-group {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  
  @media (min-width: 1920px) {
    .mask-layer-1 {
      position: absolute;
      background: #000000;
      width: 1920px;
      height: 880px;
      left: 0;
      top: 100px;
      mask-size: 1920px 980px;
      mask-position: 0px -100px;
      mask-repeat: no-repeat;
    }
    
    .mask-layer-2 {
      position: absolute;
      background: #000000;
      width: 2086.039px;
      height: 1043.019px;
      left: -5px;
      top: 96.88px;
      mask-size: 1920px 980px;
      mask-position: 5px -96.879px;
      mask-repeat: no-repeat;
    }
  }
  
  @media (max-width: 1919px) {
    display: none; // Hide mask on smaller screens
  }
}

// Ellipse backgrounds
.ellipse-7 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1400px;
  height: 473px;
  top: 251px;
  z-index: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 1919px) {
    display: none;
  }
}

.ellipse-8 {
  position: absolute;
  left: 684px;
  top: 510px;
  width: 587px;
  height: 323px;
  z-index: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 1919px) {
    display: none;
  }
}

// Dark background bar
.hero-dark-bar {
  position: absolute;
  left: 0;
  top: 686px;
  width: 100%;
  height: 294px;
  background: #050401;
  z-index: 1;
  
  @media (max-width: 1919px) {
    display: none;
  }
}

// Intersect decoration
.hero-intersect {
  position: absolute;
  left: 591.57px;
  top: 686px;
  width: 727.859px;
  height: 55px;
  z-index: 2;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 1919px) {
    display: none;
  }
}

// Product images with precise positioning
.product-image-1 {
  position: absolute;
  left: 89px;
  top: 161px;
  width: 1280px;
  height: 720px;
  z-index: 2;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }
  
  @media (max-width: 1919px) {
    position: relative;
    left: auto;
    top: auto;
    width: 100%;
    max-width: 640px;
    height: auto;
    margin: 0 auto 20px;
  }
}

.product-image-2 {
  position: absolute;
  left: 387px;
  top: 129px;
  width: 1730px;
  height: 878px;
  z-index: 2;
  overflow: hidden;
  
  img {
    width: 110.83%;
    height: 110.83%;
    object-fit: cover;
    object-position: 0% -10.83%;
    transform: translateX(-47.72%);
  }
  
  @media (max-width: 1919px) {
    position: relative;
    left: auto;
    top: auto;
    width: 100%;
    max-width: 640px;
    height: auto;
    margin: 0 auto 20px;
    
    img {
      width: 100%;
      height: auto;
      transform: none;
    }
  }
}

// Badges with precise positioning
.product-badge {
  position: absolute;
  background: #1ce785;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  
  span {
    font-size: 18px;
    color: #222222;
    font-weight: 400;
    line-height: normal;
  }
  
  &.badge-1 {
    left: 643px;
    top: 778px;
    width: 120px;
    height: 40px;
  }
  
  &.badge-2 {
    left: 1172px;
    top: 778px;
    width: 120px;
    height: 40px;
  }
  
  @media (max-width: 1919px) {
    position: relative;
    left: auto;
    top: auto;
    display: inline-block;
    margin: 0 auto 20px;
  }
}

// Titles with precise positioning
.product-title {
  position: absolute;
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  white-space: pre-wrap;
  z-index: 3;
  margin: 0;
  
  &.title-unicorn {
    left: 705px;
    top: 725px;
    width: 678px;
    transform: translateX(-50%);
  }
  
  &.title-unicorn-pro {
    left: 1232px;
    top: 725px;
    width: 678px;
    transform: translateX(-50%);
  }
  
  @media (max-width: 1919px) {
    position: relative;
    left: auto;
    top: auto;
    width: auto;
    transform: none;
    margin-bottom: 20px;
  }
}

// Subtitle
.hero-subtitle {
  position: absolute;
  left: 50%;
  top: 847px;
  transform: translateX(-50%);
  font-size: 24px;
  color: #d9d9d9;
  text-align: center;
  z-index: 3;
  margin: 0;
  
  @media (max-width: 1919px) {
    position: relative;
    left: auto;
    top: auto;
    transform: none;
    margin-top: 40px;
  }
}

// Product Sections
.product-section {
  padding: 80px clamp(1.5rem, 8vw, 310px);
  text-align: center;
  
  @media (min-width: 1920px) {
    padding: 80px 310px;
  }
}

.section-label {
  font-size: 20px;
  font-weight: 400;
  color: #1ce785;
  margin-bottom: 20px;
  line-height: normal;
  
  @media (min-width: 1920px) {
    font-size: 20px;
  }
}

.section-product-image {
  width: 100%;
  max-width: 1280px;
  height: auto;
  margin: 40px auto;
  
  @media (min-width: 1920px) {
    max-width: 1282px;
    height: 721px;
    object-fit: cover;
  }
}

.section-content {
  max-width: 1400px;
  margin: 0 auto;
}

.section-title {
  font-size: 40px;
  font-weight: 700;
  color: #111111;
  line-height: normal;
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 0;

  span {
    display: block;
  }
  
  @media (min-width: 1920px) {
    font-size: 40px;
    line-height: normal;
  }
}

.unicorn-section {
  background: #ffffff;
}

.unicorn-pro-section {
  background: #ffffff;
}

// Pick Section
.pick-section {
  padding: 80px clamp(1.5rem, 8vw, 310px);
  text-align: center;
  background: #ffffff;
}

.pick-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1300px;
  margin: 60px auto 0;
}

.pick-card {
  border-radius: 20px;
  overflow: hidden;
}

.pick-placeholder {
  width: 100%;
  height: 440px;
  background: #d9d9d9;
  border-radius: 20px;
}

// Gold Standard Section
.gold-standard-section {
  position: relative;
  background: #000000;
  padding: 120px clamp(1.5rem, 8vw, 310px);
  text-align: center;
  overflow: hidden;
}

.section-background {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, rgba(28, 231, 133, 0.05) 0%, transparent 70%);
}

.gold-standard-section .section-content {
  position: relative;
  z-index: 1;
}

.main-title {
  font-size: 100px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 60px;
  line-height: normal;
  white-space: pre-wrap;

  .highlight {
    color: #1ce785;
  }

  span:not(.highlight) {
    color: #666666;
  }
  
  @media (min-width: 1920px) {
    font-size: 100px;
    line-height: normal;
  }
}

.feature-image {
  width: 100%;
  max-width: 1060px;
  height: auto;
  margin: 40px auto;
}

.feature-title {
  font-size: 40px;
  font-weight: 700;
  color: #ffffff;
  margin: 60px 0 20px;
  line-height: normal;
  
  @media (min-width: 1920px) {
    font-size: 40px;
    line-height: normal;
  }
}

.feature-description {
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
  line-height: 30px;
  max-width: 1200px;
  margin: 0 auto 60px;
  white-space: pre-wrap;
  
  @media (min-width: 1920px) {
    font-size: 20px;
    line-height: 30px;
  }
}

.feature-image-container {
  margin: 60px 0;
}

// Comparison Section
.comparison-section {
  position: relative;
  background: #000000;
  padding: 80px clamp(1.5rem, 8vw, 310px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.comparison-card {
  background: rgba(35, 36, 42, 0.7);
  border-radius: 40px;
  padding: 60px 40px;
  text-align: center;
  
  @media (min-width: 1920px) {
    width: 800px;
    height: 440px;
    padding: 60px 40px;
  }
}

.comparison-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.arrow-icon {
  width: 43.07px;
  height: 39.805px;
  background-image: url('https://www.figma.com/api/mcp/asset/d78395ba-2c28-4935-a846-6bffd930a79d');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.percentage {
  font-size: 40px;
  font-weight: 700;
  color: #1ce785;
}

.comparison-label {
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 30px;
}

.progress-bar {
  width: 100%;
  height: 10px;
  background: #d9d9d9;
  border-radius: 50px;
  margin-bottom: 10px;
  overflow: hidden;

  &.secondary {
    margin-top: 30px;
  }
}

.progress-fill {
  height: 100%;
  background: #1ce785;
  border-radius: 50px;
  width: 100%;

  &.secondary {
    width: 319px; // 精确宽度：319px / 480px = 66.5%
    background: #d9d9d9;
  }
  
  @media (min-width: 1920px) {
    width: 480px; // 精确宽度
  }
}

.progress-label {
  font-size: 20px;
  color: #ffffff;
  text-align: left;
  margin-top: 10px;

  &.secondary {
    color: #ffffff;
  }
}

// Rosin Ready Section
.rosin-ready-section {
  position: relative;
  background: #000000;
  padding: 120px clamp(1.5rem, 8vw, 310px);
  text-align: center;
}

.rosin-ready-section .section-content {
  position: relative;
  z-index: 1;
}

.stats-grid {
  display: flex;
  justify-content: center;
  gap: 100px;
  margin: 60px 0;
}

.stat-item {
  text-align: center;
  position: relative;
}

.stat-value {
  font-size: 40px;
  font-weight: 700;
  color: #1ce785;
  display: block;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 20px;
  color: #ffffff;
  margin: 0;
}

// Dry Burn Section
.dry-burn-section {
  position: relative;
  background: #000000;
  padding: 120px clamp(1.5rem, 8vw, 310px);
  text-align: center;
}

.comparison-visual {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 60px 0;
}

.comparison-item {
  font-size: 30px;
  color: #ffffff;
  padding: 20px 40px;

  &.highlight {
    color: #1ce785;
  }
}

.comparison-text {
  margin: 0;
}

// Activation Section
.activation-section {
  position: relative;
  background: #000000;
  padding: 120px clamp(1.5rem, 8vw, 310px);
  text-align: center;
}

.activation-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1300px;
  margin: 60px auto 0;
}

.activation-card {
  border-radius: 20px;
  overflow: hidden;
}

.card-placeholder {
  width: 100%;
  height: 440px;
  background: #d9d9d9;
  border-radius: 20px;
}

// Smart Display Section
.smart-display-section {
  position: relative;
  background: #000000;
  padding: 120px clamp(1.5rem, 8vw, 310px);
  text-align: center;
}

.smart-display-section .section-label.pro {
  margin-top: 20px;
}

.gradient {
  background: linear-gradient(180deg, #1ce785 0%, #a8ffd5 50%, #1ce785 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 80px;
  font-weight: 700;
  margin: 40px 0;
  line-height: 80px;
  
  @media (min-width: 1920px) {
    font-size: 80px;
    line-height: 80px;
  }
}

.display-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1300px;
  margin: 60px auto 0;
}

.display-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
}

.card-badge {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  color: #000000;
  padding: 10px 30px;
  border-radius: 50px;
  font-size: 18px;
}

// Basic Section
.basic-section {
  position: relative;
  background: #000000;
  padding: 120px clamp(1.5rem, 8vw, 310px);
  text-align: center;
}

.basic-section .section-title {
  color: #ffffff;
  font-size: 40px;
}

// Customize Section
.customize-section {
  position: relative;
  background: #f5f5f5;
  padding: 120px clamp(1.5rem, 8vw, 310px);
  text-align: center;
}

.customize-section .section-title {
  color: #111111;
}

.customize-section .feature-description {
  color: #555555;
  max-width: 500px;
  margin: 0 auto 60px;
}

.color-options {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;
}

.color-circle {
  width: 280px;
  height: 280px;
  border-radius: 40px;
  background: #d9d9d9;
  cursor: pointer;
  transition: transform 0.3s ease;

  &.active {
    background: #666666;
    transform: scale(1.1);
  }

  &:hover {
    transform: scale(1.05);
  }
}

// Specs Section
.specs-section {
  padding: 120px clamp(1.5rem, 8vw, 310px);
  background: #ffffff;
  
  @media (min-width: 1920px) {
    padding: 120px 310px;
  }
}

.specs-section .section-title {
  font-size: 40px;
  font-weight: 700;
  color: #111111;
  margin-bottom: 60px;
  line-height: normal;
  
  @media (min-width: 1920px) {
    font-size: 40px;
  }
}

.specs-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto;
  gap: 60px;
  align-items: start;
  
  @media (min-width: 1920px) {
    gap: 60px;
  }
}

.specs-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.spec-item {
  background: rgba(217, 217, 217, 0.2);
  border-radius: 10px;
  padding: 20px;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (min-width: 1920px) {
    width: 220px;
    min-height: 80px;
  }
}

.spec-label {
  font-size: 16px;
  font-weight: 400;
  color: #666666;
  margin: 0 0 10px 0;
  line-height: normal;
  
  @media (min-width: 1920px) {
    font-size: 16px;
  }
}

.spec-value {
  font-size: 18px;
  font-weight: 700;
  color: #111111;
  margin: 0;
  line-height: normal;
  
  @media (min-width: 1920px) {
    font-size: 18px;
  }
}

.specs-image {
  text-align: center;
}

.spec-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 20px;
}

.spec-product-name {
  font-size: 22px;
  font-weight: 700;
  color: #000000;
  margin: 0;
}

// More Products Section
.more-products-section {
  position: relative;
  background: #000000;
  padding: 120px clamp(1.5rem, 8vw, 310px);
  text-align: center;
}

.more-products-section .section-content {
  position: relative;
  z-index: 1;
}

.italic {
  font-style: italic;
  font-size: 80px;
  font-weight: 900;
  color: #1ce785;
  margin-bottom: 80px;
  line-height: normal;
  
  @media (min-width: 1920px) {
    font-size: 80px;
    line-height: normal;
  }
}

.products-carousel {
  display: flex;
  align-items: center;
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.carousel-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  flex: 1;
}

.product-card {
  background: #23242a;
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  min-height: 440px;
  display: flex;
  flex-direction: column;
}

.card-image-container {
  width: 100%;
  height: 165px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 10px 0;
}

.card-description {
  font-size: 16px;
  color: #f5f5f5;
  margin: 0 0 30px 0;
  flex: 1;
}

.card-button {
  background: #1ce785;
  color: #000000;
  border: none;
  border-radius: 50px;
  padding: 10px 30px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
}

// Responsive Design
@media (max-width: 1400px) {
  .product-showcase {
    gap: 60px;
  }

  .main-title {
    font-size: 60px;
  }

  .gradient {
    font-size: 60px;
  }

  .italic {
    font-size: 60px;
  }
}

@media (max-width: 1200px) {
  .site-header,
  .hero-content,
  .product-section,
  .pick-section,
  .gold-standard-section,
  .comparison-section,
  .rosin-ready-section,
  .dry-burn-section,
  .activation-section,
  .smart-display-section,
  .basic-section,
  .customize-section,
  .specs-section,
  .more-products-section {
    padding-left: 40px;
    padding-right: 40px;
  }

  .nav-links {
    display: none;
  }

  .product-showcase {
    flex-direction: column;
    gap: 40px;
  }

  .pick-grid,
  .activation-grid,
  .display-grid {
    grid-template-columns: 1fr;
  }

  .comparison-section {
    grid-template-columns: 1fr;
  }

  .specs-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .main-title {
    font-size: 40px;
  }

  .section-title {
    font-size: 28px;
  }

  .gradient {
    font-size: 40px;
  }

  .italic {
    font-size: 40px;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    flex-direction: column;
    gap: 40px;
  }

  .color-options {
    flex-wrap: wrap;
  }

  .color-circle {
    width: 200px;
    height: 200px;
  }
}
</style>


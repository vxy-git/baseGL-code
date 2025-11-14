<script setup>
const logoImage = 'https://www.figma.com/api/mcp/asset/f6e48c67-ef8d-4829-a175-e61663537ce1'
const productImage = 'https://www.figma.com/api/mcp/asset/7cfd8a26-51a1-4fef-a8d0-b5764e769beb'
const searchIcon = 'https://www.figma.com/api/mcp/asset/10b84b2e-e159-4dfd-9609-a179d50ad248'
const arrowIcon = 'https://www.figma.com/api/mcp/asset/809da35d-3f0d-44c3-8156-5bbfa9e94a8c'

const categories = [
  { label: 'For Resin/Rosin', active: true },
  { label: 'Pod System' },
  { label: 'Full Ceramic' },
  { label: 'D9 Distillate' },
  { label: 'US Stock' },
  { label: 'Dab Pen' },
  { label: '510 Cartridge' },
  { label: 'D8 Distillate' },
]

const products = Array.from({ length: 8 }, (_, index) => ({
  id: index,
  name: 'UNIT',
  badge: 'New',
  variant: '1mL/2mL',
  image: productImage,
}))
</script>

<template>
  <div class="product-page">
    <header class="top-nav">
      <div class="nav-left">
        <div class="logo">
          <img :src="logoImage" alt="Caleaf Tech logo" class="logo-image" />
          <span class="logo-text">CALEAF TECH</span>
        </div>
        <nav class="nav-links">
          <a href="#" class="nav-link">Products</a>
          <a href="#" class="nav-link">Technology</a>
          <a href="#" class="nav-link">Customize</a>
          <a href="#" class="nav-link">US Local Service</a>
          <a href="#" class="nav-link">Why Caleaf</a>
        </nav>
      </div>
      <div class="nav-right">
        <button class="contact-button">Contact</button>
        <button class="icon-button" aria-label="Search">
          <img :src="searchIcon" alt="" />
        </button>
      </div>
    </header>

    <div class="divider" aria-hidden="true"></div>

    <main class="content">
      <aside class="sidebar">
        <h2 class="sidebar-title">Innovative products</h2>
        <ul class="category-list">
          <li
            v-for="category in categories"
            :key="category.label"
            class="category-item"
            :class="{ active: category.active }"
          >
            {{ category.label }}
          </li>
        </ul>
      </aside>

      <section class="grid-section">
        <div class="product-grid">
          <article v-for="product in products" :key="product.id" class="product-card">
            <div class="badge">{{ product.badge }}</div>
            <img :src="product.image" :alt="`${product.name} product`" class="product-image" />
            <div class="product-info">
              <h3 class="product-name">{{ product.name }}</h3>
              <div class="product-variant">{{ product.variant }}</div>
            </div>
          </article>
        </div>

        <div class="cta-row">
          <button class="cta-button">
            <span>Explore our In-Ones</span>
            <img :src="arrowIcon" alt="" />
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.product-page {
  font-family: 'Roboto', 'Arial', sans-serif;
  color: #111111;
  background-color: #ffffff;
  min-height: 100vh;
  padding: 30px 80px 60px;
  box-sizing: border-box;
}

.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 60px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-image {
  width: 187px;
  height: 30px;
  object-fit: contain;
}

.logo-text {
  display: none;
}

.nav-links {
  display: flex;
  gap: 32px;
  font-size: 16px;
  color: #555555;
}

.nav-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link:focus {
  color: #1ce785;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.contact-button {
  background-color: #1ce785;
  color: #222222;
  border: none;
  border-radius: 50px;
  padding: 10px 36px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contact-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(28, 231, 133, 0.25);
}

.icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.icon-button:hover {
  background-color: rgba(28, 231, 133, 0.1);
}

.icon-button img {
  width: 22px;
  height: 22px;
}

.divider {
  margin-top: 20px;
  height: 1px;
  width: 100%;
  background: linear-gradient(90deg, rgba(232, 236, 243, 0), #e8ecf3 20%, #e8ecf3 80%, rgba(232, 236, 243, 0));
}

.content {
  display: flex;
  align-items: flex-start;
  gap: 32px;
  margin-top: 40px;
}

.sidebar {
  width: 240px;
}

.sidebar-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 24px;
}

.category-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 16px;
  color: #555555;
}

.category-item {
  padding: 14px 20px;
  border-radius: 10px;
  transition: background-color 0.2s ease, color 0.2s ease;
  cursor: pointer;
}

.category-item:hover {
  background-color: #f4f6fb;
  color: #111111;
}

.category-item.active {
  background-color: #f8f9fd;
  color: #111111;
  box-shadow: inset 0 0 0 1px rgba(232, 236, 243, 0.8);
}

.grid-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
}

.product-card {
  position: relative;
  background-color: #f8f9fd;
  border-radius: 20px;
  padding: 28px 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  box-shadow: 0 12px 30px rgba(17, 17, 17, 0.04);
}

.badge {
  position: absolute;
  top: 18px;
  left: 24px;
  padding: 4px 14px;
  border-radius: 50px;
  background-color: transparent;
  color: #1ce785;
  font-size: 16px;
  font-weight: 500;
}

.product-image {
  width: 135px;
  height: 120px;
  object-fit: contain;
}

.product-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.product-name {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #000000;
}

.product-variant {
  font-size: 14px;
  color: #111111;
  background-color: #1ce785;
  padding: 6px 22px;
  border-radius: 50px;
  font-weight: 500;
}

.cta-row {
  display: flex;
  justify-content: center;
  margin-top: 8px;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 14px 34px;
  border-radius: 50px;
  border: 1px solid #ededed;
  background-color: #ffffff;
  font-size: 16px;
  color: #333333;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.cta-button img {
  width: 20px;
  height: 20px;
}

.cta-button:hover {
  background-color: #f8f9fd;
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(17, 17, 17, 0.08);
}

@media (max-width: 1280px) {
  .product-page {
    padding: 24px 40px;
  }

  .content {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }

  .category-list {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
  }

  .category-item {
    flex: 1 1 200px;
  }
}
</style>


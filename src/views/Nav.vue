<script setup>
import Header from "@/components/Header/index.vue";

const productImage = 'https://www.figma.com/api/mcp/asset/7cfd8a26-51a1-4fef-a8d0-b5764e769beb'

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
  <img src="/nav.jpg" alt="Overlay Image" class="pointer-events-none z-50 absolute top-0 left-1/2 -translate-x-1/2 w-full opacity-50"/>

  <div class="product-page overflow-hidden">
    <Header headerClass="white"/>
    <main class="content h-full">
      <aside class="sidebar   h-full pt-[38px] border-r-[1px] border-r-solid border-[#000000]/12">
        <h2 class="sidebar-title pl-[2px]">Innovative products</h2>
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
          <article v-for="product in products" :key="product.id" class=" px-[21px] product-card pt-[23px]">
            <div class="badge self-start">{{ product.badge }}</div>
            <img :src="product.image" :alt="`${product.name} product`" class="product-image mt-[28px]" />
            <div class="product-info mt-[11px]">
              <h3 class="product-name">{{ product.name }}</h3>
              <div class="product-variant mt-[3px]">{{ product.variant }}</div>
            </div>
          </article>
        </div>

        <div class="cta-row">
          <button class="cta-button">
            <span>Explore our In-Ones</span>
            <img src="@/assets/img/icon42.png" alt="" />
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
  height: 100vh;
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
  width: 1300px;margin: 100px auto 0;
}

.sidebar {
  width: 272px;
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
  font-size: 16px;
  color: #555555;
}

.category-item {
  width: 220px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 28px;
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
  padding-top: 41px;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
  padding-left: 62px;
  row-gap: 19px;
}

.product-card {
  position: relative;
  background-color: #f8f9fd;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //gap: 18px;
  box-shadow: 0 12px 30px rgba(17, 17, 17, 0.04);
  width: 230px;
  height: 300px;
}

.badge {
  border-radius: 50px;
  background-color: transparent;
  color: #1ce785;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
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
  gap: 4px;
}

.product-name {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #000000;
  line-height: 32px;
}

.product-variant {
  font-size: 14px;
  color: #111111;
  background-color: #1ce785;
  width: 80px;
  height: 26px;
  border-radius: 50px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cta-row {
  display: flex;
  justify-content: center;
  margin-top: 33px;
  padding-left: 62px;
}

.cta-button {
  padding-right: 25px;
  padding-left: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 240px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid #ededed;
  color: #333;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 200% */
}

.cta-button img {
  width: 7px;
  height: 14px;
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


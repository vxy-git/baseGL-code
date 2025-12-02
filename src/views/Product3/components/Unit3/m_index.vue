<script setup>
import MediaAsset from "@/components/MediaAsset.vue";
import icon56 from "@/assets/img/icon56.png";
import m1 from '@/assets/product3/unit3/m1.jpg'
import m2 from '@/assets/product3/unit3/m2.jpg'
import m3 from '@/assets/product3/unit3/m3.jpg'
</script>

<template>
  <section class="m-unit3 text-white">
    <div class="c_padding c_1230 mx-auto flex flex-col gap-[56px] py-[96px]">
      <div class="text-center flex flex-col gap-[14px]">
        <div class="badge mx-auto">Gold standard for Resin/Rosin</div>
        <div class="title">
          Unicore powered.<br />
          Built for resin &amp; rosin.
        </div>
        <p class="desc">
          We pioneered the use of aerospace-grade, high-thermal-conductivity ceramics, creating a denser, uniformly
          porous
          structure that perfectly matches resin and rosin molecules for consistently optimal performance.
        </p>
        <MediaAsset :src="m1" type="image" class="mx-auto max-h-[600px]" alt="" :lazy="false" />
      </div>

      <div class="card">
        <div class="small">33% in pore uniformity</div>
        <div class="subtitle">Higher density, smoother draw</div>
        <p class="desc">
          Fired at 1832 °F (1000℃), the ceramic achieves a 20% denser structure that eliminates dry burns while
          unlocking
          full terpene potential.
        </p>
        <MediaAsset :src="m2" type="image" class="mx-auto max-h-[600px]" alt="" :lazy="false" />
      </div>

      <div class="card stats gap-[22px]">
        <div class="subtitle text-center">Thermal breakthrough</div>
        <div class="flex flex-col gap-[18px]">
          <div class="flex items-center justify-between gap-[12px]">
            <div class="label">Firing temp</div>
            <div class="value flex items-center gap-[8px]">
              20%
              <MediaAsset class="h-[30px]" :src="icon56" type="image" alt="" :lazy="false" />
            </div>
          </div>
          <div class="bar-wrap">
            <div class="bar bar-main"></div>
            <div class="bar-text">CALEAF TECH 1832 ℉ (1000℃)</div>
          </div>
          <div class="bar-wrap">
            <div class="bar bar-sub"></div>
            <div class="bar-text">Others 1472 ℉ (800℃)</div>
          </div>
        </div>
        <MediaAsset :src="m3" type="image" class="mx-auto max-h-[600px]" alt="" :lazy="false" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.m-unit3 {
  width: 100%;
  background: #000;
}

.badge {
  display: inline-flex;
  padding: 8px 14px;
  border-radius: 999px;
  background: linear-gradient(180deg, #CAA4FB 0%, #E0B8FF 50%, #CAA4FB 100%);
  color: #111;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.6px;
}

.title {
  font-family: Roboto, sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
}

.subtitle {
  font-family: Roboto, sans-serif;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.35;
  color: #fff;
}

.small {
  color: #CAA4FB;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.desc {
  color: #D9D9D9;
  font-size: 16px;
  line-height: 1.6;
}

.card {
  padding: 28px 22px;
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(202, 164, 251, 0.14) 0%, rgba(202, 164, 251, 0.06) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.stats {
  .label {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  }

  .value {
    color: #CAA4FB;
    font-size: 20px;
    font-weight: 700;
  }

  .bar-wrap {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .bar {
    height: 10px;
    border-radius: 999px;
  }

  .bar-main {
    width: 100%;
    background: #CAA4FB;
  }

  .bar-sub {
    width: 66%;
    background: rgba(255, 255, 255, 0.35);
  }

  .bar-text {
    color: #fff;
    font-size: 14px;
  }
}
</style>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

import partners from '../data/partners.json'

interface Partner {
  id: number
  name: string
  logo: string
}

const partnerList = partners as Partner[]
</script>

<template>
  <section
    class="w-full overflow-hidden px-4 py-8 sm:px-10 sm:py-10"
  >
    <!-- Heading -->
    <div class="container mx-auto mb-6 sm:mb-8 sm:px-5">
      <h2 class="text-3xl font-bold tracking-tight text-black">
        <span class="text-green-700">Our Trusted</span>
        Partners
      </h2>

      <p class="mt-1 text-base text-gray-500">
        The non-profits running campaigns on SocialAngel.
      </p>
    </div>

    <!-- Slider -->
    <div class="partner-slider relative w-full overflow-hidden bg-gray-100">
      <!-- Left fade -->
      <div class="slider-shadow slider-shadow-left"></div>

      <Swiper
        :modules="[Autoplay]"
        :slides-per-view="2"
        :space-between="0"
        :loop="true"
        :speed="5000"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :breakpoints="{
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
        }"
        class="partner-swiper"
      >
        <SwiperSlide
          v-for="partner in partnerList"
          :key="partner.id"
          class="partner-slide"
        >
          <div class="logo-box">
            <img
              :src="partner.logo"
              :alt="partner.name"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- Right fade -->
      <div class="slider-shadow slider-shadow-right"></div>
    </div>
  </section>
</template>

<style scoped>
.partner-slider {
  position: relative;
  width: 100%;
  height: 96px;
}

.partner-swiper {
  width: 100%;
  height: 96px;
}

/* Continuous movement */
.partner-swiper :deep(.swiper-wrapper) {
  transition-timing-function: linear !important;
}

/* ZERO GAP */
.partner-swiper :deep(.swiper-slide) {
  height: 96px;
  margin: 0 !important;
  padding: 0 !important;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* Logo */
.logo-box {
  width: 96px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: white;
  border:1px solid #889289;
  border-radius: 3px;

  overflow: hidden;
}

.logo-box img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}

/* -------------------------------- */
/* EDGE FADE */
/* -------------------------------- */

.slider-shadow {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 120px;

  z-index: 10;
  pointer-events: none;
}

/* Left */
.slider-shadow-left {
  left: 0;

  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.75),
    rgba(255, 255, 255, 0)
  );

  filter: drop-shadow(10px 0 18px rgba(0, 64, 40, 0.18));
}

/* Right */
.slider-shadow-right {
  right: 0;

  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.75),
    rgba(255, 255, 255, 0)
  );

  filter: drop-shadow(-10px 0 18px rgba(0, 64, 40, 0.18));
}

/* Mobile */
@media (max-width: 640px) {
  .slider-shadow {
    width: 70px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .slider-shadow {
    width: 150px;
  }
}
</style>

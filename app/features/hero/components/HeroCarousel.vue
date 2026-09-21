<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperInstance } from 'swiper'
import { Autoplay, Pagination } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

import 'swiper/css'
import 'swiper/css/pagination'

import slides from '../data/slides.json'

const swiperInstance = ref<SwiperInstance | null>(null)

function setSwiper(instance: SwiperInstance) {
  swiperInstance.value = instance
}

function previousSlide() {
  swiperInstance.value?.slidePrev()
}

function nextSlide() {
  swiperInstance.value?.slideNext()
}
</script>

<template>
  <section class="w-full overflow-hidden py-6">
    <Swiper
      :modules="[Autoplay, Pagination]"
      slides-per-view="auto"
      :space-between="20"
      :centered-slides="true"
      :loop="true"
      :speed="700"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      class="social-angel-swiper"
      @swiper="setSwiper"
    >
      <!-- Slides -->
      <SwiperSlide
        v-for="slide in slides"
        :key="slide.id"
      >
        <div
          class="
            relative
            h-[360px]
            overflow-hidden
            rounded-2xl
            bg-[#e4f5ef]
          "
        >
          <!-- Text Content -->
          <div
            class="
              absolute
              inset-y-0
              left-0
              z-20
              flex
              w-[52%]
              items-center
              px-8
              md:px-10
            "
          >
            <div class="max-w-[460px]">

              <!-- Small Green Line -->
              <div
                class="
                  mb-5
                  h-[3px]
                  w-10
                  rounded-full
                  bg-green-700
                "
              ></div>

              <!-- Title -->
              <h1
                class="
                  text-3xl
                  font-bold
                  leading-[1.08]
                  text-[#092c27]
                  md:text-4xl
                "
              >
                {{ slide.title }}
              </h1>

              <!-- Description -->
              <p
                class="
                  mt-4
                  text-sm
                  leading-6
                  text-[#31554e]
                "
              >
                {{ slide.description }}
              </p>

              <!-- Donate Button -->
              <NuxtLink
                to="/explore-fundraisers"
                class="
                  btn
                  btn-success
                  mt-6
                  min-h-0
                  rounded-full
                  border-0
                  bg-green-700
                  px-6
                  text-white
                  shadow-none
                  hover:bg-green-800
                "
              >
                Donate Now
              </NuxtLink>

            </div>
          </div>

          <!-- Image -->
          <div
            class="
              absolute
              right-0
              top-0
              h-full
              w-[56%]
            "
          >
            <img
              :src="slide.image"
              :alt="slide.title"
              class="
                h-full
                w-full
                object-cover
              "
            />

            <!-- Slanted Boundary -->
            <div
              class="
                absolute
                inset-y-0
                left-0
                w-[110px]
                bg-[#e4f5ef]
              "
              style="
                clip-path: polygon(
                  0 0,
                  55% 0,
                  0 100%
                );
              "
            ></div>
          </div>
        </div>
      </SwiperSlide>

      <!-- Previous Button -->
      <button
        type="button"
        class="
          hero-prev
          btn
          btn-circle
          absolute
          left-2
          top-1/2
          z-30
          h-10
          min-h-10
          w-10
          -translate-y-1/2
          border-0
          bg-white
          text-base-content
          shadow-md
          hover:bg-white
        "
        aria-label="Previous slide"
        @click="previousSlide"
      >
        <ChevronLeft class="size-5" aria-hidden="true" />
      </button>

      <!-- Next Button -->
      <button
        type="button"
        class="
          hero-next
          btn
          btn-circle
          absolute
          right-2
          top-1/2
          z-30
          h-10
          min-h-10
          w-10
          -translate-y-1/2
          border-0
          bg-white
          text-base-content
          shadow-md
          hover:bg-white
        "
        aria-label="Next slide"
        @click="nextSlide"
      >
        <ChevronRight class="size-5" aria-hidden="true" />
      </button>
    </Swiper>
  </section>
</template>

<style scoped>
/* --------------------------------
   Swiper
-------------------------------- */

.social-angel-swiper {
  width: 100%;
  overflow: visible;
}

/* Main slide width */
.social-angel-swiper :deep(.swiper-slide) {
  width: min(1008px, calc(100vw - 40px));
}

/* --------------------------------
   Mobile
-------------------------------- */

@media (max-width: 1023px) {
  .social-angel-swiper :deep(.swiper-slide) {
    width: calc(100vw - 32px);
  }
}

/* --------------------------------
   Pagination
-------------------------------- */

.social-angel-swiper :deep(.swiper-pagination) {
  bottom: 12px;
}

.social-angel-swiper :deep(.swiper-pagination-bullet) {
  width: 9px;
  height: 9px;
  margin: 0 4px !important;
  border-radius: 9999px;
  opacity: 1;
  transition:
    width 0.3s ease,
    transform 0.3s ease;
}

/* Red */
.social-angel-swiper
  :deep(.swiper-pagination-bullet:nth-child(1)) {
  background: #ef4444;
}

/* Blue */
.social-angel-swiper
  :deep(.swiper-pagination-bullet:nth-child(2)) {
  background: #3b82f6;
}

/* Yellow */
.social-angel-swiper
  :deep(.swiper-pagination-bullet:nth-child(3)) {
  background: #facc15;
}

/* Green */
.social-angel-swiper
  :deep(.swiper-pagination-bullet:nth-child(4)) {
  background: #22c55e;
}

/* Active dot */
.social-angel-swiper
  :deep(.swiper-pagination-bullet-active) {
  width: 20px;
  transform: scale(1);
}

/* --------------------------------
   Smooth slide transition
-------------------------------- */

.social-angel-swiper
  :deep(.swiper-slide) {
  transition:
    transform 0.7s ease,
    opacity 0.7s ease;
}
</style>

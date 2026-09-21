<script setup lang="ts">
interface Donation {
  id: number
  name: string
  amount: string
}

const donations: Donation[] = [
  { id: 1, name: 'Kajal', amount: '₹432' },
  { id: 2, name: 'Ujjwal', amount: '₹300' },
  { id: 3, name: 'Osho', amount: '₹300' },
  { id: 4, name: 'Amol', amount: '₹2,000' },
  { id: 5, name: 'Ajay', amount: '₹1,000' },
  { id: 6, name: 'DINESHBHAI', amount: '₹500' },
  { id: 7, name: 'Rahul', amount: '₹750' },
  { id: 8, name: 'Priya', amount: '₹1,200' },
]

/*
 * Duplicate the list so the animation can
 * continuously move without a visible jump.
 */
const carouselItems = [...donations, ...donations]
</script>

<template>
  <section class="donation-carousel">
    <div class="donation-track">
      <div
        v-for="(donation, index) in carouselItems"
        :key="`${donation.id}-${index}`"
        class="donation-item"
      >
        <span>
          {{ donation.name }} has donated {{ donation.amount }}
        </span>

        <span class="separator">+</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.donation-carousel {
  width: 100%;
  height: 46px;

  overflow: hidden;

  background: #009b5a;

  display: flex;
  align-items: center;

  white-space: nowrap;
}

/* Moving row */
.donation-track {
  display: flex;
  align-items: center;

  width: max-content;

  animation: donation-scroll 28s linear infinite;
}

/* Each donation */
.donation-item {
  display: flex;
  align-items: center;

  flex-shrink: 0;

  font-size: 15px;
  font-weight: 600;
  color: white;

  padding-left: 28px;
  padding-right: 28px;
}

/* + separator */
.separator {
  margin-left: 28px;

  font-size: 22px;
  font-weight: 700;

  color: white;
}

/* Continuous linear movement */
@keyframes donation-scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

/* Slightly smaller on mobile */
@media (max-width: 640px) {
  .donation-carousel {
    height: 42px;
  }

  .donation-item {
    font-size: 13px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .separator {
    margin-left: 20px;
    font-size: 18px;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .donation-track {
    animation: none;
  }
}
</style>
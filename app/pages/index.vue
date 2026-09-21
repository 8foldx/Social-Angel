<script setup lang="ts">
import HeroCarousel from '~/features/hero/components/HeroCarousel.vue'
import DonationCarousel from '~/features/donations/components/DonationCarousel.vue'
import ExploreCarousel from '~/components/shared/ExploreCarousel.vue'

import CampaignCard from '~/features/campaigns/components/CampaignCard.vue'
import campaigns from '~/features/campaigns/data/campaigns.json'

import TrustedPartner from '~/features/partners/components/TrustedPartner.vue'
</script>

<template>
  <div>
    <!-- Hero Carousel -->
    <HeroCarousel />

    <!-- Explore Carousel -->
    <ExploreCarousel />

    <!-- Explore Causes -->
    <section class="container mx-auto px-4">
      <ExploreCauses />
    </section>

    <!-- Featured Campaigns -->
    <section class="container mx-auto px-4 py-10">
      <!-- Campaign Cards -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <CampaignCard
          v-for="campaign in campaigns"
          :key="campaign.id"
          :campaign="campaign"
        />
      </div>

      <!-- Read More -->
      <div class="mt-10 flex justify-center">
        <div class="aura aura-dual rounded-md bg-green-500">
          <NuxtLink
            to="/campaigns"
            class="card rounded-md bg-white text-green-900 transition duration-600 hover:bg-green-100"
          >
            <div class="card-body items-center px-8 py-3">
              <span class="font-semibold">
                Read More
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Trusted Partners -->
    <TrustedPartner />

    <!-- Donation Carousel -->
    <DonationCarousel />
  </div>
</template>

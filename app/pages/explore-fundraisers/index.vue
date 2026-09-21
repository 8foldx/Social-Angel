<script setup lang="ts">
import CampaignCard from '~/features/campaigns/components/CampaignCard.vue'
import campaigns from '~/features/campaigns/data/campaigns.json'
</script>

<template>
  <section class="container mx-auto px-4 py-10 sm:py-14">
    <h1 class="text-3xl font-bold text-green-950">Explore fundraisers</h1>
    <p class="mt-2 text-base-content/70">Support people and communities that need help now.</p>

    <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <CampaignCard
        v-for="campaign in campaigns"
        :key="campaign.id"
        :campaign="campaign"
      />
    </div>
  </section>
</template>

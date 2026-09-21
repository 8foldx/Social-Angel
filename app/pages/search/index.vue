<script setup lang="ts">
import { computed } from 'vue'
import CampaignCard from '~/features/campaigns/components/CampaignCard.vue'
import campaigns from '~/features/campaigns/data/campaigns.json'

const route = useRoute()
const query = computed(() => String(route.query.q || '').trim().toLowerCase())
const results = computed(() => {
  if (!query.value) return []

  return campaigns.filter(campaign =>
    [campaign.title, campaign.organization].some(value =>
      value.toLowerCase().includes(query.value),
    ),
  )
})
</script>

<template>
  <section class="container mx-auto px-4 py-10 sm:py-14">
    <h1 class="text-3xl font-bold text-green-950">Search results</h1>
    <p v-if="query" class="mt-2 text-base-content/70">
      {{ results.length }} result{{ results.length === 1 ? '' : 's' }} for “{{ route.query.q }}”
    </p>
    <p v-else class="mt-2 text-base-content/70">Enter a search term to find campaigns.</p>

    <div v-if="results.length" class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <CampaignCard
        v-for="campaign in results"
        :key="campaign.id"
        :campaign="campaign"
      />
    </div>
    <p v-else-if="query" class="mt-8 text-base-content/70">No campaigns matched your search.</p>
  </section>
</template>

<script setup lang="ts">
import CampaignImage from './CampaignImage.vue'
import CampaignInfo from './CampaignInfo.vue'
import CampaignActions from './CampaignActions.vue'
import type { Campaign } from '../types/campaign'

defineProps<{
  campaign: Campaign
}>()
</script>

<template>
  <article class="group mx-auto w-full max-w-sm overflow-hidden rounded-xl bg-base-100 text-base-content shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
    <NuxtLink :to="campaign.href" class="block" :aria-label="`View campaign: ${campaign.title}`">
      <CampaignImage
        :image="campaign.image"
        :title="campaign.title"
        :verified="campaign.verified"
      />

      <!-- INFO -->
      <CampaignInfo
        :title="campaign.title"
        :organization="campaign.organization"
        :progress="campaign.progress"
        :raised="campaign.raised"
        :donors="campaign.donors"
      />
    </NuxtLink>

    <div class="px-4 pb-4">
      <CampaignActions :to="campaign.href" :title="campaign.title" />
    </div>
  </article>
</template>

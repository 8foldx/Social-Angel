<script setup lang="ts">
import { computed } from 'vue'
import campaigns from '~/features/campaigns/data/campaigns.json'
import type { Campaign } from '~/features/campaigns/types/campaign'

const route = useRoute()
const campaign = computed<Campaign | undefined>(() =>
  campaigns.find(item => item.id === Number(route.params.id)),
)

if (!campaign.value) {
  throw createError({ statusCode: 404, statusMessage: 'Campaign not found' })
}
</script>

<template>
  <section class="container mx-auto max-w-5xl px-4 py-10 sm:py-14">
    <div class="grid gap-8 md:grid-cols-2">
      <img
        :src="campaign!.image"
        :alt="campaign!.title"
        class="h-72 w-full rounded-xl object-cover shadow-lg md:h-full"
      >

      <div>
        <p class="text-sm font-medium text-green-700">By {{ campaign!.organization }}</p>
        <h1 class="mt-2 text-3xl font-bold leading-tight text-green-950 sm:text-4xl">
          {{ campaign!.title }}
        </h1>
        <div class="mt-8">
          <progress
            class="progress progress-success h-3 w-full"
            :value="campaign!.progress"
            max="100"
          />
          <div class="mt-3 flex items-center justify-between">
            <span class="text-xl font-bold">{{ campaign!.raised }} raised</span>
            <span class="text-base-content/70">{{ campaign!.donors }} donors</span>
          </div>
        </div>
        <NuxtLink
          to="/start-a-fundraiser"
          class="btn mt-8 rounded-full border-0 bg-green-600 px-6 text-white hover:bg-green-700"
        >
          Donate now
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

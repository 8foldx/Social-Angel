<script setup lang="ts">
import {
  IndianRupee,
  Heart,
  Search,
  Sparkles,
  Plus,
} from 'lucide-vue-next'
</script>

<template>
  <div class="fab fab-flower">
    <!-- Main FAB -->
    <div
      tabindex="0"
      role="button"
      aria-label="Donation actions"
      class="btn btn-lg btn-circle border-0 bg-green-600 text-white shadow-lg hover:bg-green-700"
    >
      <IndianRupee class="h-6 w-6" />
    </div>

    <!-- Donate -->
    <NuxtLink
      to="/explore-fundraisers"
      class="btn btn-lg btn-circle border-0 bg-green-600 text-white hover:bg-green-700"
      aria-label="Donate now"
    >
      <Heart class="h-5 w-5" />
    </NuxtLink>

    <!-- Campaigns -->
    <NuxtLink
      to="/campaigns"
      class="btn btn-lg btn-circle border-0 bg-green-600 text-white hover:bg-green-700"
      aria-label="View campaigns"
    >
      <Search class="h-5 w-5" />
    </NuxtLink>

    <!-- Causes -->
    <NuxtLink
      to="/explore-categories"
      class="btn btn-lg btn-circle border-0 bg-green-600 text-white hover:bg-green-700"
      aria-label="View causes"
    >
      <Sparkles class="h-5 w-5" />
    </NuxtLink>

    <!-- Create Campaign -->
    <NuxtLink
      to="/start-a-fundraiser"
      class="btn btn-lg btn-circle border-0 bg-green-600 text-white hover:bg-green-700"
      aria-label="Start a campaign"
    >
      <Plus class="h-6 w-6" />
    </NuxtLink>
  </div>
</template>

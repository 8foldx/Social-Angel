<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  to: string
  badge?: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="block rounded-lg p-4"
  >
    <h3 class="font-semibold text-slate-900">
      {{ title }}
    </h3>

    <p
      v-if="description"
      class="mt-1 text-sm text-slate-500"
    >
      {{ description }}
    </p>

    <span
      v-if="badge"
      class="badge badge-error mt-2"
    >
      {{ badge }}
    </span>
  </NuxtLink>
</template>
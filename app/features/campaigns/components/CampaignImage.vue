<script setup lang="ts">
defineProps<{
  image: string
  title: string
  verified: boolean
}>()
</script>

<template>
  <figure class="relative h-56 overflow-hidden">
    <img
      :src="image"
      :alt="title"
      class="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
    />

    <span
      v-if="verified"
      class="badge badge-success absolute left-0 top-0 rounded-br-lg rounded-tl-none border-0 bg-green-900 px-3 text-white"
    >
      ✓ Verified
    </span>
  </figure>
</template>
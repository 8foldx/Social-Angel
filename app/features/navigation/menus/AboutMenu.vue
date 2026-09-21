<script setup lang="ts">
import menuData from '../data/nav/about.json'
</script>

<template>
  <div class="w-full bg-white p-6">
    <div class="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
      <NuxtLink
        v-for="item in menuData"
        :key="item.id"
        :to="item.to"
        class="group block rounded-lg p-4 text-left transition-colors duration-200 hover:bg-green-50"
      >
        <h3
          class="font-semibold text-slate-900 transition-colors duration-200 group-hover:text-green-700"
        >
          {{ item.name }}
        </h3>

        <p
          class="mt-1 text-sm text-slate-500 transition-colors duration-200 group-hover:text-green-800"
        >
          {{ item.description }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>
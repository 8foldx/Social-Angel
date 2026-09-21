<script setup lang="ts">
import menuData from '../data/nav/fundraise.json'

const nonProfit = menuData.find(item => !item.dropdown)
const individual = menuData.find(item => item.dropdown)
</script>

<template>
  <div class="w-full bg-white p-6">
    <div class="grid w-full grid-cols-1 gap-3 md:grid-cols-4">

      <!-- Non-Profit -->
      <div v-if="nonProfit">
        <NuxtLink
          :to="nonProfit.to"
          class="group block rounded-lg p-4 text-left transition-colors duration-200 hover:bg-green-50"
        >
          <h3
            class="font-semibold text-slate-900 transition-colors duration-200 group-hover:text-green-700"
          >
            {{ nonProfit.name }}
          </h3>

          <p
            class="mt-1 text-sm text-slate-500 transition-colors duration-200 group-hover:text-green-800"
          >
            Start fundraising as a non-profit organization.
          </p>
        </NuxtLink>
      </div>

      <!-- Individual -->
      <div
        v-if="individual"
        class="md:col-span-3"
      >
        <h3 class="mb-3 px-4 font-semibold text-slate-900">
          {{ individual.name }}
        </h3>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="item in individual.categories"
            :key="item.id"
            :to="item.to"
            class="group block rounded-lg p-4 text-left transition-colors duration-200 hover:bg-green-50"
          >
            <h4
              class="font-medium text-slate-900 transition-colors duration-200 group-hover:text-green-700"
            >
              {{ item.name }}
            </h4>

            <p
              class="mt-1 text-sm text-slate-500 transition-colors duration-200 group-hover:text-green-800"
            >
              {{ item.description }}
            </p>
          </NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>
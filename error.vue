<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const handleError = () => {
  clearError({
    redirect: '/',
  })
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-white px-6">
    <div class="w-full max-w-2xl text-center">

      <!-- 404 -->
      <div class="mb-6">
        <h1
          class="text-[120px] font-bold leading-none tracking-tight text-[#008f4c] md:text-[180px]"
        >
          404
        </h1>
      </div>

      <!-- Content -->
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold text-gray-900 md:text-3xl">
          Page not found
        </h2>

        <p class="mx-auto max-w-md text-sm leading-6 text-gray-500 md:text-base">
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>
      </div>

      <!-- Actions -->
      <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <button
          type="button"
          class="btn rounded-full bg-[#008f4c] px-7 text-white hover:bg-[#007a40]"
          @click="handleError"
        >
          Back to Home
        </button>

        <button
          type="button"
          class="btn btn-outline rounded-full px-7"
          @click="$router.back()"
        >
          Go Back
        </button>
      </div>

      <!-- Brand -->
      <div class="mt-12 text-xs text-gray-400">
        SocialAngel
      </div>

    </div>
  </div>
</template>
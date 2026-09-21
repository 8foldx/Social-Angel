<script setup lang="ts">
import { Heart } from 'lucide-vue-next'
import { ref, onMounted, watch, onBeforeUnmount } from 'vue'

const props = defineProps<{
  title: string
  organization: string
  progress: number
  raised: string
  donors: number
}>()

const animatedProgress = ref(0)

let animationFrame: number | null = null

const animateProgress = (target: number) => {
  if (animationFrame !== null) {
    cancelAnimationFrame(animationFrame)
  }

  const duration = 1500
  const start = performance.now()
  const startValue = animatedProgress.value

  const step = (timestamp: number) => {
    const elapsed = timestamp - start
    const progress = Math.min(elapsed / duration, 1)

    const easeProgress = 1 - Math.pow(1 - progress, 3)

    animatedProgress.value =
      startValue + (target - startValue) * easeProgress

    if (progress < 1) {
      animationFrame = requestAnimationFrame(step)
    } else {
      animatedProgress.value = target
      animationFrame = null
    }
  }

  animationFrame = requestAnimationFrame(step)
}

onMounted(() => {
  animateProgress(props.progress)
})

watch(
  () => props.progress,
  (newValue) => {
    animateProgress(newValue)
  },
)

onBeforeUnmount(() => {
  if (animationFrame !== null) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>

<template>
  <div class="card-body px-4 py-2">

    <!-- ORGANIZATION -->
    <p class="mt-2 truncate text-sm text-base-content/60">
      By {{ organization }}
    </p>

    <!-- TITLE -->
    <h2 class="line-clamp-2 text-lg font-bold leading-6">
      {{ title }}
    </h2>

    <!-- PROGRESS -->
    <div class="mt-5">
      <progress
        class="progress progress-success h-3 w-full"
        :value="animatedProgress"
        max="100"
      />
    </div>

    <!-- RAISED + DONORS -->
    <div class="mt-6 flex items-center justify-between">

      <!-- RAISED -->
      <div class="flex items-center">
        <span class="text-lg font-bold">
          {{ raised }}
        </span>

        <span class="badge badge-ghost ml-2 text-xs text-base-content/60">
          Raised
        </span>
      </div>

      <!-- DONORS -->
      <div class="flex items-center gap-1 text-sm font-medium text-success">
        <Heart
          class="h-4 w-4"
          fill="currentColor"
        />

        <span>
          {{ donors }} Donors
        </span>
      </div>

    </div>

    <!-- ACTIONS -->
    <slot name="actions"></slot>

  </div>
</template>

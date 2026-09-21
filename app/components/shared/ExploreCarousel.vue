<script setup lang="ts">
import {
  Flame,
  Stethoscope,
  BookOpen,
  Baby,
  PawPrint,
  TriangleAlert,
  Accessibility,
  Venus,
  UsersRound,
} from 'lucide-vue-next'

interface Cause {
  name: string
  icon: any
}

const causes: Cause[] = [
  {
    name: 'Urgent',
    icon: Flame,
  },
  {
    name: 'Medical',
    icon: Stethoscope,
  },
  {
    name: 'Education',
    icon: BookOpen,
  },
  {
    name: 'Children',
    icon: Baby,
  },
  {
    name: 'Animal',
    icon: PawPrint,
  },
  {
    name: 'Disaster',
    icon: TriangleAlert,
  },
  {
    name: 'Specially Abled',
    icon: Accessibility,
  },
  {
    name: 'Women',
    icon: Venus,
  },
  {
    name: 'Memorial',
    icon: UsersRound,
  },
]
</script>

<template>
  <section class="w-full">

    <!-- Causes -->
    <div
      class="mt-6 flex w-full snap-x overflow-x-auto border-b border-[#d9d9d9] sm:mt-8"
    >
      <button
        v-for="(cause, index) in causes"
        :key="cause.name"
        class="group relative flex w-24 shrink-0 snap-start flex-col items-center justify-center pb-3 text-center sm:w-[120px]"
      >
        <!-- Active underline -->
        <span
          v-if="index === 0"
          class="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-red-500"
        />

        <component
          :is="cause.icon"
          :size="25"
          :stroke-width="1.8"
          :class="
            index === 0
              ? 'text-red-500'
              : 'text-[#687481] group-hover:text-[#00894f]'
          "
        />

        <span
          class="mt-1.5 whitespace-nowrap text-[14px]"
          :class="
            index === 0
              ? 'font-medium text-red-500'
              : 'text-[#687481] group-hover:text-[#00894f]'
          "
        >
          {{ cause.name }}
        </span>
      </button>
    </div>
  </section>
</template>

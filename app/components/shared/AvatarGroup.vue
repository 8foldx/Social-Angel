<script setup lang="ts">
import { Users } from 'lucide-vue-next'

interface Avatar {
  id: number
  image: string
  alt: string
}

interface Props {
  count: number
}

defineProps<Props>()

const avatars: Avatar[] = [
  {
    id: 1,
    image: 'https://img.daisyui.com/images/profile/demo/batperson@192.webp',
    alt: 'Donor',
  },
  {
    id: 2,
    image: 'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
    alt: 'Donor',
  },
  {
    id: 3,
    image: 'https://img.daisyui.com/images/profile/demo/averagebulk@192.webp',
    alt: 'Donor',
  },
  {
    id: 4,
    image: 'https://img.daisyui.com/images/profile/demo/averagebulk@192.webp',
    alt: 'Donor',
  },
]
</script>

<template>
  <div
    class="avatar-group -space-x-4"
    aria-label="Campaign donors"
  >
    <!-- Visible Donor Avatars -->
    <div
      v-for="avatar in avatars"
      :key="avatar.id"
      class="avatar"
    >
      <div
        class="
          w-8 overflow-hidden rounded-full
          border-2 border-base-100
          bg-base-200 shadow-sm
        "
      >
        <img
          :src="avatar.image"
          :alt="avatar.alt"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>

    <!-- Remaining Donors -->
    <div
      v-if="count > avatars.length"
      class="avatar"
    >
      <div
        class="
          flex w-8 items-center justify-center
          rounded-full
          border-2 border-base-100
          bg-green-900
          text-white shadow-sm
        "
        :aria-label="`${count - avatars.length} more donors`"
      >
        <div class="flex items-center gap-0.5">
          <span class="text-[9px] font-bold leading-none">
            +{{ count - avatars.length }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
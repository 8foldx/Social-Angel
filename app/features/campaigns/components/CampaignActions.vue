<script setup lang="ts">
import { ref } from 'vue'
import { Share2 } from 'lucide-vue-next'
import AuraButton from '~/components/shared/AuraButton.vue'

const props = defineProps<{
  to: string
  title: string
}>()

const shareStatus = ref('')

async function shareCampaign() {
  const url = new URL(props.to, window.location.origin).toString()

  try {
    if (navigator.share) {
      await navigator.share({ title: props.title, url })
      shareStatus.value = 'Share dialog opened.'
    } else {
      await navigator.clipboard.writeText(url)
      shareStatus.value = 'Campaign link copied.'
    }
  } catch (error) {
    if ((error as DOMException).name !== 'AbortError') {
      shareStatus.value = 'Unable to share this campaign.'
    }
  }
}
</script>

<template>
  <div class="mt-4 flex gap-2">

    <!-- SHARE -->
    <button
      type="button"
      class="aura aura-dual h-10 w-12 rounded-md bg-green-500 p-[2px]"
      aria-label="Share campaign"
      @click="shareCampaign"
    >
      <span
        class="flex h-full w-full items-center justify-center rounded-md bg-white text-green-900 transition duration-300 hover:bg-green-100"
      >
        <Share2 class="h-4 w-4" />
      </span>
    </button>

    <!-- DONATE -->
    <div class="flex-1">
      <AuraButton :to="to">
        Donate Now
      </AuraButton>
    </div>

    <span class="sr-only" role="status">{{ shareStatus }}</span>

  </div>
</template>

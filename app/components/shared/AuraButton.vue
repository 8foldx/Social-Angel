<script setup lang="ts">
const props = defineProps<{
  to?: string
}>()

const handleClick = () => {
  if (props.to) {
    navigateTo(props.to)
  }
}
</script>

<template>
  <div class="aura aura-dual flex-1 rounded-md bg-green-500">
    <button
      type="button"
      class="
        flex h-10 w-full
        items-center justify-center
        rounded-md
        border-0
        bg-white
        px-4
        text-sm
        font-semibold
        text-green-900
        transition
        duration-300
        hover:bg-green-100
      "
      @click="handleClick"
    >
      <slot>Donate Now</slot>
    </button>
  </div>
</template>
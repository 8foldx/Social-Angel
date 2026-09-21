<script setup lang="ts">
defineProps<{
  label: string
  target: string
}>()
</script>

<template>
  <button
    type="button"
    class="btn btn-ghost"
    :popovertarget="target"
  >
    {{ label }}
  </button>
</template>
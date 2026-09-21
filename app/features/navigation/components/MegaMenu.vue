<script setup lang="ts">
defineProps<{
  id: string
}>()
</script>

<template>
  <div
    :id="id"
    popover
    class="megamenu m-0 w-[calc(100vw-2rem)] max-w-[1200px] overflow-y-auto bg-white p-0 shadow-xl"
  >
    <span class="megamenu-active"></span>

    <slot />
  </div>
</template>

<style scoped>
.megamenu {
  position: fixed;

  /* Header height */
  top: 80px;

  /* Center relative to viewport */
  left: 50%;
  right: auto;

  transform: translateX(-50%);

  /* Don't inherit browser popover positioning */
  margin: 0;

  max-height: calc(100vh - 80px);
}

/* Backdrop is optional */
.megamenu::backdrop {
  background: transparent;
}
</style>
<script setup lang="ts">
import Footer from '~/components/layout/Footer.vue'
import Header from '~/components/layout/Header.vue'
import FAB from '~/components/shared/FAB.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <!-- Header -->
    <div class="sticky top-0 z-50">
      <Header />
    </div>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Floating Action Button -->
    <FAB />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Search, User, ChevronDown } from 'lucide-vue-next'

import AppLogo from '~/components/common/AppLogo.vue'
import Navbar from '~/features/navigation/components/Navbar.vue'
import MobileSidebarDrawer from '~/features/navigation/components/MobileSidebarDrawer.vue'
import FullscreenSearch from '~/features/navigation/components/compo/FullscreenSearch.vue'
import AuthModal from '~/features/navigation/components/compo/AuthModal.vue'

const isSearchOpen = ref(false)
const authModal = ref<'login' | 'signup' | null>(null)
</script>

<template>
  <header class="relative z-50 border-b border-slate-200 bg-white">
    <div class="mx-auto flex h-20 w-full max-w-[1200px] items-center px-4 sm:px-6">
      <!-- Logo -->
      <div class="shrink-0">
        <AppLogo />
      </div>

      <!-- Desktop Navigation -->
      <nav class="ml-auto hidden items-center xl:flex" aria-label="Main navigation">
        <Navbar />
      </nav>

      <!-- Desktop Actions -->
      <div class="ml-6 hidden shrink-0 items-center xl:flex">
        <!-- Search -->
        <button type="button" class="btn btn-ghost btn-square !border-0 rounded-full hover:bg-green-50 hover:text-green-700"
          aria-label="Search" @click="isSearchOpen = true">
          <Search class="size-5" />
        </button>

        <!-- Divider -->
        <div class="mx-3 h-6 w-px bg-slate-300"></div>

        <!-- Start Fundraiser -->
        <NuxtLink to="/start-a-fundraiser"
          class="btn rounded-full border-0 bg-green-600 px-5 font-semibold text-white hover:bg-green-700">
          Start a Fundraiser
        </NuxtLink>

        <!-- Account -->
        <button type="button" class="btn btn-ghost ml-2 gap-1 !border-0 rounded hover:bg-green-50 hover:text-green-700"
          aria-label="Log in or sign up"
          @click="authModal = 'login'">
          <User class="size-5" />
          <ChevronDown class="size-3.5" />
        </button>
      </div>

      <!-- Mobile / Tablet Actions -->
      <div class="ml-auto flex items-center gap-1 xl:hidden">
        <!-- Search -->
        <button type="button"
          class="btn btn-ghost btn-square !border-0 focus:outline-none rounded-full hover:bg-green-50 hover:text-green-700"
          aria-label="Search" @click="isSearchOpen = true">
          <Search class="size-5" />
        </button>

        
        
        <!-- Account -->
        <button type="button" class="btn btn-ghost !border-0 rounded-full btn-square  bg-green-100 hover:bg-green-50 hover:text-green-700"
        aria-label="Log in or sign up"
        @click="authModal = 'login'">
        <User class="size-5 text-green-800 " />
      </button>

      <!-- Menu -->
      <MobileSidebarDrawer />

      </div>
    </div>

    <FullscreenSearch v-if="isSearchOpen" @close="isSearchOpen = false" />
    <AuthModal
      v-if="authModal"
      :mode="authModal"
      @close="authModal = null"
      @change-mode="authModal = $event"
    />
  </header>
</template>

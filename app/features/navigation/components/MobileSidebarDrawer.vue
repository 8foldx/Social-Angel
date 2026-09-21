<script setup lang="ts">
import {
  Menu,
  X,
  ChevronDown,
} from 'lucide-vue-next'

import AboutMenu from '../menus/AboutMenu.vue'
import FundraiseMenu from '../menus/FundraiseMenu.vue'
import DonateMenu from '../menus/DonateMenu.vue'
import JoinMenu from '../menus/JoinMenu.vue'
import ResourcesMenu from '../menus/ResourcesMenu.vue'
import AppLogo from '~/components/common/AppLogo.vue'
</script>

<template>
  <!-- Menu Button -->
  <button
    type="button"
    class="btn btn-ghost btn-square transition-all duration-200 hover:bg-green-50 hover:text-green-700"
    popovertarget="mobile-navigation"
    aria-label="Open navigation menu"
  >
    <Menu class="size-6" />
  </button>

  <!-- Sidebar -->
  <div
    id="mobile-navigation"
    popover
    class="m-0 h-dvh max-h-none w-[340px] max-w-[88vw] overflow-hidden bg-white p-0 shadow-2xl sm:w-[380px] md:w-[420px]"
  >
    <!-- Header -->
    <div
      class="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-5 md:px-6"
    >
      <h2
        class="text-lg font-semibold text-slate-900 sm:text-xl"
      >
        <AppLogo/>
      </h2>

      <button
        type="button"
        class="btn btn-ghost btn-square transition-all duration-200 hover:rotate-90 border-none hover:bg-green-50 hover:text-green-700"
        popovertarget="mobile-navigation"
        aria-label="Close navigation menu"
      >
        <X class="size-5" />
      </button>
    </div>

    <!-- Navigation -->
    <nav
      class="h-[calc(100dvh-5rem)] overflow-y-auto bg-white p-3 sm:p-4 md:p-5"
      aria-label="Mobile navigation"
    >
      <div class="space-y-2">

        <!-- About -->
        <details class="group">
          <summary class="nav-item">
            <span>About</span>

            <ChevronDown
              class="size-4 shrink-0 transition-transform duration-300 group-open:rotate-180"
            />
          </summary>

          <div class="mobile-submenu">
            <AboutMenu />
          </div>
        </details>

        <!-- Fundraise -->
        <details class="group">
          <summary class="nav-item">
            <span>Fundraise</span>

            <ChevronDown
              class="size-4 shrink-0 transition-transform duration-300 group-open:rotate-180"
            />
          </summary>

          <div class="mobile-submenu">
            <FundraiseMenu />
          </div>
        </details>

        <!-- Donate -->
        <details class="group">
          <summary class="nav-item">
            <span>Donate</span>

            <ChevronDown
              class="size-4 shrink-0 transition-transform duration-300 group-open:rotate-180"
            />
          </summary>

          <div class="mobile-submenu">
            <DonateMenu />
          </div>
        </details>

        <!-- Join -->
        <details class="group">
          <summary class="nav-item">
            <span>Join</span>

            <ChevronDown
              class="size-4 shrink-0 transition-transform duration-300 group-open:rotate-180"
            />
          </summary>

          <div class="mobile-submenu">
            <JoinMenu />
          </div>
        </details>

        <!-- Resources -->
        <details class="group">
          <summary class="nav-item">
            <span>Resources</span>

            <ChevronDown
              class="size-4 shrink-0 transition-transform duration-300 group-open:rotate-180"
            />
          </summary>

          <div class="mobile-submenu">
            <ResourcesMenu />
          </div>
        </details>

      </div>
    </nav>
  </div>
</template>

<style scoped>
/* ================================
   Sidebar
================================ */

#mobile-navigation {
  animation: sidebar-in 280ms cubic-bezier(0.22, 1, 0.36, 1);
}

/* ================================
   Backdrop
================================ */

#mobile-navigation::backdrop {
  background: rgb(15 23 42 / 0.25);
  animation: backdrop-in 280ms ease-out;
}

/* ================================
   Sidebar Animation
================================ */

@keyframes sidebar-in {
  from {
    transform: translateX(-100%);
    opacity: 0.7;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes backdrop-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

/* ================================
   Navigation Item
================================ */

.nav-item {
  display: flex;
  width: 100%;
  cursor: pointer;
  list-style: none;
  align-items: center;
  justify-content: space-between;

  border-radius: 0.5rem;

  padding: 0.75rem 1rem;

  font-size: 0.95rem;
  font-weight: 500;

  color: rgb(30 41 59);

  transition:
    background-color 200ms ease,
    color 200ms ease,
    transform 200ms ease;
}

.nav-item:hover {
  background-color: rgb(240 253 244);
  color: rgb(21 128 61);
  transform: translateX(4px);
}

/* Remove default marker */

.nav-item::-webkit-details-marker {
  display: none;
}

.nav-item::marker {
  display: none;
  content: '';
}

/* ================================
   Submenu
================================ */

.mobile-submenu {
  overflow: hidden;
  animation: submenu-in 250ms ease-out;
}

@keyframes submenu-in {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ================================
   Tablet adjustments
================================ */

@media (min-width: 768px) {
  .nav-item {
    padding: 0.875rem 1.25rem;
    font-size: 1rem;
  }
}

/* ================================
   Reduced Motion
================================ */

@media (prefers-reduced-motion: reduce) {
  #mobile-navigation,
  #mobile-navigation::backdrop,
  .mobile-submenu,
  .nav-item {
    animation: none;
    transition: none;
  }
}
</style>
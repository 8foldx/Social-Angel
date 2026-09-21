<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

import AboutMenu from '../menus/AboutMenu.vue'
import FundraiseMenu from '../menus/FundraiseMenu.vue'
import DonateMenu from '../menus/DonateMenu.vue'
import JoinMenu from '../menus/JoinMenu.vue'
import ResourcesMenu from '../menus/ResourcesMenu.vue'

import {
  isClicked,
  handleHover,
  handleClick,
  closeMenu,
  type NavigationMenu,
} from '../utils/navigation'

const activeMenu = ref<NavigationMenu | null>(null)

let closeTimer: ReturnType<typeof setTimeout> | null = null

const cancelClose = () => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
}

const onHover = (menu: NavigationMenu) => {
  cancelClose()
  activeMenu.value = handleHover(menu)
}

const onClick = (menu: NavigationMenu) => {
  cancelClose()
  activeMenu.value = handleClick(activeMenu.value, menu)
}

const onLeave = () => {
  cancelClose()

  closeTimer = setTimeout(() => {
    activeMenu.value = closeMenu()
  }, 150)
}

const onMegaMenuEnter = () => {
  cancelClose()
}

const onMegaMenuLeave = () => {
  onLeave()
}
</script>

<template>
  <div
    class="relative"
    @mouseleave="onLeave"
  >
    <!-- Navigation -->
    <div class="flex items-center gap-1">

      <!-- Donate -->
      <div @mouseenter="onHover('donate')">
        <button
          type="button"
          class="btn btn-ghost border-0 font-medium hover:bg-green-50 hover:text-green-700"
          :class="{
            'bg-green-600 text-white hover:bg-green-700 hover:text-white':
              isClicked(activeMenu, 'donate')
          }"
          @click="onClick('donate')"
        >
          Donate

          <ChevronDown
            class="size-4 transition-transform duration-200"
            :class="{
              'rotate-180': isClicked(activeMenu, 'donate')
            }"
          />
        </button>
      </div>

      <!-- Fundraise -->
      <div @mouseenter="onHover('fundraise')">
        <button
          type="button"
          class="btn btn-ghost border-0 font-medium hover:bg-green-50 hover:text-green-700"
          :class="{
            'bg-green-600 text-white hover:bg-green-700 hover:text-white':
              isClicked(activeMenu, 'fundraise')
          }"
          @click="onClick('fundraise')"
        >
          Fundraise

          <ChevronDown
            class="size-4 transition-transform duration-200"
            :class="{
              'rotate-180': isClicked(activeMenu, 'fundraise')
            }"
          />
        </button>
      </div>

      <!-- Join -->
      <div @mouseenter="onHover('join')">
        <button
          type="button"
          class="btn btn-ghost border-0 font-medium hover:bg-green-50 hover:text-green-700"
          :class="{
            'bg-green-600 text-white hover:bg-green-700 hover:text-white':
              isClicked(activeMenu, 'join')
          }"
          @click="onClick('join')"
        >
          Join

          <ChevronDown
            class="size-4 transition-transform duration-200"
            :class="{
              'rotate-180': isClicked(activeMenu, 'join')
            }"
          />
        </button>
      </div>

      <!-- Resources -->
      <div @mouseenter="onHover('resources')">
        <button
          type="button"
          class="btn btn-ghost border-0 font-medium hover:bg-green-50 hover:text-green-700"
          :class="{
            'bg-green-600 text-white hover:bg-green-700 hover:text-white':
              isClicked(activeMenu, 'resources')
          }"
          @click="onClick('resources')"
        >
          Resources

          <ChevronDown
            class="size-4 transition-transform duration-200"
            :class="{
              'rotate-180': isClicked(activeMenu, 'resources')
            }"
          />
        </button>
      </div>

      <!-- About -->
      <div @mouseenter="onHover('about')">
        <button
          type="button"
          class="btn btn-ghost border-0 font-medium hover:bg-green-50 hover:text-green-700"
          :class="{
            'bg-green-600 text-white hover:bg-green-700 hover:text-white':
              isClicked(activeMenu, 'about')
          }"
          @click="onClick('about')"
        >
          About

          <ChevronDown
            class="size-4 transition-transform duration-200"
            :class="{
              'rotate-180': isClicked(activeMenu, 'about')
            }"
          />
        </button>
      </div>

    </div>

    <!-- Mega Menu -->
    <div
      v-if="activeMenu"
      class="fixed left-1/2 top-20 z-[999]
             w-[calc(100vw-2rem)] max-w-[1200px]
             -translate-x-1/2
             max-h-[calc(100vh-6rem)]
             overflow-x-hidden overflow-y-auto
             rounded-lg border border-green-100
             bg-white text-base-content
             shadow-2xl"
      @mouseenter="onMegaMenuEnter"
      @mouseleave="onMegaMenuLeave"
    >
      <DonateMenu
        v-if="activeMenu === 'donate'"
      />

      <FundraiseMenu
        v-else-if="activeMenu === 'fundraise'"
      />

      <JoinMenu
        v-else-if="activeMenu === 'join'"
      />

      <ResourcesMenu
        v-else-if="activeMenu === 'resources'"
      />

      <AboutMenu
        v-else-if="activeMenu === 'about'"
      />
    </div>
  </div>
</template>
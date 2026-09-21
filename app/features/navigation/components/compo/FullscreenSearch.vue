<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import AppLogo from '~/components/common/AppLogo.vue'

const emit = defineEmits<{
  close: []
}>()

const searchQuery = ref('')
const searchInput = ref<HTMLInputElement | null>(null)
const selectedCategory = ref('all')

// Structured suggestions grouped by NGO donation focus areas
const suggestionGroups = {
  emergency: ['Disaster Relief', 'Medical Bills', 'War Zone Aid', 'Oxygen & Medical Kits'],
  community: ['School Classrooms', 'Clean Water Projects', 'Hunger Relief', 'Skill Development'],
  protection: ['Animal Rescue', 'Stray Veterinary Care', 'Forest Conservation', 'Ocean Cleanups']
}

// Flattens lists for simple tag rendering based on active categories
const displayTags = computed(() => {
  if (selectedCategory.value === 'emergency') return suggestionGroups.emergency
  if (selectedCategory.value === 'community') return suggestionGroups.community
  if (selectedCategory.value === 'protection') return suggestionGroups.protection
  return [...suggestionGroups.emergency.slice(0, 2), ...suggestionGroups.community.slice(0, 2), ...suggestionGroups.protection.slice(0, 2)]
})

function closeSearch() {
  emit('close')
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeSearch()
  }
}

async function submitSearch() {
  const query = searchQuery.value.trim()
  if (!query) return

  closeSearch()
  await navigateTo({
    path: '/explore',
    query: { q: query, type: selectedCategory.value },
  })
}

async function selectTag(tag: string) {
  searchQuery.value = tag
  await submitSearch()
}

function onBackdropClick(event: MouseEvent) {
  if (event.target === event.currentTarget) {
    closeSearch()
  }
}

onMounted(() => {
  searchInput.value?.focus()
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Transition name="search-fade">
    <div
      class="fixed inset-0 z-[200] flex min-h-dvh flex-col bg-white"
      role="dialog"
      aria-modal="true"
      aria-label="Donation Search Console"
      @click="onBackdropClick"
    >
      <!-- Navigation Header -->
      <header class="flex h-[76px] shrink-0 items-center justify-between border-b border-gray-100 px-4 md:px-10">
        <span class="flex items-center gap-2 text-lg font-semibold text-gray-900">
          <AppLogo />
        </span>

        <button
          type="button"
          aria-label="Close panel"
          class="flex h-11 w-11 items-center justify-center rounded-full text-gray-500 transition border border-transparent hover:bg-gray-100 hover:text-gray-900"
          @click="closeSearch"
        >
          <svg xmlns="http://w3.org" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </header>

      <!-- Main Search Dashboard -->
      <main class="flex-1 overflow-y-auto px-4 py-8 md:px-10 md:py-16">
        <div class="mx-auto w-full max-w-4xl">
          
          <!-- Slogan / Dynamic Header Component -->
          <div class="text-center mb-8">
            <h1 class="text-3xl font-black tracking-tight text-gray-900 md:text-5xl">
              Fund the <span class="text-primary">Future</span> First.
            </h1>
            <p class="mt-3 text-base text-gray-500 md:text-lg max-w-xl mx-auto">
               Connecting donors, NGOs, and corporates with verified causes in India
            </p>
          </div>

          <!-- Niche Targeting Segment Switches -->
          <div class="flex justify-center gap-2 mb-6 border-b border-gray-100 pb-4">
            <button 
              v-for="tab in [{id: 'all', label: 'All Causes'}, {id: 'emergency', label: 'Emergency Relief'}, {id: 'community', label: 'Community & Education'}, {id: 'protection', label: 'Animal & Nature'}]"
              :key="tab.id"
              type="button"
              class="px-4 py-2 text-sm font-medium rounded-lg transition-all"
              :class="selectedCategory === tab.id ? 'bg-primary text-green-800 shadow-md' : 'text-gray-600 hover:text-black hover:bg-gray-100'"
              @click="selectedCategory = tab.id"
            >
              {{ tab.label }}
            </button>
          </div>

          <!-- Primary Search Bar Component -->
          <form 
            class="relative shadow-xl rounded-2xl border border-green-500 focus-within:ring-4 focus-within:ring-green-100 transition-all" 
            role="search" 
            @submit.prevent="submitSearch"
          >
            <label for="site-search" class="sr-only">Search verified non-profit projects and fundraisers</label>
            <input
              id="site-search"
              ref="searchInput"
              v-model="searchQuery"
              type="search"
              placeholder="Search by verified causes, NGOs, disasters, or medical emergencies..."
              autocomplete="off"
              class="h-16 w-full rounded-2xl bg-gray-100 py-4 pl-6 pr-16 text-base text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-white md:text-lg"
            />

            <button
              type="submit"
              aria-label="Execute search"
              :disabled="!searchQuery.trim()"
              class="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-xl bg-primary text-white transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <svg xmlns="http://w3.org" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
              </svg>
            </button>
          </form>

          <!-- Grouped Suggestions Elements -->
          <div class="mt-8">
            <span class="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-3">
              {{ selectedCategory === 'all' ? 'Popular Causes' : 'Suggested Initiatives' }}
            </span>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="tag in displayTags"
                :key="tag"
                type="button"
                class="inline-flex items-center rounded-xl bg-gray-50 border border-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                @click="selectTag(tag)"
              >
                <span class="mr-1.5 text-primary text-xs">#</span>{{ tag }}
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  </Transition>
</template>

<style scoped>
.search-fade-enter-active,
.search-fade-leave-active {
  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.search-fade-enter-from,
.search-fade-leave-to {
  opacity: 0;
  transform: scale(0.99);
}
</style>

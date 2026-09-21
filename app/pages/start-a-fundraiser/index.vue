<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, ArrowRight, Check, HeartHandshake } from 'lucide-vue-next'
import AppLogo from '~/components/common/AppLogo.vue'

definePageMeta({ layout: false })

const router = useRouter()

const step = ref(1)
const campaignType = ref('')
const goal = ref('')
const title = ref('')
const isSubmitted = ref(false)
const campaignTypes = [
  {
    name: 'Awareness Campaign',
    description: 'Share your story, spread awareness, and inspire others through real experiences.',
  },
  {
    name: 'Fundraising Campaign',
    description: 'Start a fundraiser and raise support for a cause, individual, or organization.',
  },
]

// --- Computed Properties ---
// Determines whether the user has filled in required parameters for the active step
const canContinue = computed(() => {
  if (step.value === 1) {
    return Boolean(campaignType.value)
  }
  if (step.value === 2) {
    const hasValidTitle = Boolean(title.value.trim())
    const hasValidGoal = Boolean(goal.value) && !isNaN(Number(goal.value)) && Number(goal.value) > 0
    return campaignType.value === 'Awareness Campaign' ? hasValidTitle : hasValidTitle && hasValidGoal
  }
  return false
})

// Formats the currency string for a clean Indian Rupee layout
const formattedGoal = computed(() => {
  const numericGoal = Number(goal.value)
  if (isNaN(numericGoal)) return '0'
  return new Intl.NumberFormat('en-IN').format(numericGoal)
})

// --- Navigation Methods ---
function nextStep() {
  if (canContinue.value && step.value < 3) {
    step.value += 1
  }
}

function previousStep() {
  if (step.value > 1) {
    step.value -= 1
  }
}

function handleBackHome() {
  router.push('/')
}

function submitFundraiser() {
  isSubmitted.value = true
}

function startAnotherFundraiser() {
  step.value = 1
  campaignType.value = ''
  goal.value = ''
  title.value = ''
  isSubmitted.value = false
}
</script>

<template>
  <main class="h-dvh overflow-hidden bg-[#f4faf7] px-4 py-3 font-sans sm:px-6 sm:py-5">
    <div class="mx-auto flex h-full max-w-6xl flex-col">
      
      <!-- Top Brand Header -->
      <header class="flex h-10 shrink-0 items-center justify-between">
        <button @click="handleBackHome" class="flex items-center gap-2 font-black tracking-wider text-green-900 text-xl bg-transparent border-0 p-0 cursor-pointer">
          <span class="rounded-lg px-2.5 py-1 text-white"><AppLogo/></span>
        </button>
        <button @click="handleBackHome" class="flex items-center gap-2 text-slate-600 bg-transparent border-0 btn-sm text-sm font-medium cursor-pointer hover:bg-green-100/50 rounded-lg p-2 transition">
          <ArrowLeft class="size-4" /> Back to home
        </button>
      </header>

      <!-- Main Step Window Container -->
      <section class="flex min-h-0 flex-1 items-center justify-center py-3 sm:py-4">
        <div class="grid max-h-full w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-[0.9fr_1.1fr]">
          
          <!-- Left Decorative Value Proposition Sidebar -->
          <aside class="hidden bg-green-800 p-8 text-white lg:flex lg:flex-col justify-between xl:p-10">
            <HeartHandshake class="size-11 text-green-300" />
            <div class="mt-auto">
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-green-200">Start a fundraiser</p>
              <h1 class="mt-4 text-4xl font-bold leading-tight">Turn support into meaningful change.</h1>
              <p class="mt-5 max-w-sm leading-7 text-green-100">Share your story, set a goal, and bring your community together.</p>
            </div>
          </aside>

          <!-- Right Interactive Multi-Step Core Form -->
          <div class="flex min-h-0 flex-col justify-between overflow-hidden p-5 sm:p-7 lg:p-8">
            <div>
              <!-- Adaptive Segmented Progress Bars -->
              <div class="flex items-center gap-2" aria-label="Fundraiser setup progress">
                <span 
                  v-for="number in 3" 
                  :key="number" 
                  class="h-2 flex-1 rounded-full transition-all duration-300" 
                  :class="number <= step ? 'bg-green-600' : 'bg-slate-200'" 
                />
              </div>
              <p class="mt-4 text-sm font-semibold text-green-700">Step {{ step }} of 3</p>

              <!-- Step 1: Campaign type -->
              <div v-if="step === 1">
                <h2 class="mt-2 text-2xl font-bold text-green-950 sm:text-3xl">Choose the type of campaign you want to create with us</h2>
                <p class="mt-2 text-sm text-slate-500">Select the option that best matches your goal.</p>
                <div class="mt-5 grid gap-3">
                  <button 
                    v-for="item in campaignTypes" 
                    :key="item.name" 
                    type="button" 
                    class="rounded-xl border p-4 text-left transition-all cursor-pointer active:scale-[0.98]" 
                    :class="campaignType === item.name ? 'border-green-600 bg-green-50 ring-1 ring-green-600' : 'border-slate-200 hover:border-green-400 hover:bg-slate-50/50'" 
                    @click="campaignType = item.name"
                  >
                    <span class="block text-lg font-semibold text-green-950">{{ item.name }}</span>
                    <span class="mt-1 block text-sm leading-6 text-slate-600">{{ item.description }}</span>
                  </button>
                </div>
              </div>

              <!-- Step 2: Content Fields Meta Entry Panel -->
              <div v-else-if="step === 2">
                <h2 class="mt-2 text-2xl font-bold text-green-950 sm:text-3xl">Tell people about your cause</h2>
                <p class="mt-2 text-sm text-slate-500">You can refine these details before publishing.</p>
                
                <div class="mt-5">
                  <label class="block text-sm font-semibold text-slate-700" for="fundraiser-title">Fundraiser title</label>
                  <input 
                    id="fundraiser-title" 
                    v-model="title" 
                    type="text"
                    class="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition" 
                    :placeholder="campaignType === 'Awareness Campaign' ? 'e.g. Share our story' : 'e.g. Help fund urgent medical care'"
                  >
                </div>

                <div v-if="campaignType === 'Fundraising Campaign'" class="mt-5">
                  <label class="block text-sm font-semibold text-slate-700" for="fundraiser-goal">Fundraising goal (₹)</label>
                  <div class="relative mt-2 rounded-xl shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span class="text-slate-500 sm:text-sm">₹</span>
                    </div>
                    <input 
                      id="fundraiser-goal" 
                      v-model="goal" 
                      type="number"
                      inputmode="numeric" 
                      min="1"
                      class="w-full rounded-xl border border-slate-300 bg-white py-3 pl-8 pr-3 text-slate-900 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition" 
                      placeholder="e.g. 50000"
                    >
                  </div>
                </div>
              </div>

              <!-- Step 3: Success Confirmation Deploy Panel -->
              <div v-else-if="!isSubmitted">
                <div class="flex size-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Check class="size-7" />
                </div>
                <h2 class="mt-3 text-2xl font-bold text-green-950 sm:text-3xl">You’re ready to get started</h2>
                <p class="mt-3 text-base leading-relaxed text-slate-600">
                  Your <span class="font-semibold text-green-700">{{ campaignType.toLowerCase() }}</span>,
                  <span class="font-semibold text-slate-900">“{{ title }}”</span>, is ready to be created.
                  <template v-if="campaignType === 'Fundraising Campaign'"> Its initial goal is <span class="font-bold text-slate-900">₹{{ formattedGoal }}</span>.</template>
                </p>
                <button 
                  type="button" 
                  class="mt-8 w-full sm:w-auto rounded-full border-0 bg-green-600 px-8 py-3.5 font-semibold text-white transition-all hover:bg-green-700 active:scale-[0.98] cursor-pointer shadow-md shadow-green-600/20" 
                  @click="submitFundraiser"
                >
                  Create fundraiser
                </button>
              </div>

              <div v-else class="py-4 text-center sm:py-10">
                <div class="mx-auto flex size-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Check class="size-9" />
                </div>
                <h2 class="mt-6 text-3xl font-bold text-green-950">Your fundraiser is ready</h2>
                <p class="mx-auto mt-3 max-w-md text-base leading-relaxed text-slate-600">
                  “{{ title }}” has been saved as a draft. Add your story and payment details to publish it.
                </p>
                <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <button type="button" class="rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700" @click="handleBackHome">
                    Go to home
                  </button>
                  <button type="button" class="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50" @click="startAnotherFundraiser">
                    Start another
                  </button>
                </div>
              </div>
            </div>

            <!-- Global Dynamic Form Action Control Bar -->
            <div v-if="!isSubmitted" class="mt-5 border-t border-slate-100 pt-4">
              <div v-if="step < 3" class="flex justify-between gap-3">
                <button 
                  type="button" 
                  class="rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 cursor-pointer disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed" 
                  :disabled="step === 1" 
                  @click="previousStep"
                >
                  Back
                </button>
                <button 
                  type="button" 
                  class="flex items-center gap-2 rounded-full border-0 bg-green-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-green-700 cursor-pointer disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed" 
                  :disabled="!canContinue" 
                  @click="nextStep"
                >
                  Continue <ArrowRight class="size-4" />
                </button>
              </div>
              <div v-else class="flex justify-start">
                <button 
                  type="button" 
                  class="rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 cursor-pointer" 
                  @click="previousStep"
                >
                  Back to edit
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
/* Removes default increment spinners in WebKit web browsers */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { Eye, EyeOff, X } from 'lucide-vue-next'

type AuthMode = 'login' | 'signup'
type LoginMethod = 'password' | 'sms' | 'email'

const props = defineProps<{ mode: AuthMode }>()
const emit = defineEmits<{ close: []; changeMode: [mode: AuthMode] }>()
const email = ref('')
const password = ref('')
const phone = ref('')
const otp = ref('')
const showPassword = ref(false)
const submitted = ref(false)
const submittedMessage = ref('')
const loginMethod = ref<LoginMethod>('password')
const otpSent = ref(false)
const isLogin = computed(() => props.mode === 'login')

function close() { emit('close') }
function submit() {
  submittedMessage.value = 'Authentication is ready to connect to your service.'
  submitted.value = true
}
function selectLoginMethod(method: LoginMethod) {
  loginMethod.value = method
  otp.value = ''
  otpSent.value = false
  submitted.value = false
}
function sendOtp() {
  otpSent.value = true
  submitted.value = false
}
function submitOtp() {
  submittedMessage.value = 'OTP verification is ready to connect to your authentication service.'
  submitted.value = true
}
function continueWithGoogle() {
  submittedMessage.value = 'Google sign-in is ready to connect once OAuth credentials are configured.'
  submitted.value = true
}
function changeMode(mode: AuthMode) {
  submitted.value = false
  otpSent.value = false
  loginMethod.value = 'password'
  emit('changeMode', mode)
}
function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="fixed inset-0 z-[300] flex items-center justify-center bg-slate-950/45 p-4" role="presentation" @click.self="close">
    <section class="relative w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl sm:p-6" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
      <button type="button" class="btn btn-ghost btn-sm btn-circle absolute right-3 top-3" aria-label="Close" @click="close"><X class="size-5" /></button>
      <p class="text-sm font-semibold text-green-700">SocialAngel</p>
      <h2 id="auth-modal-title" class="mt-1 text-2xl font-bold text-green-950">{{ isLogin ? 'Welcome back' : 'Create your account' }}</h2>
      <p class="mt-1 text-sm leading-5 text-slate-600">{{ isLogin ? 'Log in to manage your campaigns and donations.' : 'Join SocialAngel to start or support a campaign.' }}</p>

      <div v-if="isLogin" class="mt-4">
        <button type="button" class="btn w-full rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-50" @click="continueWithGoogle">
          <span class="font-bold text-[#4285F4]">G</span> Continue with Google
        </button>
        <div class="my-3 flex items-center gap-3 text-xs text-slate-400"><span class="h-px flex-1 bg-slate-200" />or continue with<span class="h-px flex-1 bg-slate-200" /></div>
        <div class="grid grid-cols-3 gap-1 rounded-xl bg-slate-100 p-1" role="tablist" aria-label="Login method">
          <button v-for="method in [{ value: 'password', label: 'Password' }, { value: 'sms', label: 'SMS OTP' }, { value: 'email', label: 'Email OTP' }]" :key="method.value" type="button" class="rounded-lg px-2 py-2 text-xs font-semibold transition sm:text-sm" :class="loginMethod === method.value ? 'bg-white text-green-800 shadow-sm' : 'text-slate-600'" @click="selectLoginMethod(method.value as LoginMethod)">
            {{ method.label }}
          </button>
        </div>
      </div>

      <form v-if="!isLogin || loginMethod === 'password'" class="mt-4 space-y-3" @submit.prevent="submit">
        <label class="block text-sm font-semibold text-slate-700" for="auth-email">Email address
          <input id="auth-email" v-model="email" required type="email" autocomplete="email" class="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 font-normal outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600" placeholder="you@example.com">
        </label>
        <label class="block text-sm font-semibold text-slate-700" for="auth-password">Password
          <span class="relative mt-1 block">
            <input id="auth-password" v-model="password" required :type="showPassword ? 'text' : 'password'" :autocomplete="isLogin ? 'current-password' : 'new-password'" class="w-full rounded-xl border border-slate-300 px-3 py-2.5 pr-11 font-normal outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600" placeholder="Enter your password">
            <button type="button" class="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-slate-500 hover:text-green-700" :aria-label="showPassword ? 'Hide password' : 'Show password'" @click="showPassword = !showPassword">
              <EyeOff v-if="showPassword" class="size-5" /><Eye v-else class="size-5" />
            </button>
          </span>
        </label>
        <button type="submit" class="btn mt-2 w-full rounded-full border-0 bg-green-600 text-white hover:bg-green-700">{{ isLogin ? 'Log in' : 'Create account' }}</button>
      </form>

      <form v-else class="mt-6 space-y-4" @submit.prevent="otpSent ? submitOtp() : sendOtp()">
        <label class="block text-sm font-semibold text-slate-700" :for="loginMethod === 'sms' ? 'auth-phone' : 'auth-otp-email'">
          {{ loginMethod === 'sms' ? 'Phone number' : 'Email address' }}
          <input v-if="loginMethod === 'sms'" id="auth-phone" v-model="phone" required type="tel" inputmode="tel" autocomplete="tel" class="mt-2 w-full rounded-xl border border-slate-300 px-3 py-3 font-normal outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600" placeholder="e.g. +91 98765 43210">
          <input v-else id="auth-otp-email" v-model="email" required type="email" autocomplete="email" class="mt-2 w-full rounded-xl border border-slate-300 px-3 py-3 font-normal outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600" placeholder="you@example.com">
        </label>
        <label v-if="otpSent" class="block text-sm font-semibold text-slate-700" for="auth-otp">One-time password
          <input id="auth-otp" v-model="otp" required inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6}" maxlength="6" class="mt-2 w-full rounded-xl border border-slate-300 px-3 py-3 font-normal tracking-[0.35em] outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600" placeholder="123456">
        </label>
        <button type="submit" class="btn w-full rounded-full border-0 bg-green-600 text-white hover:bg-green-700">{{ otpSent ? 'Verify OTP' : `Send OTP via ${loginMethod === 'sms' ? 'SMS' : 'email'}` }}</button>
      </form>

      <p v-if="submitted" class="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-800" role="status">{{ submittedMessage }}</p>
      <p class="mt-4 text-center text-sm text-slate-600">
        {{ isLogin ? 'New to SocialAngel?' : 'Already have an account?' }}
        <button type="button" class="font-semibold text-green-700 hover:underline" @click="changeMode(isLogin ? 'signup' : 'login')">{{ isLogin ? 'Sign up' : 'Log in' }}</button>
      </p>
    </section>
  </div>
</template>

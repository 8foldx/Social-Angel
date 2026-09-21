<script setup lang="ts">
import {
  LogIn,
  UserPlus,
} from 'lucide-vue-next'
</script>

<template>
  <div class="dropdown dropdown-end">
    <!-- Profile Button -->
    <div
      tabindex="0"
      role="button"
      class="btn btn-ghost btn-circle"
      aria-label="Account menu"
    >
      <div class="avatar">
        <div class="w-10 rounded-full">
          <img
            src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
            alt="Profile"
          />
        </div>
      </div>
    </div>

    <!-- Dropdown Menu -->
    <ul
      tabindex="0"
      class="menu dropdown-content z-[1] mt-3 w-52 rounded-box bg-white p-2 shadow-lg"
    >
      <!-- Login -->
      <li>
        <NuxtLink
          to="/login"
          class="flex items-center gap-3 hover:bg-green-50 hover:text-green-600"
        >
          <LogIn class="h-4 w-4" />
          <span>Login</span>
        </NuxtLink>
      </li>

      <!-- Sign Up -->
      <li>
        <NuxtLink
          to="/signup"
          class="flex items-center gap-3 hover:bg-green-50 hover:text-green-600"
        >
          <UserPlus class="h-4 w-4" />
          <span>Sign-Up</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
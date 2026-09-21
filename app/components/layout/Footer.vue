<script setup lang="ts">
import footer from '~/features/navigation/data/footer/footer.json'

interface FooterLink {
  label: string
  to: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}
</script>

<template>
  <footer class="bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-10">

      <!-- Footer Links -->
      <div class="border-t border-gray-200 py-12">
        <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          <div
            v-for="(column, index) in footer.columns as FooterColumn[]"
            :key="index"
          >
            <h3
              class="mb-6 text-xs font-semibold tracking-[0.12em] text-gray-800"
            >
              {{ column.title }}
            </h3>

            <ul class="space-y-5">
              <li
                v-for="link in column.links"
                :key="link.label"
              >
                <NuxtLink
                  :to="link.to"
                  class="text-sm text-gray-500 transition-colors hover:text-[#008f4c]"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <!-- Contact Information -->
      <div class="border-t border-gray-200 py-5">
        <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <!-- Address -->
          <div class="flex items-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mt-0.5 h-4 w-4 shrink-0 text-[#008f4c]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
              />
              <circle
                cx="12"
                cy="9"
                r="2.5"
              />
            </svg>

            <div class="text-sm leading-5 text-gray-500">
              <p>SocialAngel Services Private Limited</p>
              <p>Office No. 608, I-Thum Tower A, Sector 62,</p>
              <p>Noida, Uttar Pradesh 201301, India</p>
            </div>
          </div>

          <!-- Phone -->
          <div class="flex items-center gap-3 text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-[#008f4c]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M22 16.92v3a2 2 0 0 1-2.18 2
                19.79 19.79 0 0 1-8.63-3.07
                19.5 19.5 0 0 1-6-6
                19.79 19.79 0 0 1-3.07-8.67
                A2 2 0 0 1 4.11 2h3
                a2 2 0 0 1 2 1.72
                12.84 12.84 0 0 0 .7 2.81
                2 2 0 0 1-.45 2.11L8.09 9.91
                a16 16 0 0 0 6 6l1.27-1.27
                a2 2 0 0 1 2.11-.45
                12.84 12.84 0 0 0 2.81.7
                A2 2 0 0 1 22 16.92Z"
              />
            </svg>

            <a
              href="tel:+919319484545"
              class="hover:text-[#008f4c]"
            >
              +91 93194 84545
            </a>
          </div>

          <!-- Email -->
          <div class="flex items-center gap-3 text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-[#008f4c]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <rect
                width="20"
                height="16"
                x="2"
                y="4"
                rx="2"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m22 7-10 6L2 7"
              />
            </svg>

            <a
              href="mailto:info@socialangel.org"
              class="hover:text-[#008f4c]"
            >
              info@socialangel.org
            </a>
          </div>

        </div>
      </div>

      <!-- Payment -->
      <div class="border-t border-gray-200 py-5">
        <div class="flex items-center gap-2 text-sm text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-[#008f4c]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <rect
              width="14"
              height="10"
              x="5"
              y="10"
              rx="2"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 10V7a4 4 0 0 1 8 0v3"
            />
          </svg>

          <span>Payments secured by</span>

          <strong class="italic text-[#193b8f]">
            Razorpay
          </strong>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-200 py-6">
        <div class="flex flex-col gap-4 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 SocialAngel Services Private Limited.
            All rights reserved.
          </p>

          <div class="flex items-center gap-6">
            <NuxtLink
              v-for="link in footer.bottomLinks"
              :key="link.label"
              :to="link.to"
              class="transition-colors hover:text-[#008f4c]"
            >
              {{ link.label }}
            </NuxtLink>
          </div>

        </div>
      </div>

    </div>
  </footer>
</template>

<template>
  <a
    href="#"
    class="hover-3d my-12 mx-2 block w-80 cursor-pointer"
  >
    <!-- 3D Effect Layers -->
    <div
      class="card w-80 overflow-hidden rounded-2xl bg-base-100 text-base-content shadow-lg"
    >
      <!-- Image Section -->
      <div class="relative">
        <figure class="h-56 w-full">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
            alt="Child receiving medical support"
            class="h-full w-full object-cover"
          />
        </figure>

        <!-- Verified Badge -->
        <div
          class="absolute left-0 top-0 flex items-center gap-1 rounded-br-lg bg-emerald-700 px-3 py-1 text-xs font-semibold text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4"
            />
            <circle cx="12" cy="12" r="9" />
          </svg>

          Verified
        </div>
      </div>

      <!-- Content -->
      <div class="px-3.5 pb-3.5 pt-3.5">

        <!-- Campaign Title -->
        <h2
          class="line-clamp-2 text-lg font-bold leading-6 text-base-content"
        >
          Help 12-Year-Old Abdul Rehman Get Life-Saving Medicines for Rare
          Disease
        </h2>

        <!-- Organization -->
        <p class="mt-2 text-sm text-base-content/60">
          By Sevarth Mission Foundation
        </p>

        <!-- Progress -->
        <div class="mt-4">
          <div class="h-1 w-full overflow-hidden rounded-full bg-emerald-100">
            <div
              class="h-full w-[38%] rounded-full bg-emerald-600"
            ></div>
          </div>
        </div>

        <!-- Actions -->
        <div class="mt-3 flex items-center gap-2">

          <!-- Share -->
          <button
            type="button"
            class="flex h-9 w-11 items-center justify-center rounded-md border border-emerald-600 text-emerald-700 transition hover:bg-emerald-50"
            aria-label="Share campaign"
            @click.prevent.stop
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>

          <!-- Donate -->
          <button
            type="button"
            class="h-9 flex-1 rounded-md bg-emerald-700 px-4 text-sm font-semibold text-white transition hover:bg-emerald-800"
            @click.prevent.stop
          >
            Donate Now
          </button>

        </div>
      </div>
    </div>

    <!-- 3D Effect Layers -->
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </a>
</template>
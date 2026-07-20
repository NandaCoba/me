<template>
  <article class="border-b border-zinc-800 px-4 py-3 transition-colors hover:bg-white/[0.03]">
    <div class="flex gap-3">
      <img
        :src="avatar"
        :alt="name"
        class="mt-0.5 h-10 w-10 shrink-0 rounded-full object-cover"
      >

      <div class="min-w-0 flex-1">
        <div class="flex items-center gap-1 text-[15px] leading-5">
          <span class="truncate font-bold text-white hover:underline">{{ name }}</span>
          <Icon
            name="mdi:check-decagram"
            class="h-[18px] w-[18px] shrink-0 text-[#1d9bf0]"
          />
          <span class="truncate text-[#71767b]">@{{ username }}</span>
          <span class="shrink-0 text-[#71767b]">·</span>
          <span class="shrink-0 text-[#71767b] hover:underline">{{ post.date }}</span>
        </div>

        <p class="mt-0.5 whitespace-pre-wrap text-[15px] leading-5 text-white">
          {{ post.text }}
        </p>

        <div
          v-if="post.image"
          class="mt-3 overflow-hidden rounded-2xl border border-[#2f3336]"
        >
          <img
            :src="post.image"
            :alt="`Portfolio ${post.id}`"
            class="max-h-[510px] w-full object-cover"
          >
        </div>

        <!-- X-style action bar -->
        <div class="mt-1 flex items-center justify-between">
          <div class="flex flex-1 items-center justify-between max-w-[425px]">
            <button
              type="button"
              class="group -ml-2 flex items-center gap-1 text-[#71767b] hover:text-[#1d9bf0]"
              aria-label="Reply"
            >
              <span class="rounded-full p-2 transition-colors group-hover:bg-[#1d9bf0]/10">
                <Icon
                  name="mdi:chat-outline"
                  class="h-[1.25em] w-[1.25em]"
                />
              </span>
              <span class="min-w-[1.5em] text-[13px] leading-4 group-hover:text-[#1d9bf0]">
                {{ post.replies }}
              </span>
            </button>

            <button
              type="button"
              class="group flex items-center gap-1 text-[#71767b] hover:text-[#00ba7c]"
              aria-label="Repost"
            >
              <span class="rounded-full p-2 transition-colors group-hover:bg-[#00ba7c]/10">
                <Icon
                  name="mdi:repeat"
                  class="h-[1.25em] w-[1.25em]"
                />
              </span>
              <span class="min-w-[1.5em] text-[13px] leading-4 group-hover:text-[#00ba7c]">
                {{ post.reposts }}
              </span>
            </button>

            <button
              type="button"
              class="group flex items-center gap-1 text-[#71767b] hover:text-[#f91880]"
              aria-label="Like"
            >
              <span class="rounded-full p-2 transition-colors group-hover:bg-[#f91880]/10">
                <Icon
                  name="mdi:heart-outline"
                  class="h-[1.25em] w-[1.25em]"
                />
              </span>
              <span class="min-w-[1.5em] text-[13px] leading-4 group-hover:text-[#f91880]">
                {{ post.likes }}
              </span>
            </button>

            <button
              type="button"
              class="group flex items-center gap-1 text-[#71767b] hover:text-[#1d9bf0]"
              aria-label="Views"
            >
              <span class="rounded-full p-2 transition-colors group-hover:bg-[#1d9bf0]/10">
                <Icon
                  name="mdi:chart-bar"
                  class="h-[1.25em] w-[1.25em]"
                />
              </span>
              <span class="min-w-[1.5em] text-[13px] leading-4 group-hover:text-[#1d9bf0]">
                {{ post.views }}
              </span>
            </button>
          </div>

          <div class="ml-1 flex items-center">
            <button
              type="button"
              class="group rounded-full p-2 text-[#71767b] transition-colors hover:bg-[#1d9bf0]/10 hover:text-[#1d9bf0]"
              aria-label="Bookmark"
            >
              <Icon
                name="mdi:bookmark-outline"
                class="h-[1.25em] w-[1.25em]"
              />
            </button>

            <button
              type="button"
              class="group rounded-full p-2 text-[#71767b] transition-colors hover:bg-[#1d9bf0]/10 hover:text-[#1d9bf0]"
              aria-label="Share"
            >
              <Icon
                name="mdi:tray-arrow-up"
                class="h-[1.25em] w-[1.25em]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { PortfolioPost } from '~/data/portfolio'

defineProps<{
  post: PortfolioPost
  name: string
  username: string
  avatar: string
}>()
</script>

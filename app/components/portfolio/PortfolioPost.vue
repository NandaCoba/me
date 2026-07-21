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
          v-if="post.collaborators?.length"
          class="mt-2 flex flex-wrap items-center gap-1.5 text-[15px] text-[#71767b]"
        >
          <Icon
            name="mdi:account-multiple-outline"
            class="h-4 w-4 shrink-0"
          />
          <span>With</span>
          <a
            v-for="collaborator in post.collaborators"
            :key="collaborator.url"
            :href="collaborator.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 font-medium text-[#1d9bf0] hover:underline"
            @click.stop
          >
            <Icon
              name="mdi:instagram"
              class="h-4 w-4"
            />
            @{{ collaborator.username }}
          </a>
        </div>

        <a
          v-if="post.link"
          :href="post.link"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-1 inline-flex items-center gap-1 text-[15px] text-[#1d9bf0] hover:underline"
          @click.stop
        >
          <Icon
            name="mdi:link-variant"
            class="h-4 w-4 shrink-0"
          />
          {{ displayLink(post.link) }}
        </a>

        <button
          v-if="post.image"
          type="button"
          class="mt-3 block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-[#2f3336]"
          aria-label="Perbesar gambar"
          @click="openViewer"
        >
          <img
            :src="post.image"
            :alt="`Portfolio ${post.id}`"
            class="max-h-[510px] w-full object-cover"
          >
        </button>

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

  <Teleport to="body">
    <div
      v-if="isViewerOpen && post.image"
      class="fixed inset-0 z-50 flex flex-col bg-black/95"
      role="dialog"
      aria-modal="true"
      aria-label="Pratinjau gambar"
      @click.self="closeViewer"
      @wheel.prevent="handleWheel"
    >
      <div class="absolute top-4 right-4 z-10 flex items-center gap-2">
        <button
          type="button"
          class="rounded-full bg-zinc-900/90 p-3 text-white transition-colors hover:bg-zinc-700 disabled:opacity-40"
          aria-label="Perkecil"
          :disabled="zoom <= 0.5"
          @click="zoomOut"
        >
          <Icon name="mdi:magnify-minus-outline" class="h-6 w-6" />
        </button>
        <button
          type="button"
          class="min-w-16 rounded-full bg-zinc-900/90 px-3 py-3 text-sm text-white transition-colors hover:bg-zinc-700"
          aria-label="Atur ulang zoom"
          @click="resetZoom"
        >
          {{ Math.round(zoom * 100) }}%
        </button>
        <button
          type="button"
          class="rounded-full bg-zinc-900/90 p-3 text-white transition-colors hover:bg-zinc-700 disabled:opacity-40"
          aria-label="Perbesar"
          :disabled="zoom >= 3"
          @click="zoomIn"
        >
          <Icon name="mdi:magnify-plus-outline" class="h-6 w-6" />
        </button>
        <button
          type="button"
          class="rounded-full bg-zinc-900/90 p-3 text-white transition-colors hover:bg-zinc-700"
          aria-label="Tutup"
          @click="closeViewer"
        >
          <Icon name="mdi:close" class="h-6 w-6" />
        </button>
      </div>

      <div
        class="flex h-full w-full items-center overflow-auto p-6 pt-20"
        @click.self="closeViewer"
      >
        <img
          :src="post.image"
          :alt="`Portfolio ${post.id}`"
          class="mx-auto h-auto object-contain transition-[width] duration-200"
          :style="{ width: `${zoom * 100}%`, maxWidth: zoom <= 1 ? '100%' : 'none' }"
        >
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import type { PortfolioPost } from '~/data/portfolio'

defineProps<{
  post: PortfolioPost
  name: string
  username: string
  avatar: string
}>()

const isViewerOpen = ref(false)
const zoom = ref(1)

function displayLink(url: string) {
  return url.replace(/^https?:\/\//, '')
}

function openViewer() {
  zoom.value = 1
  isViewerOpen.value = true
}

function closeViewer() {
  isViewerOpen.value = false
  zoom.value = 1
}

function zoomIn() {
  zoom.value = Math.min(3, zoom.value + 0.25)
}

function zoomOut() {
  zoom.value = Math.max(0.5, zoom.value - 0.25)
}

function resetZoom() {
  zoom.value = 1
}

function handleWheel(event: WheelEvent) {
  if (event.deltaY < 0) {
    zoomIn()
  } else {
    zoomOut()
  }
}
</script>

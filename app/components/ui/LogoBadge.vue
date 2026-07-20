<template>
  <div
    class="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 text-sm font-bold text-zinc-300"
  >
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      class="h-full w-full object-cover"
    >
    <span v-else>{{ initials }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src?: string
  alt: string
  initials: string
}>()
</script>

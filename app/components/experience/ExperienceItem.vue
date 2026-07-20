<template>
  <article class="flex gap-3 border-b border-zinc-800 px-4 py-4 last:border-b-0">
    <LogoBadge
      :src="item.logo"
      :alt="item.company"
      :initials="item.logoInitials"
    />

    <div class="min-w-0 flex-1">
      <h3 class="text-[17px] font-bold leading-5">
        {{ item.role }}
      </h3>
      <p class="mt-0.5 text-[15px] text-zinc-300">
        {{ item.company }} · {{ item.type }}
      </p>
      <p class="mt-0.5 text-[15px] text-zinc-500">
        {{ item.period }} · {{ item.duration }}
      </p>
      <p class="text-[15px] text-zinc-500">
        {{ item.location }}
      </p>
      <p class="mt-3 text-[15px] leading-5 text-zinc-300">
        {{ item.description }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Experience } from '~/data/experiences'

defineProps<{
  item: Experience
}>()
</script>

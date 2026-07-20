<template>
  <article class="flex gap-3 border-b border-zinc-800 px-4 py-4 last:border-b-0">
    <LogoBadge
      :src="item.logo"
      :alt="item.issuer"
      :initials="item.logoInitials"
    />

    <div class="min-w-0 flex-1">
      <h3 class="text-[17px] font-bold leading-5">
        {{ item.title }}
      </h3>
      <p class="mt-0.5 text-[15px] text-zinc-300">
        {{ item.issuer }}
      </p>
      <p class="mt-0.5 text-[15px] text-zinc-500">
        {{ item.issued }}
      </p>
      <p
        v-if="item.credentialId"
        class="mt-1 text-[13px] text-zinc-500"
      >
        Credential ID {{ item.credentialId }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Certification } from '~/data/certifications'

defineProps<{
  item: Certification
}>()
</script>

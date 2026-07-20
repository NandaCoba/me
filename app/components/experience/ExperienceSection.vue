<template>
  <section>
    <ExperienceItem
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </section>
</template>

<script setup lang="ts">
import type { Experience } from '~/data/experiences'

defineProps<{
  items: Experience[]
}>()
</script>

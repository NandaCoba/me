<template>
  <section>
    <CertificationItem
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </section>
</template>

<script setup lang="ts">
import type { Certification } from '~/data/certifications'

defineProps<{
  items: Certification[]
}>()
</script>

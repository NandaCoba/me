<template>
  <section class="relative">
    <img
      :src="cover"
      alt="Cover"
      class="h-[200px] w-full object-cover"
    >

    <img
      :src="avatar"
      alt="Avatar"
      class="absolute bottom-0 left-4 z-20 h-[133px] w-[133px] translate-y-1/2 rounded-full border-4 border-black object-cover"
    >
  </section>
</template>

<script setup lang="ts">
defineProps<{
  cover: string
  avatar: string
}>()
</script>

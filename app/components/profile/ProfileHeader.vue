<template>
  <header class="sticky top-0 z-30 flex h-[53px] items-center border-b border-zinc-800 bg-black/65 px-4 backdrop-blur-md">
    <h1 class="text-[17px] font-bold leading-5">
      {{ title }}
    </h1>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

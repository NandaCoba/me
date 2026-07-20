<template>
  <nav class="sticky top-[53px] z-20 flex border-b border-zinc-800 bg-black/65 backdrop-blur-md">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      type="button"
      class="relative flex flex-1 items-center justify-center py-4 text-[15px] transition-colors hover:bg-white/5"
      :class="modelValue === tab.id ? 'font-bold text-white' : 'font-medium text-zinc-500'"
      @click="$emit('update:modelValue', tab.id)"
    >
      {{ tab.label }}
      <span
        v-if="modelValue === tab.id"
        class="absolute bottom-0 h-1 w-14 rounded-full bg-[#1d9bf0]"
      />
    </button>
  </nav>
</template>

<script setup lang="ts">
import type { ProfileTab } from '~/data/tabs'

defineProps<{
  modelValue: ProfileTab
  tabs: { id: ProfileTab; label: string }[]
}>()

defineEmits<{
  'update:modelValue': [value: ProfileTab]
}>()
</script>

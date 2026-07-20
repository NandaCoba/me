<template>
  <section class="px-4 pt-[72px] pb-4">
    <div class="flex items-center gap-1">
      <h2 class="text-xl font-extrabold leading-6">
        {{ name }}
      </h2>
      <Icon
        name="mdi:check-decagram"
        class="h-5 w-5 shrink-0 text-[#1d9bf0]"
      />
    </div>

    <p class="text-[15px] text-zinc-500">
      @{{ username }}
    </p>

    <p class="mt-3 text-[15px] leading-5">
      {{ bio }}
    </p>

    <div class="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] text-zinc-500">
      <div class="flex items-center gap-1">
        <Icon
          name="mdi:map-marker-outline"
          class="h-[18px] w-[18px]"
        />
        <span>{{ location }}</span>
      </div>

      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-1 text-[#1d9bf0] hover:underline"
      >
        <Icon
          :name="link.icon"
          class="h-[18px] w-[18px]"
        />
        <span>{{ link.label }}</span>
      </a>

      <div class="flex items-center gap-1">
        <Icon
          name="mdi:calendar-month-outline"
          class="h-[18px] w-[18px]"
        />
        <span>{{ joined }}</span>
      </div>
    </div>

    <div class="mt-3 flex gap-5 text-[14px]">
      <div>
        <span class="font-bold text-white">{{ following }}</span>
        <span class="ml-1 text-zinc-500">Following</span>
      </div>
      <div>
        <span class="font-bold text-white">{{ followers }}</span>
        <span class="ml-1 text-zinc-500">Followers</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  username: string
  bio: string
  location: string
  joined: string
  following: string
  followers: string
  links: readonly {
    label: string
    href: string
    icon: string
  }[]
}>()
</script>

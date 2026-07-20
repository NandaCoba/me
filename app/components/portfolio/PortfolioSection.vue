<template>
  <section>
    <PortfolioPost
      v-for="post in posts"
      :key="post.id"
      :post="post"
      :name="name"
      :username="username"
      :avatar="avatar"
    />
  </section>
</template>

<script setup lang="ts">
import type { PortfolioPost as PortfolioPostType } from '~/data/portfolio'

defineProps<{
  posts: PortfolioPostType[]
  name: string
  username: string
  avatar: string
}>()
</script>

<template>
  <div class="flex min-h-screen justify-center bg-black text-white">
    <div class="w-full max-w-[598px] border-x border-zinc-800">
      <ProfileHeader :title="profile.name" />

      <ProfileCover
        :cover="profile.cover"
        :avatar="profile.avatar"
      />

      <ProfileInfo
        :name="profile.name"
        :username="profile.username"
        :bio="profile.bio"
        :location="profile.location"
        :joined="profile.joined"
        :following="profile.following"
        :followers="profile.followers"
        :links="profile.links"
      />

      <ProfileTabs
        v-model="activeTab"
        :tabs="tabs"
      />

      <PortfolioSection
        v-if="activeTab === 'portfolio'"
        :posts="portfolioPosts"
        :name="profile.name"
        :username="profile.username"
        :avatar="profile.avatar"
      />

      <ExperienceSection
        v-else-if="activeTab === 'experience'"
        :items="experiences"
      />

      <CertificationSection
        v-else
        :items="certifications"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { profile } from '~/data/profile'
import { experiences } from '~/data/experiences'
import { certifications } from '~/data/certifications'
import { portfolioPosts } from '~/data/portfolio'
import type { ProfileTab } from '~/data/tabs'

const tabs: { id: ProfileTab; label: string }[] = [
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'experience', label: 'Experience' },
  { id: 'certification', label: 'Certification' },
]

const activeTab = ref<ProfileTab>('portfolio')
</script>

<template>
  <ol class="relative self-start border-l-4 border-dark dark:border-light" role="list">
    <li v-for="(info, index) in workExperience" :key="index" class="mb-10 ml-4" role="listitem">
      <div class="absolute w-3 h-3 bg-purple-600 rounded-full mt-1.5 -left-2 border-2 border-dark dark:border-white" />
      <time class="mb-1 font-normal leading-none text-purple-400 text-md">{{ $rt(info.startDate) }} - {{ $rt(info.endDate) }}</time>
      <h3 class="text-2xl">
        <a v-if="info.website" :href="$rt(info.website)" rel="noopener noreferrer" class="hover:text-purple-600 hover:cursor-pointer" role="link">
          {{ $rt(info.title) }}
        </a>
        <span v-else>{{ $rt(info.title) }}</span>
      </h3>
      <h4 class="mb-2 text-lg text-gray-800 dark:text-gray-400">
        {{ $rt(info.location) }}
      </h4>
      <p class="mb-4 text-gray-600 text-md dark:text-gray-300">
        {{ $rt(info.description) }}
      </p>
      <ul v-if="info.details" class="pl-4 text-gray-600 list-disc text-md dark:text-gray-400">
        <li v-for="(detail, key) in info.details" :key="key" role="listitem">
          {{ $rt(detail) }}
        </li>
      </ul>
    </li>
  </ol>
</template>

<script setup lang="ts">
import { type WorkExperience } from '~/lib/types.d'

const { tm } = useI18n()

const workExperience = computed<WorkExperience[]>(() => tm('workExperienceList') as WorkExperience[])
</script>

<template>
  <div class="flex justify-center w-full gap-4">
    <div class="relative w-full overflow-hidden text-center">
      <div class="flex w-full gap-6 md:gap-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
        <ul class="inline-flex items-center justify-center gap-4 md:gap-12 animate-infinite-scroll">
          <li
            v-for="(skill, title) in skillsList"
            :key="title"
            class="flex flex-col items-center w-32 gap-3 transition duration-300 transform hover:scale-105"
          >
            <nuxt-icon filled :name="`${$rt(skill.image)}`" class="w-12 h-12 md:w-20 md:h-20" role="img" />
            <span class="self-center p-4 text-sm text-center md:text-md">
              {{ $rt(skill.name) }}
            </span>
          </li>
        </ul>
        <ul class="inline-flex items-center justify-center gap-4 md:gap-12 animate-infinite-scroll">
          <li
            v-for="(skill, title) in skillsList"
            :key="title"
            class="flex flex-col items-center w-32 gap-3 transition duration-300 transform hover:scale-105"
          >
            <nuxt-icon filled :name="`${$rt(skill.image)}`" class="w-12 h-12 md:w-20 md:h-20" role="img" />
            <span class="self-center p-4 text-sm text-center md:text-md">
              {{ $rt(skill.name) }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Skill } from '~/lib/types.d'

const { tm } = useI18n()

const skillsList = computed<Skill[]>(() => tm('skillsList') as Skill[])
</script>

<style scoped>
  .animate-infinite-scroll {
    animation: 45s linear infinite infinite-scroll;
  }

  @keyframes infinite-scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>

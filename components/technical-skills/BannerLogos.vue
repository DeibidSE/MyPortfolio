<template>
  <div class="flex justify-center w-full gap-4">
    <div class="relative w-full overflow-hidden text-center">
      <!-- Skills container with infinite animation -->
      <div class="flex w-full gap-6 md:gap-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
        <!-- Duplicated skill list for infinite scroll effect -->
        <ul v-for="n in 2" :key="`list-${n}`" class="inline-flex items-center justify-center gap-4 md:gap-12 animate-infinite-scroll">
          <!-- Iterate on each category -->
          <template v-for="(skills, type, typeIndex) in categorizedSkills" :key="`category-${typeIndex}-${n}`">
            <!-- For each skill in the category -->
            <template v-for="(skill, index) in skills" :key="`skill-${type}-${index}-${n}`">
              <li class="flex flex-col items-center w-32 gap-3 transition-transform duration-300 transform hover:scale-105">
                <nuxt-icon
                  filled
                  :name="skill.image"
                  class="w-12 h-12 md:w-20 md:h-20"
                  role="img"
                  :aria-label="skill.name"
                />
                <span class="p-4 text-sm text-center md:text-base">
                  {{ skill.name }}
                </span>
              </li>
            </template>

            <!-- Vertical separator line between each category -->
            <div
              class="w-px h-20 mx-4 dark:bg-light/70 bg-dark/70 md:h-28 md:mx-6"
            />
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { skillList } from '~/lib/data'

const categorizedSkills = {
  frontend: skillList.filter(skill => skill.type === 'frontend'),
  backend: skillList.filter(skill => skill.type === 'backend'),
  tools: skillList.filter(skill => skill.type === 'tools')
}
</script>

<style scoped>
.animate-infinite-scroll {
  animation: infinite-scroll 30s linear infinite;
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

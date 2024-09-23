<template>
  <section :id="id" :aria-label="id" class="flex flex-col items-center justify-center gap-8 px-6 pt-20 lg:px-20">
    <header v-if="icon && title" class="flex flex-col items-center w-full gap-4">
      <div class="flex items-center w-full gap-4">
        <nuxt-icon v-if="icon" :name="icon" filled class="text-5xl text-accent" :alt="`Icon (${icon}) for the title of the section`" />
        <h2 v-if="title" class="py-1 text-5xl text-transparent md:tracking-wide md:font-bold bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
          {{ title }}
        </h2>
      </div>
      <div class="w-full h-1 shadow-lg bg-gradient-to-r from-accent to-transparent" />
    </header>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{ id: string, icon?: string, title?: string }>()
</script>

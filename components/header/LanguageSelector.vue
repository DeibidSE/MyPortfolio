<template>
  <div ref="dropdown" class="relative flex items-center justify-center">
    <select
      v-model="languageStore.language"
      class="w-full h-10 pl-4 pr-10 transition-all duration-300 ease-in-out bg-transparent rounded-full appearance-none cursor-pointer text-md text-dark dark:text-light focus:outline-none"
      aria-label="Select language"
    >
      <option
        v-for="(language, code) in languages"
        :key="code"
        :value="code"
        class="bg-secondary-light dark:bg-secondary-dark text-dark dark:text-light"
      >
        {{ language }}
      </option>
    </select>

    <nuxt-icon
      name="angle-down"
      class="absolute text-xl pointer-events-none text-dark right-4 dark:text-light"
    />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const languageStore = langStore()

const languages: Record<string, string> = {
  es: 'Español',
  en: 'English'
}

watch(() => languageStore.language, (newLocale) => {
  locale.value = newLocale
})

// Initialize locale from the store
locale.value = languageStore.language

const dropdown = ref<HTMLElement | null>(null)
</script>

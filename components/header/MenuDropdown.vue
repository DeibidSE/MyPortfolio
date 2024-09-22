<template>
  <aside
    class="fixed inset-0 z-50 w-64 h-full max-w-full pt-20 transition-transform duration-500 ease-in-out transform shadow-2xl bg-secondary-light dark:bg-secondary-dark lg:w-80"
    aria-label="Navigation menu"
  >
    <div class="relative flex flex-col justify-between h-full p-6">
      <!-- Navigation Menu -->
      <ul class="flex flex-col gap-6 mt-8">
        <li
          v-for="(section, key) in sectionList"
          :key="key"
          class="w-full px-6 py-4 transition-transform duration-300 ease-in-out rounded-lg cursor-pointer group hover:translate-x-2 hover:bg-gray-100 hover:dark:bg-primary-dark"
        >
          <span
            class="block text-2xl font-semibold tracking-wide transition-all text-primary-dark dark:text-primary-light md:text-3xl lg:text-4xl group-hover:text-accent-light dark:group-hover:text-accent-dark"
            @click.stop="scrollToSection(key)"
          >
            {{ section }}
          </span>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">

const emit = defineEmits(['menu-close'])

const { t } = useI18n()
const sectionList = computed(() => ({
  aboutMe: t('aboutMe'),
  projects: t('projects'),
  workExperience: t('workExperience'),
  skills: t('skills')
}))

const closeMenuDropdown = () => emit('menu-close')

const scrollToSection = (section: string) => {
  // Closes the menu
  closeMenuDropdown()

  if (section) {
    // Search the section by id
    const sectionSelected = document.getElementById(section.replace(/\s+/g, '-')) as HTMLElement
    const headerHeight = document.getElementById('header')?.offsetHeight || 0

    if (sectionSelected) {
      const { top } = sectionSelected.getBoundingClientRect()

      // Scrolls to the selected section
      window.scrollTo({
        top: top + window.scrollY - headerHeight,
        behavior: 'smooth'
      })
    }
  } else {
    console.log(`Section ${section} not found`)
  }
}
</script>

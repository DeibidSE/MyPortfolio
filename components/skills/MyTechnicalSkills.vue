<template>
  <section
    :id="sectionId"
    class="flex flex-col min-h-dvh bg-primary-light dark:bg-primary-dark"
    :aria-label="sectionId"
  >
    <header class="flex items-center w-full gap-4 px-6 py-8 md:px-16">
      <nuxt-icon name="folder" filled class="text-3xl" alt="Folder Icon" />
      <h2 class="text-4xl text-purple-500 uppercase md:font-bold font-terminal">
        {{ sectionTitle || '' }}
      </h2>
    </header>
    <!-- Tabs with different categories -->
    <ul class="flex flex-row justify-center gap-1 px-1 md:gap-2 md:px-4" role="tablist">
      <li
        v-for="category in categories"
        :key="category"
        :class="[
          'flex-1 md:p-8 p-2 py-8 text-center cursor-pointer rounded-t-xl transition-all duration-200',
          selectedCategory === category
            ? 'border-x-4 border-t-4 border-x-purple-400 border-t-purple-400 bg-secondary-light dark:bg-secondary-dark shadow-top'
            : 'bg-purple-200 hover:bg-purple-300 dark:bg-purple-600 hover:dark:bg-purple-500'
        ]"
        role="tab"
        :aria-selected="selectedCategory === category"
        tabindex="0"
        @click="selectCategory(category)"
      >
        <div class="flex items-center justify-center gap-2">
          <nuxt-icon name="folder" filled class="text-xl" />
          <span class="text-xs uppercase md:text-xl font-terminal">{{ category || '' }}</span>
        </div>
      </li>
    </ul>

    <div class="min-h-dvh bg-secondary-light dark:bg-secondary-dark" :aria-label="selectedCategory">
      <!-- Grid/list toggle -->
      <div class="flex justify-end mt-2 mr-2" aria-label="View Toggle">
        <div class="inline-flex text-sm leading-none bg-purple-200 border-2 border-purple-400 rounded-full cursor-pointer hover:bg-purple-300 dark:bg-purple-600 hover:dark:bg-purple-500 text-dark dark:text-light shadow-inside">
          <i
            :class="{
              'inline-flex items-center px-2 py-1 md:px-4 md:py-2 transition-colors duration-300 ease-in rounded-l-full rounded-r-none focus:outline-none' : true,
              'bg-secondary-light dark:bg-secondary-dark text-purple-500 rounded-full shadow-xl' : !showList
            }"
            role="button"
            tabindex="0"
            aria-label="Grid View"
            @click="showList = false"
          >
            <nuxt-icon name="th" class="text-lg" />
          </i>
          <i
            :class="{
              'inline-flex items-center px-2 py-1 md:px-4 md:py-2 transition-colors duration-300 ease-in rounded-r-full rounded-l-none focus:outline-none' : true,
              'bg-secondary-light dark:bg-secondary-dark text-purple-500 rounded-full': showList
            }"
            role="button"
            tabindex="0"
            aria-label="List View"
            @click="showList = true"
          >
            <nuxt-icon name="list-ul" class="text-lg" />
          </i>
        </div>
      </div>
      <div :class="{'flex-wrap justify-around p-6 md:flex md:gap-8 md:p-8 lg:p-16': !showList}" aria-label="Skills Container">
        <!-- List view -->
        <ul v-if="showList" class="flex flex-col justify-between flex-1 h-full gap-8 px-8 py-8 md:px-16" role="list">
          <AlertComponent
            :data="alert"
            type="info"
            class="shadow-inside"
          />

          <li
            v-for="lang in sortedFilteredSkills"
            :key="lang.name"
            role="listitem"
          >
            <SkillsTechnicalSkillsList :data="lang" />
          </li>
        </ul>
        <!-- Grid view -->
        <div
          v-for="lang in filteredSkills"
          v-else
          :key="lang.name"
          class="w-full card md:w-80"
        >
          <SkillsTechnicalSkillCard :data="lang" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { type Skill, type Alert } from '~/types/types.d'

const props = defineProps<{ sectionData: { [title: string]: { [category: string]: Skill[] } }, alert: Alert }>()

const selectedCategory = ref('/frontend')
const showList = ref(false)

// Computed property for calculating the section title
const sectionTitle = computed<string>(() => Object.keys(props.sectionData).toString() || '')
const sectionId = computed<string>(() => sectionTitle.value.toLowerCase().replace(/\s+/g, '-'))

// Computed property for filtered skills based on the selected category
const filteredSkills = computed<Skill[]>(() => props.sectionData[sectionTitle.value][selectedCategory.value] || [])

// Computed property for filtered and sorted skills by progress
const sortedFilteredSkills = computed(() =>
  [...filteredSkills.value].sort((a: Skill, b: Skill) => b.progress - a.progress)
)

// Computed property for available categories in the current section (tabs)
const categories = computed(() => Object.keys(props.sectionData[sectionTitle.value]))

// Function to handle category selection
const selectCategory = (category: string) => {
  selectedCategory.value = category
}

// Easter egg displayed in the console when the component is mounted
onMounted(() => {
  console.log(`%c                                             
       ___________________________________   
      |                                   |  
      |  Sneaky peeky!                    |  
      |  You're not supposed to see this  |  
      |_________ _________________________|  
                V                            
       *******                               
      *  o O  *                              
      *   ∆   *                              
      *   3   *                              
       *******                               
                                             `,
  'font-weight: 700;')
})
</script>

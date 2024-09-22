<template>
  <div
    class="flex items-center justify-center p-2 transition-colors duration-300 rounded-full cursor-pointer hover:text-yellow-500 dark:hover:text-purple-600"
    @click="setTheme"
  >
    <nuxt-icon v-if="themeStore.isLightMode" name="sun" class="text-2xl" />
    <nuxt-icon v-else name="moon" class="text-2xl" />
  </div>
</template>

<script setup lang="ts">
const themeStore = useThemeStore()

const setTheme = () => {
  themeStore.setTheme(!themeStore.isLightMode ? 'light' : 'dark')
}

onMounted(() => {
  themeStore.initTheme()
})
</script>

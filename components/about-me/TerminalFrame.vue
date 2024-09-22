<template>
  <div v-if="!isClosed" class="flex flex-col w-full h-full overflow-hidden rounded-lg" role="region" aria-label="Terminal component">
    <div class="flex items-center w-full p-3 shadow-xl bg-gray-100 dark:bg-primary-dark">
      <div class="inline-flex gap-2">
        <div
          class="w-2.5 h-2.5 rounded-[50%] bg-[#ff5f57]"
          role="button"
          aria-label="Close terminal button"
          @click="buttonsClickable && (isClosed = !isClosed)"
        />
        <div
          class="w-2.5 h-2.5 rounded-[50%] bg-[#ffbd2e]"
          role="button"
          aria-label="Minimize terminal button"
          @click="buttonsClickable && (isMinimized = !isMinimized)"
        />
        <div
          class="w-2.5 h-2.5 rounded-[50%] bg-[#28c940]"
          role="button"
          aria-label="Maximize terminal button"
          @click="toggleFullscreen"
        />
      </div>
    </div>
    <div
      class="flex flex-col flex-grow max-h-full p-6 overflow-y-auto text-normal md:text-xl bg-secondary-light dark:bg-secondary-dark"
      :class="{ 'h-0 !overflow-y-hidden' : isMinimized }"
    >
      <slot />
    </div>
  </div>
  <div v-else class="flex items-center justify-center w-full h-full overflow-hidden rounded-lg">
    <h2 class="cursor-not-allowed text-9xl" @click="isClosed = !isClosed">
      :(
    </h2>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ buttonsClickable: Boolean }>()

const isClosed = ref(false)
const isMinimized = ref(false)

const toggleFullscreen = () => {
  if (!props.buttonsClickable || !document.fullscreenEnabled) { return }

  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
      console.error('Error trying to activate full screen mode:', err)
    })
  } else {
    document.exitFullscreen().catch((err) => {
      console.error('Error trying to exit full screen mode:', err)
    })
  }
}
</script>

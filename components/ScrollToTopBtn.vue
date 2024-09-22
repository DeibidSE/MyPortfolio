<template>
  <button
    v-if="showScrollToTop"
    :class="`fixed bottom-4 right-4 group z-40 p-1 w-12 h-12 text-light bg-purple-600 font-semibold flex items-center justify-center justify-items-center shadow-lg cursor-pointer duration-300 overflow-hidden rounded-[50%] border-2 border-light hover:w-36 hover:duration-300 hover:rounded-[50px] before:absolute before:content-[attr(data-label)] before:text-[0px] hover:before:text-sm hover:before:duration-300`"
    aria-label="Scroll to top of the page"
    :data-label="$t('backToTop')"
    @click="scrollToTop"
  >
    <nuxt-icon name="arrow-up" class="text-3xl text-white duration-300 group-hover:duration-300 group-hover:translate-y-[-200%]" />
  </button>
</template>

<script setup lang="ts">
const showScrollToTop = ref(false)

const handleScroll = () => {
  showScrollToTop.value = window.scrollY > 0
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

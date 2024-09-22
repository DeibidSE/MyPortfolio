<template>
  <NuxtLayout id="introduction">
    <div class="flex flex-col items-center justify-center w-full gap-6 mx-auto h-dvh">
      <div class="flex items-end justify-center w-full h-full overflow-hidden">
        <h1 class="w-full p-6 text-6xl font-bold text-center text-transparent sm:text-7xl md:text-8xl lg:text-9xl bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
          {{ $t('whoAmI') }}
        </h1>
      </div>
      <div class="flex items-start justify-center w-full h-full overflow-hidden">
        <h2 ref="typingtext" class="inline-block text-2xl font-bold text-center text-purple-600 cursor-default text-nowrap sm:text-4xl md:text-5xl xl:text-6xl animate-blinking-caret">
          {{ txt }}
        </h2>
      </div>
    </div>
    <div class="absolute bottom-0 w-full py-4 text-center">
      <div class="flex flex-col animate-bounce text-dark dark:text-light">
        <span class="w-full text-xs sm:text-sm">{{ $t('scrollDownHelpMsg') }}</span>
        <nuxt-icon
          name="angle-double-down"
          class="self-center text-4xl cursor-pointer hover:text-purple-600"
          role="button"
          aria-label="Scroll down"
          @click="scrollDown"
        />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const txt = ref('')
const isDeleting = ref(false)
const loopNum = ref(0)
const typingtextElement = ref()

const { t } = useI18n()

onMounted(() => {
  typingtextElement.value = typingtextElement
  tick()
})

const tick = () => {
  const htmlElement = typingtextElement.value
  const fullTxt = t('fullJobTitle')

  if (htmlElement && fullTxt.length > 0) {
    if (isDeleting.value) {
      txt.value = fullTxt.substring(0, txt.value.length - 1)
    } else {
      txt.value = fullTxt.substring(0, txt.value.length + 1)
    }

    htmlElement.textContent = txt.value

    let pause = 200 - Math.random() * 100

    if (isDeleting.value) {
      pause /= 2
    }

    if (!isDeleting.value && txt.value === fullTxt) {
      pause = 2000
      isDeleting.value = true
    } else if (isDeleting.value && txt.value === '') {
      isDeleting.value = false
      loopNum.value++
      pause = 500
    }

    setTimeout(tick, pause)
  } else {
    txt.value = fullTxt
  }
}

const scrollDown = () => {
  const bodySections = document.querySelectorAll('section')
  const headerElement = document.getElementById('header')
  const headerHeight = headerElement ? headerElement.offsetHeight : 0

  if (bodySections && bodySections.length >= 2) {
    const secondSection = bodySections[1] as HTMLElement
    const { top } = secondSection.getBoundingClientRect()
    window.scrollTo({
      top: top + window.scrollY - headerHeight,
      behavior: 'smooth'
    })
  }
}

</script>

<template>
  <div class="flex flex-col gap-6 font-terminal">
    <div class="flex items-start gap-2">
      <span class="font-semibold tracking-wider dark:text-lime-600 text-lime-800">user@localhost:~$</span>
      <span class="text-dark dark:text-light">./about_me.sh</span>
    </div>
    <div class="flex flex-col gap-4 xl:grid xl:grid-cols-3">
      <div class="flex flex-col h-full gap-4 lg:col-span-2">
        <div class="flex flex-col justify-center h-full gap-3 leading-normal tracking-wide text-dark dark:text-light">
          <p v-for="(content, index) in $tm('terminalContent')" :key="index">
            {{ $rt(content) }}
          </p>
        </div>
      </div>
      <div class="flex flex-col items-center self-center gap-8 w-fit h-fit justify-self-center">
        <div class="group [perspective:1000px]" aria-label="Profile Card">
          <div class="relative w-full h-full transition-all duration-500 rounded-full [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)] shadow-xl shadow-black/40">
            <div class="inset-0 p-4 bg-gray-100 border-4 rounded-full md:p-6 dark:bg-primary-dark border-dark dark:border-light">
              <img
                :src="`${$config.public.BASE_URL}/images/david.webp`"
                alt="Photo of the programmer of this portfolio"
                class="inset-0 object-cover object-top border-4 rounded-full border-dark dark:border-light aspect-square"
                loading="lazy"
                role="img"
                aria-label="Photo of the programmer"
                width="300px"
                height="300px"
              >
            </div>
            <div class="absolute inset-0 w-full h-full p-8 text-center border-4 rounded-full dark:bg-primary-dark bg-gray-100 border-dark dark:border-light [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div class="flex flex-col items-center justify-center min-h-full">
                <nuxt-icon name="main" filled class="w-full h-auto text-3xl" role="img" aria-label="Profile Icon" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          Status:
          <BadgeComponent color="red">
            {{ $t('availability') }}
          </BadgeComponent>
        </div>
      </div>
    </div>

    <hr class="border-2 border-gray-400 dark:border-gray-600" role="separator">

    <div class="flex flex-wrap items-center justify-around w-full gap-4">
      <a
        v-for="(info, key) in socialLinks"
        :key="key"
        :href="info.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`Contact me via ${info.name}`"
        class="flex items-center justify-center px-3 py-1 transition bg-gray-100 border rounded-full shadow-xl dark:border-light border-dark gap-x-2 hover:scale-125 dark:bg-primary-dark"
      >
        <nuxt-icon :name="info.icon" class="text-2xl" />
        {{ info.name || '' }}
      </a>
    </div>

    <hr class="border-2 border-gray-400 dark:border-gray-600" role="separator">

    <div class="flex flex-col gap-2 w-max">
      <div class="flex items-start gap-2">
        <span class="font-semibold tracking-wider dark:text-lime-600 text-lime-800">user@localhost:~$</span>
        <span class="text-dark dark:text-light">npx run cv-download</span>
      </div>
      <span
        class="text-purple-600 cursor-pointer dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-600 w-max"
        @click="showModal(true)"
      >
        > {{ $t('cvLabel') }}
      </span>
    </div>

    <!-- Modal -->
    <dialog
      ref="infoModal"
      class="w-full bg-transparent sm:w-1/2 h-1/3 modal rounded-xl"
      @click="showModal(false)"
    >
      <AboutMeTerminalFrame :buttons-clickable="false">
        <div class="flex flex-col items-center justify-center w-full h-full gap-2">
          <span class="flex items-center justify-center text-xl text-center text-dark dark:text-light md:text-2xl">{{ $t('cvMessage') }}</span>
          <span class="flex items-center justify-center text-sm text-center text-dark/90 dark:text-light/90">{{ $t('cvCloseMsg') }}</span>
        </div>
      </AboutMeTerminalFrame>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { socialLinks } from '~/lib/data'

const infoModal = ref<HTMLDialogElement>()

const showModal = (show: boolean) => {
  infoModal.value?.[show ? 'showModal' : 'close']()
}
</script>

<style scoped>
.modal[open]::backdrop {
  background-color: rgba(0, 0, 0, 0.7);
  animation-name: showModal;
  animation-duration: 200ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes showModal {
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.7);
  }
}

</style>

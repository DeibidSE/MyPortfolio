<template>
  <NuxtLayout id="aboutMe" icon="me" :title="$t('aboutMe')">
    <div class="flex self-center justify-center w-full h-full">
      <AboutMeTerminalFrame :buttons-clickable="true">
        <AboutMeTerminalContent />
      </AboutMeTerminalFrame>
    </div>
  </NuxtLayout>
</template>

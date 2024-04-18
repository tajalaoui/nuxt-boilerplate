<script lang="ts" setup>
import { appName } from "~/constants";

useHead({
  title: appName,
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style langs="scss">
html {
  scroll-behavior: smooth !important;
}
</style>

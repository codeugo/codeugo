<template>
  <div class="flex flex-col min-h-screen bg-primary dark:bg-primary-dark text-black dark:text-white">
    <SiteNavigation/>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";
</script>

<style lang="scss" scoped>

</style>
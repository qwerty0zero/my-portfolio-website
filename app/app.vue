<template>
  <div>
    <NuxtPage />
    <SpeedInsights/>
<!--    <Preloader/>-->
  </div>
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

import Preloader from "~/components/Preloader.vue";
</script>

<style>

</style>

<script setup lang="ts">
import { RouterView } from "vue-router"
import {
  lightTheme,
  darkTheme,
  NConfigProvider,
  NGlobalStyle,
  NThemeEditor,
  zhCN,
  dateZhCN
} from "naive-ui"
</script>

<template>
  <n-config-provider
    class="container"
    :theme="lightTheme || darkTheme"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <RouterView />
    <n-global-style />
    <n-theme-editor />
  </n-config-provider>
</template>

<style scoped>
.container {
  height: auto;
}
</style>

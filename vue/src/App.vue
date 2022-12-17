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

const isDEV = import.meta.env.DEV // 仅 DEV 模式下显示 Naive UI 主题编辑器
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
    <n-theme-editor v-if="isDEV" />
  </n-config-provider>
</template>

<style scoped>
.container {
  height: auto;
}
</style>

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

// 仅 DEV 模式下显示 Naive UI 主题编辑器
const isDEV = import.meta.env.DEV
</script>

<template>
  <n-config-provider
    class="container"
    :theme="lightTheme || darkTheme"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <RouterView v-slot="{ Component, route }">
      <Transition
        name="fade"
        mode="out-in"
      >
        <component
          :is="Component"
          :key="route.path"
        />
      </Transition>
    </RouterView>
    <n-global-style />
    <n-theme-editor v-if="isDEV" />
  </n-config-provider>
</template>

<style scoped lang="scss">
.container {
  height: auto;
}
</style>

<script setup lang="ts">
import { computed } from "vue"
import { RouterView } from "vue-router"
import { NConfigProvider, NGlobalStyle, NThemeEditor, zhCN, dateZhCN } from "naive-ui"
import { getTheme, getThemeOverrides } from "@/modules"

// 仅 DEV 模式下显示 Naive UI 主题编辑器
const isDEV = import.meta.env.DEV

const theme = computed(() => getTheme())
const themeOverrides = computed(() => getThemeOverrides())
</script>

<template>
  <n-config-provider
    class="container"
    :theme="theme"
    :theme-overrides="themeOverrides"
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

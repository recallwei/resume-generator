<script setup lang="ts">
import { computed } from "vue"
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
import { useThemeStore } from "@/store"

// 仅 DEV 模式下显示 Naive UI 主题编辑器
const isDEV = import.meta.env.DEV

const themeStore = useThemeStore()

const getTheme = computed(() => {
  if (themeStore.theme === "light") {
    return lightTheme
  } else if (themeStore.theme === "dark") {
    return darkTheme
  }
})
</script>

<template>
  <n-config-provider
    class="container"
    :theme="getTheme"
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

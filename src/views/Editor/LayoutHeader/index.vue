<script setup lang="ts">
import { useRouter } from "vue-router"
import { NIcon } from "naive-ui"
import {
  CompressFilled as CompressIcon,
  ExpandFilled as ExpandIcon,
  LightModeOutlined as LightModeIcon,
  DarkModeOutlined as darkModeIcon
} from "@vicons/material"
import { Github as GithubIcon } from "@vicons/fa"
import { useEditorStore, useThemeStore } from "@/store"
import { useSiteMetaData } from "@/hooks"
import favicon from "/images/resume-generator.png"

const router = useRouter()
const editorStore = useEditorStore()
const themeStore = useThemeStore()
const siteMetaData = useSiteMetaData()

const backToHome = () => router.push("/")

const toggleExpand = () => editorStore.toggleToolbarState()

const switchThemeMode = () => {
  if (themeStore.theme === "dark") {
    themeStore.switchThemeMode("light")
  } else if (themeStore.theme === "light") {
    themeStore.switchThemeMode("dark")
  }
}

const goGitHubRepo = () => window.open(siteMetaData.repoUrl)
</script>

<template>
  <div class="left-area-wrapper">
    <img
      :src="favicon"
      class="cursor-pointer"
      width="32"
      height="32"
      @click.prevent="backToHome"
    />
    <span class="app-name">{{ siteMetaData.appName }}</span>
  </div>
  <div class="right-area-wrapper">
    <n-icon
      size="24"
      :depth="2"
      class="rotate-icon"
      @click.prevent="toggleExpand"
    >
      <expand-icon v-if="editorStore.toolbarCollapsed" />
      <compress-icon v-else />
    </n-icon>
    <n-icon
      size="22"
      :depth="2"
      class="cursor-pointer"
      @click.prevent="switchThemeMode"
    >
      <light-mode-icon v-if="themeStore.theme === 'light'" />
      <dark-mode-icon v-if="themeStore.theme === 'dark'" />
    </n-icon>
    <n-icon
      size="22"
      :depth="2"
      class="cursor-pointer"
      @click.prevent="goGitHubRepo"
    >
      <github-icon />
    </n-icon>
  </div>
</template>

<style scoped lang="scss">
@mixin area-wrapper($gap) {
  display: flex;
  align-items: center;
  gap: $gap;
}
@mixin cursor-pointer {
  cursor: pointer;
}
.left-area-wrapper {
  @include area-wrapper(12px);
}
.right-area-wrapper {
  @include area-wrapper(12px);
}
.app-name {
  font-weight: 600;
}
.rotate-icon {
  @include cursor-pointer;
  transform: rotate(90deg);
}
.cursor-pointer {
  @include cursor-pointer;
}
</style>

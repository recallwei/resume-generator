<script setup lang="ts">
import * as monaco from "monaco-editor"
import Layout from "./Layout"
import { useThemeStore, usePreviewSettingsStore } from "@/store"

const themeStore = useThemeStore()
const previewSettingsStore = usePreviewSettingsStore()

// Automatic switch color between #000000 and #FFFFFF when the theme changed
themeStore.$subscribe((mutation, state) => {
  if (mutation.storeId === "theme") {
    // Preview Theme Color
    if (
      state.theme === "light" &&
      previewSettingsStore.previewSettings.themeColor.toUpperCase() === "#FFFFFF"
    ) {
      previewSettingsStore.changeThemeColor("#000000")
    } else if (
      state.theme === "dark" &&
      previewSettingsStore.previewSettings.themeColor.toUpperCase() === "#000000"
    ) {
      previewSettingsStore.changeThemeColor("#FFFFFF")
    }
    // Preview Paper Color
    if (
      state.theme === "light" &&
      previewSettingsStore.previewSettings.paperColor.toUpperCase() === "#000000"
    ) {
      previewSettingsStore.changePaperColor("#FFFFFF")
    } else if (
      state.theme === "dark" &&
      previewSettingsStore.previewSettings.paperColor.toUpperCase() === "#FFFFFF"
    ) {
      previewSettingsStore.changePaperColor("#000000")
    }
    // Editor Theme
    if (state.theme === "light") {
      monaco.editor.setTheme("vs")
    } else if (state.theme === "dark") {
      monaco.editor.setTheme("vs-dark")
    } else {
      monaco.editor.setTheme("vs")
    }
  }
})
</script>

<template>
  <layout />
</template>

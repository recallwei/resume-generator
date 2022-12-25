<script setup lang="ts">
import Layout from "./Layout"
import { useThemeStore, usePreviewSettingsStore } from "@/store"

const themeStore = useThemeStore()
const previewSettingsStore = usePreviewSettingsStore()

// Automatic switch color between #000000 and #FFFFFF when the theme changed
themeStore.$subscribe((mutation, state) => {
  if (mutation.storeId === "theme") {
    // Theme Color
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
    // Paper Color
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
  }
})
</script>

<template>
  <layout />
</template>

import { ref } from "vue"
import { defineStore } from "pinia"
import type { PreviewSettings } from "@/interfaces"

export const usePreviewSettingsStore = defineStore("previewSettings", () => {
  const previewSettings = ref<PreviewSettings>({
    fontSize: 13,
    themeColor: "#CA3832"
  })

  const changeFontSize = (fontSize: number) => (previewSettings.value.fontSize = fontSize)

  const changeThemeColor = (themeColor: string) => (previewSettings.value.themeColor = themeColor)

  return { previewSettings, changeFontSize, changeThemeColor }
})

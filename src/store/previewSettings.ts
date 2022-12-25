import { ref } from "vue"
import { defineStore } from "pinia"
import type { PreviewSettings } from "@/interfaces"

export const usePreviewSettingsStore = defineStore("previewSettings", () => {
  const previewSettings = ref<PreviewSettings>({
    fontSize: 13,
    themeColor: "#000000",
    paperColor: "#FFFFFF"
  })

  const changeFontSize = (fontSize: number) => (previewSettings.value.fontSize = fontSize)

  const changeThemeColor = (themeColor: string) => (previewSettings.value.themeColor = themeColor)

  const changePaperColor = (paperColor: string) => (previewSettings.value.paperColor = paperColor)

  return { previewSettings, changeFontSize, changeThemeColor, changePaperColor }
})

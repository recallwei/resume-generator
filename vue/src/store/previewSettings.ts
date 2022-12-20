import { ref } from "vue"
import { defineStore } from "pinia"
import type { PreviewSettingsType } from "@/interfaces"

export const usePreviewSettingsStore = defineStore("previewSettings", () => {
  const previewSettings = ref<PreviewSettingsType>({
    fontSize: 13,
    themeColor: "#CA3832"
  })

  function changeFontSize(fontSize: number) {
    previewSettings.value.fontSize = fontSize
  }

  function changeThemeColor(themeColor: string) {
    previewSettings.value.themeColor = themeColor
  }

  return { previewSettings, changeFontSize, changeThemeColor }
})

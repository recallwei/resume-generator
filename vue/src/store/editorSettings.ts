import { ref } from "vue"
import { defineStore } from "pinia"
import type { EditorSettings } from "@/interfaces"

export const useEditorSettingsStore = defineStore("editorSettings", () => {
  const editorSettings = ref<EditorSettings>({
    fontSize: 13,
    wordWarp: true
  })

  const changeFontSize = (value: number) => (editorSettings.value.fontSize = value)

  const toggleWordWrap = () => (editorSettings.value.wordWarp = !editorSettings.value.wordWarp)

  return { editorSettings, changeFontSize, toggleWordWrap }
})

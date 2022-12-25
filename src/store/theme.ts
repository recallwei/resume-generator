import { ref } from "vue"
import { defineStore } from "pinia"
import type { ThemeMode } from "@/interfaces"

export const useThemeStore = defineStore("theme", () => {
  const theme = ref<ThemeMode>("light")

  const switchThemeMode = (value: ThemeMode) => {
    theme.value = value
  }

  return { theme, switchThemeMode }
})

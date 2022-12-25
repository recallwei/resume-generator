import { lightTheme, darkTheme, type GlobalThemeOverrides } from "naive-ui"
import { useThemeStore } from "@/store"

const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    customToolbarBorderColor: "#e5e7eb",
    customSplitpanesBackgroundColor: "#fff"
  }
}

const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    customToolbarBorderColor: "gray",
    customSplitpanesBackgroundColor: "#ddd"
  }
}

const getTheme = () => {
  const themeStore = useThemeStore()
  if (themeStore.theme === "light") {
    return lightTheme
  }
  if (themeStore.theme === "dark") {
    return darkTheme
  }
  return lightTheme
}

const getThemeOverrides = () => {
  const themeStore = useThemeStore()
  if (themeStore.theme === "light") {
    return lightThemeOverrides
  }
  if (themeStore.theme === "dark") {
    return darkThemeOverrides
  }
  return lightThemeOverrides
}

export { getTheme, getThemeOverrides, lightThemeOverrides, darkThemeOverrides }

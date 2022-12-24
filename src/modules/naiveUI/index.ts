import { lightTheme, darkTheme, type GlobalThemeOverrides } from "naive-ui"
import { useThemeStore } from "@/store"

const getTheme = () => {
  const themeStore = useThemeStore()
  if (themeStore.theme === "light") {
    return lightTheme
  } else if (themeStore.theme === "dark") {
    return darkTheme
  }
}

const getThemeOverrides = () => {
  const themeStore = useThemeStore()
  if (themeStore.theme === "light") {
    return lightThemeOverrides
  } else if (themeStore.theme === "dark") {
    return darkThemeOverrides
  }
}

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

export { getTheme, getThemeOverrides, lightThemeOverrides, darkThemeOverrides }

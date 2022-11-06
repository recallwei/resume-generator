import { defineStore } from "pinia";
import type { PreviewSettingsType } from "@interfaces";

export const usePreviewSettingsStore = defineStore("previewSettings", {
  state: (): PreviewSettingsType => {
    return { fontSize: 13, themeColor: "#CA3832" };
  },
  actions: {
    changeFontSize(fontSize: number) {
      this.fontSize = fontSize;
    },
    changeThemeColor(themeColor: string) {
      this.themeColor = themeColor;
    },
  },
});

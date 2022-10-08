import { defineStore } from "pinia";

export const usePreviewSettingsStore = defineStore("previewSettings", {
  state: () => {
    return { fontSize: 13 };
  },
  actions: {
    changeFontSize(fontSize: number) {
      this.fontSize = fontSize;
    }
  }
});

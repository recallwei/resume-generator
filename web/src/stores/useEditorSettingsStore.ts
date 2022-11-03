import { defineStore } from "pinia";

export const useEditorSettingsStore = defineStore("editorSettings", {
  state: () => {
    return {
      fontSize: 13,
      wordWarp: true
    };
  },
  actions: {
    changeFontSize(fontSize: number) {
      this.fontSize = fontSize;
    },
    toggleWordWrap() {
      this.wordWarp = !this.wordWarp;
    }
  }
});

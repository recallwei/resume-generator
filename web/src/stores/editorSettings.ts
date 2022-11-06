import { defineStore } from "pinia";

export const useEditorSettingsStore = defineStore("editorSettings", {
  state: () => {
    return {
      fontSize: 13,
      wordWrap: true,
    };
  },
  actions: {
    changeFontSize(fontSize: number) {
      this.fontSize = fontSize;
    },
    toggleWordWrap() {
      this.wordWrap = !this.wordWrap;
    },
  },
});

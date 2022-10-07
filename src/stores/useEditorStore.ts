import { defineStore } from "pinia";

export const useEditorStore = defineStore("editor", {
  state: () => {
    return {
      toolbarCollapsed: false
    };
  },
  actions: {
    toggleToolbarState() {
      this.toolbarCollapsed = !this.toolbarCollapsed;
    }
  }
});

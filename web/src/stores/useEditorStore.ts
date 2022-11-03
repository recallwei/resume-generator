import { defineStore } from "pinia";

export const useEditorStore = defineStore("editor", {
  state: () => {
    return {
      toolbarCollapsed: false,
      markdownContent: ""
    };
  },
  actions: {
    toggleToolbarState() {
      this.toolbarCollapsed = !this.toolbarCollapsed;
    },
    changeContent(content: string) {
      this.markdownContent = content;
    }
  }
});

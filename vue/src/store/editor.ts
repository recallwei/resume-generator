import { ref } from "vue"
import { defineStore } from "pinia"

export const useEditorStore = defineStore("editor", () => {
  const toolbarCollapsed = ref<boolean>(false)
  const markdownContent = ref<string>("")

  function toggleToolbarState() {
    toolbarCollapsed.value = !toolbarCollapsed.value
  }

  function changeMarkdownContent(content: string) {
    markdownContent.value = content
  }

  return {
    toolbarCollapsed,
    markdownContent,
    toggleToolbarState,
    changeMarkdownContent
  }
})

import { ref } from "vue"
import { defineStore } from "pinia"

export const useEditorStore = defineStore("editor", () => {
  const toolbarCollapsed = ref<boolean>(false)
  const markdownContent = ref<string>("")

  const toggleToolbarState = () => (toolbarCollapsed.value = !toolbarCollapsed.value)

  const changeContent = (content: string) => (markdownContent.value = content)

  return {
    toolbarCollapsed,
    markdownContent,
    toggleToolbarState,
    changeContent
  }
})

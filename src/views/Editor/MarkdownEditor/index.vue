<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRaw } from "vue"
import * as monaco from "monaco-editor"
import { useEditorStore, useEditorSettingsStore, useThemeStore } from "@/store"
import test from "@/assets/test.md?raw"
import test2 from "@/assets/test_zhcn.md?raw"

const editorRef = ref<HTMLElement | null>(null)
const editorInstance = ref<monaco.editor.IStandaloneCodeEditor | null>(null)

const editorStore = useEditorStore()
const editorSettingsStore = useEditorSettingsStore()
const themeStore = useThemeStore()

const getVSCodeTheme = () => {
  if (themeStore.theme === "light") {
    return "vs"
  }
  if (themeStore.theme === "dark") {
    return "vs-dark"
  }
  return "vs"
}

onMounted(() => {
  if (editorRef.value && !editorInstance.value) {
    editorInstance.value = monaco.editor.create(editorRef.value, {
      value: test,
      language: "markdown",
      automaticLayout: true,
      tabSize: 2,
      wordWrap: editorSettingsStore.editorSettings.wordWarp ? "on" : "off",
      fontSize: editorSettingsStore.editorSettings.fontSize,
      theme: getVSCodeTheme(),
      autoDetectHighContrast: editorSettingsStore.editorSettings.supportHighContrast
    })
    editorStore.changeContent(test)
    editorInstance.value.onDidChangeModelContent(() => {
      if (editorInstance.value) {
        const value = toRaw(editorInstance.value).getValue()
        editorStore.changeContent(value)
      }
    })
  }
})

onUnmounted(() => {
  toRaw(editorInstance.value)?.dispose()
})

editorSettingsStore.$subscribe((_, state) => {
  toRaw(editorInstance.value)?.updateOptions({
    fontSize: state.editorSettings.fontSize,
    wordWrap: state.editorSettings.wordWarp ? "on" : "off"
  })
})
</script>

<template>
  <div
    ref="editorRef"
    class="markdown-editor"
  />
</template>

<style scoped lang="scss">
.markdown-editor {
  height: 100%;
}
</style>

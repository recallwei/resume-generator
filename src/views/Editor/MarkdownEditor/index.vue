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
  } else if (themeStore.theme === "dark") {
    return "vs-dark"
  } else {
    return "vs"
  }
}

onMounted(() => {
  if (editorRef.value && !editorInstance.value) {
    editorInstance.value = monaco.editor.create(editorRef.value, {
      value: test,
      language: "markdown",
      automaticLayout: true,
      wordWrap: "on",
      tabSize: 2,
      fontSize: editorSettingsStore.editorSettings.fontSize,
      theme: getVSCodeTheme()
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
    automaticLayout: true,
    wordWrap: state.editorSettings.wordWarp ? "on" : "off",
    tabSize: 2
  })
})

themeStore.$subscribe((_, state) => {
  let currentTheme
  if (state.theme === "light") {
    currentTheme = "vs"
  } else if (state.theme === "dark") {
    currentTheme = "vs-dark"
  } else {
    currentTheme = "vs"
  }
  toRaw(editorInstance.value)?.updateOptions({
    theme: currentTheme
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

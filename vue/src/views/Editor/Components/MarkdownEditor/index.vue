<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRaw } from "vue"
import * as monaco from "monaco-editor"
import { useEditorStore, useEditorSettingsStore } from "@/store"
import test from "@/assets/test.md?raw"
import test2 from "@/assets/test_zhcn.md?raw"

const editorRef = ref<HTMLElement | null>(null)
const editorInstance = ref<monaco.editor.IStandaloneCodeEditor | null>(null)

const editorStore = useEditorStore()
const editorSettingsStore = useEditorSettingsStore()

onMounted(() => {
  if (editorRef.value && !editorInstance.value) {
    editorInstance.value = monaco.editor.create(editorRef.value, {
      value: test2,
      language: "markdown",
      automaticLayout: true,
      wordWrap: "on",
      tabSize: 2,
      fontSize: editorSettingsStore.fontSize,
      theme: "vs" // vs, vs-dark, hc-black
    })
    editorStore.changeContent(test2)
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
    fontSize: state.fontSize,
    automaticLayout: true,
    wordWrap: state.wordWrap ? "on" : "off",
    tabSize: 2
  })
})
</script>

<template>
  <div
    ref="editorRef"
    class="editor"
  />
</template>

<style scoped lang="scss">
.editor {
  height: 100%;
}
</style>

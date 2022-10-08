<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRaw } from "vue";
import * as monaco from "monaco-editor";
import test from "@assets/test.md?raw";
import { useEditorStore, useEditorSettingsStore } from "@stores";

const editorRef = ref<HTMLElement | null>(null);
const editorInstance = ref<monaco.editor.IStandaloneCodeEditor | null>(null);

const editorStore = useEditorStore();
const editorSettingsStore = useEditorSettingsStore();

onMounted(() => {
  if (editorRef.value && !editorInstance.value) {
    editorInstance.value = monaco.editor.create(editorRef.value, {
      value: test,
      language: "markdown",
      automaticLayout: true,
      wordWrap: "on",
      tabSize: 2,
      fontSize: editorSettingsStore.fontSize
      //theme: "vs", // vs, vs-dark, hc-black
    });
    editorInstance.value.onDidChangeModelContent(() => {
      if (editorInstance.value) {
        const value = toRaw(editorInstance.value).getValue();
        editorStore.changeContent(value);
        editorSettingsStore.changeFontSize(editorSettingsStore.fontSize + 1);
      }
    });
  }
});

onUnmounted(() => {
  toRaw(editorInstance.value)?.dispose();
});

editorSettingsStore.$subscribe((mutation, state) => {
  console.log(mutation, state);
  console.log(state.fontSize);

  toRaw(editorInstance.value)?.updateOptions({
    fontSize: state.fontSize,
    automaticLayout: true,
    wordWrap: "on",
    tabSize: 2
  });
});
</script>

<template>
  <div ref="editorRef" class="h-full" />
</template>

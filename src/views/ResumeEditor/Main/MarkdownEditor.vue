<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRaw } from "vue";
import * as monaco from "monaco-editor";
import test from "@assets/test.md?raw";
import { useEditorStore } from "@stores";

const editorRef = ref<HTMLElement | null>(null);
const editorInstance = ref<monaco.editor.IStandaloneCodeEditor | null>(null);

const editorStore = useEditorStore();

onMounted(() => {
  if (editorRef.value && !editorInstance.value) {
    editorInstance.value = monaco.editor.create(editorRef.value, {
      value: test,
      language: "markdown",
      automaticLayout: true,
      wordWrap: "on",
      tabSize: 2,
      fontSize: 13
      //theme: "vs", // vs, vs-dark, hc-black
    });
    editorStore.changeContent(test);
    editorInstance.value.onDidChangeModelContent(() => {
      if (editorInstance.value) {
        const value = toRaw(editorInstance.value).getValue();
        editorStore.changeContent(value);
      }
    });
  }
});

onUnmounted(() => {
  toRaw(editorInstance.value)?.dispose();
});
</script>

<template>
  <div ref="editorRef" class="h-full" />
</template>

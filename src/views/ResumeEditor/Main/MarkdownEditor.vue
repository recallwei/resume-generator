<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import * as monaco from "monaco-editor";
import test from "@assets/test.md?raw";
import test2 from "@assets/test2.md?raw";

const editorRef = ref<HTMLElement | null>(null);
const editorInstance = ref<monaco.editor.IStandaloneCodeEditor | null>(null);

onMounted(() => {
  if (editorRef.value && !editorInstance.value) {
    editorInstance.value = monaco.editor.create(editorRef.value, {
      value: test2,
      language: "markdown",
      automaticLayout: true,
      wordWrap: "on",
      tabSize: 2,
      fontSize: 13
      //theme: "vs", // vs, vs-dark, hc-black
    });
    editorInstance.value.onDidChangeModelContent(() => {
      const value = editorInstance.value?.getValue();
      console.log(value);
    });
  }
});

onUnmounted(() => {
  editorInstance.value?.dispose();
});
</script>

<template>
  <div ref="editorRef" class="h-full" />
</template>

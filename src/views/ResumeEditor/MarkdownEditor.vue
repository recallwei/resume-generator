<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as monaco from "monaco-editor";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import test from "@assets/test.md?raw";
import test2 from "@assets/test2.md?raw";

const editorRef = ref<HTMLElement>();

self.MonacoEnvironment = {
  getWorker(_: string, label: string): Worker | Promise<Worker> {
    if (label === "json") {
      return new jsonWorker();
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker();
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }
    return new editorWorker();
  }
};

onMounted(() => {
  const editorInstance = monaco.editor.create(editorRef.value as HTMLElement, {
    value: test2,
    language: "markdown",
    theme: "vs", // vs, vs-dark, hc-black
    automaticLayout: true,
    selectionHighlight: true,
    scrollBeyondLastLine: false,
    tabSize: 2,
    fontSize: 13
  });
  editorInstance.onDidChangeModelContent(() => {
    const value = editorInstance.getValue();
  });
});
</script>

<template>
  <div ref="editorRef" class="h-full" />
</template>

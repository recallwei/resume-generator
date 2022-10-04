<script setup lang="ts">
import { onMounted } from "vue";
import * as monaco from "monaco-editor";

onMounted(() => {
  const editorInstance = monaco.editor.create(
    document.getElementById("markdown-editor") as HTMLElement,
    {
      value: "test.md",
      language: "markdown",
      automaticLayout: true,
      scrollBeyondLastLine: false,
      tabSize: 2
    }
  );

  editorInstance.onDidChangeModelContent(() => {
    const value = editorInstance.getValue();
    console.log(value);
  });
});
</script>

<template>
  <div id="markdown-editor" class="h-full w-1/2" />
</template>

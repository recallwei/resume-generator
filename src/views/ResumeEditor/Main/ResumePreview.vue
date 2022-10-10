<script setup lang="ts">
import { computed } from "vue";
import MarkdownIt from "markdown-it";

import { useEditorStore, usePreviewSettingsStore } from "@stores";

const editorStore = useEditorStore();
const previewSettingsStore = usePreviewSettingsStore();

const markdown = MarkdownIt();

const markdownRender = computed(() => {
  return markdown.render(editorStore.markdownContent);
});
</script>

<template>
  <div class="h-full overflow-auto p-4 editor">
    <div
      v-html="markdownRender"
      class="border border-black p-6 bg-white whitespace-normal break-words"
      :style="{ fontSize: previewSettingsStore.fontSize + 'px' }"
    ></div>
  </div>
</template>

<style scoped>
.editor::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.editor {
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
}
:deep(.editor) h1,
:deep(.editor) h2,
:deep(.editor) h3,
:deep(.editor) h4,
:deep(.editor) h5,
:deep(.editor) h6 {
  color: v-bind("previewSettingsStore.themeColor");
  font-weight: bolder;
  font-size: larger;
}
</style>

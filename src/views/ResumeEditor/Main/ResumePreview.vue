<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useElementSize } from "@vueuse/core";
import MarkdownIt from "markdown-it";

import { useEditorStore, usePreviewSettingsStore } from "@stores";

const editorStore = useEditorStore();
const previewSettingsStore = usePreviewSettingsStore();

const markdown = MarkdownIt();

const markdownRender = computed(() => {
  return markdown.render(editorStore.markdownContent);
});

const previewContentRef = ref(null);

const { width } = useElementSize(previewContentRef);

const previewHeight = ref(1130);

watch(width, () => {
  previewHeight.value = width.value * Math.sqrt(2);
});
</script>

<template>
  <div class="h-full overflow-auto p-4 editor">
    <div
      ref="previewContentRef"
      v-html="markdownRender"
      class="border border-black p-6 bg-white whitespace-normal break-words max-w-[800px] h-[1130px]"
      :style="{
        fontSize: previewSettingsStore.fontSize + 'px',
        height: previewHeight + 'px',
        transform: 'scale(' + width / 800 + ', ' + width / 800 + ')'
      }"
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
.editor :deep(h1),
.editor :deep(h2),
.editor :deep(h3),
.editor :deep(h4),
.editor :deep(h5),
.editor :deep(h6) {
  color: v-bind("previewSettingsStore.themeColor");
  font-weight: bolder;
  font-size: larger;
}
</style>

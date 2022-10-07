<script setup lang="ts">
import { computed } from "vue";
import MarkdownIt from "markdown-it";

import { useEditorStore } from "@stores";

const editorStore = useEditorStore();

const markdown = MarkdownIt();

const markdownRender = computed(() => {
  return markdown.render(editorStore.markdownContent);
});
</script>

<template>
  <div class="h-full overflow-auto" v-html="markdownRender"></div>
</template>

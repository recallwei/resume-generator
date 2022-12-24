<script setup lang="ts">
import { ref, computed, watch } from "vue"
import { useElementSize } from "@vueuse/core"
import { NElement } from "naive-ui"
import MarkdownIt from "markdown-it"
import { useEditorStore, usePreviewSettingsStore } from "@/store"

const editorStore = useEditorStore()
const previewSettingsStore = usePreviewSettingsStore()

const markdown = MarkdownIt()

const markdownRender = computed(() => markdown.render(editorStore.markdownContent))

const previewContentRef = ref(null)

const { width } = useElementSize(previewContentRef)

const previewHeight = ref(1130)

watch(width, () => (previewHeight.value = width.value * Math.sqrt(2)))
</script>

<template>
  <n-element class="container">
    <n-element
      ref="previewContentRef"
      v-html="markdownRender"
      class="content"
      :style="{
        fontSize: `${previewSettingsStore.previewSettings.fontSize}px`,
        height: `${previewHeight}px`,
        transform: width === 800 ? 'scale(1,1)' : `scale(${width / 800},${previewHeight / 1130} )`
      }"
    />
  </n-element>
</template>

<style scoped lang="scss">
.container {
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
  padding: 16px;
  height: 100%;
  // background-color: var(--card-color);
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
}
.content {
  border: 1px solid black;
  padding: 24px;
  background-color: var(--modal-color);
  white-space: normal;
  word-break: break-word;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  :deep(h1),
  :deep(h2),
  :deep(h3),
  :deep(h4),
  :deep(h5),
  :deep(h6) {
    color: v-bind("previewSettingsStore.previewSettings.themeColor");
    font-weight: bolder;
    font-size: larger;
  }
}
</style>

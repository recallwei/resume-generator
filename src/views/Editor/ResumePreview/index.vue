<script setup lang="ts">
import { ref, computed, watch } from "vue"
import { useElementSize } from "@vueuse/core"
import { NElement } from "naive-ui"
import MarkdownIt from "markdown-it"
import { useEditorStore, usePreviewSettingsStore } from "@/store"

const editorStore = useEditorStore()
const previewSettingsStore = usePreviewSettingsStore()

const markdown = MarkdownIt()

const previewContentRef = ref(null)
const previewHeight = ref(1130)

const { width } = useElementSize(previewContentRef)

const markdownRender = computed(() => markdown.render(editorStore.markdownContent))

watch(width, () => (previewHeight.value = width.value * Math.sqrt(2)))
</script>

<template>
  <n-element class="n-element-resume-preview-container">
    <n-element
      ref="previewContentRef"
      v-html="markdownRender"
      class="n-element-resume-preview-content"
      :style="{
        fontSize: `${previewSettingsStore.previewSettings.fontSize}px`,
        height: `${previewHeight}px`
        // transform: width === 800 ? 'scale(1,1)' : `scale(${width / 800},${previewHeight / 1130} )`
      }"
    />
  </n-element>
</template>

<style scoped lang="scss">
.n-element-resume-preview-container {
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
  padding: 4px;
  height: 100%;
  // background-color: var(--card-color);
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
}
.n-element-resume-preview-content {
  border: 1px solid black;
  padding: 24px;
  background-color: var(--modal-color);
  white-space: normal;
  word-break: break-word;
  max-width: 210mm;
  margin-left: auto;
  margin-right: auto;
  :deep(h1),
  :deep(h2),
  :deep(h3),
  :deep(h4),
  :deep(h5),
  :deep(h6) {
    color: v-bind("previewSettingsStore.previewSettings.themeColor");
    transition: color 0.5s ease;
    font-weight: bolder;
    font-size: larger;
  }
}
</style>

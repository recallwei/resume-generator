<script setup lang="ts">
import { ref } from "vue"
import { NElement, NTabs, NTabPane } from "naive-ui"
import { useEditorSettingsStore, usePreviewSettingsStore } from "@/store"
import EditorTools from "./EditorTools"
import PreviewTools from "./PreviewTools"

const editorSettingsStore = useEditorSettingsStore()
const previewSettingsStore = usePreviewSettingsStore()
</script>

<template>
  <n-element class="container">
    <n-tabs
      type="line"
      animated
      size="small"
      justify-content="center"
    >
      <n-tab-pane
        name="editor"
        tab="Editor"
      >
        <editor-tools />
      </n-tab-pane>
      <n-tab-pane
        name="preview"
        tab="Preview"
      >
        <preview-tools />
      </n-tab-pane>
    </n-tabs>
    <div class="shortcut-menu"></div>
  </n-element>
</template>

<style scoped lang="scss">
.container {
  background-color: var(--card-color);
  min-height: 100%;
  display: flex;
  gap: 6px;
  padding-right: 6px;
  padding-top: 6px;
  padding-bottom: 6px;
}
.shortcut-menu {
  width: 30px;
  min-height: 100%;
  border-left-width: 1px solid var(--border-color);
  border-left-style: dashed;
  flex-grow: 1;
}
</style>

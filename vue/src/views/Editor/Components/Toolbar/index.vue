<script setup lang="ts">
import { ref } from "vue"
import { NElement, NTabs, NTabPane } from "naive-ui"
import { useEditorSettingsStore, usePreviewSettingsStore } from "@/store"

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
        name="preview"
        tab="Preview"
      >
        预览
      </n-tab-pane>
      <n-tab-pane
        name="editor"
        tab="Editor"
      >
        编辑器
      </n-tab-pane>
    </n-tabs>
    <div class=""></div>
  </n-element>
</template>

<style scoped lang="scss">
.container {
  background-color: var(--card-color);
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 6px;
  padding-top: 6px;
  padding-bottom: 6px;
}
</style>

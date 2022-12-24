<script setup lang="ts">
import { NElement, NTabs, NTabPane } from "naive-ui"
import EditorTools from "./EditorTools"
import PreviewTools from "./PreviewTools"
</script>

<template>
  <n-element class="container">
    <n-tabs
      type="line"
      animated
      size="small"
      justify-content="center"
      class="tabs"
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
    <n-element class="shortcut-menu"></n-element>
  </n-element>
</template>

<style scoped lang="scss">
.container {
  background-color: var(--card-color);
  min-height: 100%;
  display: flex;
  gap: 6px;
  padding: 6px;
}
.tabs {
  flex-shrink: 1;
}
.shortcut-menu {
  width: 32px;
  min-height: 100%;
  border-left: 1px solid var(--custom-toolbar-border-color);
  border-left-style: dashed;
  flex-shrink: 0;
}
</style>

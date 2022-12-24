<script setup lang="ts">
import { NElement, NTabs, NTabPane } from "naive-ui"
import EditorTools from "./EditorTools"
import PreviewTools from "./PreviewTools"
import ShortcutMenu from "./ShortcutMenu"
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
    <shortcut-menu />
  </n-element>
</template>

<style scoped lang="scss">
.container {
  background-color: var(--card-color);
  min-height: 100%;
  display: flex;
  gap: 6px;
  padding: 6px 0 6px 6px;
}
</style>

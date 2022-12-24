<script setup lang="ts">
import { Splitpanes, Pane } from "splitpanes"
import { NLayout, NLayoutHeader, NLayoutContent, NElement } from "naive-ui"
import { useEditorStore } from "@/store"
import { EditorHeader, MarkdownEditor, ResumePreview, Toolbar } from "../Components"
import "splitpanes/dist/splitpanes.css"

const editorStore = useEditorStore()
</script>

<template>
  <n-layout class="layout">
    <n-layout-header
      bordered
      class="header"
    >
      <editor-header />
    </n-layout-header>
    <n-layout-content class="content">
      <n-element class="splitpanes-wrapper">
        <splitpanes class="default-theme">
          <pane
            max-size="58"
            size="43"
          >
            <markdown-editor />
          </pane>
          <pane
            min-size="30"
            size="43"
          >
            <resume-preview />
          </pane>
          <pane
            v-if="!editorStore.toolbarCollapsed"
            size="14"
            min-size="12"
            max-size="16"
          >
            <toolbar />
          </pane>
        </splitpanes>
      </n-element>
    </n-layout-content>
  </n-layout>
</template>

<style scoped lang="scss">
.layout {
  height: 100vh;
  margin: auto;
}
.header {
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.content {
  height: calc(100% - 48px);
}
.splitpanes-wrapper {
  height: 100%;
  :deep(.splitpanes__splitter) {
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
    margin-right: -1px;
    margin-left: -1px;
    background-color: var(--custom-splitpanes-background-color);
  }
}
</style>

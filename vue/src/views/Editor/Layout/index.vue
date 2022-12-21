<script setup lang="ts">
import { Splitpanes, Pane } from "splitpanes"
import { NLayout, NLayoutHeader, NLayoutContent } from "naive-ui"
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
      <splitpanes class="default-theme">
        <pane
          max-size="65"
          size="44"
        >
          <markdown-editor />
        </pane>
        <pane
          min-size="20"
          size="44"
        >
          <resume-preview />
        </pane>
        <pane
          v-if="!editorStore.toolbarCollapsed"
          size="12"
          min-size="12"
          max-size="15"
        >
          <toolbar class="toolbar" />
        </pane>
      </splitpanes>
    </n-layout-content>
  </n-layout>
</template>

<style scoped lang="scss">
.layout {
  height: 100vh;
}
.header {
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content {
  height: calc(100% - 48px);
}
.toolbar {
  background-color: white;
  min-height: 100%;
}
</style>

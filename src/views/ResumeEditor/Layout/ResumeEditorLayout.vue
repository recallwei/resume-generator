<script setup lang="ts">
import { useEditorStore } from "@stores";
import ResumeEditorHeader from "../Header/ResumeEditorHeader.vue";
import MarkdownEditor from "../Main/MarkdownEditor.vue";
import ResumePreview from "../Main/ResumePreview.vue";
import ResumeEditorToolbar from "../Toolbar/ResumeEditorToolbar.vue";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

const editorStore = useEditorStore();
</script>

<template>
  <el-container class="h-screen">
    <el-header height="64px" class="border-b flex items-center justify-between">
      <ResumeEditorHeader />
    </el-header>
    <el-main class="p-0 bg-[color:#F2F2F2]">
      <splitpanes class="default-theme h-full">
        <pane maxSize="65" size="55">
          <MarkdownEditor />
        </pane>
        <pane minSize="20">
          <ResumePreview />
        </pane>
        <pane
          v-if="!editorStore.toolbarCollapsed"
          size="12"
          minSize="12"
          maxSize="15"
        >
          <ResumeEditorToolbar class="bg-white" />
        </pane>
      </splitpanes>
    </el-main>
  </el-container>
</template>

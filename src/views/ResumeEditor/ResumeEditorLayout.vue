<script setup lang="ts">
import ResumeEditorHeader from "./ResumeEditorHeader.vue";
import MarkdownEditor from "./MarkdownEditor.vue";
import ResumePreview from "./ResumePreview.vue";
import ResumeEditorToolbar from "./ResumeEditorToolbar.vue";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
</script>

<template>
  <el-container class="h-screen">
    <el-header height="64px" class="border-b flex items-center gap-2">
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
        <pane size="12" minSize="12" maxSize="15">
          <ResumeEditorToolbar class="bg-white" />
        </pane>
      </splitpanes>
    </el-main>
  </el-container>
</template>

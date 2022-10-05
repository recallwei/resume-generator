<script setup lang="ts">
import MarkdownEditor from "./MarkdownEditor.vue";
import ResumePreview from "./ResumePreview.vue";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
</script>

<template>
  <splitpanes class="default-theme h-full">
    <pane min-size="30">
      <MarkdownEditor />
    </pane>
    <pane min-size="30">
      <ResumePreview />
    </pane>
  </splitpanes>
</template>

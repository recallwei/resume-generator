<script setup lang="ts">
import { MarkdownEditor, ResumePreview } from "@components";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
</script>

<template>
  <div class="flex h-full">
    <splitpanes class="default-theme h-full">
      <pane min-size="30">
        <MarkdownEditor />
      </pane>
      <pane min-size="30">
        <ResumePreview />
      </pane>
    </splitpanes>
  </div>
</template>

<script setup lang="ts">
import { useEditorSettingsStore } from "@stores";

const editorSettingsStore = useEditorSettingsStore();
</script>

<template>
  <div class="h-full flex">
    <div class="grow h-full p-4">
      <div class="mb-4">Font Size</div>
      <vue-slider v-model="editorSettingsStore.fontSize" :min="10" :max="20" />
    </div>
    <div class="w-10 h-full border-l border-dashed"></div>
  </div>
</template>

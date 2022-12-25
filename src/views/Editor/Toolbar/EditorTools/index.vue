<script setup lang="ts">
import { LineDivider } from "@/components"
import FontSize from "./FontSize"
import WordWrap from "./WordWrap"
import SupportHighContrast from "./SupportHighContrast"
</script>

<template>
  <div class="editor-tools-container">
    <font-size />
    <line-divider />
    <word-wrap />
    <line-divider />
    <support-high-contrast />
    <line-divider />
  </div>
</template>

<style scoped lang="scss">
@use "../index.module.scss" as *;
.editor-tools-container {
  @include container;
}
</style>

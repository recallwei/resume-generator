<script setup lang="ts">
import { NIcon, NElement } from "naive-ui"
import {
  TextFieldsOutlined as FontSizeIcon,
  WrapTextOutlined as WordWrapIcon
} from "@vicons/material"
</script>

<template>
  <n-element class="shortcut">
    <n-icon
      size="28"
      :depth="2"
      class="icon"
    >
      <font-size-icon />
    </n-icon>
    <n-icon
      size="28"
      :depth="2"
      class="icon"
    >
      <word-wrap-icon />
    </n-icon>
  </n-element>
</template>

<style scoped lang="scss">
.shortcut {
  width: 32px;
  min-height: 100%;
  border-left: 1px solid var(--custom-toolbar-border-color);
  border-left-style: dashed;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 0 8px;
  .icon {
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>

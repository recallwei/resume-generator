<script setup lang="ts">
import { NIcon, NElement } from "naive-ui"
import {
  TextFieldsOutlined as FontSizeIcon,
  WrapTextOutlined as WordWrapIcon,
  PaletteOutlined as ThemeColorIcon,
  FormatColorFillOutlined as PaperColorIcon,
  ContrastOutlined as HighContrastIcon
} from "@vicons/material"
</script>

<template>
  <n-element class="shortcut-menu-container">
    <n-icon
      size="20"
      :depth="2"
      class="icon"
    >
      <theme-color-icon />
    </n-icon>
    <n-icon
      size="20"
      :depth="2"
      class="icon"
    >
      <paper-color-icon />
    </n-icon>
    <n-icon
      size="20"
      :depth="2"
      class="icon"
      :style="{ marginBottom: '-5px' }"
    >
      <font-size-icon />
    </n-icon>
    <n-icon
      size="20"
      :depth="2"
      class="icon"
    >
      <word-wrap-icon />
    </n-icon>
    <n-icon
      size="20"
      :depth="2"
      class="icon"
      :style="{ marginTop: '-4px' }"
    >
      <high-contrast-icon />
    </n-icon>
  </n-element>
</template>

<style scoped lang="scss">
.shortcut-menu-container {
  width: 32px;
  min-height: 100%;
  border-left: 1px solid var(--custom-toolbar-border-color);
  border-left-style: dashed;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 0 4px;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>

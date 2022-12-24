<script setup lang="ts">
import { NIcon, NSwitch } from "naive-ui"
import {
  TextFieldsOutlined as FontSizeIcon,
  WrapTextOutlined as WordWrapIcon
} from "@vicons/material"
import { MagicSlider } from "@/components"
import { useEditorSettingsStore, usePreviewSettingsStore } from "@/store"

const editorSettingsStore = useEditorSettingsStore()
const previewSettingsStore = usePreviewSettingsStore()
</script>

<template>
  <div class="wrapper">
    <div class="block">
      <div class="title-row">
        <n-icon
          size="20"
          :depth="2"
        >
          <font-size-icon />
        </n-icon>
        Font Size
      </div>
      <magic-slider
        v-model="editorSettingsStore.editorSettings.fontSize"
        :min="12"
        :max="20"
      />
      <div class="divider" />
    </div>

    <div class="block">
      <div class="title-row">
        <n-icon
          size="20"
          :depth="2"
        >
          <word-wrap-icon />
        </n-icon>
        Word Wrap
      </div>
      <n-switch
        v-model:value="editorSettingsStore.editorSettings.wordWarp"
        size="small"
        style="justify-content: flex-start"
      />
      <div class="divider" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 16px;
}
.block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.divider {
  width: 100%;
  height: 1px;
  margin: 2px 0;
  background-color: var(--custom-toolbar-border-color);
}
.title-row {
  display: flex;
  gap: 6px;
  align-items: center;
  font-weight: 500;
}
</style>

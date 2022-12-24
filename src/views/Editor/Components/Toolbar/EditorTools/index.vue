<script setup lang="ts">
import { NIcon, NSwitch, NSlider } from "naive-ui"
import {
  TextFieldsOutlined as FontSizeIcon,
  WrapTextOutlined as WordWrapIcon
} from "@vicons/material"
import { useEditorSettingsStore } from "@/store"
import { formatTooltipWithPx } from "@/utils"
import LineDivider from "../LineDivider"

const editorSettingsStore = useEditorSettingsStore()
</script>

<template>
  <div class="container">
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
      <n-slider
        v-model:value="editorSettingsStore.editorSettings.fontSize"
        :min="12"
        :max="20"
        :format-tooltip="formatTooltipWithPx"
        class="slider"
      />
      <div class="scale-text">
        <span>12px</span>
        <span>16px</span>
        <span>20px</span>
      </div>
      <line-divider />
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
        <n-switch
          v-model:value="editorSettingsStore.editorSettings.wordWarp"
          size="small"
          style="margin-left: 4px"
        />
      </div>
      <line-divider />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../index.module.scss" as *;
.container {
  @include container;
}
.block {
  @include block;
}
.title-row {
  @include title-row;
}
.scale-text {
  @include scale-text;
}
.slider {
  @include slider;
}
</style>

<script setup lang="ts">
import { NIcon, NSlider } from "naive-ui"
import { TextFieldsOutlined as FontSizeIcon } from "@vicons/material"
import { usePreviewSettingsStore } from "@/store"
import { formatTooltipWithPx } from "@/utils"

const previewSettingsStore = usePreviewSettingsStore()
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
        v-model:value="previewSettingsStore.previewSettings.fontSize"
        :min="12"
        :max="20"
        :format-tooltip="formatTooltipWithPx"
      />
      <div class="scale-text">
        <span>12px</span>
        <span>16px</span>
        <span>20px</span>
      </div>
      <div class="divider" />
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
.divider {
  @include divider;
}
.title-row {
  @include title-row;
}
.scale-text {
  @include scale-text;
}
</style>

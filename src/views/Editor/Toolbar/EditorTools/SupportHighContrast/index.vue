<script setup lang="ts">
import { NIcon, NSwitch, NTooltip } from "naive-ui"
import { ContrastOutlined as HighContrastIcon, InfoOutlined as InfoIcon } from "@vicons/material"
import { useEditorSettingsStore } from "@/store"

const editorSettingsStore = useEditorSettingsStore()
</script>

<template>
  <div class="block">
    <div class="title-row">
      <div>
        <n-icon
          size="20"
          :depth="2"
        >
          <high-contrast-icon />
        </n-icon>
        High Contrast
        <n-tooltip
          placement="bottom"
          trigger="hover"
        >
          <template #trigger>
            <n-icon
              size="18"
              :depth="2"
              :style="{ cursor: 'pointer' }"
            >
              <info-icon />
            </n-icon>
          </template>
          If enabled, editor will automatically change to high contrast theme if the OS is using a
          high contrast theme.
        </n-tooltip>
      </div>
      <n-switch
        v-model:value="editorSettingsStore.editorSettings.supportHighContrast"
        size="small"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../../index.module.scss" as *;
.block {
  @include block;
}
.title-row {
  @include title-row;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
}
</style>

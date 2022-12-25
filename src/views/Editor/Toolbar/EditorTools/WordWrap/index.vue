<script setup lang="ts">
import { NIcon, NSwitch } from "naive-ui"
import { WrapTextOutlined as WordWrapIcon } from "@vicons/material"
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
          <word-wrap-icon />
        </n-icon>
        Word Wrap
      </div>
      <n-switch
        v-model:value="editorSettingsStore.editorSettings.wordWarp"
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

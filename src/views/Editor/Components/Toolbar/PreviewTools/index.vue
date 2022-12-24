<script setup lang="ts">
import { computed, Transition } from "vue"
import { NIcon, NSlider, NColorPicker } from "naive-ui"
import {
  TextFieldsOutlined as FontSizeIcon,
  PaletteOutlined as ThemeColorIcon,
  CheckFilled as CheckIcon
} from "@vicons/material"
import { useThemeStore, usePreviewSettingsStore } from "@/store"
import { formatTooltipWithPx } from "@/utils"
import { lightThemeColorCandidates, darkThemeColorCandidates } from "@/constants"
import LineDivider from "../LineDivider"

const themeStore = useThemeStore()
const previewSettingsStore = usePreviewSettingsStore()

const themeColorCandidates = computed(() => {
  if (themeStore.theme === "light") {
    return lightThemeColorCandidates
  } else if (themeStore.theme === "dark") {
    return darkThemeColorCandidates
  } else {
    return lightThemeColorCandidates
  }
})

themeStore.$subscribe((mutation, state) => {
  if (mutation.storeId === "theme") {
    if (
      state.theme === "light" &&
      previewSettingsStore.previewSettings.themeColor.toUpperCase() === "#FFFFFF"
    ) {
      previewSettingsStore.changeThemeColor("#000000")
    } else if (
      state.theme === "dark" &&
      previewSettingsStore.previewSettings.themeColor.toUpperCase() === "#000000"
    ) {
      previewSettingsStore.changeThemeColor("#FFFFFF")
    }
  }
})
</script>

<template>
  <div class="container">
    <div class="block">
      <div class="title-row">
        <n-icon
          size="20"
          :depth="2"
        >
          <theme-color-icon />
        </n-icon>
        Theme Color
      </div>
      <div class="scale-text">
        <div
          v-for="(color, index) in themeColorCandidates"
          :key="index"
          :style="{ backgroundColor: color }"
          class="color-block"
          @click="previewSettingsStore.changeThemeColor(color)"
        >
          <transition name="check">
            <n-icon
              v-if="previewSettingsStore.previewSettings.themeColor.toUpperCase() === color"
              size="18"
              :color="color === '#FFFFFF' ? '#000' : '#fff'"
            >
              <check-icon />
            </n-icon>
          </transition>
        </div>
      </div>
      <n-color-picker
        :value="previewSettingsStore.previewSettings.themeColor"
        :modes="['hex']"
        :show-alpha="false"
        :swatches="themeColorCandidates"
        :on-update:value="previewSettingsStore.changeThemeColor"
      />
      <line-divider />
    </div>

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
        class="slider"
      />
      <div class="scale-text">
        <span>12px</span>
        <span>16px</span>
        <span>20px</span>
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
.color-block {
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  &:active {
    opacity: 0.5;
  }
}

.check-enter-active,
.check-leave-active {
  transition: opacity 0.5s ease;
}

.check-enter-from,
.check-leave-to {
  opacity: 0;
}
</style>

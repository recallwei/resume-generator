<script setup lang="ts">
import { computed, Transition } from "vue"
import { NIcon, NColorPicker } from "naive-ui"
import {
  FormatColorFillOutlined as PaperColorIcon,
  CheckFilled as CheckIcon
} from "@vicons/material"
import { useThemeStore, usePreviewSettingsStore } from "@/store"
import { lightPaperColorCandidates, darkPaperColorCandidates } from "@/constants"

const themeStore = useThemeStore()
const previewSettingsStore = usePreviewSettingsStore()

const themeColorCandidates = computed(() => {
  if (themeStore.theme === "light") {
    return lightPaperColorCandidates
  } else if (themeStore.theme === "dark") {
    return darkPaperColorCandidates
  } else {
    return lightPaperColorCandidates
  }
})

const themeBoxShadow = computed(() => {
  if (themeStore.theme === "light") {
    return "light-theme-box-shadow"
  } else if (themeStore.theme === "dark") {
    return "dark-theme-box-shadow"
  } else {
    return "light-theme-box-shadow"
  }
})
</script>

<template>
  <div class="block">
    <div class="title-row">
      <n-icon
        size="20"
        :depth="2"
      >
        <paper-color-icon />
      </n-icon>
      Paper Color
    </div>
    <div class="scale-text">
      <div
        v-for="(color, index) in themeColorCandidates"
        :key="index"
        :style="{ backgroundColor: color }"
        class="color-block"
        :class="themeBoxShadow"
        @click="previewSettingsStore.changePaperColor(color)"
      >
        <transition name="check">
          <n-icon
            v-if="previewSettingsStore.previewSettings.paperColor.toUpperCase() === color"
            size="18"
            :color="color === '#FFFFFF' ? '#000' : '#fff'"
          >
            <check-icon />
          </n-icon>
        </transition>
      </div>
    </div>
    <n-color-picker
      :value="previewSettingsStore.previewSettings.paperColor"
      :modes="['hex']"
      :show-alpha="false"
      :swatches="themeColorCandidates"
      :on-update:value="previewSettingsStore.changePaperColor"
    />
  </div>
</template>

<style scoped lang="scss">
@use "../../index.module.scss" as *;
.block {
  @include block;
}
.title-row {
  @include title-row;
}
.scale-text {
  @include scale-text;
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
.light-theme-box-shadow {
  transition: box-shadow 0.3s ease;
  box-shadow: 0 0 1px 0.5px rgb(0 0 0 / 0.15);
}
.dark-theme-box-shadow {
  transition: box-shadow 0.3s ease;
  box-shadow: 0 0 1px 0.5px rgb(255 255 255 / 0.45);
}
.check-enter-active,
.check-leave-active {
  transition: opacity 0.3s ease;
}
.check-enter-from,
.check-leave-to {
  opacity: 0;
}
</style>

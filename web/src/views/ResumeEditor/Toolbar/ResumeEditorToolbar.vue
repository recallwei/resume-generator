<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@components";
import { useEditorSettingsStore, usePreviewSettingsStore } from "@stores";

const editorSettingsStore = useEditorSettingsStore();
const previewSettingsStore = usePreviewSettingsStore();

type TabType = "editor" | "preview";

const activeTab = ref<TabType>("preview");
</script>

<template>
  <div></div>
  <!-- <div class="h-full flex">
    <div class="grow h-full flex flex-col gap-2 pr-1 text-sm">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="预览" name="preview">
          <div class="w-full flex flex-col gap-3 px-4 py-2">
            <div class="flex gap-1 items-center">
              <Icon.FontSize width="14" height="14" />
              字体大小
            </div>
            <vue-slider
              v-model="previewSettingsStore.fontSize"
              :min="12"
              :max="20"
            />
            <div class="border-l w-full border" />
          </div>
        </el-tab-pane>
        <el-tab-pane label="编辑器" name="editor">
          <div class="w-full flex flex-col gap-3 px-4 py-2">
            <div class="flex gap-1 items-center">
              <Icon.FontSize width="14" height="14" />
              字体大小
            </div>
            <vue-slider
              v-model="editorSettingsStore.fontSize"
              :min="10"
              :max="20"
            />
            <div class="border-l w-full border" />
            <div class="flex gap-1 items-center">
              <Icon.WordWrap width="14" height="14" />
              文字换行
            </div>
            <el-switch v-model="editorSettingsStore.wordWarp" />
            <div class="border-l w-full border" />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="w-10 h-full border-l border-dashed"></div>
  </div> -->
</template>

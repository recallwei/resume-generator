<script setup lang="ts">
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import { Icon } from "@components";
import { useEditorSettingsStore } from "@stores";

const editorSettingsStore = useEditorSettingsStore();

type TabType = "editor" | "preview";

const activeTab = ref<TabType>("editor");

function handleClickTab(tab: TabsPaneContext, event: Event) {
  activeTab.value = tab.props.name as TabType;
}
</script>

<template>
  <div class="h-full flex">
    <div class="grow h-full flex flex-col gap-2 pr-1 text-sm">
      <el-tabs v-model="activeTab" @tab-click="handleClickTab" stretch>
        <el-tab-pane label="编辑器" name="editor">
          <div class="w-full flex flex-col gap-4 px-4 py-2">
            <div class="flex flex-col gap-1">
              <div class="flex gap-1 items-center">
                <Icon.FontSize width="14" height="14" />
                字体大小
              </div>
              <vue-slider
                v-model="editorSettingsStore.fontSize"
                :min="10"
                :max="20"
              />
            </div>
            <div class="border-l w-full border" />
            <div class="flex flex-col gap-1">
              <div class="flex gap-1 items-center">
                <Icon.WordWrap width="14" height="14" />
                文字换行
              </div>
              <el-switch v-model="editorSettingsStore.wordWarp" />
              <div class="border-l w-full border" />
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="预览" name="preview"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="w-10 h-full border-l border-dashed"></div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";
import { Icon } from "@components";
import { useEditorStore } from "@stores";
import favicon from "/img/resume-generator.png";

const router = useRouter();
const { t } = useI18n();

const editorStore = useEditorStore();

function goHome() {
  router.push("/");
}

function toggleExpand() {
  editorStore.toggleToolbarState();
}
</script>

<template>
  <div class="flex items-center gap-4 px-2">
    <img
      :src="favicon"
      class="cursor-pointer"
      width="36"
      height="36"
      @click="goHome"
    />
    <label class="select-none">{{ t("application.name") }}</label>
  </div>
  <div class="flex items-center gap-2">
    <div
      class="hover:bg-gray-200 active:bg-gray-100 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
      @click.prevent="toggleExpand"
    >
      <Icon.Expand v-if="editorStore.toolbarCollapsed" />
      <Icon.Collapse v-else class="cursor-pointer" />
    </div>
    <RouterLink
      target="_blank"
      :to="{
        path: 'https://github.com/recallwei/resume-generator'
      }"
    >
      <Icon.GitHub class="cursor-pointer" />
    </RouterLink>
  </div>
</template>

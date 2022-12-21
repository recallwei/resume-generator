<script setup lang="ts">
import { useRouter } from "vue-router"
import { GitHubButton } from "@/components"
import { useEditorStore } from "@/store"
import { useSiteMetaData } from "@/hooks"
import favicon from "/images/resume-generator.png"

const router = useRouter()

const editorStore = useEditorStore()
const siteMetaData = useSiteMetaData()

const backToHome = () => router.push("/")

const toggleExpand = () => editorStore.toggleToolbarState()

const goGitHubRepo = () => window.open(siteMetaData.repoUrl)
</script>

<template>
  <div class="left-area-wrapper">
    <img
      :src="favicon"
      class="cursor-pointer"
      width="32"
      height="32"
      @click="backToHome"
    />
  </div>
  <div class="right-area-wrapper">
    <git-hub-button @click="goGitHubRepo" />
  </div>
  <!-- <div class="flex items-center gap-4 px-2">
    <img
      :src="favicon"
      class="cursor-pointer"
      width="36"
      height="36"
      @click="goHome"
    />
    <label class="select-none"></label>
  </div>
  <div class="flex items-center gap-2">
    <div
      class="hover:bg-gray-200 active:bg-gray-100 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
      @click.prevent="toggleExpand"
    >
      <Icon.Expand v-if="editorStore.toolbarCollapsed" />
      <Icon.Collapse v-else class="cursor-pointer" />
    </div>
    <Icon.GitHub class="cursor-pointer" :onClick="goGitHubRepo" />
  </div> -->
</template>

<style scoped lang="scss">
.left-area-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 32px;
}
.right-area-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
}
.cursor-pointer {
  cursor: pointer;
}
</style>

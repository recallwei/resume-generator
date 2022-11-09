<script setup lang="ts">
import github from "/icon/github.png";
const REPO_URL = "https://github.com/recallwei/resume-generator";
</script>

<template>
  <a
    :href="REPO_URL"
    target="_blank"
    rel="noopener noreferrer"
    class="rounded-full bg-gray-50 p-1 shadow-xl transition-colors hover:bg-gray-200 active:bg-gray-50 button-wrapper"
    title="GitHub"
  >
    <img :src="github" width="28" height="28" loading="eager" />
  </a>
</template>

<style lang="scss" scoped>
.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>

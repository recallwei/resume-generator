<script setup lang="ts">
import github from "@assets/icon/github.png";
const repoUrl = "https://github.com/recallwei/resume-generator";
</script>

<template>
  <div class="flex cursor-pointer items-center justify-center">
    <a
      :href="repoUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="rounded-full bg-gray-50 p-1 shadow-xl transition-colors hover:bg-gray-200 active:bg-gray-50"
      title="GitHub"
    >
      <img :src="github" width="28" height="28" loading="eager" />
    </a>
  </div>
</template>

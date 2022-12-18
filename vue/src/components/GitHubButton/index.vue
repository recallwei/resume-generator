<script setup lang="ts">
import github from "/icons/github.png"

const REPO_URL = "https://github.com/recallwei/resume-generator"
</script>

<template>
  <div class="github">
    <a
      :href="REPO_URL"
      target="_blank"
      rel="noopener noreferrer"
      class="rounded-full bg-gray-50 p-1 shadow-xl transition-colors hover:bg-gray-200 active:bg-gray-50"
      title="GitHub"
    >
      <img
        :src="github"
        width="28"
        height="28"
        loading="eager"
      />
    </a>
  </div>
</template>

<style scoped lang="scss">
.github {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}
.link {
  border-radius: 9999px;
  background-color: $gray-50;
  padding: 0.25rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: $gray-200;
  }
  &:active {
    background-color: $gray-50;
  }
}
</style>

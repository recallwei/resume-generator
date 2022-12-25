<script setup lang="ts">
import github from "/icons/github.png"
import { useSiteMetaData } from "@/hooks"

const { repoUrl } = useSiteMetaData()

type Props = {
  width?: number
  height?: number
}

const props = withDefaults(defineProps<Props>(), {
  width: 28,
  height: 28
})
</script>

<template>
  <div class="link-wrapper">
    <a
      :href="repoUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
      title="GitHub"
    >
      <img
        :src="github"
        :width="props.width"
        :height="props.height"
        loading="eager"
      />
    </a>
  </div>
</template>

<style scoped lang="scss">
.link-wrapper {
  width: fit-content;
  height: fit-content;
}
.link {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 9999px;
  background-color: rgb(249 250 251);
  padding: 4px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: rgb(229 231 235);
  }
  &:active {
    background-color: rgb(249 250 251);
  }
}
</style>

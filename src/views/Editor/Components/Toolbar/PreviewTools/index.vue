<script setup lang="ts">
import { LineDivider } from "@/components"
import ThemeColor from "./ThemeColor"
import PaperColor from "./PaperColor"
import FontSize from "./FontSize"
</script>

<template>
  <div class="container">
    <theme-color />
    <line-divider />
    <paper-color />
    <line-divider />
    <font-size />
    <line-divider />
  </div>
</template>

<style scoped lang="scss">
@use "../index.module.scss" as *;
.container {
  @include container;
}
</style>

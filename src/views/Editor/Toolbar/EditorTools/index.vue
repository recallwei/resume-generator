<script setup lang="ts">
import { LineDivider } from "@/components"
import FontSize from "./FontSize"
import WordWrap from "./WordWrap"
</script>

<template>
  <div class="container">
    <font-size />
    <line-divider />
    <word-wrap />
    <line-divider />
  </div>
</template>

<style scoped lang="scss">
@use "../index.module.scss" as *;
.container {
  @include container;
}
</style>

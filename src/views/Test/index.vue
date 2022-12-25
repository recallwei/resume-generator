<script setup lang="ts">
import { NEl } from "naive-ui"
import ChildComponent from "./ChildComponent"
</script>

<template>
  <n-element class="container">
    <ChildComponent />
  </n-element>
</template>

<style scoped lang="scss">
.container {
  background-color: green;
  width: 500px;
  height: 500px;
}
</style>

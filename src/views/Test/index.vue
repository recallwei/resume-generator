<script setup lang="ts">
import { NElement } from "naive-ui"
import ChildComponent from "./ChildComponent"
</script>

<template>
  <n-element>
    <div class="c">
      <ChildComponent />
    </div>
  </n-element>
</template>

<style scoped lang="scss">
.container {
  background-color: green;
  width: 500px;
  height: 500px;
}
.c {
  text-align: center;
}
</style>

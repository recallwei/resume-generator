<script setup lang="ts">
import { ref } from "vue"
import { MagicSlider } from "@/components"

const sliderValue = ref(2)
</script>

<template>
  <div class="container">
    <magic-slider
      v-model="sliderValue"
      :width="200"
      class="magic-slider"
    />
    <span>{{ "当前选中值：" + sliderValue }}</span>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 1260px;
  margin: 60px auto;
}
.magic-slider {
  margin-bottom: 10px;
}
</style>

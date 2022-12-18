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
    />
    {{ sliderValue }}
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 1260px;
  margin: 60px auto;
}
</style>

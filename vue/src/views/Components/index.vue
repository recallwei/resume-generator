<script setup lang="ts">
import { ref } from "vue"
import { MagicSlider, GitHubButton } from "@/components"

const sliderValue = ref(2)
</script>

<template>
  <div class="container">
    <b>{{ "Components Test Page" }}</b>
    <div class="group-wrapper">
      <section class="section">
        <span>{{ "Magic Slider" }}</span>
        <magic-slider
          v-model="sliderValue"
          :width="200"
          class="magic-slider"
        />
        <span>{{ "Current selected value: " + sliderValue }}</span>
      </section>
      <section>
        <span>{{ "GitHub Button" }}</span>
        <git-hub-button />
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1600px;
  margin: auto;
  padding: 40px;
  .group-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    section {
      border: 0.5px solid #ccc;
      border-radius: 4px;
      padding: 16px;
    }
  }
}
.magic-slider {
  margin: 10px 0;
}
</style>

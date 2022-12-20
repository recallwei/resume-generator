<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"
import { NButton, NIcon } from "naive-ui"
import { ArrowBackFilled as BackIcon } from "@vicons/material"
import { MagicSlider, GitHubButton } from "@/components"

const router = useRouter()
const sliderValue = ref(50)

const backToHome = () => router.push("/")
</script>

<template>
  <div class="container">
    <div class="top-area">
      <div class="page-title">Components Test Page</div>
      <n-button
        size="small"
        @click="backToHome"
      >
        <template #icon>
          <n-icon>
            <back-icon />
          </n-icon>
        </template>
        Back
      </n-button>
    </div>
    <div class="group-wrapper">
      <section class="section">
        <div class="title">Magic Slider</div>
        <magic-slider
          v-model="sliderValue"
          :width="200"
          class="magic-slider"
        />
        <span>{{ "Current selected value: " + sliderValue }}</span>
      </section>
      <section>
        <div class="title">GitHub Button</div>
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
      .title {
        margin-bottom: 8px;
        font-weight: bold;
      }
    }
  }
}
.top-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  .page-title {
    font-weight: bold;
  }
}
.magic-slider {
  margin: 10px 0;
}
</style>

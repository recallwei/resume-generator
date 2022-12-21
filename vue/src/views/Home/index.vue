<script setup lang="ts">
import { NButton } from "naive-ui"
import { useRouter } from "vue-router"

const router = useRouter()

const APP_VERSION = "1.0.0"

const navTo = (url: string) => router.push(url)
</script>

<template>
  <main class="container">
    <n-button type="primary">Get Started</n-button>
    <n-button @click="navTo('/editor')">Editor</n-button>
    <n-button @click="navTo('/components')">Components Test</n-button>
  </main>
</template>

<style scoped lang="scss">
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>

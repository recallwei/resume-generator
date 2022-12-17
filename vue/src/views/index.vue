<script setup lang="ts">
import { NButton } from "naive-ui"
import { useRouter } from "vue-router"

const router = useRouter()

const navToEditor = () => router.push("/editor")
</script>

<template>
  <main class="container">
    <n-button type="primary">
      {{ "Get Started" }}
    </n-button>
    <n-button @click="navToEditor">
      {{ "Editor" }}
    </n-button>
  </main>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>

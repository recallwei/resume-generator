<script setup lang="ts">
import { NButton } from "naive-ui"
import { useRouter } from "vue-router"
import { useSiteMetaData } from "@/hooks"

const router = useRouter()
const siteMetaData = useSiteMetaData()

const APP_VERSION = "1.0.0"

const navTo = (url: string) => router.push(url)
</script>

<template>
  <main class="container">
    <div class="content-wrapper">
      <div>{{ siteMetaData.appName }}</div>
      <div class="app-version">{{ APP_VERSION }}</div>
      <div class="btn-group">
        <n-button type="primary">Get Started</n-button>
        <n-button @click="navTo('/editor')">Editor</n-button>
        <n-button @click="navTo('/components')">Components Test</n-button>
      </div>
    </div>
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
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 120px;
}
.app-version {
  font-weight: 500;
  font-size: 18px;
}
.btn-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>

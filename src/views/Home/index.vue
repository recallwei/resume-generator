<script setup lang="ts">
import { NButton } from "naive-ui"
import { useRouter } from "vue-router"
import { useSiteMetaData } from "@/hooks"

const router = useRouter()
const siteMetaData = useSiteMetaData()

const navTo = (url: string) => router.push(url)

const isDEV = import.meta.env.DEV
</script>

<template>
  <main class="container">
    <div class="content-wrapper">
      <div class="app-name">
        {{ siteMetaData.appName }}
      </div>
      <div class="app-version">
        {{ `v${siteMetaData.appVersion}` }}
      </div>
      <div class="btn-group">
        <n-button
          type="primary"
          @click="navTo('/editor')"
        >
          Get Started
        </n-button>
        <n-button
          v-if="isDEV"
          @click="navTo('/components')"
        >
          Components Test
        </n-button>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@mixin gradient-text {
  background-image: linear-gradient(to right, #50c878, #c4b5fd);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: pulse 2s linear infinite;
}
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
  margin-bottom: 120px;
}
.app-name {
  @include gradient-text;
  font-weight: 600;
  font-size: 44px;
}
.app-version {
  @include gradient-text;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
}
.btn-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

@keyframes pulse {
  50% {
    opacity: 0.75;
  }
}
</style>

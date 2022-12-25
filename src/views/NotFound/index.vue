<script setup lang="ts">
import { NEmpty, NIcon, NButton } from "naive-ui"
import { useRouter } from "vue-router"
import { ErrorOutlineFilled as NotFoundIcon } from "@vicons/material"

const router = useRouter()

const backToHome = () => router.push("/")
</script>

<template>
  <div class="not-found-page-wrapper">
    <n-empty
      size="huge"
      description="404 Not Found"
    >
      <template #icon>
        <n-icon>
          <not-found-icon />
        </n-icon>
      </template>
      <template #extra>
        <n-button
          size="small"
          @click="backToHome"
        >
          Back To Home
        </n-button>
      </template>
    </n-empty>
  </div>
</template>

<style scoped lang="scss">
.not-found-page-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
}
</style>

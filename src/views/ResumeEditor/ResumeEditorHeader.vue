<script setup lang="ts">
import { useRouter } from "vue-router";
import favicon from "/img/resume-generator.png";

const router = useRouter();
function goHome() {
  router.push("/");
}
</script>

<template>
  <img
    :src="favicon"
    class="cursor-pointer"
    width="40"
    height="40"
    @click="goHome"
  />
  <label>Resume Generator</label>
</template>

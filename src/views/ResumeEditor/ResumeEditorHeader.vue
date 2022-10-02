<script setup lang="ts">
import favicon from "/img/resume-generator.png";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const router = useRouter();
const { t } = useI18n();

function goHome() {
  router.push("/");
}
</script>

<template>
  <div class="flex items-center justify-center gap-4 w-[160px]">
    <img
      :src="favicon"
      class="cursor-pointer"
      width="36"
      height="36"
      @click="goHome"
    />
    <label class="select-none">{{ t("application.name") }}</label>
  </div>
</template>

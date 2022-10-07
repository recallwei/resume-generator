<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { Icon } from "@components";
import favicon from "/img/resume-generator.png";

const router = useRouter();
const { t } = useI18n();

const emit = defineEmits(["toggleExpand"]);
const expand = ref<boolean>(true);

function goHome() {
  router.push("/");
}

function toggleExpand() {
  emit("toggleExpand", !expand.value);
  expand.value = !expand.value;
}
</script>

<template>
  <div class="flex items-center gap-4 px-2">
    <img
      :src="favicon"
      class="cursor-pointer"
      width="36"
      height="36"
      @click="goHome"
    />
    <label class="select-none">{{ t("application.name") }}</label>
  </div>
  <div
    class="hover:bg-gray-200 active:bg-gray-100 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
  >
    <Icon.Collapse v-if="expand" :onclick="toggleExpand" />
    <Icon.Expand v-else class="cursor-pointer" :onclick="toggleExpand" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { GitHubButton } from "@components";

const { t } = useI18n();
const router = useRouter();

function onClickStartBtn() {
  router.push("/resume-editor");
}
</script>

<template>
  <div
    class="relative w-screen h-screen select-none bg-cover bg-center bg-home"
  >
    <div class="inset-0 absolute m-auto h-fit w-fit">
      <div class="mb-20 flex flex-col gap-2">
        <div class="flex flex-col items-center gap-1">
          <span
            class="mb-1 animate-[pulse_2s_linear_infinite] select-none bg-gradient-to-r from-emerald-600 to-violet-300 bg-clip-text text-7xl text-transparent"
          >
            {{ t("application.name") }}
          </span>
          <div
            class="select-none bg-gradient-to-r from-emerald-600 to-violet-300 bg-clip-text text-lg font-medium text-transparent"
          >
            v{{ version }}
          </div>
          <span class="text-center text-lg text-gray-600">
            {{ t("application.description.firstLine") }}
          </span>
          <span class="text-center text-lg text-gray-600">
            {{ t("application.description.secondLine") }}
          </span>
        </div>
        <div class="mt-2 flex items-center justify-center gap-4">
          <button
            @click="onClickStartBtn"
            title=""
            class="py-2 px-3.5 text-base cursor-pointer rounded-md text-center font-medium text-white shadow-sm transition-colors hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 bg-gradient-to-br from-emerald-300 to-emerald-600 shadow-emerald-800"
          >
            <span
              class="flex items-center justify-center gap-1 whitespace-nowrap"
            >
              <img :src="" width="16" height="16" className="flex-shrink-0" />
              {{ t("common.start") }}
            </span>
          </button>
        </div>
        <div class="mt-2">
          <GitHubButton />
        </div>
      </div>
    </div>
  </div>
</template>

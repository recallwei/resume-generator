<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div
    class="relative w-screen h-screen select-none bg-cover bg-center bg-home"
  >
    <div class="inset-0 absolute m-auto h-fit w-fit">
      <div className="mb-20 flex flex-col gap-2">
        <div className="flex flex-col items-center gap-1">
          <span
            className="mb-1 animate-[pulse_2s_linear_infinite] select-none bg-gradient-to-r from-emerald-600 to-violet-300 bg-clip-text text-7xl text-transparent"
          >
            {{ t("application.name") }}
          </span>
          {{ t("application.description") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SvgPropsType } from ".";
const props = withDefaults(defineProps<SvgPropsType>(), {
  width: "24",
  height: "24",
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="props.width"
    height="props.height"
    class="fill-black"
    :class="props.class"
    @click="props.onClick"
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <path
        d="M19,19V5c0-1.1-0.9-2-2-2H7C5.9,3,5,3.9,5,5v14H3v2h18v-2H19z M17,19H7V5h10V19z M13,11h2v2h-2V11z"
      />
    </g>
  </svg>
</template>

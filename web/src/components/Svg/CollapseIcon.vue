<script setup lang="ts">
type SvgPropsType = {
  width?: string;
  height?: string;
  class?: string;
  onClick?: () => void;
};

const props = withDefaults(defineProps<SvgPropsType>(), {
  width: "24",
  height: "24"
});
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    :width="props.width"
    :height="props.height"
    class="fill-black"
    :class="props.class"
    @click.prevent="props.onClick"
  >
    <path
      fill="currentColor"
      d="M13 20V4h2.03v16H13m-3 0V4h2.03v16H10M5 8l4.03 4L5 16v-3H2v-2h3V8m15 8l-4-4l4-4v3h3v2h-3v3Z"
    />
  </svg>
</template>

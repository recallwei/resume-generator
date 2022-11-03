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
      d="M9 11h6V8l4 4l-4 4v-3H9v3l-4-4l4-4v3m-7 9V4h2v16H2m18 0V4h2v16h-2Z"
    />
  </svg>
</template>

<script setup lang="ts">
import { withDefaults, computed } from "vue"
import VueSlider from "vue-slider-component"
import "vue-slider-component/theme/default.css"

type Props = {
  modelValue?: number
  width?: number
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  width: undefined
})

const emit = defineEmits(["update:modelValue"])

const bindingValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value)
})
</script>

<template>
  <vue-slider
    v-if="props.width"
    v-model="bindingValue"
    :width="props.width"
  />
  <vue-slider
    v-else
    v-model="bindingValue"
  />
</template>

<style scoped lang="scss"></style>

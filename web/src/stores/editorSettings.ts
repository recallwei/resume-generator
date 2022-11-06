import { ref } from "vue";
import { defineStore } from "pinia";

export const useEditorSettingsStore = defineStore("editorSettings", () => {
  const fontSize = ref<number>(13);
  const wordWrap = ref<boolean>(true);

  function changeFontSize(value: number) {
    fontSize.value = value;
  }

  function toggleWordWrap() {
    wordWrap.value = !wordWrap.value;
  }

  return { fontSize, wordWrap, changeFontSize, toggleWordWrap };
});

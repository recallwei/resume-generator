// import { fileURLToPath, URL } from "node:url";
import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      //"@": fileURLToPath(new URL("./src", import.meta.url)),
      "@views": path.resolve(__dirname, "src/views"),
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@assets": path.resolve(__dirname, "src/assets")
    }
  },
  build: {
    chunkSizeWarningLimit: 1500,
    reportCompressedSize: false
  },
  optimizeDeps: {
    include: [
      "monaco-editor/esm/vs/language/json/json.worker",
      "monaco-editor/esm/vs/language/css/css.worker",
      "monaco-editor/esm/vs/language/html/html.worker",
      "monaco-editor/esm/vs/language/typescript/ts.worker",
      "monaco-editor/esm/vs/editor/editor.worker"
    ]
  }
});

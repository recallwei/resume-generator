import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"
import "@/modules/monacoEditor/worker" // Monaco Editor Worker
import { withNProgress } from "@/modules"
import "./assets/main.scss" // 全局样式
import "vfonts/FiraCode.css" // 引入 FiraCode 字体
import "nprogress/nprogress.css" // nprogress 样式

const app = createApp(App)

app.use(createPinia())
app.use(withNProgress(router))

app.mount("#app")

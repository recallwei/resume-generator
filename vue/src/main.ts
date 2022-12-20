import { createApp } from "vue"
import { createPinia } from "pinia"
// import "@/modules/monacoEditor/work"

import App from "./App.vue"
import router from "./router"

import "./assets/main.scss"
import "vfonts/FiraCode.css"
import "nprogress/nprogress.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount("#app")

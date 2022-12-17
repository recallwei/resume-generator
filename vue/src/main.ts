import { createApp } from "vue"
import { createPinia } from "pinia"
import naive from "naive-ui"

import App from "./App.vue"
import router from "./router"

import "./assets/main.scss"
import "vfonts/FiraCode.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naive)

app.mount("#app")

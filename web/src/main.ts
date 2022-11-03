import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import { createPinia } from "pinia";
import "@hooks/useWorker";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(i18n);
app.use(ElementPlus, { size: "small", zIndex: 3000 });
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.component("VueSlider", VueSlider);

// TODO - Move to environment variables
app.config.globalProperties.$app_version = "1.0.0";

app.config.errorHandler = (error) => {
  console.log(error);
};

app.mount("#app");

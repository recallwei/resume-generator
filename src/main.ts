import { createApp } from "vue";
import ElementPlus from "element-plus";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(ElementPlus, { size: "small", zIndex: 3000 });

// TODO - Move to environment variables
app.config.globalProperties.$version = "1.0.0";

app.config.errorHandler = (error) => {
  console.log(error);
};

app.mount("#app");

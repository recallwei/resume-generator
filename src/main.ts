import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(i18n);

app.config.globalProperties.appName = "Resume Generator";

app.config.errorHandler = (error) => {
  console.log(error);
};

app.mount("#app");

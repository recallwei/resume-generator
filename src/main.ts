import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.config.globalProperties.appName = "Resume Generator";

app.config.errorHandler = (error) => {
  console.log(error);
};

app.mount("#app");

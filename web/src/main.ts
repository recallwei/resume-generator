import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// import "@hooks/useWorker";
import "@assets/main.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.config.errorHandler = (error) => {
  console.log(error);
};

app.mount("#app");

import { createRouter, createWebHistory } from "vue-router";
import { Home, ResumeEditor } from "@views";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/resume-editor",
      name: "resume-editor",
      component: ResumeEditor
    }
  ]
});

export default router;

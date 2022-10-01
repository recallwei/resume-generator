import { createRouter, createWebHistory } from "vue-router";
import { Home } from "@views";

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
      component: () => import("@views/ResumeEditorPage.vue")
    },
    {
      path: "/test",
      name: "test",
      component: () => import("@views/TestPage.vue")
    }
  ]
});

export default router;

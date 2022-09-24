import { createRouter, createWebHistory } from "vue-router";
import { HomeView } from "@views";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/resume-editor",
      name: "resume-editor",
      component: () => import("@views/ResumeEditorView.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("@views/TestView.vue"),
    },
  ],
});

export default router;

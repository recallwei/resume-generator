import { createRouter, createWebHistory } from "vue-router";
import Home from "@views/Home/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/resume-editor",
      name: "resume-editor",
      component: () =>
        import("@views/ResumeEditor/Layout/ResumeEditorLayout.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("@views/NotFound/index.vue"),
    },
  ],
});

export default router;

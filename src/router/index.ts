import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home/HomePage.vue")
    },
    {
      path: "/resume-editor",
      name: "ResumeEditor",
      component: () => import("../views/ResumeEditor/ResumeEditorLayout.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound/NotFoundPage.vue")
    }
  ]
});

export default router;

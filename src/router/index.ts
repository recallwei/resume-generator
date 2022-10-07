import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@views/Home/HomePage.vue")
    },
    {
      path: "/resume-editor",
      name: "resume-editor",
      component: () =>
        import("@views/ResumeEditor/Layout/ResumeEditorLayout.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("@views/NotFound/NotFoundPage.vue")
    }
  ]
});

export default router;

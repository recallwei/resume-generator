import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@views/Home/index.vue"),
    },
    {
      path: "/resume-editor",
      name: "resume-editor",
      component: () => import("@views/ResumeEditor/index.vue"),
    },
    {
      path: "/others",
      name: "others",
      component: () => import("@views/Others/index.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("@views/NotFound/index.vue"),
    },
  ],
});

export default router;

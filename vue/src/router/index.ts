import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home/index.vue")
    },
    {
      path: "/editor",
      name: "Editor",
      component: () => import("@/views/Editor/index.vue")
    },
    {
      path: "/components",
      name: "Components",
      component: () => import("@/views/Components/index.vue")
    }
  ]
})

export default router

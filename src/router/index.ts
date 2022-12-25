import { createRouter, createWebHistory } from "vue-router"
import { useSiteMetaData } from "@/hooks"

const { appName } = useSiteMetaData()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home"),
      meta: {
        title: appName
      }
    },
    {
      path: "/editor",
      name: "Editor",
      component: () => import("@/views/Editor"),
      meta: {
        title: "Editor"
      }
    },
    {
      path: "/components",
      name: "Components",
      component: () => import("@/views/Components"),
      meta: {
        title: "Components Test"
      }
    },
    {
      path: "/test",
      name: "Test",
      component: () => import("@/views/Test"),
      meta: {
        title: "Test"
      }
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFound"),
      meta: {
        title: "Not Found"
      }
    }
  ]
})

export default router

import { createRouter, createWebHistory } from "vue-router"
import NProgress from "nprogress"
import { useSiteMetaData } from "@/hooks"

const { appName } = useSiteMetaData()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home/index.vue"),
      meta: {
        title: appName
      }
    },
    {
      path: "/editor",
      name: "Editor",
      component: () => import("@/views/Editor/index.vue"),
      meta: {
        title: "Editor"
      }
    },
    {
      path: "/components",
      name: "Components",
      component: () => import("@/views/Components/index.vue"),
      meta: {
        title: "Components Test"
      }
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFound/index.vue"),
      meta: {
        title: "Not Found"
      }
    }
  ]
})

// 导航守卫
router.beforeEach((to, from) => {
  if (to.path !== from.path) {
    NProgress.start()
    document.title = to.meta.title === appName ? to.meta.title : `${to.meta.title} | ${appName}`
  }
})
router.afterEach(() => NProgress.done())

export default router

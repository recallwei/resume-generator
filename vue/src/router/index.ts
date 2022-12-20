import { createRouter, createWebHistory } from "vue-router"
import NProgress from "nprogress"

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
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFound/index.vue")
    }
  ]
})

// 导航守卫
router.beforeEach((to, from) => {
  if (to.path !== from.path) {
    NProgress.start()
  }
})
router.afterEach(() => NProgress.done())

export default router

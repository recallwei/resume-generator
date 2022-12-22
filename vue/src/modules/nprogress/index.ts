import NProgress from "nprogress"
import type { Router } from "vue-router"
import { useSiteMetaData } from "@/hooks"

const { appName } = useSiteMetaData()

NProgress.configure({ showSpinner: false }) // 隐藏 NProgress 的 Spinner

export const withNProgress = (router: Router): Router => {
  // 导航守卫
  router.beforeEach((to, from) => {
    if (to.path !== from.path) {
      NProgress.start()
      document.title = to.meta.title === appName ? to.meta.title : `${to.meta.title} | ${appName}`
    }
  })
  router.afterEach(() => NProgress.done())
  return router
}

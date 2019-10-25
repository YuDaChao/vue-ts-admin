import { Route } from "vue-router";
import router from "./index";
import store from "../store";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to: Route, form: Route, next: any) => {
  NProgress.start()

  document.title = to.meta.title

  next()
})

router.afterEach(() => {
  NProgress.done()
})

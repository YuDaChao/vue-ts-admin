import store from "@/store";
import { IRootState } from "@/store/types";


export default {
  inserted(el: Element, binding: any, vnode: any) {
    const { value, arg } = binding
    const { permissions } = (store.state as IRootState).user;
    if (value && value.length > 0) {
      let hasPermission = true
      if (arg) {
        if (arg === "some") {
          hasPermission = value.some((item: any) => permissions.includes(item))
        } else if (arg === "all") {
          hasPermission = value.every((item: any) => permissions.includes(item))
        }
      } else {
        hasPermission = value.some((item: any) => permissions.includes(item))
      }
      if (!hasPermission) {
        // tslint:disable-next-line:no-unused-expression
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`need roles! Like v-permission="['admin','editor']"`);
    }
  }
}

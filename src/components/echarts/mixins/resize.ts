import debounce from "lodash/debounce"
import { Vue, Component } from "vue-property-decorator"

@Component
export default class ResizeMixins extends Vue {

  private sidebarEl: any = null

  private resizeHandler = debounce(() => {
    if (this.$refs.chart) {
      (this.$refs.chart as any).echarts.resize()
    }
  }, 100)

  private sidebarResizeHandler(e: any) {
    if (e.propertyName === "width") {
      this.resizeHandler()
    }
  }

  private mounted() {
    this.sidebarEl = document.getElementsByClassName("sidebar-container")[0]
    // tslint:disable-next-line:no-unused-expression
    this.sidebarEl && this.sidebarEl.addEventListener("transitionend", this.sidebarResizeHandler)
  }

  private beforeDestroy() {
    window.removeEventListener("resize", this.resizeHandler)
    // tslint:disable-next-line:no-unused-expression
    this.sidebarEl && this.sidebarEl.removeEventListener("transitionend", this.sidebarResizeHandler)
  }
}

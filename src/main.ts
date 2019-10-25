import Vue from "vue";
import ElementUI from "element-ui";
import SvgIcon from "vue-svgicon";
// 图表
import "v-charts/lib/style.css"
import "echarts/lib/component/dataZoom";
import "echarts/lib/component/markPoint";
import "echarts/lib/component/visualMap";
import VeLine from "v-charts/lib/line.common";
import VeScatter from "v-charts/lib/scatter.common";
import VeHistogram from "v-charts/lib/histogram.common";
import VePie from "v-charts/lib/pie.common";
import VeMap from "v-charts/lib/map.common";
import VeWordcloud from "v-charts/lib/wordcloud.common"

import "nprogress/nprogress.css";
import "@/assets/styles/index.scss";

import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";

import "./icons/components";
import "./router/router.interceptor";
import "./directives";

Vue.component(VeLine.name, VeLine);
Vue.component(VeScatter.name, VeScatter);
Vue.component(VeHistogram.name, VeHistogram);
Vue.component(VePie.name, VePie);
Vue.component(VeMap.name, VeMap);
Vue.component(VeWordcloud.name, VeWordcloud);

Vue.use(ElementUI);
Vue.use(SvgIcon, {
  tagName: "svg-icon",
  defaultWidth: "1em",
  defaultHeight: "1em"
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
